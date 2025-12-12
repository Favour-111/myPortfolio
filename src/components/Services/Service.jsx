import React from "react";
import "./Service.css";
import { LuLaptopMinimal } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
const Service = () => {
  return (
    <div className="service">
      <div className="service-container">
        <div
          className="service-sub-cont"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          What i do
        </div>
        <div
          className="service-head"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          CREATIVE SERVICES DESIGNED TO ELEVATE YOUR BUSINESS
        </div>
        <div
          className="service-head-container-2 text-center"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          I take the time to understand your business, your audience, and your
          goals.
        </div>
      </div>
      <div className="service-content">
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <LuLaptopMinimal size={60} />
          </div>
          <div className="service-content-heading">
            Web Design & Development
          </div>
          <div className="service-content-cont">
            I create responsive, visually stunning websites built to convert.
          </div>
        </div>
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <HiOutlineLightBulb size={50} />
          </div>
          <div className="service-content-heading">
            Mobile App Design & Development
          </div>
          <div className="service-content-cont">
            I design and build sleek, high performing mobile apps for iOS and
            Android.
          </div>
        </div>
        <div
          className="service-content-items shadow-sm"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="service-content-icon">
            <HiOutlineLightBulb size={50} />
          </div>
          <div className="service-content-heading">Bot Automation</div>
          <div className="service-content-cont">
            I build smart bots to automate your business tasks, boost
            efficiency, and save you time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
