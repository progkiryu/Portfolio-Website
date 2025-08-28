import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Projects() {
    return <>
        <Accordion>
            <AccordionSummary>
                <Typography component="span">ThreadFlow</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="p">
                    A desktop application prototype built for an Australian-based furniture
                    company, Brand Furniture, in improving day-to-day operations through 
                    streamlining their orders. This is supported by a combination of filtering 
                    and sorting algorithms, data analytics, and a clean UI to assist with user
                    convenience.
                    <br />
                    <strong>Languages:</strong> Typescript, HTML5, CSS <br />
                    <strong>Frameworks/Database:</strong> MERN Stack, ElectronJS, MongoDB
                </Typography>
                <Typography component="a" href="https://github.com/progkiryu/Brand-Furniture" target="_blank">
                    <strong>Github Repository</strong>
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                <Typography component="span">Cyclone Detection System</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="p">
                    A website application built for Engineers Without Borders that projects 
                    weather results from an AI model, regarding its size and speed to determine 
                    if a cyclone is present. This system relies immensely on machine learning 
                    and data analytics to help train the model in improving its detection accuracy.
                    <br />
                    <strong>Languages:</strong> Python, C#, HTML5, CSS <br />
                    <strong>Frameworks/Modules:</strong> .NET, Blazor, Flask, pytorch, scikit-learn
                </Typography>  
                <Typography component="p"> 
                    <a href="https://github.com/twdly/sds-lnn-ui" target="_blank">
                        <strong>Github Repository - Website</strong>
                    </a>
                    <br />
                    <a href="https://github.com/twdly/sds-lnn-api" target="_blank">
                        <strong>Github Repository - API/AI</strong>
                    </a>

                </Typography>     
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
                <Typography component="span">RESOLVE</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="p">
                    PvE video game based off the iconic Ghost of Tsushima, incorporating sword play and
                    smooth attacking animations to create immersion. Built for Year 11 SDD and utilised
                    Python's game-creating module 'pygame' to deal with movement physics, attack registers,
                    menu layout and much more.
                    <br />
                </Typography>
            </AccordionDetails>
        </Accordion>

        <a href="https://github.com/progkiryu" target="_blank">View my repositories on Github!</a>
    </>
}

export default Projects;