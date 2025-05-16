import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    brand: 'Intelligence Media',
    quote: "We immediately published the first ad variations with their recommended structure, we didn't edit anything, and it already worked better than our previous ads. Our ROAS was better and acquisition costs went down. We were able to scale larger because of that.",
    author: 'Jorens, CEO',
    stats: ['+120% increase in sales', '+200% boost in net profit'],
    logo: 'https://ext.same-assets.com/2921571504/3204013589.svg',
    image: 'https://ext.same-assets.com/2921571504/2198423539.webp',
    caseLink: '#intelligence-media',
  },
  {
    brand: 'Bickster',
    quote: "The platform has been great for us! I've had clients in the past that don't have any video and they're expecting something fast. I'm not a video producer, but I can tap into the creator network and get 10 videos for a grand and now we've got our starting toolkit.",
    author: 'Pat, Head of Growth',
    stats: ['+500% CPI drop', '+2.5x lower CPA'],
    logo: 'https://ext.same-assets.com/2921571504/2764260946.svg',
    image: 'https://ext.same-assets.com/2921571504/2097591303.webp',
    caseLink: '#bickster',
  },
  {
    brand: 'Adore Me',
    quote: "The creators perform really well in general. Over the past several years, many of our top ads on TikTok have been from the platform instead of the influencers we discover ourselves. We're impressed by the high-quality content from these creators.",
    author: 'Kayla, Marketing Associate',
    stats: ['+15% higher CTR', '+8% lower CPA'],
    logo: 'https://ext.same-assets.com/2921571504/338780589.svg',
    image: 'https://ext.same-assets.com/2921571504/2578442034.webp',
    caseLink: '#adore-me',
  },
  {
    brand: 'Pineapple Products',
    quote: "Presenting real, everyday people to our customers has made a huge difference. The amount of people interacting with us and looking to purchase our product from these videos has gone up from somewhere between 30% and 50% in the past couple months.",
    author: 'Shaun, Brand Reputation Manager',
    stats: ['+10.75% ROI', '+5% conversion rates'],
    logo: 'https://ext.same-assets.com/2921571504/3291970631.svg',
    image: 'https://ext.same-assets.com/2921571504/716539572.webp',
    caseLink: '#pineapple',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20" id="success">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Success stories from our clients
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of successful brands who have transformed their social media presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <div 
              key={t.brand}
              className="card-hover bg-white rounded-2xl p-6 flex flex-col"
            >
              {/* Image and Logo */}
              <div className="relative mb-6">
                <img 
                  src={t.image} 
                  alt={t.brand} 
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 left-4 bg-white p-2 rounded-full shadow-md">
                  <img 
                    src={t.logo} 
                    alt={`${t.brand} logo`}
                    className="h-8 w-8"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl text-gray-900">{t.brand}</h3>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-4 h-4 fill-[#4B9FD6] text-[#4B9FD6]"
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-600 italic text-sm mb-4">
                  "{t.quote}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-medium text-gray-900 mb-3">{t.author}</p>
                    <ul className="space-y-2">
                      {t.stats.map((stat, i) => (
                        <li 
                          key={i} 
                          className="flex items-center gap-2 text-sm font-semibold text-[#4B9FD6]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4B9FD6]"></span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={t.caseLink}
                    className="group inline-flex items-center gap-2 mt-4 text-[#4B9FD6] font-medium hover:underline"
                  >
                    Read full case study
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:translate-x-1" 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;