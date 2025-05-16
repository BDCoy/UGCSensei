import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

const DemoScheduler: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="flex-1 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to transform your content strategy?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Book a personalized demo to see how our platform can help you create 
                engaging content that converts. Our experts will show you how to:
              </p>
              
              {/* Benefits */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#4B9FD6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick 15-minute overview</h3>
                    <p className="text-sm text-gray-600">See the entire process in action</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-[#4B9FD6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Find perfect creators</h3>
                    <p className="text-sm text-gray-600">Learn how to match with ideal talent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[#4B9FD6] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible scheduling</h3>
                    <p className="text-sm text-gray-600">Pick a time that works for you</p>
                  </div>
                </div>
              </div>

              <a 
                href="#schedule" 
                className="group inline-flex items-center gap-2 bg-[#4B9FD6] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl transition-all duration-300 hover:bg-[#3D8CBF] hover:scale-105 hover:shadow-2xl"
              >
                Schedule your demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Image */}
            <div className="flex-1 bg-[#4B9FD6]/5 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-[#4B9FD6]/10 rounded-3xl transform rotate-6"></div>
                <img 
                  src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg" 
                  alt="Team collaboration during demo" 
                  className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoScheduler;