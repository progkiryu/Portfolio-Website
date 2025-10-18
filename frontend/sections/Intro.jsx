import { motion } from "framer-motion";

import { isDev } from "../main";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

function Intro() {
    const headerElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(headerElement.current, {
            strings: ["Software Engineer", 
                "Backend Engineer", 
                "Web Developer",
                "Frontend Developer",
                "IT Specialist",
                "anything coding related..."],
            typeSpeed: 50,
            backSpeed: 35,
            showCursor: false,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <motion.div className="w-full max-w-5xl bg-[#282828] text-white rounded-xl p-5 flex flex-col gap-10"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}>

            <p className="text-3xl sm:text-4xl font-medium text-center">&lt;My name is Denver Klein Mesa 👋 /&gt;</p>

            <hr />

            <div className="flex justify-center">
                <img className="max-w-[400px] max-h-[400px] w-full h-full object-cover border-4 border-black rounded-full"
                    src={isDev() ? "../../files/photo.jpg" : "assets/files/photo.jpg"} alt="look at this guy bro" />
            </div>

            <hr />

            <p className="text-center">
                I am currently in my 3rd-year/penultimate year of Software Engineering @ UTS. I am
                extremely passionate about software development, extending to website & desktop application
                development, algorithmic implementation and UI/UX design.
                This all stemmed from my liking towards game development in high-school experimenting with Scratch
                in creating arcade games, then onto Python and C# utilising more complex practices to develop more
                using Pygame and Unity.
            </p>
            <p className="text-center">
                I wish to become a:
            </p>
            <p ref={headerElement} className="font-medium text-3xl text-center min-h-[2.5rem]
            bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-transparent bg-clip-text" />
        </motion.div>
    );
}

export default Intro;