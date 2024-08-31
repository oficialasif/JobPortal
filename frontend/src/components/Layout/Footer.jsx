import { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By OficialAsif.</div>
      <div>
        <Link to={"https://www.facebook.com/OficialAsif"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@OficialAsif"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/OficialAsif"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
