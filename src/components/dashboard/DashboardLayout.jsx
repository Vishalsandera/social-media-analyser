import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard">

      <aside className="dashboard-sidebar">

        <div className="sidebar-logo">

          <div className="logo-box">
            📊
          </div>

          <div>
            <h2>Analyzer</h2>
            <span>AI Dashboard</span>
          </div>

        </div>

        <nav className="sidebar-nav">

          <button className="nav-item active">
            📈 Dashboard
          </button>

          <button className="nav-item">
            📊 Reports
          </button>

          <button className="nav-item">
            🤖 AI Insights
          </button>

          <button className="nav-item">
            ⚙ Settings
          </button>

        </nav>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <h1>Dashboard</h1>

            <p>
              AI powered social media analytics
            </p>

          </div>

          <button className="profile-button">
            👤 Profile
          </button>

        </header>

        <section className="dashboard-content">
          {children}
        </section>

      </main>

    </div>
  );
}

export default DashboardLayout;
