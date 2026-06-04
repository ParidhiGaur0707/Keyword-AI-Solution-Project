import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>Keyword AI Solutions</h3>

          <p>
            Helping businesses grow through
            AI-powered marketing and web
            development solutions.
          </p>
        </div>

        <div>
          <h4>Services</h4>

          <p>AI SEO</p>
          <p>Content Marketing</p>
          <p>Lead Generation</p>
          <p>Web Development</p>
        </div>

        <div>
          <h4>Contact</h4>

          <p>info@keywordai.com</p>
          <p>+91 XXXXX XXXXX</p>
          <p>India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Keyword AI Solutions.
        All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;