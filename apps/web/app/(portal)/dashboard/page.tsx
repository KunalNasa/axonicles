import DashboardHeader from "../../../components/dashboardcomponents/DashboardHeader";
import DashboardUserRoadmaps from "../../../components/dashboardcomponents/DashboardUserRoadmaps";
import UserRoadmapsSearch from "../../../components/dashboardcomponents/UserRoadmapsSearch";
import {Separator} from "@axonicles/ui/Separator"
export default function page() {
  return (
    <div className="w-full">
      <DashboardHeader/>
      <UserRoadmapsSearch/>
      <DashboardUserRoadmaps/>
    </div>
  );
}