import "./SearchPanel.css";

import {
  Search,
  Lock,
  CheckCircle2,
  Sparkles
} from "lucide-react";

import {
  SiInstagram,
  SiYoutube,
  SiX
} from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function SearchPanel() {
  return (
    <section className="search-panel">

      <div className="search-left">

        <div className="panel-title">

          <h2>Analyze Social Profile</h2>

          <p>
            Enter a public username to generate an AI-powered profile report,
            engagement analysis and growth recommendations.
          </p>

        </div>

        <form className="analysis-form">

          <div className="form-group">

            <label>Username</label>

            <div className="input-wrapper">

              <Search size={20} />

              <input
                type="text"
                placeholder="Enter public username"
              />

            </div>

          </div>

          <div className="form-group">

            <label>Platform</label>

            <select>

              <option>Instagram</option>

              <option>YouTube</option>

              <option>X (Twitter)</option>

              <option>LinkedIn</option>

            </select>

          </div>

          <button
            className="analyze-btn"
            type="button"
          >
            Analyze Profile
          </button>

        </form>

      </div>

      {/* RIGHT PANEL */}

      <div className="search-right">

        <div className="info-card">

          <div className="info-title">

            <Sparkles size={22} />

            <h3>Supported Platforms</h3>

          </div>

          <div className="platform-list">

            <div className="platform-item">
              ‎<SiInstagram size={18} />
              <span>Instagram</span>
            </div>

            <div className="platform-item">
              ‎<SiYoutube size={18} />
              <span>YouTube</span>
            </div>

            <div className="platform-item">
              ‎<SiX size={18} />
              <span>X (Twitter)</span>
            </div>

            <div className="platform-item">
              ‎<FaLinkedinIn size={18} />
              <span>LinkedIn</span>
            </div>

          </div>

        </div>

        <div className="info-card">

          <div className="info-title">

            <CheckCircle2 size={22} />

            <h3>AI Analysis Includes</h3>

          </div>

          <ul className="feature-list">

            <li>Engagement Analysis</li>

            <li>Growth Tracking</li>

            <li>Audience Quality</li>

            <li>Content Performance</li>

            <li>AI Recommendations</li>

            <li>Profile Health Score</li>

          </ul>

        </div>

        <div className="privacy-card">

          <div className="privacy-title">

            <Lock size={20} />

            <span>Privacy First</span>

          </div>

          <p>
            We do not permanently store analyzed usernames.
            Analysis is processed securely and future versions
            will follow our privacy policy.
          </p>

        </div>

      </div>

    </section>
  );
}

export default SearchPanel;
