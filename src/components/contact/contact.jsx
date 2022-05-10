import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/henry-martins-504372147/"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span>Henry Martins</span>
          </h2>
        </a>

        <a
          href="https://wa.link/5qp4em"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            WhatsApp <span>+55 (34) 99766-6947</span>
          </h2>
        </a>

        <a href="https://instagram.com/henrymartinsb" className="contact instagram" target={"blank"}>
          <AiOutlineInstagram className="icon" />
          <h2>
          instagram <span>@henrymartinsb</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
