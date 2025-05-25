/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="py-2">
      <img
        className="h-[28px] sm:h-[32px] lg:h-[40px] w-auto"
        alt="UGC Sensei Logo"
        src="/landing/ugc-sensei-logo-2.png"
      />
    </Link>
  );
};

export default Logo;
