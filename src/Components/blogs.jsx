
import React, { useEffect } from "react";
import AOS from "aos";


import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogData = [
  {
    id: 1,
    title: "How to Choose the Right Kitchen Sink for Your Home?",
    image: "/img/blog-1.png",
    link: "/blog1",
    alt: "Modern stainless steel kitchen sink",
    description:
      "Discover useful tips for choosing the perfect kitchen sink based on material, size, design, and everyday functionality.",
  },
  {
    id: 2,
    title:
      "Stainless Steel vs Quartz Kitchen Sinks: Which Is Better?",
    image: "/img/blog-2.png",
    link: "/blog2",
    alt: "Different kitchen sink materials and designs",
    description:
      "Compare stainless steel and quartz kitchen sinks to understand their appearance, maintenance, durability, and benefits.",
  },
  {
    id: 3,
    title:
      "Single Bowl vs Double Bowl Kitchen Sinks: A Complete Guide",
    image: "/img/blog-3.png",
    link: "/blog3",
    alt: "Modern double bowl kitchen sink",
    description:
      "Explore the differences between single bowl and double bowl kitchen sinks to find the best fit for your kitchen.",
  },
];

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <>
      {/* Banner Section */}
      <section className="banner-section py-5">
        <div className="container">
          <div
            id="carouselExampleContent"
            className="carousel slide"
          >
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
                  <h3>Our Blogs</h3>

                  <p className="fg-emphasis-secondary mb-3">
                    Explore our latest blogs for kitchen trends,
                    expert tips, product insights, and inspiring ideas.
                  </p>

                  <div className="learn-more">
                    <a
                      className="btn-solid theme-success"
                      href="/blogs"
                    >
                      Explore Blogs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        className="trustil-why-section"
        id="latest-blogs"
      >
        <div className="container">

          {/* Section Heading */}
          <div
            className="trustil-why-heading"
            data-aos="fade-up"
          >
            <span className="trustil-why-subtitle">
              OUR LATEST BLOGS
            </span>

            <h2>
              Explore Our <span>Latest Articles</span>
            </h2>

            <p>
              Discover expert insights, kitchen sink guides,
              design trends, and practical tips for creating
              beautiful and functional kitchens.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="row g-4">
            {blogData.map((blog, index) => (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 120}
              >
                <div className="trustil-why-card h-100">

                  {/* Blog Image */}
                  <div className="blog-card-image">
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      loading="lazy"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="blog-card-content">

                    <span className="blog-category">
                      KITCHEN SINK GUIDE
                    </span>

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <Link
                      to={blog.link}
                      className="blog-read-more"
                    >
                      Read More
                      <ArrowUpRight size={18} />
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="trustil-why-footer"
            data-aos="fade-up"
          >
            <p>
              Looking for premium kitchen sinks?
            </p>

            <Link
              to="/contact"
              className="trustil-why-btn"
            >
              CONTACT US
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Blogs;
