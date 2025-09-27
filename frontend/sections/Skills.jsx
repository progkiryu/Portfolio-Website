import { motion } from "framer-motion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { isDev } from "../main";

function Skills() {

    const [expanded, setExpanded] = useState();

    const handleExpand = (project) => (_, newProject) => {
        setExpanded(newProject ? project : false);
    }    

    return <div id="skills" className="flex w-3/4 min-h-screen mx-auto py-10 space-y-16 flex-col bg-[#232121]">
        <div className="flex flex-col items-center text-center space-y-16 px-4">
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start space-y-4">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">Skills</h1>
                <h2 className="text-xl text-white">Primary Languages:</h2>
                <div className="w-full flex space-x-4 justify-center">
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="C++" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Python" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </div>
                <h2 className="text-xl text-white">Frameworks:</h2>
                <div className="w-full flex space-x-4 justify-center">
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="React" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                </div>
                <h2 className="text-xl text-white">Databases:</h2>
                <div className="w-full flex space-x-4 justify-center">
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                </div>
                <h2 className="text-xl text-white">Developer Tools:</h2>
                <div className="w-full flex space-x-4 justify-center">
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Visual Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    <img className="w-[8vw] hover:scale-125 transition ease-in-out duration-300 transform" title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                </div>
            </motion.div>
            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start space-y-6">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">Projects</h1>
                <div className="flex flex-col items-center">
                    <Accordion className="max-w-4xl" disableGutters expanded={expanded === "project1"} onChange={handleExpand("project1")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project1" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/threadline.png" : "assets/files/threadline.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-2xl text-[#232121] text-center sm:text-3xl">ThreadLine</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="text-[#232121] text-center">
                                    A desktop application prototype built for an Australian-based furniture
                                    company, Brand Furniture, in improving day-to-day operations through 
                                    streamlining their orders. This is supported by a combination of filtering 
                                    and sorting algorithms, data analytics, and a clean UI to assist with user
                                    convenience.
                                </p>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p><strong>Languages:</strong></p>
                                    <div className="flex space-x-2">
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p><strong>Frameworks/Database:</strong></p>
                                    <div className="flex space-x-2">
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                                    </div>
                                </div>
                                <a className="
                                bg-gradient-to-r
                                from-yellow-500
                                via-red-500
                                to-orange-500
                                text-white
                                text-xl
                                font-medium
                                px-4
                                py-2
                                rounded
                                hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/progkiryu/Brand-Furniture" target="_blank">
                                    Github Repository
                                </a>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="max-w-4xl" disableGutters expanded={expanded === "project2"} onChange={handleExpand("project2")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project2" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/cyclone.png" : "assets/files/cyclone.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-2xl text-[#232121] text-center sm:text-3xl">Cyclone Detection System</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="space-y-4">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="text-[#232121] text-center">
                                    A website application built for Engineers Without Borders that projects 
                                    weather results from an AI model, regarding its size and speed to determine 
                                    if a cyclone is present. This system relies immensely on machine learning 
                                    and data analytics to help train the model in improving its detection accuracy.
                                </p>                          
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p><strong>Languages:</strong></p>
                                    <div className="flex space-x-2">
                                        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                                        <img className="w-10" src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                        <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p><strong>Frameworks:</strong></p>
                                    <div className="flex space-x-2">
                                        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png" />
                                        <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png" />
                                    </div>
                                </div>
                                <a className="
                                    bg-gradient-to-r
                                    from-yellow-500
                                    via-red-500
                                    to-orange-500
                                    text-white
                                    text-xl
                                    font-medium
                                    px-4
                                    py-2
                                    rounded
                                    hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/twdly/sds-lnn-ui" target="_blank">
                                    Github Repository - Website
                                </a>
                                <a className="
                                    bg-gradient-to-r
                                    from-yellow-500
                                    via-red-500
                                    to-orange-500
                                    text-white
                                    text-xl
                                    font-medium
                                    px-4
                                    py-2
                                    rounded
                                    hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/twdly/sds-lnn-api" target="_blank">
                                    Github Repository - API/AI
                                </a>     
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="max-w-4xl" disableGutters expanded={expanded === "project3"} onChange={handleExpand("project3")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project3" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/resolve.png" : "assets/files/resolve.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-2xl text-white text-center sm:text-3xl">RESOLVE</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="space-y-4">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <p className="text-[#232121] text-center">
                                    PvE video game based off the iconic Ghost of Tsushima, incorporating sword play and
                                    smooth attacking animations to create immersion. Built for Year 11 SDD and utilised
                                    Python's game-creating module 'pygame' to deal with movement physics, attack registers,
                                    menu layout and much more.
                                </p>
                                <div className="flex flex-col items-center justify-center space-y-2">
                                    <p><strong>Language:</strong></p>
                                    <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                                </div>
                                <a className="
                                    bg-gradient-to-r
                                    from-yellow-500
                                    via-red-500
                                    to-orange-500
                                    text-white
                                    text-xl
                                    font-medium
                                    px-4
                                    py-2
                                    rounded
                                    hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/progkiryu/YR11-SDD-Project" target="_blank">
                                    Github Repository
                                </a>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </motion.div>
        </div>
        <motion.div 
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 0.25}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center items-center">
            <a className="bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500
            text-white px-6 py-3 rounded-md text-lg font-medium
            hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/progkiryu" target="_blank">View my Github!</a>
        </motion.div>
    </div>
}

export default Skills;