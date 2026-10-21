import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <>
    <footer
      className="hk-footer"
      style={{
        "--hk-footer-background": "url('')",
      }}
    >

      {/* Background */}
      <div className="hk-footer__background"></div>


      <div className="hk-footer__container">

        <div className="hk-footer__grid">


          {/* =========================
              BRAND INFORMATION
          ========================== */}

          <div className="hk-footer__column hk-footer__brand">

            <Link
              to="/"
              className="hk-footer__logo-link"
            >
              <img
                src="./img/logo1.png"
                alt="Om Engineering Works"
                className="hk-footer__logo"
                loading="lazy"
              />
            </Link>


            <p className="hk-footer__description">
             Trustl is committed to delivering superior quality, innovative solutions, and dependable products for everyday needs. With a focus on durability, functionality, and modern design, we strive to provide products that ensure convenience, reliability, and lasting satisfaction for every customer.


            </p>


            {/* SOCIAL MEDIA */}

            <div className="hk-footer__socials">

              <a
                href="https://www.facebook.com/trustlkitchensink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <FaFacebookF />
              </a>


              <a
                href="https://www.instagram.com/trustlkitchensink/?fbclid=IwY2xjawU-rQhleHRuA2FlbQIxMQBwZG9mBHNydGMGYXBwX2lkATAAAR4sLQkOJs0sSvqLrOAfF9_CoSurMZv7TiZjBCTvSwVEJp3Cac0_XLCMUk2hlw_aem__CzFjO2HxxFbG6Jmwnhmeg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label=""
              >
                <FaInstagram />
              </a>

            </div>

          </div>


          {/* =========================
              QUICK LINKS
          ========================== */}

          <div className="hk-footer__column">

            <h3>
              Quick Links
            </h3>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="#">
                  Our Services
                </Link>
              </li>

              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================
              OUR SERVICES
          ========================== */}

          <div className="hk-footer__column">

            <h3>
              Our Services
            </h3>

            <ul>

              <li>
                <Link to="/kitchen">
                  Kitchen Sink
                </Link>
              </li>

              <li>
                <Link to="/taps">
                  Taps
                </Link>
              </li>


              
              

            </ul>

          </div>


          {/* =========================
              CONTACT DETAILS
          ========================== */}

          <div className="hk-footer__column hk-footer__contact">

            <h3>
              Contact Us
            </h3>


            {/* NAME */}

            <a
              href="#"
              className="hk-footer-contact"
              onClick={(e) => e.preventDefault()}
            >

              <span className="hk-footer-contact__icon">
                <FaUserTie />
              </span>

              <span>
                Mr.Pankaj Garg
              </span>

            </a>


            {/* PHONE */}

            <a
              href="tel:+91 9810382066"
              className="hk-footer-contact"
            >

              <span className="hk-footer-contact__icon">
                <FaPhone />
              </span>

              <span>
                +91 9810382066
              </span>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:pankajgarg625@gmail.com"
              className="hk-footer-contact"
            >

              <span className="hk-footer-contact__icon">
                <FaEnvelope />
              </span>

              <span>
                pankajgarg625@gmail.com
              </span>

            </a>


            {/* ADDRESS */}

            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.947356653393!2d77.14370707564979!3d28.750988678691243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01030714d7bf%3A0x7f17639429eccf80!2sOM%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1790751450492!5m2!1sen!2sin"
              className="hk-footer-contact hk-footer-contact--address"
              target="_blank"
              rel="noopener noreferrer"
            >

              <span className="hk-footer-contact__icon">
                <FaLocationDot />
              </span>

              <span>
                
J-238, Sec-1, Bawana Industrial Area, Delhi, India, Delhi
              </span>

            </a>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}

        <div className="hk-footer__bottom">

          <p>
            &copy; {currentYear}
            {" "}
            Trustl. All rights reserved.
          </p>


          <p>
            Designed by{" "}

            <a
              href="https://viraladsmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Viral Ads Media
            </a>

          </p>

        </div>

      </div>

    </footer>
    {/* whatsup */}
   
        <a
      href="https://wa.me/919810382066?text=Hello%20I%20am%20interested%20in%20your%20machines.%20Please%20share%20more%20details."
      className="whatsapp-fixed-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
    </>
  );
};

export default Footer;