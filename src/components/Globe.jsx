import React, { useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";

const points = [
  { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 51.5072, lng: -0.1276, label: "London" },
  { lat: 35.6895, lng: 139.6917, label: "Tokyo" },
];

export default function InteractiveGlobe({ game }) {
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

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute flex items-center justify-center bg-[#000011]"
    >
        <ReactGlobe
          ref={globeRef}
          width={size.width}
          height={size.height}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointLabel="label"
        />
    </div>
  );
}