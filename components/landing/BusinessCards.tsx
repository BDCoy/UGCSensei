import React from 'react';
import { Building2, Users2 } from 'lucide-react';

const BusinessCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            On-demand videos for every business
          </h2>
          <p className="text-lg text-gray-600">
            Flexible video creation that scales with your needs, no matter your size or industry
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* For Brands */}
          <div className="card-hover flex-1 bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
            <div className="bg-[#4B9FD6]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-[#4B9FD6]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">For brands</h3>
            <p className="text-gray-600 text-center mb-6">
              Get scroll-stopping videos, ready to use and optimized for TikTok and Meta. 
              Choose from a variety of creators and templates, test different styles, 
              and find your winning formula.
            </p>
            <a 
              href="#brands-learn" 
              className="group inline-flex items-center gap-2 text-[#4B9FD6] font-semibold hover:underline"
            >
              Learn more
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* For Agencies */}
          <div className="card-hover flex-1 bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
            <div className="bg-[#4B9FD6]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Users2 className="w-8 h-8 text-[#4B9FD6]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">For agencies</h3>
            <p className="text-gray-600 text-center mb-6">
              Save time, money, and resources with our streamlined video production platform. 
              Access a vast network of creators, manage projects effortlessly, and deliver 
              stunning results to your clients.
            </p>
            <a 
              href="#agencies-learn" 
              className="group inline-flex items-center gap-2 text-[#4B9FD6] font-semibold hover:underline"
            >
              Learn more
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCards;