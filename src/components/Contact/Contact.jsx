import React from "react";
import "./Contact.scss";

const Contact = () => (
    <section id="contact">
        <h3>Contact Us</h3>
        <p>Want to collaborate or know more? Reach out to us.</p>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Organization / Institute" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
);

export default Contact;
