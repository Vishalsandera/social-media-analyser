import DashboardLayout from "../components/dashboard/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SearchPanel from "../components/dashboard/SearchPanel";
import AnalyticsCards from "../components/dashboard/AnalyticsCards";
import AIInsights from "../components/dashboard/AIInsights";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard />
      <SearchPanel />
      <AnalyticsCards />
      <AIInsights />
    </DashboardLayout>
  );
}

export default Dashboard;
