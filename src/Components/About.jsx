import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Workshop Features
const workshopFeatures = [
  "Premium Quality Stainless Steel",
  "Modern & Elegant Kitchen Sink Designs",
  "Durable and Long-Lasting Products",
  "Single Bowl & Double Bowl Kitchen Sinks",
  "Reliable Manufacturing & Quality Assurance",
];

// 3
const AboutWorkshop = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);}
//   our range
const productCategories = [
  {
    id: 1,
    title: "Single Bowl Sinks",
    image: "/img/range-1.png",
    link: "/single-bowl-sinks",
  },
  {
    id: 2,
    title: "Double Bowl Sinks",
    image: "/img/range-2.png",
    link: "/double-bowl-sinks",
  },
  {
    id: 3,
    title: "Workstation Sinks",
    image: "/img/range-3.png",
    link: "/workstation-sinks",
  },
  {
    id: 4,
    title: "Customized Sinks",
    image: "/img/range-4.png",
    link: "/customized-sinks",
  },
];

const About = () => {
  return (
   <>
    {/* banner  */}
            <section className="banner-section py-5">
                <div className="container">

                    <div id="carouselExampleContent" className="carousel slide">
                        <div className="carousel-inner rounded-5">

                            <div className="back carousel-item active">
                                <div
                                    className="d-flex flex-column justify-content-center text-center p-9 rounded-5"
                                    style={{
                                        minHeight: "400px",
                                        backgroundImage: "url('/img/back.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <h3>About Us</h3>

                                    <p className="fg-emphasis-secondary mb-3">
                                        Discover our passion for premium kitchen solutions, blending quality, innovation, and timeless elegance.
                                    </p>

                                    <div className="learn-more">
                                        <a className="btn-solid theme-success" href="/about">
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* end banner */}
            {/* about */}
             {/* 3 */}
    <section className="workshop-section" id="about-workshop">
      <div className="container">
        <div className="row align-items-center gy-5 gx-lg-5">

          {/* LEFT IMAGE */}
          <div
            className="col-lg-5 col-md-5"
            data-aos="fade-right"
          >
            <div className="workshop-image-wrapper">
              <img
                src="/img/ab-3.png"
                alt="Modern stainless steel kitchen sink"
                className="workshop-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="col-lg-7 col-md-7"
            data-aos="fade-left"
          >
            <div className="workshop-content">

              {/* Subtitle */}
              <div className="workshop-subtitle">
                <span className="workshop-line"></span>
                ABOUT OUR COMPANY
              </div>

              {/* Heading */}
              <h2 className="workshop-heading">
                Quality Kitchen Sinks for Modern Living
              </h2>

              {/* Description */}
              <p className="workshop-description">
                We are a kitchen sink manufacturer offering
                stylish, durable, and functional kitchen sinks
                for modern homes and commercial spaces. Our
                range of stainless steel kitchen sinks is
                designed to complement different kitchen
                interiors while making everyday kitchen
                tasks easier and more convenient.
              </p>

              {/* Highlight */}
              <p className="workshop-highlight">
                From single bowl to double bowl kitchen sinks,
                we focus on quality materials, practical
                designs, and reliable manufacturing to
                deliver products that combine durability
                with modern style.
              </p>

              {/* Features */}
              <ul className="workshop-features">
                {workshopFeatures.map((feature, index) => (
                  <li key={index}>
                    <span className="workshop-check">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a href="/about-us" className="workshop-btn">
                DISCOVER MORE
                <span className="workshop-btn-arrow">
                  →
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
            {/* end - about */}
            {/* mission */}
            <section id="our-mission">
                <div>
                    <div className="container">

                        <div className="row">
                            <div className="mission-text col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-right" data-aos-duration="1500">
                                <h2>Our Vision</h2>
                                <p>To become a trusted name in premium kitchen sink solutions by transforming modern kitchens through innovative designs, superior quality, and lasting durability. We envision creating stylish and functional kitchen spaces that perfectly combine elegance, convenience, and everyday practicality.</p>
                                <p>At Trustl Kitchen Sink, our vision is to set new benchmarks in the kitchen sink industry by consistently offering modern, high-quality products that enhance kitchen aesthetics and simplify daily tasks. We strive to be the preferred choice for homeowners, architects, interior designers, and builders seeking reliable kitchen solutions, exceptional craftsmanship, and excellence in every detail.</p>

                            </div>
                            <div className="vision-text col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-left" data-aos-duration="1500">
                                <h2>Our Mission</h2>
                                <p>Our mission is to deliver premium kitchen sink solutions that combine innovative design, exceptional quality, and long-lasting durability. We are committed to creating stylish, functional, and reliable kitchen sinks that enhance everyday convenience while adding elegance and sophistication to modern kitchen spaces.</p>
                                <p>At Trustl Kitchen Sink, we focus on maintaining high manufacturing standards, using quality materials, and continuously improving our products to meet evolving customer needs. We aim to build lasting relationships with homeowners, architects, interior designers, builders, and dealers by providing dependable kitchen solutions, excellent customer satisfaction, and outstanding value in every product we offer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end mission */}
            {/* our range */}
            <section className="product-range-section">
      <div className="container">
        {/* Section Heading */}
        <div className="product-range-heading">
          <span className="product-range-subtitle">
            OUR PRODUCT RANGE
          </span>

          <h2>Designed for Every Kitchen</h2>

          <p>
            From single bowl to double bowl sinks, explore
            our versatile range crafted for modern homes
            and commercial spaces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-range-grid">
          {productCategories.map((category) => (
            <a
              href={category.link}
              className="product-range-card"
              key={category.id}
            >
              <div className="product-range-image">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />

                <div className="product-range-overlay">
                  <span>Explore Collection →</span>
                </div>
              </div>

              <h3>{category.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
    {/* end mission */}
    {/* discover */}
     <section className="trustl-banner">
      <div className="trustl-banner-overlay"></div>

      <div className="trustl-banner-container">
        <div className="trustl-banner-content">

          <span className="trustl-banner-label">
            LET'S BUILD BETTER KITCHENS
          </span>

          <h1>
            Discover the
            <br />
            Trustl Difference
          </h1>

          <p>
            Explore our premium kitchen sink collection
            and experience quality, design, and
            functionality like never before.
          </p>

          <a href="/products" className="trustl-banner-btn">
            <span>EXPLORE OUR PRODUCTS</span>
            <span className="trustl-banner-arrow">→</span>
          </a>

        </div>
      </div>
    </section>
    {/* end discover */}
   </>
  )
}

export default About
