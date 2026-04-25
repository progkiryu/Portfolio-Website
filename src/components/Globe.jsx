import React, { useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";
import { centroid } from "@turf/turf";
import * as THREE from "three";

export default function InteractiveGlobe({ game, guessData }) {
  const globeRef = useRef();
  const containerRef = useRef();
  const userStoppedRotation = useRef(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Track container size for responsiveness
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Initialize globe rotation and user interaction tracking
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const controls = globe.controls();
    const canvas = globe.renderer().domElement;

    // Start rotating by default
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;

    controls.minDistance = 120; // closest zoom (tweak this)
    controls.maxDistance = 800; // farthest zoom

    // Stop rotation when user interacts
    const stopRotation = () => {
      userStoppedRotation.current = true;
      controls.autoRotate = false;
    };

    canvas.addEventListener("pointerdown", stopRotation);
    return () => {
      canvas.removeEventListener("pointerdown", stopRotation);
    };
  }, []);

  // Reset camera and rotation when game changes
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const controls = globe.controls();
    if (controls.autoRotate) return;

    // Reset camera
    globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }, 1000);

    // Force rotation on game change
    controls.autoRotate = true;

    // Reset userStoppedRotation so user can stop again
    userStoppedRotation.current = false;
  }, [game]);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !guessData.length) return;

    // Get the LAST guessed country (adjust if needed)
    const lastCountry = guessData[guessData.length - 1];

    const center = centroid(lastCountry); // GeoJSON feature
    const [lng, lat] = center.geometry.coordinates;

    const controls = globe.controls();  
    controls.autoRotate = false;
    globe.pointOfView(
      {
        lat,
        lng,
      },
      1000 // animation duration (ms)
    );
  }, [guessData]);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const scene = globe.scene();

    const starCount = 8000;
    const positions = new Float32Array(starCount * 3);

    // Generate random star positions in a spherical shell
    for (let i = 0; i < starCount; i++) {
      const r = 800 + Math.random() * 800; // distance from center
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Subtle rotation for depth effect
    const animate = () => {
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0001;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      scene.remove(stars);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute flex items-center justify-center bg-black"
    >
        <ReactGlobe
        ref={globeRef}
        width={size.width}
        height={size.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        polygonsData={guessData}
        polygonCapColor={(polygon) => {
          const name = polygon.properties.name;
          if (name.toLowerCase() === "philippines") return "green";
          return "red";
        }}
        polygonSideColor={() => "rgba(0,0,255,0.15)"}
        polygonStrokeColor={() => "#111"}
        pointLat="lat"
        pointLng="lng"
        pointLabel="label"
      />
    </div>
  );
}