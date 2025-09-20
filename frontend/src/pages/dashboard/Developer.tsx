import CodeBlock from "@/components/custom/atoms/CodeBlock";
import DashboardNavbar from "@/components/custom/molecules/DashboardNavbar";
import Sidebar from "@/components/custom/organisms/Sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings } from "lucide-react";
import React, { useRef, useState } from "react";
import {
    PrismLight as SyntaxHighlighter
} from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { toast } from "sonner";



const Developer = () => {
    const isFree = false


    const htmlCode = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sense AI</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>

    `

    const codeRef = useRef(null)
    const [framework, setFramework] = useState('html')

    const copyToClipBoard = (content: string) => {
      if (!content)
          return toast.error('Settings have not yet loaded')
      navigator.clipboard.writeText(content)
          .then(() => {
              toast.success('Copied to clipboard')
          })
          .catch(err => {
              toast.error('Error occured while copying')
          })
    }
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
                        <path d="M10.7577 11.8281L18.6066 3.97919L20.0208 5.3934L18.6066 6.80761L21.0815 9.28249L19.6673 10.6967L17.1924 8.22183L15.7782 9.63604L17.8995 11.7574L16.4853 13.1716L14.364 11.0503L12.1719 13.2423C13.4581 15.1837 13.246 17.8251 11.5355 19.5355C9.58291 21.4882 6.41709 21.4882 4.46447 19.5355C2.51184 17.5829 2.51184 14.4171 4.46447 12.4645C6.17493 10.754 8.81633 10.5419 10.7577 11.8281ZM10.1213 18.1213C11.2929 16.9497 11.2929 15.0503 10.1213 13.8787C8.94975 12.7071 7.05025 12.7071 5.87868 13.8787C4.70711 15.0503 4.70711 16.9497 5.87868 18.1213C7.05025 19.2929 8.94975 19.2929 10.1213 18.1213Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Device Delivery</p>
                </div>
                <div className="flex flex-row items-center space-x-4 w-full justify-between">
                    <div className="flex flex-row bg-[#1a1f2e] flex-1 rounded-[12px] mt-4 p-2 space-x-4 items-center">
                        <p className='text-center text-[#656D78] text-xs md:text-sm'>Your API key will appear here</p>
                    </div>
                    <Button className='bg-[#5087FA] flex flex-row items-center justify-center mt-4'>
                        Generate Key
                    </Button>
                </div>
                <div className="flex flex-row bg-[#1a1f2e] rounded-[12px] mt-4 p-2 space-x-4 items-center">
                    <Settings className="w-5 h-5 text-white" />
                    <p className='text-center text-[#656D78] text-xs md:text-sm'>Keep your API key secure.Don't share it in client-side code or public repositories.</p>
                </div> 
            </div>

            <div className="border-[1px] mt-4 rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                        <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">SDK Installation</p>
                </div>

                <div className="mt-4 w-full">
                    <Tabs defaultValue="javascript" className="w-full">
                        <TabsList>
                            <TabsTrigger className="text-white" value="javascript">Javascript</TabsTrigger>
                            <TabsTrigger className="text-white" value="python">Python</TabsTrigger>
                            <TabsTrigger className="text-white" value="react">React</TabsTrigger>
                            <TabsTrigger className="text-white" value="webhooks">Web hooks</TabsTrigger>
                        </TabsList>
                        <TabsContent onClick={() => copyToClipBoard("npm install @sense-ai/ai-sdk")} value="javascript" className="bg-[#222836] cursor-pointer rounded-[12px] flex flex-row items-center space-x-4 py-2 px-4">
                            <p className='text-center text-white/70 text-xs md:text-sm'>npm install @sense-ai/ai-sdk</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#fff">
                                    <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                                </svg>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </div>

            <div className="border-[1px] mt-4 rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
              <div className="flex flex-row space-x-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                    <path d="M16.95 8.46448L18.3642 7.05026L23.3139 12L18.3642 16.9498L16.95 15.5355L20.4855 12L16.95 8.46448ZM7.05048 8.46448L3.51495 12L7.05048 15.5355L5.63627 16.9498L0.686523 12L5.63627 7.05026L7.05048 8.46448Z"></path>
                  </svg>
                  <p className="text-xs text-white w-full cursor-pointer md:text-sm">Code Examples</p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="border-[1px] border-solid border-[#656D78] rounded-full p-2">
                  <p className="text-white/50 text-xs">
                  Javascript
                  </p>
                </button>
                <div onClick={() => copyToClipBoard(htmlCode)} className="flex flex-row cursor-pointer items-center space-x-2">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#fff">
                          <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>
                  </div>
                  <p className='text-center text-white/70 text-xs md:text-sm'>Copy code</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="border-[1px] border-solid border-[#656D78] rounded-[12px] p-4">
                  <CodeBlock code={htmlCode} language="html" />
                </div>
              </div>
            </div>


            <div className="border-[1px] mt-4 rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">API Testing</p>
                </div>
                <Button disabled className='bg-[#5087FA] w-full mt-4'>
                    Test API Connection
                </Button> 
            </div>


            <div className="border-[1px] mt-4 rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div className="flex flex-row space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#5087FA">
                      <path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path>
                    </svg>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Documentation & Resources</p>
                </div>
                <div className="w-full flex flex-row space-x-4">
                  <div className="mt-3 w-full md:w-[50%]">
                    <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">API Reference</p>
                    <div className="mt-2 flex flex-col space-y-2">
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                    </div>
                  </div>
                  <div className="mt-3 w-full md:w-[50%]">
                    <p className="text-xs text-white/70 w-full cursor-pointer md:text-sm">Guides & Tutorials</p>
                    <div className="mt-2 flex flex-col space-y-2">
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                      <Button className='bg-[#1B1F2F] flex justify-start w-full outline-none'>
                          Start voice-to-text
                      </Button> 
                    </div>
                  </div>
                </div>
            </div>

            <div className="border-[1px] mt-4 rounded-[12px] bg-[#222836] p-4 w-full pt-4 border-solid border-[#656D78]">
                <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Rate Limits & Usage</p>
                </div> 
                <div className="w-full pb-4 mt-4 border-solid border-b-[1px] border-[#656D78] flex flex-row items-center justify-between">
                  <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Plan</p>
                  </div>
                  <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Requests/Min</p>
                  </div>
                  <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Requests/Day</p>
                  </div>
                  <div>
                    <p className="text-xs text-white w-full cursor-pointer md:text-sm">Price</p>
                  </div>
                </div>
                <div className="w-full pb-4 mt-4 border-solid border-b-[1px] border-[#656D78] flex flex-row items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">Free</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">10</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">1000</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">$0</p>
                  </div>
                </div>
                <div className="w-full pb-4 mt-4 border-solid border-b-[1px] border-[#656D78] flex flex-row items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">Pro</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">10</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">1000</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 w-full cursor-pointer md:text-sm">$0</p>
                  </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Developer;
