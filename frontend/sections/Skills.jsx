import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { isDev } from "../main";

function Skills() {

    const [expanded, setExpanded] = useState();

    const handleExpand = (project) => (_, newProject) => {
        setExpanded(newProject ? project : false);
    }    

    return <div id="skills" className="flex w-3/4 h-[200vh] flex-col bg-[#232121] 2xl:h-[80vh]">
        <div className="flex flex-col h-[190vh] items-center 2xl:flex-row 2xl:h-[70vh]">
            <div className="flex flex-col h-[95vh] items-center justify-center space-y-4 2xl:w-1/2 2xl:h-[70vh]">
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
                <div className="w-1/2 flex space-x-5 justify-center">
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="C++" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Python" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </div>
                <h2 className="text-xl text-white">Frameworks:</h2>
                <div className="w-1/2 flex space-x-5 justify-center">
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="React" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Node" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                </div>
                <h2 className="text-xl text-white">Databases:</h2>
                <div className="w-1/2 flex space-x-5 justify-center">
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                </div>
                <h2 className="text-xl text-white">Developer Tools:</h2>
                <div className="w-1/2 flex space-x-5 justify-center">
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Visual Studio Code" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    <img className="w-12 sm:w-20 hover:scale-125 transition ease-in-out duration-300 transform" title="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                </div>
            </div>
            <div className="flex flex-col h-[95vh] items-center justify-center space-y-5 2xl:w-1/2 2xl:h-[70vh]">
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
                    <Accordion className="w-3/4" disableGutters expanded={expanded === "project1"} onChange={handleExpand("project1")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project1" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/threadline.png" : "assets/files/threadline.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-3xl text-[#232121] text-center">ThreadLine</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="space-y-4">
                            <hr />
                            <Typography component="p">
                                A desktop application prototype built for an Australian-based furniture
                                company, Brand Furniture, in improving day-to-day operations through 
                                streamlining their orders. This is supported by a combination of filtering 
                                and sorting algorithms, data analytics, and a clean UI to assist with user
                                convenience.
                            </Typography>
                            <div className="w-full flex justify-center">
                                <p><strong>Languages:</strong></p>
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            </div>
                            <div className="w-full flex justify-center">
                                <p><strong>Frameworks/Database:</strong></p>
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
                            </div>
                            <Typography className="
                            bg-gradient-to-r
                            from-yellow-500
                            via-red-500
                            to-orange-500
                            text-white
                            px-4
                            py-2
                            rounded" component="a" href="https://github.com/progkiryu/Brand-Furniture" target="_blank">
                                Github Repository
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="w-3/4" disableGutters expanded={expanded === "project2"} onChange={handleExpand("project2")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project2" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/cyclone.png" : "assets/files/cyclone.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-3xl text-[#232121] text-center">Cyclone Detection System</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="space-y-4">
                            <hr />
                            <Typography component="p">
                                A website application built for Engineers Without Borders that projects 
                                weather results from an AI model, regarding its size and speed to determine 
                                if a cyclone is present. This system relies immensely on machine learning 
                                and data analytics to help train the model in improving its detection accuracy.
                            </Typography>                          
                            <div className="w-full flex justify-center">
                                <p><strong>Languages:</strong></p>
                                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                                <img className="w-10" src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <img className="w-10" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            </div>
                            <div className="w-full flex justify-center">
                                <p><strong>Frameworks:</strong></p>
                                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png" />
                                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png" />
                            </div>
                            <Typography component="a" className="
                                bg-gradient-to-r
                                from-yellow-500
                                via-red-500
                                to-orange-500
                                text-white
                                px-4
                                py-2
                                rounded" href="https://github.com/twdly/sds-lnn-ui" target="_blank">
                                Github Repository - Website
                            </Typography>
                            <Typography component="a" className="
                                bg-gradient-to-r
                                from-yellow-500
                                via-red-500
                                to-orange-500
                                text-white
                                px-4
                                py-2
                                rounded" href="https://github.com/twdly/sds-lnn-api" target="_blank">
                                Github Repository - API/AI
                            </Typography>     
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="w-3/4" disableGutters expanded={expanded === "project3"} onChange={handleExpand("project3")}>
                        <AccordionSummary>
                            <div className={`w-full h-10 relative transition-all ease-in-out duration-300 transform
                            ${expanded === "project3" ? "h-20" : "hover:h-40"}`}>
                                <img className="w-full h-full blur-sm object-cover" src={isDev() ? "../../files/resolve.png" : "assets/files/resolve.png"} />
                                <h1 className="absolute inset-0 flex items-center justify-center font-medium text-3xl text-white text-center">RESOLVE</h1>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="space-y-4">
                            <hr />
                            <Typography component="p">
                                PvE video game based off the iconic Ghost of Tsushima, incorporating sword play and
                                smooth attacking animations to create immersion. Built for Year 11 SDD and utilised
                                Python's game-creating module 'pygame' to deal with movement physics, attack registers,
                                menu layout and much more.
                            </Typography>
                            <div className="w-full flex justify-center">
                                <p><strong>Language:</strong></p>
                                <img className="w-10" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />
                            </div>
                            <Typography component="a" className="
                                bg-gradient-to-r
                                from-yellow-500
                                via-red-500
                                to-orange-500
                                text-white
                                px-4
                                py-2
                                rounded" href="https://github.com/progkiryu/YR11-SDD-Project" target="_blank">
                                Github Repository
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
        <div className="flex h-[10vh] justify-center items-center">
            <a className="
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500
            text-white
            px-4
            py-2
            rounded
            hover:scale-125 transition ease-in-out duration-300 transform" href="https://github.com/progkiryu" target="_blank">View my Github!</a>
        </div>
    </div>
}

export default Skills;