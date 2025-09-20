import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFields, newLogin } from "@/types/schema/account";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/account";
import { toast } from "sonner";
import { ApiError } from "@/types";

const SignInForm = () => {
  const navigate = useNavigate()
  const form = useForm<loginFields>({
    resolver: zodResolver(newLogin),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Logged In Successfully");
        setTimeout(() => {
          console.log("Navigating to /app");
          navigate("/app", { replace: true });
        }, 5000);
      } else {
        toast.error(data.message || "An error occurred during login");
      }
      
    },
    onError: (err: ApiError) => {
      toast.error(err?.response?.data?.message)
    },
  });

  const onSubmit = (values: loginFields) => {
    mutate(values);
  };
  return (
    <div className="md:w-[500px] pr-4 pl-4 sm:pr-10 sm:pl-10 md:pr-0 md:pl-0 w-full">
      <Link to="/">
        <div className="flex flex-row items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={16}
            height={16}
            fill="#656D78"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
          <p className="text-center leading-[25px] text-[#656D78] text-xs md:text-sm">
            Back to Home
          </p>
        </div>
      </Link>
      <div className="mt-4 w-full flex justify-center">
        <div className="flex flex-row items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
            height={30}
            fill="#5087FA"
          >
            <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path>
          </svg>
          <h4 className="font-bold text-white">Sense AI</h4>
        </div>
      </div>
      <div>
        <p className="text-center leading-[25px] text-[#656D78] text-xs md:text-sm">
          Sign in to your accessibility dashboard or try our demo
        </p>
      </div>

      <div className="mt-8 w-full">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="bg-[#374151] w-full">
            <TabsTrigger className="text-white" value="signin">
              Signin
            </TabsTrigger>
            <TabsTrigger
              className="text-white flex flex-row items-center space-x-2"
              value="demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="#fff"
              >
                <path d="M9 8.48216V15.518L15.0307 12.0001L9 8.48216ZM7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path>
              </svg>
              Try Demo
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="signin"
            className="bg-[#2A3540] w-full mt-8 rounded-[12px] flex flex-row items-center space-x-4 p-4"
          >
            <div className="w-full">
              <h4 className="font-bold text-white text-center">
                Sign In to Your Account
              </h4>

              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mt-8 flex flex-col space-y-[20px] w-full">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="email" className="text-white/70">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      {...form.register("email")}
                      className="border-none text-white w-full outline-none bg-[#374151]"
                      placeholder="Enter your email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-xs">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="password" className="text-white/70">
                      Password
                    </Label>
                    <Input
                      type="password"
                      id="password"
                      {...form.register("password")}
                      className="border-none text-white w-full outline-none bg-[#374151]"
                      placeholder="Enter your password"
                    />
                    {form.formState.errors.password && (
                      <p className="text-red-500 text-xs">
                        {form.formState.errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="rememberMe"
                        {...form.register("rememberMe")}
                      />
                      <Label htmlFor="rememberMe" className="text-white">
                        Remember Me
                      </Label>
                    </div>
                    <div>
                      <p className="text-center leading-[25px] text-[#5087FA] text-xs md:text-sm">
                        Forgot password?
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-[#5087FA] flex flex-row items-center space-x-4"
                  >
                    {isPending ? "Signing In..." : "Sign In"}
                  </Button>

                  <div>
                    <p className="text-center leading-[25px] text-[#656D78] text-xs md:text-sm">
                      Don't have an account?{" "}
                      <span className="text-[#5087FA]">Signup</span>
                    </p>
                  </div>
                </div>
              </form>

              <div className="mt-8 border-t-[1px] pt-4 border-solid border-[#656D78]">
                <p className="text-center leading-[25px] text-[#656D78] text-xs md:text-sm">
                  Or continue with
                </p>
                <div className="flex flex-col space-y-2">
                  <Button className="bg-[#1B1F2F] flex flex-row items-center space-x-2 w-full border-[1px] border-solid border-[#656D78]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="#fff"
                    >
                      <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
                    </svg>
                    Continue with Google
                  </Button>
                  <Button className="bg-[#1B1F2F] flex flex-row items-center space-x-2 w-full border-[1px] border-solid border-[#656D78]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={18}
                      height={18}
                      fill="#fff"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                    Continue with Google
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="demo"
            className="bg-[#2A3540] w-full mt-8 rounded-[12px] flex flex-row items-center space-x-4 p-4"
          >
            <div className="w-full flex justify-center items-center min-h-[200px]">
              <Button className="bg-[#5087FA] flex flex-row items-center space-x-4">
                Continue to demo
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignInForm;
