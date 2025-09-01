import emailjs from "@emailjs/browser";

function Email() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((_) => console.log("Email sent!")
        ).catch((err) => console.error("Email error: ", err));

        e.target.reset();
    }

    return <form onSubmit={sendEmail} className="w-1/2 flex flex-col items-center justify-center space-y-4">
        <label className="text-xl text-[#232121]">Name:</label>
        <input className="border" type="text" name="name" required></input>
        
        <label className="text-xl text-[#232121]">Message:</label>
        <textarea className="border" name="message" required></textarea>

        <button className="
        bg-gradient-to-r
        from-yellow-500
        via-red-500
        to-orange-500
        text-white
        px-4
        py-2
        rounded" type="submit">Send Inquiry</button>
    </form>
}

export default Email;