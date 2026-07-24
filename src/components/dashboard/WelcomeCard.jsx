import "./WelcomeCard.css";

function WelcomeCard() {
  return (
    <section className="welcome-card">

      <div className="welcome-content">

        <span className="welcome-badge">
          AI Powered Analytics
        </span>

        <h2>
          Welcome Back 👋
        </h2>

        <p>
          Analyze public social media profiles with advanced AI insights,
          engagement metrics, growth tracking and performance reports.
        </p>

        <div className="welcome-actions">

          <button className="primary-btn">
            Analyze Profile
          </button>

          <button className="secondary-btn">
            View Demo
          </button>

        </div>

      </div>

      <div className="welcome-score">

        <div className="score-circle">

          <span>98</span>

        </div>

        <h3>AI Score</h3>

        <p>
          Platform Ready
        </p>

      </div>

    </section>
  );
}

export default WelcomeCard;
