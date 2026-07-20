import Container from "../layout/Container";
import "./Features.css";

const features = [
  {
    icon: "📊",
    title: "Deep Analytics",
    description:
      "Measure engagement, audience quality and profile performance with AI-powered insights."
  },
  {
    icon: "🤖",
    title: "AI Recommendations",
    description:
      "Receive smart suggestions to improve content strategy and audience growth."
  },
  {
    icon: "⚡",
    title: "Instant Analysis",
    description:
      "Generate detailed profile reports within seconds using our optimized engine."
  },
  {
    icon: "🌎",
    title: "Multi Platform",
    description:
      "Analyze Instagram, YouTube, LinkedIn and X from a single dashboard."
  },
  {
    icon: "📈",
    title: "Growth Tracking",
    description:
      "Monitor posting consistency, engagement trends and audience growth."
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Only publicly available information is analyzed. No login required."
  }
];

function Features() {
  return (
    <section className="features" id="features">

      <Container>

        <div className="features-header">

          <span className="features-badge">
            Powerful Features
          </span>

          <h2>
            Everything You Need
            <br />
            To Analyze Social Profiles
          </h2>

          <p>
            Professional AI-powered tools designed for creators,
            marketers, agencies and businesses.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Features;

