import emailjs from "@emailjs/browser";

function Email({ copyMessage }) {
    const sendEmail = (e) => {
        e.preventDefault();

        copyMessage("inquiry");

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((_) => {
            console.log("Email sent!");
        }
        ).catch((err) => console.error("Email error: ", err));

        e.target.reset();
    }

    return <form onSubmit={sendEmail} className="rounded-3xl w-3/4 space-y-4 py-5
     bg-[#232121] flex flex-col justify-center items-center">
        <label className="text-xl text-left text-white w-3/4">Name:</label>
        <input className="rounded-lg w-3/4" type="text" name="name" placeholder="what is it..." required></input>
        
        <label className="text-xl text-left text-white w-3/4">Message:</label>
        <textarea className="w-3/4 rounded-lg h-[15vh]" name="message" placeholder="ask me anything..." required></textarea>

        <button className="w-3/4 space-y-10
        bg-gradient-to-r
        from-yellow-500
        via-red-500
        to-orange-500
        text-white
        text-xl
        font-medium
        px-4
        py-2
        rounded
        hover:scale-125 transition ease-in-out duration-300 transform" type="submit">Send Inquiry</button>
    </form>
}

export default Email;