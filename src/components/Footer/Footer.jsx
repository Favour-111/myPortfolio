import React from "react";
import "./Footer.css";
import { GiArtificialHive } from "react-icons/gi";
import { Link } from "react-router";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BsTelegram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { PiBrain } from "react-icons/pi";
const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    toast("Link is currently unavailable");
  };
  return (
    <div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-over-lay">
            <div
              className="footer-top-head"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              LET'S BRING YOUR VISION TO LIFE
            </div>
            <div
              className="footer-top-content"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              I'm passionate about creating designs that not only look great but
              also drive results.
            </div>
            <a
              href="tel:+2348069989705"
              className="contact-btn"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <div className="footer-itm">
              <div className="Footer-Logo">
                <div className="logo">
                  <PiBrain className="mb-1" />
                </div>
                <div>Horbah's Tech</div>
              </div>
            </div>

            <div className="footer-itm">
              <div className="footer-itm-head">Contact</div>
              <div className="address-itm">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=omojolaobaloluwa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  omojolaobaloluwa@gmail.com
                </a>
                <a href="tel:+2348069989705">+234 806 998 9705</a>
              </div>
            </div>
            <div className="footer-itm">
              <div className="footer-itm-head">Quick Link</div>
              <ul>
                <li>
                  <div
                    onClick={() => {
                      navigate("/");
                      window.scrollTo(0, 0);
                    }}
                    to="/"
                    className="footer-link-itm"
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/about-us");
                      window.scrollTo(0, 0);
                    }}
                    className="footer-link-itm"
                  >
                    About
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/contact-us");
                      window.scrollTo(0, 0);
                    }}
                    className="footer-link-itm"
                  >
                    Contact
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/gallery");
                      window.scrollTo(0, 0);
                    }}
                    className="footer-link-itm"
                  >
                    Gallery
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer-itm">
              <div className="footer-itm-head">Legal and Press</div>
              <ul>
                <li>
                  <Link className="footer-link-itm">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">Terms & Condition</Link>
                </li>
                <li>
                  <Link className="footer-link-itm">PressKit</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-social-container">
            <a
              className="footer-social-item"
              href="https://instagram.com/horbahstech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="footer-social-item"
              href="https://discord.gg/aKHs3VUuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              className="footer-social-item"
              href="https://wa.me/2348069989705"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a
              className="footer-social-item"
              href="https://t.me/omojolaobaloluwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelegram />
            </a>
          </div>
          <div className="copyright">2025 © Horbah's Tech</div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Footer;
