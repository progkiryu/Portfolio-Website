import Email from "../components/Email.jsx";
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";

function Contact({ copyEmail }) {
    const [showNotification, setShowNotification] = useState(false);

    return <div id="contact" className="bg-white w-3/4 flex flex-col mx-auto py-10 space-y-16 items-center justify-center">
        {showNotification && (
        <div className="fixed top-10 bg-green-500 text-#[232121] text-sm px-4 py-2 rounded shadow-md animate-fade-in-out">
          Email copied!
        </div>
        )}
        <div className="flex items-center justify-center">
            <h1 className="
            font-medium
            text-4xl
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-yellow-500
            via-red-500
            to-orange-500">Connect with me!</h1>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <Email />
            <div className="flex items-center justify-center space-x-5 pt-10">        
                <a className="w-20
                hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" title="LinkedIn" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                </a>
                <a className="w-20
                hover:scale-125 transition-all ease-in-out duration-300 transform" href="https://github.com/progkiryu" title="GitHub" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </a>
                <EmailIcon className="!w-20 !h-20
                hover:scale-125 !transition-all ease-in-out !duration-300 transform" onClick={copyEmail} />
            </div>
        </div>
    </div>
}

export default Contact;