import "./AnalyticsCards.css";

import {
  Users,
  Heart,
  TrendingUp,
  Bot
} from "lucide-react";

const analyticsData = [
  {
    id: 1,
    title: "Followers",
    value: "658M",
    change: "+12.8%",
    description: "Compared to last month",
    icon: Users,
    positive: true
  },
  {
    id: 2,
    title: "Engagement",
    value: "4.87%",
    change: "+0.42%",
    description: "Average engagement rate",
    icon: Heart,
    positive: true
  },
  {
    id: 3,
    title: "Growth",
    value: "18.2%",
    change: "+3.6%",
    description: "Audience growth",
    icon: TrendingUp,
    positive: true
  },
  {
    id: 4,
    title: "AI Rating",
    value: "98/100",
    change: "Excellent",
    description: "AI profile score",
    icon: Bot,
    positive: true
  }
];

function AnalyticsCards() {

  return (

    <section className="analytics-section">

      <div className="section-heading">

        <h2>Analytics Overview</h2>

        <p>
          Real-time social media performance overview
        </p>

      </div>

      <div className="analytics-grid">

        {analyticsData.map((item) => {

          const Icon = item.icon;

          return (

            <article
              key={item.id}
              className="analytics-card"
            >

              <div className="card-top">

                <div className="card-icon">

                  <Icon
                    size={26}
                    strokeWidth={2.2}
                  />

                </div>

                <span
                  className={
                    item.positive
                      ? "status positive"
                      : "status negative"
                  }
                >
                  {item.change}
                </span>

              </div>

              <div className="card-body">

                <h4>{item.title}</h4>

                <h2>{item.value}</h2>

                <p>{item.description}</p>

              </div>

            </article>

          );

        })}

      </div>

    </section>

  );

}

export default AnalyticsCards;
