import React from "react";
import FullButton from "../../Buttons/FullButton";
import HeaderImage from "../../../assets/img/header-img.png";
import Dots from "../../../assets/svg/Dots";
import "./Header.css"; // Import your CSS file

export default function Header() {
  return (
    <section id="home" className="header">
      <div className="container flexSpaceCenter">
        <div
          className="left-side flexCenter"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <h1 className="extraBold font60">Nitex</h1>
            <p className="font13 semiBold header-p">
            We have a unique combination of talents motivated by ambitious goals and a can-do attitude. Our drive to develop excellent products is built on teamwork, passion, and giving team members full control over their work to succeed on their own. We want to create an environment where ideas can flourish.
            </p>
            <div className="btn-wrapper">
              <FullButton title="Get Started" />
            </div>
          </div>
        </div>
        <div
          className="right-side"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="image-wrapper">
            <img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9 }}
            />
            <div className="quote-wrapper flexCenter darkBg radius8">
             
            </div>
            <div className="dots-wrapper">
              <Dots />
            </div>
          </div>
          <div className="grey-div lightBg"></div>
        </div>
      </div>
    </section>
  );
}
