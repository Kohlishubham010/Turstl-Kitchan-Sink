
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


// ======================================
// ANNOUNCEMENT SLIDER DATA
// ======================================

const announcements = [
    "HIGH-QUALITY PLASTIC EXTRUSION MACHINES AT COMPETITIVE PRICES",
    "EXPLORE OUR PVC BRAIDED HOSE PIPE PLANTS & HIGH SPEED MIXERS",
    "CONTACT US FOR MACHINE DETAILS & BULK ENQUIRIES",
    "CALL +91 9810382066 FOR PRODUCT INFORMATION & QUOTATIONS",
];

// ======================================
// PRODUCTS DATA
// ======================================

const products = [
    {
        name: "Kitchen Sink",
        path: "/kitchen",
    },
    {
        name: "Taps",
        path: "/taps",
    },
];

// ======================================
// ANNOUNCEMENT BAR COMPONENT
// ======================================

const AnnouncementBar = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const slider = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % announcements.length);
        }, 4000);

        return () => clearInterval(slider);
    }, [isPaused]);

    return (
        <div
            className="oe-announcement"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Company announcements"
        >
            <div className="oe-announcement-container">
                <span className="oe-announcement-decor">✦</span>

                <div className="oe-announcement-window">
                    <div
                        className="oe-announcement-track"
                        style={{
                            transform: `translateY(-${activeSlide * 100}%)`,
                        }}
                    >
                        {announcements.map((offer, index) => (
                            <div className="oe-announcement-slide" key={index}>
                                {offer}
                            </div>
                        ))}
                    </div>
                </div>

                <span className="oe-announcement-decor">✦</span>
            </div>

            <div className="oe-announcement-dots">
                {announcements.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`oe-announcement-dot ${activeSlide === index ? "active" : ""
                            }`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show announcement ${index + 1}`}
                        aria-current={activeSlide === index ? "true" : undefined}
                    />
                ))}
            </div>
        </div>
    );
};

// ======================================
// MAIN NAVBAR
// ======================================

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setProductOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setProductOpen(false);
    };

    // Close menu on Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <>
            <AnnouncementBar />

            <header className="oe-header">
                <nav className="oe-navbar" aria-label="Main navigation">
                    <div className="oe-navbar-container">

                        {/* LOGO */}
                        <Link
                            to="/"
                            className="oe-navbar-logo"
                            onClick={closeMenu}
                        >
                            <img
                                src="/img/logo.png"
                                alt="OM Engineering Works"
                            />
                        </Link>

                        {/* MOBILE TOGGLE */}
                        <button
                            className={`oe-menu-toggle ${menuOpen ? "active" : ""
                                }`}
                            type="button"
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="oe-main-menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/* MAIN MENU */}
                        <div
                            id="oe-main-menu"
                            className={`oe-navbar-menu ${menuOpen ? "show" : ""
                                }`}
                        >
                            <ul className="oe-nav-links">

                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `oe-nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `oe-nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>

                                {/* PRODUCT DROPDOWN */}
                                <li
                                    className={`oe-products-menu ${productOpen ? "open" : ""
                                        }`}
                                    onMouseEnter={() => {
                                        if (window.matchMedia("(min-width: 993px)").matches) {
                                            setProductOpen(true);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (window.matchMedia("(min-width: 993px)").matches) {
                                            setProductOpen(false);
                                        }
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="oe-nav-link oe-product-button"
                                        onClick={() => setProductOpen((prev) => !prev)}
                                        aria-expanded={productOpen}
                                        aria-controls="oe-products-dropdown"
                                    >
                                        Products
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`oe-dropdown-arrow ${productOpen ? "rotate" : ""
                                                }`}
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    <ul
                                        id="oe-products-dropdown"
                                        className={`oe-products-dropdown ${productOpen ? "show" : ""
                                            }`}
                                    >
                                        {products.map((product) => (
                                            <li key={product.path}>
                                                <NavLink
                                                    to={product.path}
                                                    onClick={closeMenu}
                                                >
                                                    <span className="oe-product-arrow">↗</span>
                                                    {product.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li>
                                    <NavLink
                                        to="/gallery"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `oe-nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        Gallery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blogs"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `oe-nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `oe-nav-link ${isActive ? "active" : ""}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                            {/* RIGHT SIDE */}
                            <div className="oe-navbar-actions">
                                <a
                                    href="tel:+91 +919810382066"
                                    className="oe-phone"
                                >
                                    <span className="oe-phone-icon">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.68 2.81a2 2 0 0 1-.45 2.11L9.03 10.9a16 16 0 0 0 4.07 4.07l1.27-1.28a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.68A2 2 0 0 1 22 16.92Z" />
                                        </svg>
                                    </span>
                                    <span> +91 9810382066</span>
                                </a>

                                <Link
                                    to="/contact"
                                    className="oe-contact-btn"
                                    onClick={closeMenu}
                                >
                                    Get a Quote
                                    <span aria-hidden="true">↗</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
