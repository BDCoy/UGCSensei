import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
              How it works
            </h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Find the right creators
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Filter creators by demographics, interests, or lifestyle, and invite the ones 
                    who best match your needs. Make your brief public and let creators apply.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Customize your order
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Select your video details, choose editing preferences, and customize your brief 
                    yourself or leave it to the creator's expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Get your videos
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sit back and relax. Your creator will deliver your video in just 7-12 days 
                    after receiving your product, if you choose to ship it.
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="#get-started" 
              className="btn-primary inline-block bg-[#4B9FD6] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl mt-12 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Get started
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#4B9FD6]/10 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/3759059/pexels-photo-3759059.jpeg" 
                alt="Content creation process" 
                className="relative rounded-2xl shadow-xl w-full max-w-md object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;