import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faReddit,
  faYoutube,
  faDeviantart
} from "@fortawesome/free-brands-svg-icons";
import useOnScreen from "../hooks/useOnScreen";

const Footer = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-10px");

  return (
    <footer className={`footer ${onScreen ? "footer--visible" : ""}`} ref={ref}>
      <section className="footer-social">
        <div className="footer-social__item">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} /> <span>Facebook</span>
          </a>
        </div>
        <div className="footer-social__item">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} /> <span>Twitter</span>
          </a>
        </div>
        <div className="footer-social__item">
          <a href="https://reddit.com">
            <FontAwesomeIcon icon={faReddit} /> <span>Reddit</span>
          </a>
        </div>
        <div className="footer-social__item">
          <a href="https://youtube.com">
            <FontAwesomeIcon icon={faYoutube} /> <span>YouTube</span>
          </a>
        </div>
        <div className="footer-social__item">
          <a href="https://deviantart.com">
            <FontAwesomeIcon icon={faDeviantart} /> <span>DeviantArt</span>
          </a>
        </div>
      </section>
      <section className="footer-copyright">
        <span>&copy; 2020 bryanaldrin</span>
      </section>
    </footer>
  );
};

export default Footer;
