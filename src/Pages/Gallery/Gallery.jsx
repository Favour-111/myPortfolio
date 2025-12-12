import React, { useState } from "react";
import "./Gallery.css";
import Nav from "../../components/Nav/Nav";
import image from "../../Asset/images/icons8-unavailable-100.png";
import { IoArrowBack } from "react-icons/io5";
import AboutNav from "../../components/AboutNav/AboutNav";
import AboutNavSm from "../../components/AboutNavSm/AboutNavSm";
import Admin from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post.png";
import Villyz from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (1).png";
import wosina from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (2).png";
import Eguy from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (3).png";
import Quiz from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (4).png";
import Review from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (5).png";
import Review2 from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (7).png";
import quiz2 from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (8).png";
import Slider from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (6).png";
import Shopify from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (9).png";
import TextLoader from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (10).png";
import SportsTIps from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (12).png";
import MsAdmin from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (14).png";
import SportTIpsAdmin from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (13).png";
import Manager from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (15).png";
import VS from "../../Asset/mockup/Peach Minimalist New Stock Online Notebook Mockup Instagram Post (11).png";
import Mealsection from "../../Asset/mockup/Screenshot 2025-12-12 210543.png";
import Rider from "../../Asset/mockup/Screenshot 2025-12-12 212303.png";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";
import toast, { Toaster } from "react-hot-toast";
const Gallery = () => {
  const [CheckProject, setCheckProject] = useState(false);
  const gallertItem = [
    {
      image: Mealsection,
      Link: "https://mealsection-client2-0-sf8j.vercel.app/",
    },
    {
      image: MsAdmin,
      Link: "https://meal-section-super-admin.vercel.app/",
    },
    {
      image: Manager,
      Link: "http://mealsection-manager.vercel.app/",
    },
    {
      image: Rider,
      Link: "https://rider-admin.mealsection.com/",
    },
    {
      image: SportsTIps,
      Link: "https://sport-booking-site.vercel.app/",
    },
    {
      image: SportTIpsAdmin,
      Link: "https://sport-booking-site.vercel.app/",
    },
    {
      image: Admin,
      Link: "https://villyz-admin.vercel.app/",
    },
    {
      image: Villyz,
      Link: "https://villyz-store-md6b.vercel.app/home",
    },
    {
      image: wosina,
      Link: "https://company-portfolio-seven-eosin.vercel.app/",
    },
    {
      image: Eguy,
      Link: "https://e-guys-carstore.onrender.com/Home",
    },
    {
      image: Quiz,
      Link: "https://favour-111.github.io/recommended-product-quizz/",
    },
    {
      image: Review,
      Link: "https://favour-111.github.io/review-form/",
    },
    {
      image: Review2,
      Link: "https://favour-111.github.io/customer-review-frontend/",
    },
    {
      image: quiz2,
      Link: "https://favour-111.github.io/FutBolQuiz/",
    },
    {
      image: Slider,
      Link: "https://favour-111.github.io/slider-writeup/",
    },
    {
      image: Shopify,
      Link: "https://atlaspublish.myshopify.com/?pb=0",
    },
    {
      image: TextLoader,
      Link: "",
    },
    {
      image: VS,
      Link: "",
    },
  ];
  return (
    <div>
      <div className="gallery-banner">
        <AboutNav />
        <AboutNavSm />
        <BackToTop />
        <div className="gallery-banner-text">
          <div className="gallery-sub-head">my portfolio</div>
          <div className="gallery-head">MY CREATIVE SOLUTIONS</div>
          <div className="gallery-content">
            From eye-catching designs to cutting-edge technology, I combine
            creativity, strategy, and innovation to deliver results that matter
            for my clients.
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-container-head">My Website Projects</div>
        <div className="gallery-content-container">
          {gallertItem.map((item, index) => {
            return (
              <div
                className="gallery-item"
                onMouseOver={() => setCheckProject(true)}
                onMouseOut={() => setCheckProject(false)}
              >
                <img src={item.image} alt="" />
                {item.Link === "" ? (
                  <a
                    onClick={() => {
                      toast("Link is currently unavailable");
                    }}
                    className="bottom-open"
                  >
                    Check project
                  </a>
                ) : (
                  <a className="bottom-open" href={item.Link} target="_blank">
                    Check project
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Gallery;
