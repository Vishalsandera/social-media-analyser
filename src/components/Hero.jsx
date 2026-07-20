import Container from "../layout/Container";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <Container>

        <div className="hero-wrapper">

          <div className="hero-badge">
            ✨ AI Powered Social Media Intelligence
          </div>

          <h1 className="hero-title">
            Understand Any Public
            <br />
            Social Media Profile
            <br />
            with AI
          </h1>

          <p className="hero-description">
            Analyze engagement, audience quality, posting consistency,
            growth trends and content performance across multiple
            social media platforms in seconds.
          </p>

          <div className="hero-form">

            <input
              type="text"
              placeholder="Enter public username..."
            />

            <select>

              <option>Instagram</option>

              <option>YouTube</option>

              <option>LinkedIn</option>

              <option>X (Twitter)</option>

            </select>

            <button className="hero-button">
              🚀 Analyze Profile
            </button>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              ✅ AI Powered
            </div>

            <div className="trust-item">
              🔒 Secure
            </div>

            <div className="trust-item">
              ⚡ Instant Results
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;
