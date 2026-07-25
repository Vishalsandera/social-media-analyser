import "./AIInsights.css";

import {
  BrainCircuit,
  Clock3,
  Sparkles,
  Users,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Best Posting Time",
    value: "7:30 PM – 9:00 PM",
    description:
      "Your audience is most active during this time window.",
    icon: Clock3
  },

  {
    id: 2,
    title: "Engagement Prediction",
    value: "87%",
    description:
      "Expected engagement rate based on recent profile performance.",
    icon: TrendingUp
  },

  {
    id: 3,
    title: "Audience Quality",
    value: "94%",
    description:
      "Your audience quality is healthy with strong interaction signals.",
    icon: Users
  },

  {
    id: 4,
    title: "Profile Health",
    value: "Excellent",
    description:
      "No suspicious activity detected. Your profile looks authentic.",
    icon: ShieldCheck
  }
];

const recommendations = [
  "Publish 4–5 Reels every week.",
  "Use carousel posts on Tuesday and Friday.",
  "Reply to comments within the first hour.",
  "Maintain consistent posting schedule.",
  "Use trending audio with niche-specific hashtags."
];

function AIInsights() {
  return (
    <section className="ai-section">

      <div className="section-heading">

        <h2>AI Insights</h2>

        <p>
          Personalized recommendations generated from profile behaviour,
          engagement patterns and audience analytics.
        </p>

      </div>

      <div className="ai-grid">

        {/* LEFT PANEL */}

        <div className="ai-main-card">

          <div className="ai-header">

            <div className="ai-logo">

              <BrainCircuit size={28} strokeWidth={2.2} />

            </div>

            <div>

              <h3>AI Recommendation Engine</h3>

              <span>
                Smart analysis powered by AI
              </span>

            </div>

          </div>

          <div className="recommendation-list">

            {recommendations.map((item, index) => (

              <div
                className="recommendation-item"
                key={index}
              >

                <Sparkles
                  size={18}
                  strokeWidth={2.3}
                />

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="insight-grid">

          {insights.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.id}
                className="insight-card"
              >

                <div className="insight-icon">

                  <Icon
                    size={24}
                    strokeWidth={2.2}
                  />

                </div>

                <h4>{item.title}</h4>

                <h2>{item.value}</h2>

                <p>{item.description}</p>

              </article>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default AIInsights;
