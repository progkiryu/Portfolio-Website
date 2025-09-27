import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { isDev } from "../main";
import { useState } from "react";

function About() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div
            id="about"
            className="flex flex-col w-3/4 min-h-[30vh] bg-[#232121] mx-auto py-10 space-y-16"
        >
            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 px-4">
                <h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                    About Me
                </h1>
                <p className="text-white max-w-3xl">
                    I am currently in my penultimate year/3rd year studying Software Engineering at UTS,
                    and harbor a strong passion towards programming and developing applications. This all
                    originated from my liking towards game development through Scratch, C# and Python, in
                    which I produced small-scale games during high school. And with my entrance to the software
                    industry, I hope to not only improve my current coding skillset, but to utilise it in solving
                    real-world problems.
                </p>
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
            className="flex flex-col items-center text-center space-y-6 px-4">
                <h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                    Experience
                </h1>

                <Accordion expanded={expanded === "exp1"} disableGutters className="!bg-white max-w-3xl rounded-md"
                onChange={handleChange("exp1")}>
                    <AccordionSummary className="w-full">
                        <div className={`w-full h-10 flex justify-between items-center relative transition-all ease-in-out duration-300 transform
                            ${expanded === "exp1" ? "h-15" : "hover:h-20"}`}>
                            <h2 className="text-2xl font-medium text-[#232121]">Optik Consultancy</h2>
                            <img
                                className="w-10 h-10 object-contain"
                                src={isDev() ? "../../files/optik.png" : "assets/files/optik.png"}
                                alt="Optik logo"
                            />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="space-y-2 px-4 pb-4">
                        <Typography className="text-[#232121]" component="p">
                            <strong>Position:</strong> Engineering Intern/Full-Stack Developer
                        </Typography>
                        <Typography className="text-[#232121]" component="p">
                            <strong>Duration:</strong> May 2025 - August 2025
                        </Typography>
                        <Typography className="text-[#232121]" component="p">
                            <strong>Location:</strong> Botany, Sydney, Australia
                        </Typography>
                        <Typography className="text-[#232121]" component="p">
                            For 3 months, I led and worked alongside 4 other software engineering students
                            in consulting with a client to reveal their main problem and requirements. We developed
                            a solution that addressed their needs. During this process, I enhanced not only my
                            programming expertise but also my leadership capabilities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
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
            className="flex justify-center items-center">
                <a
                    className="bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 
                    text-white px-6 py-3 rounded-md text-lg font-medium 
                    hover:scale-110 transition duration-300 transform"
                    href={
                        isDev()
                            ? "../../files/Career Resume - Denver Klein Mesa.pdf"
                            : "assets/files/Career Resume - Denver Klein Mesa.pdf"
                    }
                    download
                >
                    Learn more on my resume!
                </a>
            </motion.div>
        </div>
    );
}

export default About;