
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Factory,
  Gem,
  Wrench,
  Layers,
  Headset,
  ArrowUpRight,
} from "lucide-react";

const bannerData = [
  {
    id: 1,
    title: "SMART KITCHEN SINKS",
    description:
      "MADE TO MULTI-TASK LIKE YOU DO!",
    image: "/img/banner1.png",
    bgColor: "#001a38",
    buttonText: "Get Started",
    buttonLink: "/contact",
  },
  {
    id: 2,
    title: "LUXURY KITCHEN SINKS",
    description:
      "ONE SINK, ENDLESS POSSIBILITIES!",
    image: "/img/banner2.png",
    bgColor: "#183c50",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 3,
    title: "PREMIUM KITCHEN SINKS",
    description:
      "WHERE SMART INNOVATION MEETS EVERYDAY LUXURY!",
    image: "/img/banner3.png",
    bgColor: "#38415a",
    buttonText: "Explore Now",
    buttonLink: "/about",
  },
];
const shopAreas = [
  {
    id: 1,
    title: "Single Bowl Kitchen Sink",
    image: "/img/mg1.png",
    link: "/toilet-area",
  },
  {
    id: 2,
    title: "Top Mount Kitchen Sink",
    image: "/img/mg2.png",
    link: "/kitchen-area",
  },
  {
    id: 3,
    title: "Quartz Kitchen Sink",
    image: "/img/mg3.png",
    link: "/shower-area",
  },
  {
    id: 4,
    title: "Integrated Kitchen Sink",
    image: "/img/mg4.png",
    link: "/grooming-area",
  },
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
// 4
const sinkCollections = [
  {
    id: 1,
    title: "Smart Kitchen Sinks",
    image: "/img/our-1.png",
    link: "/kitchen",
  },
  {
    id: 2,
    title: "Pressed Steel (Hydraulic) Kitchen Sinks",
    image: "/img/our-2.png",
    link: "/kitchen",
  },
  {
    id: 3,
    title: "Handmade Kitchen Sinks",
    image: "/img/our-3.png",
    link: "/kitchen",
  },
  {
    id: 4,
    title: "Quartz Kitchen Sinks",
    image: "/img/our-4.png",
    link: "/kitchen",
  },
];const KitchenSinks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);}
  // 5
  const workshopFeatures = [
  "Stainless Steel Kitchen Sinks",
  "Modern Sink Designs",
  "Single & Double Bowl Sinks",
  "Premium Quality Materials",
  "Durable & Easy to Maintain",
  "Kitchen Sink Manufacturing",
];
  const features = [
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    description:
      "Our kitchen sinks are made with carefully selected materials for durability and daily use.",
  },
  {
    icon: Factory,
    title: "Manufacturing Expertise",
    description:
      "We focus on reliable manufacturing processes and practical kitchen sink solutions.",
  },
  {
    icon: Gem,
    title: "Modern Sink Designs",
    description:
      "Stylish kitchen sink collections designed for modern and traditional kitchens.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    description:
      "Thoughtfully designed kitchen sinks that make everyday cleaning and care easier.",
  },
  {
    icon: Layers,
    title: "Wide Product Range",
    description:
      "Explore smart, handmade, pressed steel, and quartz kitchen sink collections.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Helping customers choose suitable kitchen sinks according to their requirements.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);
}
// 5
const features1 = [
  "Premium Quality Kitchen Sinks",
  "Modern & Stylish Sink Designs",
  "Stainless Steel Kitchen Sinks",
  "Smart & Handmade Sink Collections",
  "Durable & Easy to Maintain",
  "Wide Range of Kitchen Sink Options",
];
// 6
const blogData = [
  {
    id: 1,
    title: "How to Choose the Right Kitchen Sink for Your Home?",
    image: "/img/blog-1.png",
    link: "/blogs",
    alt: "Modern stainless steel kitchen sink",
  },
  {
    id: 2,
    title: "Stainless Steel vs Quartz Kitchen Sinks: Which Is Better?",
    image: "/img/blog-2.png",
    link: "blogs",
    alt: "Different kitchen sink materials and designs",
  },
  {
    id: 3,
    title: "Single Bowl vs Double Bowl Kitchen Sinks: A Complete Guide",
    image: "/img/blog-3.png",
    link: "blogs",
    alt: "Modern double bowl kitchen sink",
  },
];

const TrustilBlogs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer logic
  }, []);
};
// home
const Home = () => {
  const swiperRef = useRef(null);
   const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  // Blog Scroll Animation
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="home-banner-section">

      <div className="home-banner-header">
        {/* <h2>Explore Our Services</h2> */}
{/* 
        <div className="home-banner-navigation">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous banner"
          >
            &#10094;
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next banner"
          >
            &#10095;
          </button>
        </div> */}
      </div>

   <Swiper
  modules={[Autoplay]}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  initialSlide={0}
  centeredSlides={true}
  slidesPerView={1.12}
  spaceBetween={16}
  loop={false}
  rewind={true}
  speed={850}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  className="home-banner-swiper"
>
  {bannerData.map((banner) => (
    <SwiperSlide key={banner.id}>
      <div
        className="home-banner-card"
        style={{
          backgroundImage: `url("${banner.image}")`,
          backgroundColor: banner.bgColor,
        }}
      >
        <div className="home-banner-content">
          <h2>{banner.title}</h2>
          <p>{banner.description}</p>

          <a href={banner.buttonLink} className="home-banner-btn">
            {banner.buttonText}
          </a>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
    
    <section className="shop-area-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="shop-area-header">
          <h2>Shop By Category</h2>
        </div>

        {/* Area Grid */}
        <div className="shop-area-grid">
          {shopAreas.map((area, index) => (
            <a
              href={area.link}
              key={area.id}
              className="shop-area-card"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
              aria-label={`Explore ${area.title}`}
            >
              {/* Area Image */}
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                className="shop-area-image"
              />

              {/* Overlay */}
              <div className="shop-area-overlay"></div>

              {/* Category Text */}
              <div className="shop-area-card-content">
                <h3>{area.title}</h3>
                <span className="shop-area-arrow" aria-hidden="true">
                  &#8599;
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
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
                src="/img/ab-2.png"
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
    {/* 4 */}
    <section className="sink-collection-section" id="kitchen-sinks">
      <div className="container">

        {/* SECTION HEADING */}
        <div
          className="sink-section-header"
          data-aos="fade-up"
        >
          <h2>Kitchen Sinks</h2>
        </div>

        {/* COLLECTION GRID */}
        <div className="sink-collection-grid">
          {sinkCollections.map((sink, index) => (
            <div
              className="sink-collection-card"
              key={sink.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* IMAGE */}
              <a
                href={sink.link}
                className="sink-collection-image-wrapper"
                aria-label={`View ${sink.title}`}
              >
                <img
                  src={sink.image}
                  alt={sink.title}
                  className="sink-collection-image"
                  loading="lazy"
                />

                <span className="sink-image-overlay">
                  <span className="sink-explore-icon">↗</span>
                </span>
              </a>

              {/* TITLE */}
              <h3 className="sink-collection-title">
                {sink.title}
              </h3>

              {/* BUTTON */}
              <a
                href={sink.link}
                className="sink-collection-btn"
              >
                <span>VIEW COLLECTION</span>
                <span
                  className="sink-btn-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
    {/* 5 */}
     <section className="trustil-why-section" id="why-choose-us">
      <div className="container">

        <div className="trustil-why-heading" data-aos="fade-up">
          <span className="trustil-why-subtitle">
            WHY CHOOSE US
          </span>

          <h2>
            Why Choose <span>TRUSTIL?</span>
          </h2>

          <p>
            Discover quality kitchen sinks that combine
            modern design, durability, and everyday convenience.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
              >
                <div className="trustil-why-card">
                  <div className="trustil-why-card-top">
                    <div className="trustil-why-icon">
                      <Icon size={30} strokeWidth={1.7} />
                    </div>

                    <span className="trustil-why-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="trustil-why-bottom">
                    <span className="trustil-why-card-line"></span>
                    <ArrowUpRight size={21} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trustil-why-footer" data-aos="fade-up">
          <p>Looking for the perfect kitchen sink?</p>

          <a href="/contact-us" className="trustil-why-btn">
            CONTACT US
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
    {/* 6 */}
  <section
  className="trustil-choice-section"
  id="trustil-why-choose"
  style={{
    backgroundImage: "url('/img/back-image.png')",
  }}
>

      <div className="trustil-choice-container">

        <div className="trustil-choice-content">
          
          <div className="trustil-choice-subtitle">
            WHY CHOOSE TRUSTIL
          </div>

          <h2>
            Your Trusted Partner for
            <br />
            Premium Kitchen Sinks
          </h2>

          <p>
            At TRUSTIL, we manufacture high-quality kitchen
            sinks that combine modern designs, durability,
            and functionality. Our collection includes smart,
            handmade, stainless steel, and quartz kitchen sinks.
          </p>

          <p>
            We focus on quality materials, modern manufacturing
            techniques, and practical designs to provide kitchen
            sink solutions for residential and commercial spaces.
          </p>

          <div className="trustil-choice-features">
  {features1.map((feature, index) => (
    <div className="trustil-choice-feature" key={index}>
      <span className="trustil-choice-check">✓</span>
      <span>{feature}</span>
    </div>
  ))}
</div>

        </div>

      </div>

    </section>
    {/* 7 */}
     <section
      ref={sectionRef}
      className={`trustil-blog-section ${
        isVisible ? "trustil-blog-visible" : ""
      }`}
      id="trustil-blogs"
    >
      <div className="trustil-blog-container">

        {/* SECTION HEADING */}
        
        <div className="trustil-blog-heading">
          <span className="trustil-why-subtitle">
              OUR LATEST BLOGS
            </span>

           
          <h2>THE TRUSTIL BLOGS</h2>

          <p>
            Kitchen sink trends, expert tips, and design
            ideas for modern living.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="trustil-blog-grid">
          {blogData.map((blog, index) => (
            <article
              className="trustil-blog-card"
              key={blog.id}
              style={{
                "--blog-delay": `${index * 150}ms`,
              }}
            >

              {/* BLOG IMAGE */}
              <a
                href={blog.link}
                className="trustil-blog-image-link"
                aria-label={`Read ${blog.title}`}
              >
                <img
                  src={blog.image}
                  alt={blog.alt}
                  className="trustil-blog-image"
                  loading="lazy"
                />

                <span
                  className="trustil-blog-image-overlay"
                  aria-hidden="true"
                >
                  <span className="trustil-blog-view-icon">
                    ↗
                  </span>
                </span>
              </a>

              {/* BLOG CONTENT */}
              <div className="trustil-blog-content">
                <h3>
                  <a href={blog.link}>
                    {blog.title}
                  </a>
                </h3>

                <a
                  href={blog.link}
                  className="trustil-blog-readmore"
                >
                  READ MORE
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
    {/* map */}
    <section className="trustil-location-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Find Our Location</h2>
          <p>Visit TRUSTIL Kitchen Sink</p>
        </div>

        <div className="trustil-map-wrapper">
          <iframe
            title="TRUSTIL Kitchen Sink Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111892.84676149093!2d76.89444499726564!3d28.789654199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ece19a65f565aad%3A0x21898cfbce574862!2sTrustl%20Kitchen%20Sink!5e0!3m2!1sen!2sin!4v1792134854136!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
