import Email from "../components/Email.jsx";

function Contact() {
    return <div className="h-[100vh]">
        <div className="h-[15vh] flex items-center justify-center">
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
        <div className="h-[85vh] flex">
            <Email />
            <div className="w-1/2 flex items-center justify-center space-x-5">        
                <a className="w-20" href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" title="LinkedIn" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                </a>
                <a className="w-20" href="https://github.com/progkiryu" title="GitHub" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" />
                </a>
            </div>
        </div>
    </div>
}

export default Contact;