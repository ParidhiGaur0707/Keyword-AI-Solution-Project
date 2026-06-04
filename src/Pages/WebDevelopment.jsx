import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/webdev.css";

function WebDevelopment() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="wd-hero" data-aos="fade-up">

        <div className="wd-left">

          <span>AI Web Development</span>

          <h1>
            Build Smarter Websites
            with AI-Powered Development
          </h1>

          <p>
            We create modern, responsive and
            conversion-focused websites using
            the latest technologies and AI solutions.
          </p>

          <button>
            Start Your Project
          </button>

        </div>

        <div className="wd-right">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Web Development"
          />

        </div>

      </section>

      <section className="wd-intro-bento" data-aos="fade-up">

  <div className="intro-large">

    <span className="section-tag">
      Company Introduction
    </span>

    <h2>
      Creating Future-Ready
      Digital Experiences
    </h2>

    <p>
      We build intelligent websites that combine
      performance, scalability and beautiful design.
      Our solutions help businesses grow faster in
      the digital world.
    </p>

  </div>

  <div className="intro-small">
    <h3>AI Innovation</h3>
    <p>Smart automation and intelligent solutions.</p>
  </div>

  <div className="intro-small">
    <h3>UI/UX Design</h3>
    <p>Modern user-centered experiences.</p>
  </div>

  <div className="intro-small">
    <h3>Performance</h3>
    <p>Fast and optimized websites.</p>
  </div>

  <div className="intro-small">
    <h3>Scalability</h3>
    <p>Built to grow with your business.</p>
  </div>

</section>

<section className="wd-services" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      Our Services
    </span>

    <h2>
      Complete Web Development Solutions
    </h2>

    <p>
      From custom websites to AI-powered platforms,
      we deliver solutions designed for growth.
    </p>

  </div>

  <div className="wd-services-grid">

    <div className="wd-service-card">
      <h3>Custom Website Development</h3>
      <p>
        Fully customized websites tailored to your
        business goals and brand identity.
      </p>
    </div>

    <div className="wd-service-card">
      <h3>AI Website Solutions</h3>
      <p>
        Intelligent automation, chatbots and
        AI-driven user experiences.
      </p>
    </div>

    <div className="wd-service-card">
      <h3>E-commerce Development</h3>
      <p>
        Secure and scalable online stores built
        for higher conversions.
      </p>
    </div>

    <div className="wd-service-card">
      <h3>UI/UX Design</h3>
      <p>
        Beautiful interfaces designed for usability,
        engagement and performance.
      </p>
    </div>

  </div>

</section>

<section className="wd-tech" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      Technologies We Use
    </span>

    <h2>
      Modern Technologies For Powerful Solutions
    </h2>

    <p>
      We use the latest tools and frameworks to build
      scalable, secure and high-performing websites.
    </p>

  </div>

  <div className="tech-container">

    <div className="tech-item">HTML5</div>
    <div className="tech-item">CSS3</div>
    <div className="tech-item">JavaScript</div>
    <div className="tech-item">React JS</div>
    <div className="tech-item">Node JS</div>
    <div className="tech-item">MongoDB</div>
    <div className="tech-item">AI Integration</div>
    <div className="tech-item">Figma</div>

  </div>

</section>

<section className="wd-portfolio" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      Portfolio Showcase
    </span>

    <h2>
      Some Of Our Recent Projects
    </h2>

    <p>
      We have delivered innovative digital solutions
      across multiple industries.
    </p>

  </div>

  <div className="portfolio-grid">

    <div className="portfolio-card">

      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
        alt="Project"
      />

      <div className="portfolio-content">
        <h3>E-Commerce Platform</h3>
        <p>
          Modern online shopping experience.
        </p>
      </div>

    </div>

    <div className="portfolio-card">

      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        alt="Project"
      />

      <div className="portfolio-content">
        <h3>AI Business Dashboard</h3>
        <p>
          Smart analytics and automation.
        </p>
      </div>

    </div>

    <div className="portfolio-card">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Project"
      />

      <div className="portfolio-content">
        <h3>Corporate Website</h3>
        <p>
          Premium business website solution.
        </p>
      </div>

    </div>

  </div>

</section>

<section className="wd-process" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      Development Process
    </span>

    <h2>
      Our Proven Development Workflow
    </h2>

    <p>
      We follow a structured process to ensure
      quality, performance and timely delivery.
    </p>

  </div>

  <div className="process-timeline">

    <div className="process-step">
      <div className="step-circle">1</div>
      <h3>Discovery</h3>
      <p>Understanding goals and requirements.</p>
    </div>

    <div className="process-step">
      <div className="step-circle">2</div>
      <h3>Planning</h3>
      <p>Creating strategy and project roadmap.</p>
    </div>

    <div className="process-step">
      <div className="step-circle">3</div>
      <h3>Development</h3>
      <p>Building scalable digital solutions.</p>
    </div>

    <div className="process-step">
      <div className="step-circle">4</div>
      <h3>Launch</h3>
      <p>Testing, deployment and optimization.</p>
    </div>

  </div>

</section>

<section className="wd-faq" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      FAQ
    </span>

    <h2>
      Frequently Asked Questions
    </h2>

    <p>
      Find answers to common questions about our
      web development services.
    </p>

  </div>

  <div className="faq-container" data-aos="fade-up">

    <div className="faq-item">
      <h3>How long does a website project take?</h3>
      <p>
        Most projects take between 2–8 weeks depending
        on complexity and requirements.
      </p>
    </div>

    <div className="faq-item">
      <h3>Do you provide AI integrations?</h3>
      <p>
        Yes, we can integrate AI chatbots, automation,
        recommendation systems and more.
      </p>
    </div>

    <div className="faq-item">
      <h3>Will my website be mobile responsive?</h3>
      <p>
        Absolutely. Every website is optimized for
        desktop, tablet and mobile devices.
      </p>
    </div>

    <div className="faq-item">
      <h3>Do you offer ongoing support?</h3>
      <p>
        Yes, we provide maintenance, updates and
        technical support after launch.
      </p>
    </div>

  </div>

</section>

<section className="wd-contact" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      Contact Us
    </span>

    <h2>
      Start Your Project With Us
    </h2>

    <p>
      Share your requirements and we will get back to you shortly.
    </p>

  </div>

  <form className="contact-form">

    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <input type="text" placeholder="Phone Number" />

    <textarea placeholder="Your Project Requirements"></textarea>

    <button type="submit">
      Send Message
    </button>

  </form>

</section>

      <Footer />
    </>
  );
}

export default WebDevelopment;