import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { Button } from "@/components/ui/button";
import React from "react";

const Agents = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] flex-1 pt-4 pl-4 pr-4 pb-10">
            <div className="w-full flex flex-col mt-16 items-center justify-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="#5087FA">
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
                    </svg>
                </div>
                <h4 className='font-normal text-white leading-[40px] text-2xl text-center'>Premium Feature</h4>
                <p className='text-center mt-4 text-[#656D78] text-xs md:text-sm'>This feature is available with our Pro or Enterprise plans.</p>
                <Button className='bg-[#5087FA] mt-4'>
                    Upgrade to Access
                </Button> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
