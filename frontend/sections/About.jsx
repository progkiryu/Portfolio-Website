import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { isDev } from "../main";

function About() {
    return (
        <div
            id="about"
            className="flex flex-col w-3/4 min-h-[30vh] bg-white mx-auto py-10 space-y-16"
        >
            <div className="flex flex-col items-center text-center space-y-6 px-4">
                <h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                    About Me
                </h1>
                <p className="text-[#232121] max-w-3xl">
                    I am currently in my penultimate year/3rd year studying Software Engineering at UTS,
                    and harbor a strong passion towards programming and developing applications. This all
                    originated from my liking towards game development through Scratch, C# and Python, in
                    which I produced small-scale games during high school. And with my entrance to the software
                    industry, I hope to not only improve my current coding skillset, but to utilise it in solving
                    real-world problems.
                </p>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col items-center text-center space-y-6 px-4">
                <h1 className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
                    Experience
                </h1>

                <Accordion disableGutters className="!bg-[#232121] w-full rounded-md">
                    <AccordionSummary className="w-full">
                        <div className="flex w-full justify-between items-center px-2">
                            <h2 className="text-2xl font-medium text-white">Optik Consultancy</h2>
                            <img
                                className="w-10 h-10 object-contain"
                                src={isDev() ? "../../files/optik.png" : "assets/files/optik.png"}
                                alt="Optik logo"
                            />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="space-y-2 px-4 pb-4">
                        <Typography className="text-white" component="p">
                            <strong>Position:</strong> Engineering Intern/Full-Stack Developer
                        </Typography>
                        <Typography className="text-white" component="p">
                            <strong>Duration:</strong> May 2025 - August 2025
                        </Typography>
                        <Typography className="text-white" component="p">
                            <strong>Location:</strong> Botany, Sydney, Australia
                        </Typography>
                        <Typography className="text-white" component="p">
                            For 3 months, I led and worked alongside 4 other software engineering students
                            in consulting with a client to reveal their main problem and requirements. We developed
                            a solution that addressed their needs. During this process, I enhanced not only my
                            programming expertise but also my leadership capabilities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="flex justify-center items-center">
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
            </div>
        </div>
    );
}

export default About;