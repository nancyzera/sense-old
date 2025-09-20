import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import React from "react";

const Tools = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] flex-1 pt-4 pl-4 pr-4 pb-10">
            <div className="w-full flex flex-col mt-16 items-center justify-center">
                <h4 className='font-normal text-white leading-[40px] text-2xl text-center'>Select Tool</h4>
                <p className='text-center mt-4 text-[#656D78] text-xs md:text-sm'>Choose a tool from the dashboard to get started</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
