import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="pt-[70px]">
        <Sidebar />
        <div className="md:ml-[250px] pt-4 pl-4 pr-4 pb-10">
          <div className="flex flex-row space-x-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} fill="#5087FA">
                <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path>
              </svg>
              <p className="text-xs text-white w-full cursor-pointer md:text-[20px]">Settings</p>
          </div>

          <div className="flex w-full flex-row mt-4 space-x-4">
            <div className="md:w-[50%] w-full">
              <div className="border-[1px] rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                      <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Profile Settings</p>
                </div>
                <div className="mt-4 flex flex-col space-y-3">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className="text-white/70">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="border-none text-white w-full outline-none bg-[#374151]"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-white/70">
                      Email
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      className="border-none text-white w-full outline-none bg-[#374151]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-white/70">Language</Label>
                    <Select>
                      <SelectTrigger className="w-full border-none text-white w-full outline-none hover:bg-[#374151] bg-[#374151]">
                        <SelectValue className="border-none text-white w-full outline-none hover:bg-[#374151] bg-[#374151]" placeholder="English" />
                      </SelectTrigger>
                      <SelectContent className="border-none text-white w-full hover:bg-[#374151] outline-none bg-[#374151]">
                        <SelectItem value="eng">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] w-full">
              <div className="border-[1px] rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                      <path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Notifications</p>
                </div>
                <div className="mt-4 flex flex-col space-y-3">
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-xs text-white w-full cursor-pointer md:text-sm">Push Notifications</p>
                      <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">Receive app notifications</p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-xs text-white w-full cursor-pointer md:text-sm">Push Notifications</p>
                      <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">Receive app notifications</p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-xs text-white w-full cursor-pointer md:text-sm">Push Notifications</p>
                      <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">Receive app notifications</p>
                    </div>
                    <div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-row mt-4 space-x-4">
            <div className="md:w-[50%] w-full">
              <div className="border-[1px] rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                      <path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Accessibility</p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-white/70">Theme</Label>
                    <Select>
                      <SelectTrigger className="w-full border-none text-white w-full outline-none hover:bg-[#374151] bg-[#374151]">
                        <SelectValue className="border-none text-white w-full outline-none hover:bg-[#374151] bg-[#374151]" placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent className="border-none text-white w-full hover:bg-[#374151] outline-none bg-[#374151]">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] w-full">
              <div className="border-[1px] rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                      <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Privacy & Security</p>
                </div>
                <div className="mt-4">
                    <div>
                      <p className="text-xs text-white w-full cursor-pointer md:text-sm">Data Storage</p>
                      <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">Your data is encrypted and stored securely. You can export or delete your data at any time.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
