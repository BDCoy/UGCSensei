/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getAuthTypes,
  getViewTypes,
  getDefaultSignInView,
  getRedirectMethod,
} from "@/utils/auth-helpers/settings";
import Card from "@/components/ui/Card/Card";
import PasswordSignIn from "@/components/ui/AuthForms/PasswordSignIn";
import EmailSignIn from "@/components/ui/AuthForms/EmailSignIn";
import Separator from "@/components/ui/AuthForms/Separator";
import OauthSignIn from "@/components/ui/AuthForms/OauthSignIn";
import ForgotPassword from "@/components/ui/AuthForms/ForgotPassword";
import UpdatePassword from "@/components/ui/AuthForms/UpdatePassword";
import SignUp from "@/components/ui/AuthForms/Signup";
import Logo from "@/components/ui/AuthForms/Logo";
import Footer from "@/components/ui/AuthForms/Footer";

export default async function SignIn({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { disable_button: boolean };
}) {
  const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  // Declare 'viewProp' and initialize with the default value
  let viewProp: string;

  // Assign url id to 'viewProp' if it's a valid string and ViewTypes includes it
  if (typeof params.id === "string" && viewTypes.includes(params.id)) {
    viewProp = params.id;
  } else {
    const preferredSignInView =
      cookies().get("preferredSignInView")?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);
    return redirect(`/signin/${viewProp}`);
  }

  // Check if the user is already logged in and redirect to the account page if so
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && viewProp !== "update_password") {
    return redirect("/dashboard");
  } else if (!user && viewProp === "update_password") {
    return redirect("/signin");
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#f4f4f4]">
      {/* Left side - Image */}
      <div className="hidden lg:block w-full md:w-[60%] relative overflow-hidden animate-slide-in-left">
        <img
          src="/landing/mobile-technology-1.jpg"
          alt="Business technology"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Right side - Auth form */}
      <div className="w-full md:w-[40%] flex flex-col justify-between min-h-[calc(100vh-300px)] md:min-h-screen p-5 lg:p-10 animate-slide-in-right">
        <div className="flex flex-col items-center justify-start flex-grow pt-10 md:pt-20">
          <div className="animate-fade-in">
            <Logo />
          </div>

          <div className="w-full flex flex-col items-center animate-slide-up">
            {viewProp === "signup" && (
              <SignUp allowEmail={allowEmail} redirectMethod={redirectMethod} />
            )}
            {viewProp === "password_signin" && (
              <PasswordSignIn
                allowEmail={allowEmail}
                redirectMethod={redirectMethod}
              />
            )}
            {viewProp === "email_signin" && (
              <EmailSignIn
                allowPassword={allowPassword}
                redirectMethod={redirectMethod}
                disableButton={searchParams.disable_button}
              />
            )}
            {viewProp === "forgot_password" && (
              <ForgotPassword redirectMethod={redirectMethod} />
            )}
            {viewProp === "update_password" && (
              <UpdatePassword redirectMethod={redirectMethod} />
            )}
          </div>
        <Separator text="Or continue with" />
        <OauthSignIn />
        </div>

        <div className="animate-fade-in">
          <Footer />
        </div>
      </div>
    </div>
  );
}
