
import React, { useEffect, useRef, useState } from "react";


const galleryImages = [
  {
    src: "/img/gallery1.png",
    alt: "Stainless steel single bowl kitchen sink",
  },
  {
    src: "/img/gallery2.png",
    alt: "Luxury modern kitchen with undermount sink",
  },
  {
    src: "/img/gallery3.png",
    alt: "Modern black kitchen sink",
  },
  {
    src: "/img/gallery4.png",
    alt: "Double bowl stainless steel sink",
  },
  {
    src: "/img/gallery5.png",
    alt: "Premium workstation kitchen sink",
  },
  {
    src: "/img/gallery6.png",
    alt: "Elegant kitchen sink with gold faucet",
  },
  {
    src: "/img/gallery7.png",
    alt: "Minimalist deep stainless steel sink",
  },
  {
    src: "/img/gallery8.png",
    alt: "Modern modular kitchen with sink",
  },
  {
    src: "/img/gallery9.png",
    alt: "Premium handmade stainless steel sink",
  },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const cards = galleryRef.current?.querySelectorAll(
      ".trustl-gallery__card"
    );

    if (!cards) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Lightbox keyboard navigation and scroll lock
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex(
          (index) => (index + 1) % galleryImages.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex(
          (index) =>
            (index - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  // Next image
  const nextImage = () => {
    setActiveIndex(
      (index) => (index + 1) % galleryImages.length
    );
  };

  // Previous image
  const previousImage = () => {
    setActiveIndex(
      (index) =>
        (index - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <>
      {/* ================= BANNER SECTION ================= */}

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
                  <h3>Our Gallery</h3>

                  <p className="fg-emphasis-secondary mb-3">
                    Explore our gallery of elegant kitchen designs
                    and premium solutions.
                  </p>

                  <div className="learn-more">
                    <a
                      className="btn-solid theme-success"
                      href="/about"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}

      <section
        className="trustl-gallery"
        id="gallery"
        ref={galleryRef}
      >
        <div className="trustl-gallery__container">

          {/* Heading */}
          <div className="trustl-gallery__heading">
            <span className="trustl-gallery__eyebrow">
              THE TRUSTL COLLECTION
            </span>

            <h2>Our Gallery</h2>

            <p>
              Explore our collection of beautifully designed
              kitchen sinks and elegant kitchen spaces.
            </p>
          </div>

          {/* Gallery Images */}
          <div className="trustl-gallery__grid">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                className="trustl-gallery__card"
                style={{ "--card-index": index % 3 }}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View gallery image ${index + 1}: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div className="trustl-gallery__overlay">
                  <span className="trustl-gallery__view">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      width="22"
                      height="22"
                      aria-hidden="true"
                    >
                      <path d="M14 3h7v7M10 21H3v-7M21 3l-8 8M3 21l8-8" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="trustl-gallery__footer">
            <span className="trustl-gallery__line" />

            <p>
              Thoughtfully Designed for Modern Kitchens
            </p>

            <span className="trustl-gallery__line" />
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      {activeIndex !== null && (
        <div
          className="trustl-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveIndex(null);
            }
          }}
        >
          <div
            className="trustl-lightbox__content"
            role="dialog"
            aria-modal="true"
            aria-label="Kitchen sink photo gallery"
          >
            {/* Close Button */}
            <button
              className="trustl-lightbox__close"
              type="button"
              aria-label="Close gallery"
              onClick={() => setActiveIndex(null)}
            >
              &times;
            </button>

            {/* Previous Button */}
            <button
              className="trustl-lightbox__arrow trustl-lightbox__arrow--left"
              type="button"
              aria-label="Previous image"
              onClick={previousImage}
            >
              &#10094;
            </button>

            {/* Full Image */}
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="trustl-lightbox__image"
            />

            {/* Next Button */}
            <button
              className="trustl-lightbox__arrow trustl-lightbox__arrow--right"
              type="button"
              aria-label="Next image"
              onClick={nextImage}
            >
              &#10095;
            </button>

            {/* Image Counter */}
            <div className="trustl-lightbox__counter">
              {activeIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
