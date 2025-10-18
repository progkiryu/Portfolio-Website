import { motion } from "framer-motion";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useState } from "react";

import { isDev } from "../main";

const descs = [
    `A desktop application prototype built for an Australian-based furniture
    company, Brand Furniture, in improving day-to-day operations through 
    streamlining their orders. This is supported by a combination of filtering 
    and sorting algorithms, data analytics, and a clean UI to assist with user
    convenience.`,
    `A website application built for Engineers Without Borders that projects 
    weather results from an AI model, regarding its size and speed to determine 
    if a cyclone is present. This system relies immensely on machine learning 
    and data analytics to help train the model in improving its detection accuracy.`,
    `PvE video game based off the iconic Ghost of Tsushima, incorporating sword play and
    smooth attacking animations to create immersion. Built for Year 11 SDD and utilised
    Python's game-creating module 'pygame' to deal with movement physics, attack registers
    menu layout and much more.`
]

function Projects() {

    const [selectedProject, setProject] = useState(null);


    const handleProject = (desc, title) => setProject({ desc: desc, title: title });

    const resetProject = () => setProject(null);

    const Details = ({ desc, title }) => {
        return (
            <div className="flex flex-col gap-5 text-center items-center w-full">
                <p className="text-2xl font-medium">{title}</p>
                <p><strong>Description:</strong></p>
                <p>{desc}</p>
                <p><strong>Lanugage/s:</strong></p>
                {
                    title === "Cyclone Detection AI 🌀" &&
                    <>
                        <div className="flex gap-2">
                           <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                            <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /> 
                        </div>

                        <p><strong>Frameworks/Database:</strong></p>
                        <div className="flex gap-2">
                            <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png" />
                            <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png" />
                        </div>

                        <a className="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium
                        hover:scale-110 transition duration-300 transform" href="https://github.com/twdly/sds-lnn-api" target="_blank">GitHub Repo - API</a>
                        <a className="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium
                        hover:scale-110 transition duration-300 !transform" href="https://github.com/twdly/sds-lnn-ui" target="_blank">GitHub Repo - UI</a>
                    </>
                }

                { 
                    title === "ThreadLine 🛋️" &&
                    <>
                        <div className="flex gap-2">
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        </div>

                        <p><strong>Frameworks/Database:</strong></p>
                        <div className="flex gap-2">
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                            <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                            <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                        </div>

                        <a className="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium
                        hover:scale-110 transition duration-300 transform" href="https://github.com/progkiryu/Brand-Furniture" target="_blank">GitHub Repo</a>
                    </>
                }

                {
                    title === "RESOLVE ⚔️" &&
                    <>
                        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                        <a className="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium
                        hover:scale-110 transition duration-300 transform" href="https://github.com/progkiryu/YR11-SDD-Project" target="_blank">GitHub Repo</a>
                    </>
                }

                <ExitToAppIcon className="hover:scale-110 !transition duration-300 transform" onClick={resetProject} />
            </div>
        );
    }

    return (
        <motion.div className="w-full max-w-5xl bg-[#282828] mx-auto items-center justify-center  text-white rounded-xl p-5 flex flex-col gap-10"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}>
            <p className="text-3xl sm:text-4xl font-medium text-center">&lt;Projects ✏️ /&gt;</p>

            <hr className="w-full" />

            { selectedProject === null ?
                <div className="grid pb-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 w-full">
                    <motion.div className="relative border-2 border-white w-[300px] h-[300px] overflow-hidden rounded-xl"
                    whileHover="hover" onClick={() => handleProject(descs[0], "ThreadLine 🛋️")}
                    initial="rest"
                    animate="rest">
                        <motion.img className="w-full h-full object-cover" src={isDev() ? "../../files/furniture.jpg" : "assets/files/furniture.jpg"} 
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.2 }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}/>

                        <motion.div
                        className="absolute inset-0 bg-black/0"
                        variants={{
                            rest: { backgroundColor: "rgba(0,0,0,0)" },
                            hover: { backgroundColor: "rgba(0,0,0,0.35)" },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        />

                        <motion.p className="absolute top-0 left-0 text-center w-full text-2xl"
                        variants={{
                            rest: { y: -50, opacity: 0 },
                            hover: { y: 40, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}>
                            ThreadLine
                        </motion.p>
                    </motion.div>
                    <motion.div className="relative border-2 border-white w-[300px] h-[300px] overflow-hidden rounded-xl"
                    whileHover="hover" onClick={() => handleProject(descs[1], "Cyclone Detection AI 🌀")}
                    initial="rest"
                    animate="rest">
                        <motion.img className="w-full h-full object-cover" src={isDev() ? "../../files/cyclone.jpg" : "assets/files/cyclone.jpg"} 
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.2 }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}/>

                        <motion.div
                        className="absolute inset-0 bg-black/0"
                        variants={{
                            rest: { backgroundColor: "rgba(0,0,0,0)" },
                            hover: { backgroundColor: "rgba(0,0,0,0.35)" },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        />

                        <motion.p className="absolute top-0 left-0 text-center w-full text-2xl"
                        variants={{
                            rest: { y: -50, opacity: 0 },
                            hover: { y: 40, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}>
                            Cyclone Detection AI
                        </motion.p>
                    </motion.div>
                    <motion.div className="relative border-2 border-white w-[300px] h-[300px] overflow-hidden rounded-xl"
                    whileHover="hover" onClick={() => handleProject(descs[2], "RESOLVE ⚔️")}
                    initial="rest"
                    animate="rest">
                        <motion.img className="w-full h-full object-cover" src={isDev() ? "../../files/resolve.png" : "assets/files/resolve.png"} 
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.2 }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}/>

                        <motion.div
                        className="absolute inset-0 bg-black/0"
                        variants={{
                            rest: { backgroundColor: "rgba(0,0,0,0)" },
                            hover: { backgroundColor: "rgba(0,0,0,0.35)" },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        />

                        <motion.p className="absolute top-0 left-0 text-center w-full text-2xl"
                        variants={{
                            rest: { y: -50, opacity: 0 },
                            hover: { y: 40, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}>
                            RESOLVE
                        </motion.p>
                    </motion.div>
                </div> :
                <Details lang={selectedProject.lang} desc={selectedProject.desc} title={selectedProject.title} />
            }
            <hr className="w-full" />

                <a className="cursor-pointer bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 text-white px-6 py-3 rounded-md text-lg font-medium
                hover:scale-110 transition duration-300 transform" onClick={resetProject} href="https://github.com/progkiryu" target="_blank">
                    Check out my GitHub!
                </a>
        </motion.div>
    );
}

export default Projects;