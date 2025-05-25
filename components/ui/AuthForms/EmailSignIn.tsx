"use client";

import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import { signInWithEmail } from "@/utils/auth-helpers/server";
import { handleRequest } from "@/utils/auth-helpers/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define prop type with allowPassword boolean
interface EmailSignInProps {
  allowPassword: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function EmailSignIn({
  allowPassword,
  redirectMethod,
  disableButton,
}: EmailSignInProps) {
  const router = redirectMethod === "client" ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signInWithEmail, router);
    setIsSubmitting(false);
  };

  return (
    <form noValidate={true} className="mb-4" onSubmit={(e) => handleSubmit(e)}>
      <p className="text-[22px] font-bold text-center mt-5">
        Sign in with Magic Link
      </p>

      <div className="flex flex-col w-full max-w-full gap-5 pt-[30px]">
        <div className="flex flex-col gap-2.5">
          <p className="text-sm text-left text-black">Email</p>
          <div className="flex items-center h-10 px-[18px] py-2.5 rounded-sm bg-white  focus-within:border-[#3b35e0] transition-all">
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
      </div>

      <div className="flex flex-col items-center gap-2.5 pt-[50px]">
        <button
          type="submit"
          disabled={disableButton}
          className="w-full h-10 bg-[#175779] text-white font-medium rounded-sm hover:bg-[#71a6ca] transition-colors"
        >
          Sign in
        </button>
        {allowPassword && (
          <>
            <p className="text-sm font-semibold text-black mt-4">
              Don&apos;t have an account?
            </p>
            <div className="flex flex-col items-center gap-1">
              <Link
                href="/signin/signup"
                className="text-xs text-[#3b35e0] hover:underline transition-all"
              >
                Create an account
              </Link>
              <Link
                href="/signin/password_signin"
                className="text-xs text-[#3b35e0] hover:underline transition-all"
              >
                Sign in with password
              </Link>
            </div>
          </>
        )}
      </div>
    </form>
  );
}
