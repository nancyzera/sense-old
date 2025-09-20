import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {

  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] pt-4 pl-4 pr-4 pb-10">
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
