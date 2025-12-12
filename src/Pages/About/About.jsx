import React from "react";
import {
  FaUtensils,
  FaRobot,
  FaStore,
  FaAmazon,
  FaUsersCog,
  FaProjectDiagram,
  FaUserShield,
} from "react-icons/fa";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import AboutNav from "../../components/AboutNav/AboutNav";
import NavSm from "../../components/NavSm/NavSm";
import AboutNavSm from "../../components/AboutNavSm/AboutNavSm";
import { GoGraph, GoLightBulb } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
import Client from "../../components/Client/Client";
import BackToTop from "../../components/BackToTop/BackToTop";
const About = () => {
  return (
    <div>
      <div className="about-banner">
        <AboutNav />
        <AboutNavSm />
        <BackToTop />
        <div className="bar-item">
          <div className="bar-sub-head">about horbah's tech</div>
          <div className="about-head">
            YOUR PARTNER IN DIGITAL
            <br /> SUCCESS
          </div>
          <div className="about-head-sm-text">
            I am passionate, creative, and an innovative thinker.
          </div>
          <a
            className="download-cv-btn"
            href="/Horbah's Tech.pdf"
            download
            style={{
              background: "linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)",
              color: "#222",
              fontWeight: 700,
              padding: "14px 38px",
              border: "none",
              borderRadius: 30,
              textDecoration: "none",
              fontSize: ".86rem",
              boxShadow: "0 2px 8px rgba(255, 204, 51, 0.18)",
              transition: "background 0.3s, color 0.3s, transform 0.2s",
              marginTop: 18,
              display: "inline-block",
            }}
          >
            Download My CV
          </a>
        </div>
      </div>
      <div className="short-content-container">
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <GoLightBulb className="short-content-icon" />
          </div>
          <div className="short-content-head">INNOVATOR</div>
          <div className="short-content-content">
            Shaping the future with bold ideas. I blend technology and
            creativity to build lasting impact.
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <GoGraph className="short-content-icon" />
          </div>
          <div className="short-content-head">STRATEGIST</div>
          <div className="short-content-content">
            Turning insights into action. I design smart, data-driven solutions
            that drive real results.
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="short-content-item"
        >
          <div>
            <IoConstructOutline className="short-content-icon" />
          </div>
          <div className="short-content-head">BUILDER</div>
          <div className="short-content-content">
            From concept to completion. I bring your vision to life with
            precision and passion.
          </div>
        </div>
      </div>
      {/* Working Experience Section */}
      <div className="experience-background">
        <div className="experience-overlay">
          <div
            className="experience-head"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Working Experience
          </div>
          <div
            className="experience-content"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <ul>
              <li>
                <FaUtensils style={{ color: "#ffb347", marginRight: 8 }} />
                Built a full-stack startup food delivery website for university
                students, including admin, rider, vendor, super admin, and
                manager pages.
                <a
                  href="https://mealsection-client2-0-sf8j.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffb347",
                    marginLeft: 6,
                    textDecoration: "underline",
                  }}
                >
                  Visit Site
                </a>
              </li>
              <li>
                <FaRobot style={{ color: "#ffb347", marginRight: 8 }} />
                Developed a betting recommendation website with admin panel,
                integrated Telegram bot automation, and linked user Telegram
                accounts to website accounts.
                <a
                  href="https://sport-booking-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffb347",
                    marginLeft: 6,
                    textDecoration: "underline",
                  }}
                >
                  Visit Site
                </a>
              </li>
              <li>
                <FaStore style={{ color: "#ffb347", marginRight: 8 }} />
                Managed and maintained websites for Luminence glow (skin care)
                and Futbol-Max (football kits e-commerce).
                <a
                  href="https://luminesceglow.com/?srsltid=AfmBOoohc3zMI6P3-qqB7UxF_8V0tDsoI4J5iGIzVkKPgYcgBBNaae6n"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffb347",
                    marginLeft: 6,
                    textDecoration: "underline",
                  }}
                >
                  Luminence
                </a>
                <a
                  href="https://futbol-max.com/?srsltid=AfmBOooMoAtklE9lEr4BIKJt71_ETk-CbDLT2t1HDgPgvuGwR_9HLyzN"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffb347",
                    marginLeft: 6,
                    textDecoration: "underline",
                  }}
                >
                  Futbol
                </a>
              </li>
              <li>
                <FaAmazon style={{ color: "#ffb347", marginRight: 8 }} />
                Built a full-stack e-commerce website similar to Amazon.
                <a
                  href="https://atlaspublish.myshopify.com/?pb=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffb347",
                    marginLeft: 6,
                    textDecoration: "underline",
                  }}
                >
                  Visit Site
                </a>
              </li>
              <li>
                <FaUsersCog style={{ color: "#ffb347", marginRight: 8 }} />
                Worked with Strictly Dev, a tech firm, as a Product Developer
                and solution builder (web & app).
              </li>
              <li>
                <FaUserShield style={{ color: "#ffb347", marginRight: 8 }} />
                Lead, mentor, and manage a high performing developer team,
              </li>

              <li>
                <FaProjectDiagram
                  style={{ color: "#ffb347", marginRight: 8 }}
                />
                Contributed to projects for Strictly Dev, including
                Pharmalliance and a CBT software for PEP examination.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="percentage-background">
        <div className="percentage-overlay">
          <div>
            <div
              className="development-head"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Development Skill
            </div>
            <div className="development-p-itm-body">
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar">
                    <div className="development-name-cont">
                      <div className="development-type">Development</div>
                      <div className="percentage">95%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar2">
                    <div className="development-name-cont">
                      <div className="development-type">DeSign</div>
                      <div className="percentage">85%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar3">
                    <div className="development-name-cont">
                      <div className="development-type">Print</div>
                      <div className="percentage">80%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="development-itm"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="development-percentage-bar">
                  <div className="development-bar4">
                    <div className="development-name-cont">
                      <div className="development-type">Marketing</div>
                      <div className="percentage">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Client />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
