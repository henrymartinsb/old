import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
/* import { FaFacebookF } from "react-icons/fa"; */
import { BsLinkedin } from "react-icons/bs";
/*import { TiSocialYoutube } from "react-icons/ti"; */
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a target={"blank"} href="https://www.instagram.com/henrymartinsb/">
          <BsInstagram className="social" />
        </a>
        {/* <a href="#">
          {" "}
          <FaFacebookF className="social" />
        </a> */}
        <a target={"blank"} href="https://www.linkedin.com/in/henry-martins-504372147/">
          {" "}
          <BsLinkedin className="social" />
        </a>

        {/* <a href="#">
          <TiSocialYoutube className="social" />
        </a> */}

        <a target={"blank"} href="https://github.com/henrymartinsb">
          <BsGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
