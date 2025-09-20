import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Chat = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] pt-4 pl-4 pr-4 pb-10">
            <h4 className='font-normal text-white leading-[40px] text-2xl'>AI Chat Assistant</h4>

            <div className="w-full bg-[#222836] mt-4 p-6 rounded-[12px]">
                <div className="flex flex-row items-center space-x-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="#5087FA">
                            <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-white w-full cursor-pointer md:text-sm">Sense AI Assistant</p>
                    </div>
                    <div className="bg-green-500 flex w-[80px] justify-center items-center space-x-[3px] px-[4px] py-[2px] rounded-[12px]">
                        <p className="text-xs text-white md:text-sm">Online</p>
                    </div>
                </div>

                <div className="min-h-[400px]">
                    <div className="flex flex-row mt-10 space-x-4 items-start">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#5087FA]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="#fff">
                                <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                            </svg>
                        </div>
                        <div>
                            <div className="p-4 rounded-[12px] bg-[#374151]">
                                <p className="text-xs text-white w-full cursor-pointer md:text-sm">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo delectus deserunt optio omnis magnam similique itaque rerum blanditiis soluta et.
                                </p>
                            </div>
                            <p className="text-xs mt-[2px] text-white/70 w-full cursor-pointer">10:00 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end mt-10 space-x-4 items-start">
                        <div>
                            <div className="p-4 rounded-[12px] bg-[#374151]">
                                <p className="text-xs text-white w-full cursor-pointer md:text-sm">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo delectus deserunt optio omnis magnam similique itaque rerum blanditiis soluta et.
                                </p>
                            </div>
                            <p className="text-xs mt-[2px] text-white/70 w-full cursor-pointer">10:00 PM</p>
                        </div>
                        <div className="w-[50px] h-[50px] bg-[#656D78] overflow-hidden rounded-full">
                            <img src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/vibrent_1.png" className="w-full h-full object-cover object-center" alt="Profile" />
                        </div>
                    </div>
                </div>


                <div className="mt-10 border-t-[1px] border-solid border-[#656D78]">
                    <div className="mt-4 mb-4">
                        <p className="text-xs text-white w-full cursor-pointer md:text-sm">Quick Actions</p>
                        <div className="flex flex-row flex-wrap mt-2 space-x-4 items-center">
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Start voice-to-text
                            </Button> 
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Read this text aloud
                            </Button> 
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Analyze an image
                            </Button> 
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Navigation Help
                            </Button> 
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Conect mobility device
                            </Button> 
                            <Button className='bg-[#1B1F2F] border-[1px] border-solid border-[#656D78]'>
                                Emergency assistance
                            </Button> 
                        </div>
                    </div>
                </div>

                <div className="border-t-[1px] w-full pt-4 border-solid border-[#656D78]">
                    <div className="flex w-full flex-row space-x-4 items-start">
                        <div className="flex justify-center bg-[#1B1F2F] border-[1px] border-solid border-[#656D78] items-center w-[50px] h-[50px] rounded-[12px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#fff">
                                <path d="M11.9998 3C10.3429 3 8.99976 4.34315 8.99976 6V10C8.99976 11.6569 10.3429 13 11.9998 13C13.6566 13 14.9998 11.6569 14.9998 10V6C14.9998 4.34315 13.6566 3 11.9998 3ZM11.9998 1C14.7612 1 16.9998 3.23858 16.9998 6V10C16.9998 12.7614 14.7612 15 11.9998 15C9.23833 15 6.99976 12.7614 6.99976 10V6C6.99976 3.23858 9.23833 1 11.9998 1ZM3.05469 11H5.07065C5.55588 14.3923 8.47329 17 11.9998 17C15.5262 17 18.4436 14.3923 18.9289 11H20.9448C20.4837 15.1716 17.1714 18.4839 12.9998 18.9451V23H10.9998V18.9451C6.82814 18.4839 3.51584 15.1716 3.05469 11Z"></path>
                            </svg>
                        </div>
                        <form className="flex-1">
                            <Textarea className="bg-[#374151] text-white border-none outline-none flex-1" placeholder="Type your message" />
                        </form>
                        <div className="flex justify-center bg-[#5087FA] border-[1px] border-solid border-[#656D78] items-center w-[50px] h-[50px] rounded-[12px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#fff">
                                <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
