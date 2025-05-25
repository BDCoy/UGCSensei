"use client";

import React from "react";
import Link from "next/link";
import { signUp } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Define prop type with allowEmail boolean
interface SignUpProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function SignUp({ allowEmail, redirectMethod }: SignUpProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} noValidate={true}>
      <p className="text-[22px] font-bold text-center mt-5">
        Create your Business account
      </p>

      <div className="flex flex-col w-full max-w-[350px] gap-5 pt-[30px]">
        <div className="flex flex-col gap-2.5">
          <p className="text-sm text-left text-black">Email</p>
          <div className="flex items-center h-10 px-[18px] py-2.5 rounded-full bg-white border border-gray-200 focus-within:border-[#3b35e0] transition-all">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full text-sm text-black outline-none placeholder:text-[#b0b0b0]"
              id="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm text-left text-black">Password</p>
          <div className="flex justify-between items-center h-10 px-[18px] py-2.5 rounded-full bg-white border border-gray-200 focus-within:border-[#3b35e0] transition-all">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              className="w-full text-sm text-black outline-none placeholder:text-[#b0b0b0]"
              id="password"
              name="password"
              autoComplete="current-password"
            />
            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="flex-shrink-0 ml-2 text-[#b0b0b0] hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 pt-[50px]">
        <button
          type="submit"
          className="w-[350px] h-10 bg-[#175779] text-white font-medium rounded-full hover:bg-[#71a6ca] transition-colors"
        >
          Create Account
        </button>
        <p className="text-sm font-semibold text-black mt-4">
          Already have an account?
        </p>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/signin/password_signin"
            className="text-xs text-[#3b35e0] hover:underline transition-all"
          >
            Log in with email and password
          </Link>
          <Link
            href="/signin/email_signin"
            className="text-xs text-[#3b35e0] hover:underline transition-all"
          >
            Log in via Magic Link
          </Link>
        </div>
      </div>
    </form>
  );
}
