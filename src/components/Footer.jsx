import Container from "../layout/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <div className="footer-top">

          <div className="footer-brand">

            <div className="footer-logo">
              📊
            </div>

            <h3>Social Media Analyser</h3>

            <p>
              AI-powered platform for analyzing public social media
              profiles with professional insights, engagement analytics,
              audience intelligence and growth tracking.
            </p>

          </div>

          <div className="footer-links">

            <div className="footer-column">

              <h4>Product</h4>

              <a href="#">Home</a>

              <a href="#features">Features</a>

              <a href="#">Pricing</a>

              <a href="#">API</a>

            </div>

            <div className="footer-column">

              <h4>Resources</h4>

              <a href="#">Documentation</a>

              <a href="#">Blog</a>

              <a href="#">Support</a>

              <a href="#">Roadmap</a>

            </div>

            <div className="footer-column">

              <h4>Company</h4>

              <a href="#">About</a>

              <a href="#">Privacy</a>

              <a href="#">Terms</a>

              <a href="#">Contact</a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 Social Media Analyser.
            All Rights Reserved.

          </p>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;
