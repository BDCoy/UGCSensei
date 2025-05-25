import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex font-nunito flex-col items-center justify-center w-full gap-[5px] mt-8 mb-4">
      <div className="flex justify-center items-start gap-5 text-xs">
        <a href="#" className="text-black hover:text-[#3b35e0] transition-colors">
          Terms of service
        </a>
        <a href="#" className="text-black hover:text-[#3b35e0] transition-colors">
          Privacy policy
        </a>
        <a href="#" className="text-black hover:text-[#3b35e0] transition-colors">
          Refund policy
        </a>
      </div>
      <p className="w-full max-w-[550px] text-xs text-center text-black">
        support@ugcsensei.com | © 2025 UGC Sensei. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;