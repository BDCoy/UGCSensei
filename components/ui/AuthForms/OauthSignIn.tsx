/* eslint-disable @next/next/no-img-element */
"use client";

import { signInWithOAuth } from "@/utils/auth-helpers/client";
import { type Provider } from "@supabase/supabase-js";
import { useState } from "react";

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    // {
    //   name: 'github',
    //   displayName: 'GitHub',
    //   icon: <Github className="h-5 w-5" />
    // },
    {
      name: "google",
      displayName: "Continue with Google",
      icon: (
        <img
          src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
          alt="Google"
          className="w-5 h-5 object-contain group-hover:animate-scale"
        />
      ),
    },
    /* Add desired OAuth providers here */
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div>
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="provider" value={provider.name} />
          <button
            type="submit"
            className="w-[350px] rounded-full h-10 bg-white text-gray-700 font-medium  border border-gray-200 
                 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group"
            // className="max-w-[350px] w-full rounded-full h-10 bg-white text-gray-700 font-medium
            //      hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 group px-4"
          >
            <span className="mr-2">{provider.icon}</span>
            <span>{provider.displayName}</span>
          </button>
        </form>
      ))}
    </div>
  );
}
