
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  UserRound,
  List,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
    const [activeIndex, setActiveIndex] = useState(0);

const toggleFAQ = (index) => {
  setActiveIndex((prevIndex) =>
    prevIndex === index ? null : index
  );
};
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setResult("");
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "40475044-a8e8-41cc-a7a1-b5661b60963a");
    formData.append("subject", `New Kitchen Enquiry - ${form.enquiry}`);
    formData.append("from_name", "Trustl Kitchen Contact Form");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        setForm({ name: "", phone: "", email: "", enquiry: "", message: "" });
      } else {
        setResult(data.message || "Message could not be sent. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Your Address, City, Postal Code",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@yourbrand.com",
      link: "mailto:info@yourbrand.com",
    },
    {
      icon: Clock3,
      title: "Working Hours",
      value: "Mon - Sat: 10:00 AM - 7:00 PM",
      secondary: "Sunday: Closed",
    },
  ];
// faq
const faqs = [
  {
    question: "What types of kitchen sinks does TRUSTIL offer?",
    answer:
      "Explore our range of premium kitchen sink solutions designed for modern kitchens. Contact our team to learn more about available models, sizes, finishes, and features.",
  },
  {
    question: "How do I choose the right kitchen sink?",
    answer:
      "Consider your kitchen size, countertop space, daily usage, preferred design, and installation requirements. Our team can guide you in selecting a suitable kitchen sink.",
  },
  {
    question: "How can I enquire about kitchen sink prices?",
    answer:
      "You can contact our team through the enquiry form, email, or phone. Share your preferred sink model and requirements to request current pricing and product details.",
  },
  {
    question: "Do you provide kitchen sink installation guidance?",
    answer:
      "You can contact our team for product specifications and installation-related information. Confirm any installation support or service availability directly with us.",
  },
  {
    question: "How can I contact TRUSTIL for product enquiries?",
    answer:
      "Visit our Contact Us page, fill out the enquiry form, or reach out using our business phone number or email address. Our team will help you with your questions.",
  },
];

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
                                    <h3>Contact Us</h3>

                                    <p className="fg-emphasis-secondary mb-3">
                                        Looking for premium kitchen solutions? Our experts are just a message away.
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
            {/* contact */}
             <section className="premium-contact-section">
      <div className="premium-contact-overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* LEFT SIDE - CONTACT DETAILS */}
          <div className="col-lg-6">
            <div className="contact-left-content">

              <div className="contact-small-title">
                CONTACT US
                <span className="contact-title-line"></span>
              </div>

              <h2 className="contact-main-heading">
                Get in <span>Touch</span>
              </h2>

              <p className="contact-main-description">
                Looking for premium kitchen solutions?
                Our experts are just a message away.
              </p>

              <div className="row g-3">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="col-sm-6" key={index}>
                      <div className="contact-detail-card">

                        <div className="contact-card-icon">
                          <Icon size={26} />
                        </div>

                        <div className="contact-card-info">
                          <h4>{item.title}</h4>

                          {item.link ? (
                            <a href={item.link}>
                              {item.value}
                            </a>
                          ) : (
                            <p>{item.value}</p>
                          )}

                          {item.secondary && (
                            <p>{item.secondary}</p>
                          )}
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="col-lg-6">
            <div className="contact-form-card">

              <h3 className="contact-form-heading">
                Send Us a <span>Message</span>
              </h3>

              <p className="contact-form-subheading">
                Have a question or a project in mind?
                Fill out the form and our team will
                get back to you.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <UserRound size={21} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        aria-label="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="premium-input-group">
                      <Phone size={21} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="premium-input-group">
                      <Mail size={21} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="premium-input-group">
                      <List size={21} />
                      <select
                        name="enquiry"
                        aria-label="Enquiry Type"
                        value={form.enquiry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select Enquiry Type
                        </option>
                        <option value="Kitchen Sink">
                          Kitchen Sink
                        </option>
                        <option value="Kitchen Faucet">
                          Kitchen Taps
                        </option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="premium-input-group premium-textarea">
                      <MessageSquare size={21} />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        aria-label="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="premium-submit-btn"
                       disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={23} />
                    </button>
                  </div>

                </div>
              </form>
               {result && (
                 <p role="status" aria-live="polite" className="mt-3"
                    style={{ color: result.startsWith("Thank you") ? "#167d41" : "#b42318" }}>
                   {result}
                 </p>
               )}


            </div>
          </div>

        </div>
      </div>
    </section>
            {/* end contact */}
            {/* faq */}
            <section className="trustil-faq-section py-5">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="trustil-faq-heading text-center">
          <span className="trustil-faq-label">
            HAVE QUESTIONS?
          </span>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Find answers to common questions about our
            premium kitchen sink solutions.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="trustil-faq-container">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`trustil-faq-item ${
                  isOpen ? "active" : ""
                }`}
              >
                <h3 className="trustil-faq-question-heading">
                  <button
                    type="button"
                    className="trustil-faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="trustil-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="trustil-faq-question-text">
                      {faq.question}
                    </span>

                    <span className="trustil-faq-icon">
                      {isOpen ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  className="trustil-faq-answer-wrapper"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <div className="trustil-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
            {/* end faq */}
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
    )
}

export default Contact
