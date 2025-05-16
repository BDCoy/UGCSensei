import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-white py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why choose us?
          </h2>
          <p className="text-lg text-gray-600">
            See how we compare to traditional content creation methods
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[740px] bg-white rounded-2xl shadow-lg border border-gray-100">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-6 text-left font-semibold text-gray-600 w-1/4"></th>
                  <th className="p-6 text-center font-bold text-[#4B9FD6] w-1/4 bg-[#4B9FD6]/5">
                    Our Platform
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600 w-1/4">
                    Influencers
                  </th>
                  <th className="p-6 text-center font-semibold text-gray-600 w-1/4">
                    Production Studio
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {feature: 'Cost-effective', platform: true, infl: false, studio: false},
                  {feature: 'Fast turnaround', platform: true, infl: false, studio: false},
                  {feature: 'Easy process', platform: true, infl: false, studio: false},
                  {feature: 'Customizable', platform: true, infl: true, studio: true},
                  {feature: 'Scalable content', platform: true, infl: false, studio: true},
                  {feature: 'Authentic feel', platform: true, infl: true, studio: false},
                  {feature: 'Ready to launch', platform: true, infl: false, studio: true},
                ].map((row, idx) => (
                  <tr 
                    key={row.feature} 
                    className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                  >
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center">
                      {row.platform ? (
                        <div className="flex justify-center">
                          <span className="w-8 h-8 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                        </div>
                      ) : (
                        <span className="inline-block w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">—</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.infl ? (
                        <div className="flex justify-center">
                          <span className="w-8 h-8 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                        </div>
                      ) : (
                        <span className="inline-block w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">—</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {row.studio ? (
                        <div className="flex justify-center">
                          <span className="w-8 h-8 rounded-full bg-[#4B9FD6] text-white flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                        </div>
                      ) : (
                        <span className="inline-block w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="#get-started" 
            className="btn-primary bg-[#4B9FD6] text-white font-semibold px-12 py-4 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get started now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;