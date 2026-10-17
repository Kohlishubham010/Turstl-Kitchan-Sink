import React, { useEffect, useRef } from "react";

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
                                        <a className="btn-solid theme-success" href="./About.jsx">
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
            
            {/* end - about */}
   </>
  )
}

export default About
