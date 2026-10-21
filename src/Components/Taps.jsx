
import React, { useState, useEffect } from "react";

const Taps = () => {
  // Product Images
  const productImages = [
    "/img/tab-1.png",
    "/img/tab-2.png",
    "/img/tab-3.png",
  ];

  // States
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

  // Mouse Leave
  const handleMouseLeave = () => {
    setZoomPosition({ x: 50, y: 50 });
  };

  // Close popup using Escape key
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

  // Kitchen Tap Features
  const features = [
    {
      icon: "✓",
      text: "Durable Construction for Everyday Kitchen Use",
    },
    {
      icon: "✓",
      text: "Modern and Elegant Kitchen Tap Design",
    },
    {
      icon: "✓",
      text: "Convenient Water Flow Control",
    },
    {
      icon: "✓",
      text: "Suitable for Residential and Commercial Kitchens",
    },
    {
      icon: "✓",
      text: "Available in Different Styles and Finishes",
    },
  ];

  // WhatsApp Details
  const whatsappNumber = "+919810382066";

  const message = encodeURIComponent(
    "Hello, I am interested in your premium kitchen taps. Please share product details and pricing."
  );

  return (
    <>
      {/* Banner */}
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
                  <h3>Kitchen Taps</h3>

                  <p className="fg-emphasis-secondary mb-3">
                    Explore our premium kitchen taps,
                    thoughtfully designed to combine modern
                    style, lasting durability, and effortless
                    functionality.
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
              Trusted Kitchen Tap Manufacturer in India
            </h2>

            <p>
              As a{" "}
              <strong>
                Kitchen Tap Manufacturer in India
              </strong>
              , we offer a wide range of premium{" "}
              <strong>kitchen taps and faucets</strong>{" "}
              designed to enhance modern kitchens with
              style, durability, and everyday functionality.
              Our collection includes single-lever kitchen
              taps, sink mixer taps, and contemporary kitchen
              faucet designs, developed with a focus on
              quality craftsmanship, convenient operation,
              and long-lasting performance for residential
              and commercial kitchen applications.
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
            {/* Left Product Gallery */}
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
                  alt="Premium Kitchen Tap"
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
                      activeImage === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveImage(index);
                      handleMouseLeave();
                    }}
                    aria-label={`View kitchen tap image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Kitchen Tap View ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Product Content */}
            <div className="pd-content">
              <h2 className="pd-title">
                Premium Kitchen Taps
              </h2>

              <div className="pd-category">
                <strong>Category:</strong>{" "}
                <span>Kitchen Taps</span>
              </div>

              <p className="pd-description">
                Discover our collection of{" "}
                <strong>premium kitchen taps</strong>,
                thoughtfully designed to bring modern
                elegance, reliable functionality, and
                everyday convenience to your kitchen.
                Our kitchen faucets are available in
                a variety of designs and finishes to
                complement contemporary residential
                and commercial kitchen spaces.
              </p>

              {/* Product Features */}
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

        {/* Fullscreen Image Preview */}
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
              alt="Kitchen Tap Enlarged View"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Taps;
