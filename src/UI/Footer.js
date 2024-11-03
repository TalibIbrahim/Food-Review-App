import BytersLogo from "../Assets/BYTE_logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white p-24 px-44">
      <div class="footer-content flex flex-row justify-between items-center">
        <div class="footer-brand flex flex-row justify-center items-center">
          <img
            src={BytersLogo}
            alt="brand-logo"
            className="w-20 mt-2 cursor-auto"
          />
        </div>

        <div class="footer-links flex flex-row justify-around w-96 items-center mt-8 text-center custom-transition">
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#request-restaurant">Request Restaurant</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </div>

        <div class="footer-contacts">
          <h3 className="text-lg font-bold cursor-default">E-Mail:</h3>
          <a
            href="mailto: thehifivesquad@proton.me"
            className="text-neutral-400"
          >
            thehifivesquad@proton.me
          </a>
          <h3 className="text-lg font-bold cursor-default mt-3">UAN:</h3>
          <a
            href="mailto:thehifivesquad@proton.me"
            className=" text-neutral-400"
          >
            thehifivesquad@proton.me
          </a>
          <div className="flex flex-col text-neutral-400">
            <div>111-222-333</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
