import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import { isDev } from "../main";
import { useState } from "react";

function Experience() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25 }}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col w-full max-w-5xl items-center bg-[#282828] px-4 rounded-xl p-5 gap-10 text-white">
                <p className="text-3xl sm:text-4xl font-medium text-center">
                    &lt;Experience 📖 /&gt;
                </p>

                <hr className="w-full" />

                <Accordion expanded={expanded === "exp1"} disableGutters className="!bg-[#343434] max-w-3xl !rounded-xl !text-white"
                onChange={handleChange("exp1")}>
                    <AccordionSummary className={`w-full ${expanded !== "exp1" && "hover:shadow-lg !transition duration-200 !shadow-green-500"}`}>
                        <div className="w-full h-10 flex justify-between items-center">
                            <h2 className="text-2xl font-medium">Optik Consultancy</h2>
                            <img
                                className="w-10 h-10 object-contain"
                                src={isDev() ? "../../files/optik.png" : "assets/files/optik.png"}
                                alt="Optik logo"
                            />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="space-y-2 !p-4 text-white !bg-[#505050] rounded-xl">
                        <Typography component="p">
                            <strong>Position:</strong> Engineering Intern/Full-Stack Developer
                        </Typography>
                        <Typography component="p">
                            <strong>Duration:</strong> May 2025 - August 2025
                        </Typography>
                        <Typography component="p">
                            <strong>Location:</strong> Botany, Sydney, Australia
                        </Typography>
                        <Typography component="p">
                            For 3 months, I led and worked alongside 4 other software engineering students
                            in consulting with a client to reveal their main problem and requirements. We developed
                            a solution that addressed their needs. During this process, I enhanced not only my
                            programming expertise but also my leadership capabilities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

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
    );
}

export default Experience;