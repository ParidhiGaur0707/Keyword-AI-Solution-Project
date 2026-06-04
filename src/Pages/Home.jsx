import Navbar from "../components/Navbar";
import "../styles/home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero" data-aos="fade-up">
        <div className="hero-left">
          <h1>
            AI Powered Digital Growth &
            Smart Web Solutions
          </h1>

          <p>
            Transform your business with AI-driven marketing,
            lead generation and custom web development.
          </p>

          <button>
            Get Started
          </button>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI"
          />
        </div>
      </section>

      <section className="about" data-aos="fade-up">
        <div className="about-left">
            <span className="section-tag">About Us</span>

            <h2>
                Empowering Businesses Through
                AI & Digital Innovation
            </h2>

            <p>
                Keyword AI Solutions helps businesses grow
                through AI-powered digital marketing,
                intelligent automation, lead generation,
                and custom web development solutions.
            </p>

            <p>
                Our mission is to combine creativity,
                technology, and data-driven strategies
                to deliver measurable business growth.
            </p>
        </div>

        <div className="about-right">
            <div className="about-card">
                <h3>100+</h3>
                <p>Projects Delivered</p>
            </div>

        <div className="about-card">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
        </div>

        <div className="about-card">
            <h3>24/7</h3>
            <p>Support Available</p>
        </div>
    </div>
    </section>
    <section className="services" data-aos="fade-up">

        <div className="section-header">
            <span className="section-tag">
                Our Services
            </span>

            <h2>
                AI-Powered Marketing Solutions
            </h2>

            <p>
                Smart strategies designed to increase
                visibility, engagement and conversions.
            </p>
        </div>

        <div className="service-grid">

            <div className="service-card">
                <h3>AI SEO Services</h3>

                <p>
                    Improve rankings with AI-driven keyword
                    research and optimization.
                </p>

                <button>Learn More</button>
            </div>

            <div className="service-card">
                <h3>AI Content Marketing</h3>

                <p>
                    Generate engaging content powered
                    by data and artificial intelligence.
                </p>

                <button>Learn More</button>
            </div>

            <div className="service-card">
                <h3>AI Social Media Marketing</h3>

                <p>
                    Boost engagement using intelligent
                    campaign management strategies.
                </p>

                <button>Learn More</button>
            </div>

            <div className="service-card">
            <h3>AI Lead Generation</h3>

            <p>
                Capture high-quality leads through
                automation and predictive targeting.
            </p>

            <button>Learn More</button>
        </div>

    </div>

    </section>
    <section className="why-us" data-aos="fade-up">

        <div className="section-header">
            <span className="section-tag">
                Why Choose Us
            </span>

            <h2>
                Delivering Results Through
                Innovation & Intelligence
            </h2>
        </div>

        <div className="why-grid">

            <div className="why-card">
                <h3>AI-Driven Strategy</h3>
                <p>
                    We use AI-powered insights to maximize
                    growth and marketing performance.
                </p>
            </div>

            <div className="why-card">
                <h3>Expert Team</h3>
                <p>
                    Skilled marketers, designers and
                    developers working together.
                </p>
            </div>

            <div className="why-card">
                <h3>Measurable Results</h3>
                <p>
                    Every campaign is tracked and optimized
                    for higher ROI.
                </p>
            </div>

            <div className="why-card">
                <h3>Dedicated Support</h3>
                <p>
                    Fast communication and continuous
                    project support.
                </p>
            </div>

        </div>

    </section>
    <section className="process" data-aos="fade-up">

        <div className="section-header">
            <span className="section-tag">
                Our Process
            </span>

            <h2>
                How We Deliver Success
            </h2>

            <p>
                A structured approach that transforms
                ideas into measurable business growth.
            </p>
        </div>

        <div className="process-container">

            <div className="process-step">
                <div className="step-number">01</div>
                <h3>Discovery</h3>
                <p>
                    Understanding your goals,
                    audience and business needs.
                </p>
            </div>

            <div className="process-step">
                <div className="step-number">02</div>
                <h3>Strategy</h3>
            <p>
                Creating a customized
                AI-powered growth plan.
            </p>
        </div>

        <div className="process-step">
            <div className="step-number">03</div>
                <h3>Execution</h3>
                <p>
                    Implementing campaigns,
                    websites and automation.
                </p>
            </div>

            <div className="process-step">
                <div className="step-number">04</div>
                <h3>Growth</h3>
                <p>
                    Monitoring performance and
                    continuously optimizing.
                </p>
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

export default Home;