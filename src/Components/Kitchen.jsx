
import React, { useState, useEffect } from "react";

const Kitchen = () => {
  // Product Images
  const productImages = [
    "/img/kit-1.png",
    "/img/kit-2.png",
    "/img/kit-3.png",
  ];

  // React States
  const [activeImage, setActiveImage] = useState(0);

  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Mouse Move Zoom
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  };

  // Reset Zoom
  const handleMouseLeave = () => {
    setZoomPosition({ x: 50, y: 50 });
  };

  // Close enlarged image on Escape
  useEffect(() => {
    if (!isZoomOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isZoomOpen]);

  // Kitchen Sink Features
  const features = [
    {
      icon: "✓",
      text: "Stainless Steel Construction",
    },
    {
      icon: "✓",
      text: "Modern and Functional Kitchen Sink Design",
    },
    {
      icon: "✓",
      text: "Easy-to-Clean Surface",
    },
    {
      icon: "✓",
      text: "Suitable for Residential and Commercial Kitchens",
    },
    {
      icon: "✓",
      text: "Available in Different Sizes and Configurations",
    },
  ];

  // WhatsApp Details
  const whatsappNumber = "+919810382066";

  const message = encodeURIComponent(
    "Hello, I am interested in your stainless steel kitchen sinks. Please share product details and pricing."
  );

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
                  <h3>Kitchen Sink</h3>

                  <p className="fg-emphasis-secondary mb-3">
                    Explore our premium kitchen sinks,
                    thoughtfully designed to combine
                    modern style, lasting durability,
                    and everyday functionality.
                  </p>

                  <div className="learn-more">
                    <a
                      className="btn-solid theme-success"
                      href="#kitchen-products"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="kitchen-sink-content-section">
        <div className="container">
          <div className="kitchen-sink-content">
            <h2>
              Trusted Kitchen Sink Manufacturer in India
            </h2>

            <p>
              As a{" "}
              <strong>
                Kitchen Sink Manufacturer in India
              </strong>
              , we offer a wide range of high-quality{" "}
              <strong>stainless steel kitchen sinks</strong>{" "}
              designed for durability, functionality,
              and modern kitchens. Our collection includes{" "}
              <strong>single bowl sinks</strong>,{" "}
              <strong>double bowl sinks</strong>,{" "}
              <strong>workstation sinks</strong>, and{" "}
              <strong>customized kitchen sinks</strong>,
              manufactured with a focus on quality
              craftsmanship, practical design, and
              long-lasting performance for residential
              and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        className="pd-section"
        id="kitchen-products"
      >
        <div className="pd-container">
          <div className="pd-grid">

            {/* Product Gallery */}
            <div className="pd-gallery">
              <div
                className="pd-main-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsZoomOpen(true)}
                title="Click to view larger image"
              >
                <img
                  src={productImages[activeImage]}
                  alt="Stainless Steel Kitchen Sink"
                  style={{
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />

                <span className="pd-zoom-icon">
                  ⌕
                </span>
              </div>

              {/* Thumbnail Gallery */}
              <div className="pd-thumbnails">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`pd-thumbnail ${
                      activeImage === index
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveImage(index);
                      handleMouseLeave();
                    }}
                    aria-label={`View kitchen sink image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Kitchen Sink View ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Content */}
            <div className="pd-content">
              <h2 className="pd-title">
                Premium Stainless Steel Kitchen Sink
              </h2>

              <div className="pd-category">
                <strong>Category:</strong>{" "}
                <span>Kitchen Sinks</span>
              </div>

              <p className="pd-description">
                Discover our range of{" "}
                <strong>
                  stainless steel kitchen sinks
                </strong>
                , designed to bring style and
                everyday convenience to modern kitchens.
                Explore practical sink configurations
                suitable for residential and commercial
                applications, including single bowl,
                double bowl, and workstation designs.
              </p>

              {/* Features */}
              <div className="pd-features">
                {features.map((feature, index) => (
                  <div
                    className="pd-feature"
                    key={index}
                  >
                    <span className="pd-feature-icon">
                      {feature.icon}
                    </span>

                    <span className="pd-feature-text">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Inquiry Button */}
              <div className="pd-actions">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-inquiry-btn"
                >
                  INQUIRY NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Image */}
        {isZoomOpen && (
          <div
            className="pd-lightbox"
            onClick={() => setIsZoomOpen(false)}
            role="presentation"
          >
            <button
              type="button"
              className="pd-lightbox-close"
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={productImages[activeImage]}
              alt="Kitchen Sink Enlarged View"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Kitchen;
