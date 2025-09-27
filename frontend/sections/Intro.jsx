import { motion } from "framer-motion";

import { isDev } from "../main";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

function Intro() {
    const headerElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(headerElement.current, {
            strings: ["I am Denver Klein Mesa.", 
                "I am a Software Engineer.", 
                "I am a Web Developer.",
                "I am a UTS Student.",
                "cool typing effect, huh?"],
            typeSpeed: 50,
            backSpeed: 35,
            loop: true,
            showCursor: true,
            cursorChar: "_",
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col lg:flex-row w-3/4 min-h-screen bg-[#232121] items-center justify-center px-10 space-y-2">
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-1/2">
                <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-center space-y-2 py-6">
                    <span ref={headerElement} className="font-medium text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                        My name is Denver Klein Mesa.
                    </span>
                    <h2 className="font-medium text-2xl text-white">
                        And this is my portfolio website.
                    </h2>
                </motion.div>
                <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.5}}
                className="flex flex-col items-center space-y-4">
                    {["about", "skills", "contact"].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className="text-white font-medium text-2xl transition ease-in-out duration-300 transform hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-orange-500 hover:scale-125"
                        >
                            {section.toUpperCase()}
                        </a>
                    ))}
                </motion.div>
            </div>
            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={ { duration: 0.5, delay: 0.75}}
            className="flex items-center justify-center w-full h-1/2 lg:h-[70vh] lg:w-1/2">
                <img
                    className="w-[50vw] sm:w-[35vw] h-full rounded-full object-cover border-4 border-black"
                    src={isDev() ? "../../files/photo.jpg" : "assets/files/photo.jpg"}
                    alt="look at this guy bro"
                />
            </motion.div>
        </div>
    );
}

export default Intro;