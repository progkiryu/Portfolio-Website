import Email from "../components/Email.jsx";

function Contact() {
    return <div className="h-[100vh]">
        <div className="h-[15vh] flex justify-center">
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
            <div className="w-1/2">        
                <a href="https://www.linkedin.com/in/denver-klein-mesa-aa323231a" target="_blank">LinkedIn</a>
                <a href="https://github.com/progkiryu" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
}

export default Contact;