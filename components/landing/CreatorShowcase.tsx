import React from 'react';

const CATEGORIES = [
  'Cosmetics & Beauty', 'Apparel & Fashion', 'Apps & Digital Services', 
  'Health & Wellness', 'Children & Family', 'Technology & Gadgets', 
  'Food & Beverage', 'Home & Lifestyle', 'Pets', 'Automotive'
];

const CREATORS = [
  {
    image: "https://ext.same-assets.com/2921571504/2198423539.webp",
    name: "Tonia",
    rating: 5,
    location: "",
    starIcon: "https://ext.same-assets.com/2921571504/2744450724.svg"
  },
  {
    image: "https://ext.same-assets.com/2921571504/2097591303.webp",
    name: "Samuel",
    rating: 5,
    location: "",
    starIcon: "https://ext.same-assets.com/2921571504/3170004912.svg"
  },
  {
    image: "https://ext.same-assets.com/2921571504/2578442034.webp",
    name: "Juan",
    rating: 4.9,
    location: "Minnesota",
    starIcon: "https://ext.same-assets.com/2921571504/3939565216.svg"
  },
  {
    image: "https://ext.same-assets.com/2921571504/716539572.webp",
    name: "Regan",
    rating: 5,
    location: "",
    starIcon: "https://ext.same-assets.com/2921571504/2059979464.svg"
  }
];

const CreatorShowcase: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20" id="creators">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Connect with 5,000+ talented creators
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Find the perfect match for your brand from our diverse community
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              className="text-sm font-medium rounded-full px-4 py-2 border border-gray-200 bg-white hover:bg-[#4B9FD6]/10 hover:border-[#4B9FD6] text-gray-700 shadow-sm transition-all duration-300"
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Creator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CREATORS.map((creator) => (
            <div 
              key={creator.name} 
              className="card-hover bg-white rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <div className="relative mb-4">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#4B9FD6]/20"
                />
                <div className="absolute -bottom-2 right-0 bg-[#4B9FD6] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {creator.rating}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{creator.name}</h3>
              {creator.location && (
                <p className="text-gray-500 text-sm">{creator.location}</p>
              )}
              
              <button className="mt-6 w-full py-2 border-2 border-[#4B9FD6] text-[#4B9FD6] rounded-lg font-semibold hover:bg-[#4B9FD6] hover:text-white transition-colors duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a 
            href="#explore-creators" 
            className="btn-primary bg-[#4B9FD6] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore all creators
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreatorShowcase;