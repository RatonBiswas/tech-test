import React from "react";
import FullButton from "../../Buttons/FullButton";
import "./Blog.css";
import BlogBox from "../../Elements/BlogBox";
import TestimonialSlider from "../../Elements/TestimonialSlider";

function Blog() {
  return (
    <section id="blog" className="wrapper">
      <div className="whiteBg">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="headerInfo">
            <h1 className="font40 extraBold">Our Blog</h1>
            <p className="font13">
            Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities.
            </p>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nasspro"
                text="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
                tag="company"
                author="Raton"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nasspro"
                text="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
                tag="company"
                author="Raton"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
                tag="company"
                author="Raton"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nasspro"
                text="Here, we embrace the challenge to drive each other to excellence by enriching our own capabilities."
                tag="company"
                author="Raton"
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div
          className="container"
          style={{ paddingBottom: "100px" }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="headerInfo">
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}

export default Blog;
