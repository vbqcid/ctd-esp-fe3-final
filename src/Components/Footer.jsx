import logo from "../images/dh2.png";
import logoinsta from "../images/ico-instagram.png";
import logoface from "../images/ico-facebook.png";
import logotik from "../images/ico-tiktok.png";
import logowhat from "../images/ico-whatsapp.png";

const Footer = () => {
  return (
    <div
      className="dark"
      style={{
        display: "flex",
        height: 300,
        width: "100vw",
        alignItems: "center",
        marginTop: 70,
        justifyContent: "center",
      }}
    >
      <h2 style={{ width: 250, height: 250, marginLeft: 870, marginTop: 150 }}></h2>
      <img style={{ width: 450, height: 200, marginLeft: 70 }} src={logo} alt="dhlogo" />
      <nav>
        <a href="https://www.instagram.com/?hl=es"><img style={{ width: 30, height: 30, marginLeft: 900 }} src={logoinsta} alt="Instagram" /></a>
        <a href="https://www.facebook.com"><img style={{ width: 30, height: 30, marginLeft: 10 }} src={logoface} alt="Facebook" /></a>
        <a href="https://www.tiktok.com/es/"><img style={{ width: 30, height: 30, marginLeft: 10 }} src={logotik} alt="TikTok" /></a>
        <a href="https://web.whatsapp.com/"><img style={{ width: 30, height: 30, marginLeft: 10 }} src={logowhat} alt="WhatsApp" /></a>
      </nav>
    </div>
    
  );
};

export default Footer;
