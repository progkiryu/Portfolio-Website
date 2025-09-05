import Intro from "./sections/Intro.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import { useState } from "react";

function App() {

  const [showNotification, setShowNotification] = useState(false);

  const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText("denmesa24@outlook.com");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
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
        <Contact copyEmail={copyEmail} />
      </div>
      {showNotification && <div className="flex justify-center">
        <h1 className="fixed top-10 py-3 px-3 rounded-xl text-white text-center bg-green-500">Email copied to clipboard!</h1>
      </div> }
    </>
  )
}

export default App;
