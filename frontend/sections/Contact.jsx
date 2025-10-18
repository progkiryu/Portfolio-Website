import { motion } from "framer-motion";

import Email from "../components/Email.jsx";
import EmailIcon from '@mui/icons-material/Email';

import { isDev } from "../main.jsx";

function Contact({ copyMessage }) {

    return (
        <motion.div className="w-full max-w-5xl bg-[#282828] text-white items-center rounded-xl p-5 flex flex-col gap-10"
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0}
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}>
            <p className="text-3xl sm:text-4xl font-medium text-center">&lt;Contact me! 📱 /&gt;</p>

            <hr className="w-full" />

            <div className="flex flex-col sm:flex-row w-full gap-10 sm:gap-0">
                <Email />
                <div className="w-full flex flex-row gap-5 sm:flex-col sm:w-1/2 items-center justify-center">
                    <a className="w-[100px] h-[100px]
                    hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" title="LinkedIn" target="_blank">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                    </a>
                    <a className="w-[100px] h-[100px]
                    hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://github.com/progkiryu" title="GitHub" target="_blank">
                       <img src={isDev() ? "../../files/github.png" : "assets/files/github.png"} />
                    </a>
                    <EmailIcon className="!w-[100px] !h-[100px]
                    hover:scale-125 !transition-all ease-in-out !duration-300 transform" onClick={() => copyMessage("email")} />
                </div>
            </div>
        </motion.div>
    );
    // <div id="contact" className="bg-white w-3/4 flex flex-col mx-auto py-10 space-y-16 items-center justify-center">
    //     <motion.div 
    //     variants={{
    //         hidden: { opacity: 0, y: 50 },
    //         visible: { opacity: 1, y: 0 }
    //     }}
    //     transition={{ duration: 0.5, delay: 0.25}}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true }}
    //     className="flex items-center justify-center">
    //         <h1 className="
    //         font-medium
    //         text-4xl
    //         text-transparent
    //         bg-clip-text
    //         bg-gradient-to-r
    //         from-yellow-500
    //         via-red-500
    //         to-orange-500">Connect with me!</h1>
    //     </motion.div>
    //     <div className="flex flex-col w-full items-center justify-center">
    //         <Email 
    //         copyMessage={copyMessage} />
    //         <motion.div 
    //         variants={{
    //             hidden: { opacity: 0, y: 50 },
    //             visible: { opacity: 1, y: 0 }
    //         }}
    //         transition={{ duration: 0.5, delay: 0.25}}
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true }}
    //         className="flex items-center justify-center space-x-5 pt-10">        
    //             <a className="w-20
    //             hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" title="LinkedIn" target="_blank">
    //                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
    //             </a>
    //             <a className="w-20
    //             hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://github.com/progkiryu" title="GitHub" target="_blank">
    //                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
    //             </a>
    //             <EmailIcon className="!w-20 !h-20
    //             hover:scale-125 !transition-all ease-in-out !duration-300 transform" onClick={() => copyMessage("email")} />
    //         </motion.div>
    //     </div>
    // </div>
}

export default Contact;