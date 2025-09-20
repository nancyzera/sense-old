import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

const Wearables = () => {
    const isFree = false
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] flex-1 pt-4 pl-4 pr-4 pb-10">
            {isFree && 
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
            }

            <div className="border-[1px] rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                        <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Device Delivery</p>
                </div>
                <div className="flex flex-row bg-[#1a1f2e] rounded-[12px] mt-4 p-2 space-x-4 items-center">
                    <Bell className="w-5 h-5 text-white" />
                    <p className='text-center text-[#656D78] text-xs md:text-sm'>Make sure your wearable devices are in pairing mode and nearby.</p>
                </div>
                <Button className='bg-[#5087FA] flex flex-row items-center justify-center w-full mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="#fff">
                        <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L22.0536 8.55252C19.3062 6.3307 15.8085 5 11.9999 5C8.19133 5 4.69356 6.3307 1.94617 8.55252L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.9118 12.4424C17.023 10.9149 14.6183 10 11.9999 10C9.38151 10 6.97679 10.9149 5.08796 12.4424L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.7701 16.3322C14.7398 15.499 13.4281 15 11.9999 15C10.5717 15 9.26002 15.499 8.22975 16.3322L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z"></path>
                    </svg>
                    Scan for devices
                </Button> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wearables;
