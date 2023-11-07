import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.jpg)" }}
    >
      <div className="redes">
        <a className="redes" href="https://www.facebook.com/angelcscs/">
          <BsFacebook size={24} color="black" alt="Facebook" />
        </a>
        <a className="redes" href="https://www.aluracursos.com/1">
          <FaSquareXTwitter size={24} color="black" alt="twitter" />
        </a>
        <a className="redes" href="https://www.aluracursos.com/12123">
          <AiFillInstagram size="24" color="black" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Tony</strong>
    </footer>
  );
};

export default Footer;
