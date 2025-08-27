//import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Email() {
    //const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (_) => {
                console.log("Email sent!");
            },
            (err) => {
                console.error("Email error: ", err);
            }
        );

        e.target.reset();
    }

    return <form onSubmit={sendEmail}>
        <label>Name: *</label>
        <input type="text" name="name" required></input>
        
        <label>Message: *</label>
        <textarea name="message" required></textarea>

        <button type="submit">Send Inquiry</button>
    </form>
}

export default Email;