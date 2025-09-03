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

    return <form onSubmit={sendEmail} className="w-3/4 h-[45vh] rounded-3xl
     bg-[#232121] flex flex-col justify-center items-center space-y-4 md:w-1/2">
        <label className="text-xl text-white">Name:</label>
        <input className="rounded-lg w-3/4" type="text" name="name" placeholder="what is it..." required></input>
        
        <label className="text-xl text-white">Message:</label>
        <textarea className="w-3/4 rounded-lg h-60" name="message" placeholder="ask me anything..." required></textarea>

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