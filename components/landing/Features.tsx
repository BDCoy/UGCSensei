import React from 'react';

const FEATURES = [
  {
    title: 'Authenticity That Builds Trust',
    desc: 'Influencers have built loyal communities based on their personal voice and relatability. When they create content for your brand, it feels more genuine and less like an ad—making audiences more likely to trust and engage.',
    icon: 'https://ext.same-assets.com/2921571504/3927218253.svg',
  },
  {
    title: 'Instant Reach and Targeted Exposure',
    desc: 'Influencers already have engaged followers in specific niches. Partnering with them puts your brand directly in front of the right audience, faster and more effectively than traditional ads.',
    icon: 'https://ext.same-assets.com/2921571504/840275654.svg',
  },
  {
    title: 'High-Performing, Cost-Efficient Content',
    desc: 'Influencer videos often outperform branded content on social platforms because they\'re native, relatable, and entertaining. Plus, you get ready-made, high-quality content without the expense of a full production team.',
    icon: 'https://ext.same-assets.com/2921571504/4092180743.svg',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            More clicks, more sales, zero hassle
          </h2>
          <p className="text-lg text-gray-600">
            Find the right creators, order videos, and manage your content – all in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f, index) => (
            <div 
              key={f.title} 
              className="card-hover bg-white rounded-2xl p-8 shadow"
            >
              <div className="bg-[#4B9FD6]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <img src={f.icon} alt="" className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;