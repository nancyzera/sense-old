import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import React from "react";

const Payments = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] pt-4 pl-4 pr-4 pb-10"></div>
      </div>
    </div>
  );
};

export default Payments;
