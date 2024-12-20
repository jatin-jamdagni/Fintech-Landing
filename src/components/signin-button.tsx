import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Captcha } from "./captcha";

const SignInButton = ({ children }: { children: React.ReactNode }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className=" bg-foreground border-orange-600/40">
        <AlertDialogHeader className=" px-4 font-bold">
          <AlertDialogTitle className=" font-bold text-background">Sign In</AlertDialogTitle>
          <AlertDialogDescription>
            Welcome back! Please enter your details.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full pt-5 max-w-md mx-auto ">
            <CardHeader className=" sr-only">
              <CardTitle className="text-3xl font-bold text-[#003366]">
                Sign In
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="loginId">
                    Login ID
                  </label>
                  <Input id="loginId" type="text" required className="w-full" />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <div className="text-right">
                    <a
                      href="#"
                      className="text-[#F04444] hover:underline text-sm"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="captcha">
                    Enter Text Below
                  </label>
                  <Input id="captcha" type="text" required className="w-full" />
                  <Captcha />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      <span>Terms & Conditions | </span>
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <AlertDialogAction className=" w-full hover:bg-foreground/90">
                  Login
                </AlertDialogAction>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignInButton;
