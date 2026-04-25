// mui icons
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ApiIcon from '@mui/icons-material/Api';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import InputIcon from '@mui/icons-material/Input';
import LocationPinIcon from '@mui/icons-material/LocationPin';

// other packages
import { AnimatePresence, motion } from "motion/react";
import Typed from "typed.js";
import { useState, useEffect, useRef } from "react";

// components
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import GlobeView from "./components/Globe";
import InteractiveGlobe from './components/Globe';

function App() {

  // refs
  const inputElement = useRef(null);
  const headerElement = useRef(null);
  const audioElement = useRef(null);

  // states

  const [activeSection, setActiveSection] = useState(null);
  const [game, setGame] = useState(false);

  const [found, setFound] = useState(false);
  const [error, setError] = useState("");

  const [countries, setCountries] = useState([]);
  const [guessData, setGuessData] = useState([]);

  // typed.js effect
  function initTyped(element) {
    if (!element) return () => {};

    const typed = new Typed(element, {
      strings: [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Web Developer",
        "Frontend Developer",
        "IT Help Desk Officer",
        "please give me a job..."
      ],
      typeSpeed: 50,
      backSpeed: 35,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  } 

  useEffect(() => {
    // fetch country info
    fetch("custom.geo.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features);
      })
      .catch((err) => console.error(err));

    const cleanup = initTyped(headerElement.current);
    return cleanup;
  }, [game]);

  const handleGuess = () => {

    const country = inputElement.current.value;
    if (!country) return;

    const result = countries.find(
      a => a.properties.name.toLowerCase() === country.toLowerCase()
    );

    console.log(result.geometry);
    if (result) {
      if (guessData.includes(result)) return;
      setGuessData(prev => [...prev, result]);
      if (country.toLowerCase() === "Philippines".toLowerCase()) {
        audioElement.current.play();
        setFound(true);
      }
      return;
    }
    console.log("doesn't exist!");
  }

  const resetGame = () => {
    setFound(false);
    setGame(false);
    setGuessData([]);
  }

  return (
    <>
      <div className="w-screen min-h-screen h-full relative overflow-hidden flex items-center justify-center">
        <audio ref={audioElement} src="win.mp3" />


        {/* game interface */}
        <InteractiveGlobe game={game} guessData={guessData} />

        {/* main portfolio content */}
        <AnimatePresence mode="wait">
        { !game ? (
          <>
            <motion.div className="fixed top-0 left-0 w-full h-full bg-black/40 z-5"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.4 }} />

            <motion.div className="flex flex-col items-center justify-center w-full max-w-3xl gap-5 z-10 m-5"
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.4 }}>

              {/* intro */}
              <div className="w-full border-1 rounded-md border-blue-500 p-5 shadow-xl shadow-blue-300 
              flex flex-col sm:flex-row items-center gap-5 bg-gray-800">
                <div className="flex flex-col gap-5 justify-center items-center text-center sm:items-start sm:text-start">
                  <h1 className="text-3xl font-bold text-white">My name is Denver Klein Mesa.</h1>

                  <p className="text-sm text-gray-400">I am currently a 4th year studying Software Engineering @ UTS, specialising in <span className="text-red-300">API infrastruture development</span>, <span className="text-red-300">UI/UX
                    design</span> and <span className="text-red-300">cybersecurity</span>. Furthermore, I am learning to implement AI within my development space to improve my projects' functionality range.
                    This has all stemmed from my liking towards game development in my late years at high-school, experimenting with programs such as Unity and Scratch
                    in creating arcade-theme games.
                  </p>
                </div>
                <motion.div
                  onClick={() => setGame(true)}
                  className="group relative max-w-[200px] max-h-[200px] shadow-blue-300 shadow-md border border-blue-300 rounded-full overflow-hidden cursor-pointer"
                >
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300 z-10" />

                  {/* image */}
                  <img src="avatar.jpg" className="w-full h-full" />

                  <QuestionMarkIcon
                    className="
                      absolute left-1/2 bottom-2 -translate-x-1/2
                      text-white !w-[40px] !h-[40px]
                      opacity-0 translate-y-4
                      group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:opacity-100
                      !transition-all duration-300 ease-out
                      z-20
                    "
                  />
                </motion.div>
              </div>

              {/* roles */}
              <div className="w-full border-1 rounded-md border-blue-500 p-5 shadow-xl shadow-blue-300 
              flex items-center gap-5 bg-gray-800">
                <h2 className="text-2xl font-semibold text-white">Looking to be a:</h2>
                <p ref={headerElement} className="text-2xl text-orange-300 font-medium" />
              </div>

              {/* sections */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  {!activeSection ? (
                    <motion.div
                      key="menu"
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        filter: "blur(6px)",
                        transition: { duration: 0.3 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full"
                    >
                      <a className="w-full cursor-pointer p-5 border-1 border-blue-300 rounded-md shadow-blue-300 hover:shadow-xl bg-gray-800 
                      text-white hover:bg-blue-400 transition duration-400 flex justify-center items-center gap-2 hover:scale-105" download href="Career Resume - Denver Klein Mesa.pdf">
                        <SendIcon className="text-gray-500" />
                        <p className="text-xl font-semibold">RESUME</p>
                      </a>
                      
                      <button onClick={() => setActiveSection("tech")} className="w-full cursor-pointer p-5 border-1 border-blue-300 rounded-md 
                      shadow-blue-300 hover:shadow-xl bg-gray-800 text-white hover:bg-blue-400 transition duration-400 flex justify-center items-center 
                      gap-2 hover:scale-105">
                        <ApiIcon className="text-gray-500" />
                        <p className="text-xl font-semibold">TECH STACK</p>
                      </button>
                      
                      <button onClick={() => setActiveSection("exp")} className="w-full cursor-pointer p-5 border-1 border-blue-300 rounded-md 
                      shadow-blue-300 hover:shadow-xl bg-gray-800 text-white hover:bg-blue-400 transition duration-400 flex justify-center items-center 
                      gap-2 hover:scale-105">
                        <HomeWorkIcon className="text-gray-500" />
                        <p className="text-xl font-semibold">WORK EXPERIENCE</p>
                      </button> 
                      
                      <button onClick={() => setActiveSection("projects")} className="w-full cursor-pointer p-5 border-1 border-blue-300 rounded-md 
                      shadow-blue-300 shadow-xl bg-gray-800 text-white hover:bg-blue-400 transition duration-400 flex justify-center items-center 
                      gap-2 hover:scale-105">
                        <GitHubIcon className="text-gray-500" />
                        <p className="text-xl font-semibold">PROJECTS</p>
                      </button>
                    </motion.div>
                  ) : (
                    /* respective content from pressed button */
                    <motion.div
                      key="content"
                      layout
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                        y: 40
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                        y: 40
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full"
                    >
                      <motion.button
                        onClick={() => setActiveSection(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-[250px] cursor-pointer p-5 border-1 border-yellow-300 rounded-md shadow-yellow-300 shadow-lg bg-gray-800
                        text-white hover:bg-yellow-400 transition duration-400 flex justify-center items-center gap-2"
                      >
                        <ArrowBackIcon />
                        <p className="text-xl font-semibold">BACK</p>
                      </motion.button>

                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeSection === "tech" && <TechStack />}
                        {activeSection === "exp" && <Experience />}
                        {activeSection === "projects" && <Projects />}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* contacts */}
              <div className="w-full border-1 rounded-md border-blue-500 p-5 shadow-xl shadow-blue-300 
              flex flex-col sm:flex-row items-center gap-5 bg-gray-800">
                <h2 className="text-2xl font-semibold text-white">Feel free to contact me via:</h2>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/progkiryu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="text-white !h-[40px] !w-[40px] hover:scale-125 cursor-pointer !transition duration-200" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-[40px] h-[40px] hover:scale-125 cursor-pointer transition duration-200"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    />
                  </a>

                  <a onClick={() => navigator.clipboard.writeText("denmesa24@outlook.com")}>
                    <EmailIcon className="text-white !h-[40px] !w-[40px] hover:scale-125 cursor-pointer !transition duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>) : (
          <>
            {/* back button for game */}
            <div className="absolute fixed top-5 left-5 z-50 flex flex-col gap-2 w-[250px]">
              <motion.button
                onClick={() => setGame(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full cursor-pointer p-5 border-1 border-yellow-300 rounded-md shadow-yellow-300 shadow-lg bg-gray-800
                text-white hover:bg-yellow-400 transition duration-300 flex justify-center items-center gap-2"
              >
                <ArrowBackIcon />
                <p className="text-xl font-semibold">BACK</p>
              </motion.button>

              { !found ? (
                <>
                  <h2 className="text-white text-xl font-medium">Guess my ethnicity!</h2>
                  <div className="flex gap-2">
                    <input ref={inputElement} className="bg-white rounded-l-md p-2" />
                    <button onClick={handleGuess}
                    className="p-2 bg-green-600 cursor-pointer hover:bg-green-300 rounded-r-md">
                      <LocationPinIcon />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-white text-xl font-medium">CONGRATULATIONS! I AM FILIPINO!</h2>
                  <button onClick={resetGame}
                  className="p-2 bg-red-600 hover:bg-red-300 text-white cursor-pointer hover:bg-green-300 rounded-md"
                  >RESET</button>
                </>
              )}
            </div>
          </>
          )}
          </AnimatePresence>
      </div>
    </>
  )
}

export default App
