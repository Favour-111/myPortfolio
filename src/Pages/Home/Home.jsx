import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";
import NavSm from "../../components/NavSm/NavSm";
import { GoGraph, GoLightBulb } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
import FeaturesSection from "../../components/FeatureSection/FeatureSection";
import Service from "../../components/Services/Service";
import WebsiteExpert from "../../components/WebsiteExpert/WebsiteExpert";
import Testimonial from "../../components/Testimonial/Testimonial";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";
import PopUp from "../../components/PopUp/PopUp";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const baseText = "In ";
  const words = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Web Management",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div>
      <div className="Banner">
        <Nav />
        <NavSm />
        <PopUp />
        <div className="banner-text-container">
          <div className="banner-text-1">Full-stack Developer</div>
          <div className="Written-Text">
            {baseText}
            <span>{text}</span>
            <span className="blinking-cursor">|</span>
          </div>
          <div className="company-name">Horbah</div>
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
          <div className="short-content-head">CREATIVE THINKER</div>
          <div className="short-content-content">
            I love turning bold ideas into reality, blending technology and
            creativity to make a difference.
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
          <div className="short-content-head">PROBLEM SOLVER</div>
          <div className="short-content-content">
            I use data-driven strategies and smart solutions to help clients
            achieve their goals.
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
          <div className="short-content-head">DEDICATED BUILDER</div>
          <div className="short-content-content">
            From concept to launch, I bring visions to life with precision,
            passion, and a personal touch.
          </div>
        </div>
      </div>

      <div className="who-section">
        <div className="who-left">
          <img
            src="https://images.unsplash.com/photo-1595074475099-633660478a7a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Working"
            className="team-img"
          />
          <img
            src=" https://media.istockphoto.com/id/160057270/photo/bulb-in-hand.jpg?s=612x612&w=0&k=20&c=9fWWNG6sdUxotWqRD4LG7T7-2hkmm55ZXrquyjo7u9I="
            alt="Bulb"
            className="bulb-img"
          />
        </div>
        <div className="who-right">
          <p className="who-label" data-aos="fade-in" data-aos-duration="1500">
            WHO AM I
          </p>
          <div className="who-head" data-aos="fade-in" data-aos-duration="1500">
            PASSIONATE
            <br />
            CREATOR
          </div>
          <p className="who-text" data-aos="fade-in" data-aos-duration="1500">
            Hi, I’m Omojola Obaloluwa Favour, a versatile Web Developer, Mobile
            App Developer, and expert in Web Hosting, App Hosting, and Database
            Management. I am passionate about crafting user-centric, responsive,
            and visually captivating digital experiences. With expertise in
            HTML, CSS, JavaScript,UI/UX, GitHub, Bootstrap, React, Redux,
            Node.js, MongoDB, React Native,Bot Automation, Firebase, Next.js,
            Vite.js, PHP,CakePHP,MySql and flutter I specialize in transforming
            innovative ideas into functional, scalable, and accessible solutions
            that deliver exceptional results.
          </p>
          <button
            className="who-button"
            data-aos="fade-in"
            data-aos-duration="1500"
            onClick={() => navigate("/about-us")}
          >
            MORE ABOUT ME
          </button>
        </div>
      </div>
      <div
        className="stand-for-cont"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        What i stand for
      </div>
      <div data-aos="fade-in" data-aos-duration="1500">
        <FeaturesSection />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <WebsiteExpert />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <BackToTop />
      </div>
    </div>
  );
};

export default Home;
