import { motion } from "framer-motion";

import Email from "../components/Email.jsx";
import EmailIcon from '@mui/icons-material/Email';

function Contact({ copyMessage }) {

    return <div id="contact" className="bg-[#232121] w-3/4 flex flex-col mx-auto py-10 space-y-16 items-center justify-center">
        <motion.div 
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay: 0.25}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-center">
            <h1 className="
            font-medium
            text-4xl
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500">Connect with me!</h1>
        </motion.div>
        <div className="flex flex-col w-full items-center justify-center">
            <Email 
            copyMessage={copyMessage} />
            <motion.div 
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.25}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-5 pt-10">        
                <a className="w-20
                hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" title="LinkedIn" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                </a>
                <a className="w-20
                hover:scale-125 transition-all ease-in-out duration-300 transform bg-white" href="https://github.com/progkiryu" title="GitHub" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </a>
                <EmailIcon className="!w-20 !h-20
                hover:scale-125 !transition-all ease-in-out !duration-300 transform" onClick={() => copyMessage("email")} />
            </motion.div>
        </div>
    </div>
}

export default Contact;