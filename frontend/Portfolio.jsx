import Intro from "./sections/Intro.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import { useState } from "react";
import { motion, useScroll } from "framer-motion"


function App() {

  const { scrollYProgress } = useScroll(); 

  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const copyMessage = async (type) => {
    try {
        if (type === "email") { 
          await navigator.clipboard.writeText("denmesa24@outlook.com");
          setMessage("Email copied to clipboard!");
        }
        else if (type === "inquiry") {
          setMessage("Inquiry sent!");
        }
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setMessage("");
        }, 5000);
    }
    catch (err) {
        console.error(`Failed to copy: ${err}`);
    }
  };

  return (
    <>
      <div className="h-full !scroll-smooth
      bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500
      flex flex-col items-center">
        <Intro />
        <About />
        <Skills />
        <Contact copyMessage={copyMessage} />
      </div>
      {showNotification && <div className="flex justify-center">
        <h1 className="fixed top-10 py-3 px-3 rounded-xl text-white text-center bg-green-500">{message}</h1>
      </div> }

      <motion.div
      style={{ scaleX: scrollYProgress }}
      className="w-full items-center top-0 bg-green-500 fixed origin-left h-[10px]"
      />
    </>
  )
}

export default App;
