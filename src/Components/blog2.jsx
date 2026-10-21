import React from 'react'

const blog2 = () => {
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
    </>
  )
}

export default blog2
