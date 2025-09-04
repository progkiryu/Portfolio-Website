import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { isDev } from "../main";

function About() {
    return <div id="about" className="flex flex-col w-3/4 h-[120vh] bg-white md:h-[100vh] lg:h-[50vh]">
        <div className="flex flex-col h-[110vh] items-center md:h-[90vh] lg:flex-row lg:h-[40vh]">
            <div className="flex flex-col h-[55vh] items-center justify-center space-y-5 md:h-[45vh] lg:w-1/2 lg:h-[40vh]">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">About Me</h1>
                <p className="text-[#232121] px-4 text-center">
                    I am currently in my penultimate year/3rd year studying Software Engineering at UTS, and harbor a strong passion
                    towards programming and developing applications. This all originated from my liking towards game development through
                    Scratch, C# and Python, in which I produced small-scale games during high school. And with my entrance to the software
                    industry, I hope to not only improve my current coding skillset, but to utilise it in solving real-world problems.
                </p>
            </div>
            <div className="flex flex-col h-[55vh] items-center justify-center space-y-5 md:w-[45vh] lg:w-1/2 lg:h-[40vh]">
                <h1 className="
                font-medium
                text-4xl
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-500
                via-red-500
                to-orange-500">Experience</h1>
                <Accordion disableGutters className="!bg-[#232121] w-3/4">
                    <AccordionSummary>
                        <div className="flex w-full justify-between items-center">
                            <h1 className="text-3xl font-medium text-white">Optik Consultancy</h1>
                            <img className="w-12 h-12" src={isDev() ? "../../files/optik.png" : "assets/files/optik.png"} />
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="text-white" component="p"><strong>Position:</strong> Engineering Intern/Full-Stack Developer</Typography>
                        <Typography className="text-white" component="p"><strong>Duration:</strong> May 2025 - August 2025</Typography>
                        <Typography className="text-white" component="p"><strong>Location:</strong> Botany, Sydney, Australia</Typography>
                        <Typography className="text-white" component="p">
                            For 3 months, I have led and worked alongside 4 other software engineering students
                            in consulting with a client revealing their main problem and requirements, to develop a solution
                            that covers the criteria needed. Not only have I improved on my programming expertise, but rather
                            my leadership capabilities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        <div className="h-[10vh] flex justify-center items-center">
            <a className="
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500
            text-white
            px-4
            py-2
            rounded
            hover:scale-125 transition ease-in-out duration-300 transform" href={isDev() ? "../../files/Career Resume - Denver Klein Mesa.pdf" 
            : "assets/files/Career Resume - Denver Klein Mesa.pdf"} download>Learn more on my resume!</a>
        </div>
    </div>
}

export default About;