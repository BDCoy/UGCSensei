"use client";

import Button from "@/components/ui/Button/Button";
import { updatePassword } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod,
}: UpdatePasswordProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); 
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <form noValidate={true} className="mb-4" onSubmit={(e) => handleSubmit(e)}>
      <p className="text-[22px] font-bold text-center mt-5">
        Update your password
      </p>

      <div className="flex flex-col w-full max-w-[350px] gap-5 pt-[30px]">
        <div className="flex flex-col gap-2.5">
          <p className="text-sm text-left text-black">New Password</p>
          <div className="flex justify-between items-center h-10 px-[18px] py-2.5 rounded-full bg-white border border-gray-200 focus-within:border-[#3b35e0] transition-all">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password..."
              className="w-full text-sm text-black outline-none placeholder:text-[#b0b0b0]"
              id="password"
              name="password"
              autoComplete="current-password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="flex-shrink-0 ml-2 text-[#b0b0b0] hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="text-sm text-left text-black">Confirm New Password</p>
          <div className="flex justify-between items-center h-10 px-[18px] py-2.5 rounded-full bg-white border border-gray-200 focus-within:border-[#3b35e0] transition-all">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password..."
              className="w-full text-sm text-black outline-none placeholder:text-[#b0b0b0]"
              id="passwordConfirm"
              name="passwordConfirm"
              autoComplete="current-password"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              type="button"
              className="flex-shrink-0 ml-2 text-[#b0b0b0] hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 pt-[50px]">
        <button
          type="submit"
          className="w-[350px] h-10 bg-[#175779] text-white font-medium rounded-full hover:bg-[#71a6ca] transition-colors"
        >
          Update Password
        </button>
        <div className="flex flex-col items-center gap-1 mt-4">
          <Link
            href="/signin/password_signin"
            className="text-xs text-[#3b35e0] hover:underline transition-all"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
