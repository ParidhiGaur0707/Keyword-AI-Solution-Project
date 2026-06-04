import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/marketing.css";

function DigitalMarketing() {
  return (
    <>
      <Navbar />

      <section className="marketing-hero" data-aos="fade-up">
        <div className="marketing-left">

          <span>AI Digital Marketing</span>

          <h1>
            Accelerate Business Growth Through
            AI-Powered Marketing
          </h1>

          <p>
            SEO, Content Marketing,
            Social Media Marketing and
            Lead Generation Solutions.
          </p>

          <button>
            Get Free Consultation
          </button>

        </div>

        <div className="marketing-right">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Marketing"
          />

        </div>
      </section>

      <section className="dm-story" data-aos="fade-up">

  <div className="dm-story-content">

    <span>About Our Agency</span>

    <h2>
      We Build AI-Powered Marketing Systems
    </h2>

    <p>
      We help businesses grow using intelligent marketing,
      automation, and data-driven strategies that increase
      conversions and brand visibility.
    </p>

  </div>

  <div className="dm-highlights">

    <div className="dm-highlight">
      <h3>+120%</h3>
      <p>Average Growth</p>
    </div>

    <div className="dm-highlight">
      <h3>50+</h3>
      <p>Active Clients</p>
    </div>

    <div className="dm-highlight">
      <h3>AI</h3>
      <p>Powered Campaigns</p>
    </div>

  </div>

</section>

<section className="dm-services" data-aos="fade-up">

  <div className="section-header">

    <span className="section-tag">
      AI Marketing Services
    </span>

    <h2>
      Complete Growth Solutions
    </h2>

  </div>

  <div className="dm-service-grid">

    <div className="dm-service-card">
      <h3>AI SEO Services</h3>

      <p>
        Smart keyword research,
        optimization and ranking
        improvements powered by AI.
      </p>
    </div>

    <div className="dm-service-card">
      <h3>AI Content Marketing</h3>

      <p>
        High-converting content strategies
        backed by data and audience insights.
      </p>
    </div>

    <div className="dm-service-card">
      <h3>AI Social Media Marketing</h3>

      <p>
        Automated campaigns and engagement
        strategies for maximum reach.
      </p>
    </div>

    <div className="dm-service-card">
      <h3>AI Lead Generation</h3>

      <p>
        Generate qualified leads using
        predictive targeting and automation.
      </p>
    </div>

  </div>

</section>
<section className="dm-why" data-aos="fade-up">

  <div className="section-header">
    <span className="section-tag">Why Choose Us</span>
    <h2>Why Businesses Trust Us</h2>
  </div>

  <div className="dm-why-grid">

    <div className="why-box">
      <h3>AI-Powered Insights</h3>
      <p>Data-driven strategies for maximum ROI.</p>
    </div>

    <div className="why-box">
      <h3>Experienced Team</h3>
      <p>Experts in marketing, SEO and automation.</p>
    </div>

    <div className="why-box">
      <h3>Result Focused</h3>
      <p>Every campaign is optimized for growth.</p>
    </div>

    <div className="why-box">
      <h3>Dedicated Support</h3>
      <p>Continuous guidance and communication.</p>
    </div>

  </div>

</section>
<section className="dm-process" data-aos="fade-up">

  <div className="section-header">
    <span className="section-tag">Our Process</span>
    <h2>How We Work</h2>
  </div>

  <div className="process-grid">

    <div className="process-box">
      <span>01</span>
      <h3>Research</h3>
      <p>Understanding business goals.</p>
    </div>

    <div className="process-box">
      <span>02</span>
      <h3>Strategy</h3>
      <p>Building a growth roadmap.</p>
    </div>

    <div className="process-box">
      <span>03</span>
      <h3>Execution</h3>
      <p>Launching campaigns effectively.</p>
    </div>

    <div className="process-box">
      <span>04</span>
      <h3>Optimization</h3>
      <p>Improving performance continuously.</p>
    </div>

  </div>

</section>
<section className="testimonials" data-aos="fade-up">

        <div className="section-header">
            <span className="section-tag">
                Testimonials
            </span>

            <h2>
                What Our Clients Say
            </h2>

            <p>
                Trusted by businesses looking for
                growth through AI-powered solutions.
            </p>
        </div>

        <div className="testimonial-grid">

            <div className="testimonial-card">
                <div className="stars">★★★★★</div>

                <p>
                    Keyword AI Solutions transformed our
                    online presence and helped us generate
                    quality leads consistently.
                </p>

                <h4>Rahul Sharma</h4>
                <span>Business Owner</span>
            </div>

            <div className="testimonial-card">
                <div className="stars">★★★★★</div>

                <p>
                    Their AI marketing strategy increased
                    our website traffic and improved
                    conversions significantly.
                </p>

                <h4>Priya Verma</h4>
                <span>Marketing Manager</span>
            </div>

            <div className="testimonial-card">
                <div className="stars">★★★★★</div>

                <p>
                    Professional team, creative solutions
                    and excellent communication throughout
                    the project.
                </p>

                <h4>Amit Singh</h4>
                <span>Startup Founder</span>
            </div>

        </div>

    </section>
<section className="cta-section" data-aos="fade-up">

        <div className="cta-content">

            <h2>
                Ready to Grow Your Business
                with AI-Powered Solutions?
            </h2>

            <p>
                Let's discuss your goals and create a
                strategy that drives measurable results.
            </p>

            <button className="cta-btn">
                Get Free Consultation
            </button>

        </div>

    </section>

      <Footer />
    </>
  );
}

export default DigitalMarketing;