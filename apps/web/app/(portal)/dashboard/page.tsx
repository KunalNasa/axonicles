import DashboardHeader from "../../../components/dashboardcomponents/DashboardHeader";
import DashboardUserRoadmaps from "../../../components/dashboardcomponents/DashboardUserRoadmaps";
import UserRoadmapsSearch from "../../../components/dashboardcomponents/UserRoadmapsSearch";

export default function page() {
  return (
    <div className="w-full">
      <DashboardHeader/>
      <UserRoadmapsSearch/>
      <DashboardUserRoadmaps/>
    </div>
  );
}