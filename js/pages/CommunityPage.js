import React from 'react';
import { Link } from 'react-router-dom';

export default function CommunityPage() {
  // Mock community data
  const communityStories = [
    {
      id: 1,
      name: "Maria's Bakery",
      role: "Local Business",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      story: "Since partnering with City Pickups, our small bakery has been able to offer same-day delivery of our fresh bread and pastries to customers across Berlin. Our online orders have increased by 35%!",
      location: "Berlin, Germany"
    },
    {
      id: 2,
      name: "Thomas K.",
      role: "Courier",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      story: "As a student at TU Berlin, City Pickups gives me a flexible way to earn money between classes. I delivered packages primarily by bike, which keeps me fit and helps the environment.",
      location: "Berlin, Germany"
    },
    {
      id: 3,
      name: "Sarah L.",
      role: "Customer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      story: "I needed a last-minute birthday gift delivered to my mom. City Pickups found a courier who picked it up from the store and delivered it within 30 minutes! The real-time tracking feature was so reassuring.",
      location: "Hamburg, Germany"
    }
  ];
  
  const impactStats = [
    {
      value: "€15,000+",
      label: "Donated to local charities"
    },
    {
      value: "75%",
      label: "Fewer emissions than traditional delivery"
    },
    {
      value: "€2.5M",
      label: "Added to local economies"
    },
    {
      value: "5,000+",
      label: "Local businesses supported"
    }
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Courier Meet & Greet",
      date: "June 15, 2023",
      location: "Mauerpark, Berlin",
      description: "Join fellow couriers for networking, tips sharing, and refreshments. Meet the City Pickups team and learn about upcoming platform features."
    },
    {
      id: 2,
      title: "Small Business Workshop",
      date: "June 22, 2023",
      location: "Impact Hub, Berlin",
      description: "Learn how to leverage City Pickups to grow your small business. Topics include delivery integration, customer experience, and marketing strategies."
    },
    {
      id: 3,
      title: "Community Clean-up Day",
      date: "July 8, 2023",
      location: "Multiple Locations",
      description: "Join us in giving back to our communities. We'll be organizing clean-up teams in Berlin, Hamburg, and Munich. All participants receive bonus Delivery Points!"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Our Community</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        City Pickups is more than a delivery service—it's a thriving community of customers, couriers, and local businesses working together to create stronger neighborhoods.
      </p>
      
      {/* Community Impact Stats */}
      <div className="bg-primary text-white p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Community Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {impactStats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Community Stories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Community Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityStories.map((story) => (
            <div key={story.id} className="card p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{story.name}</h3>
                  <div className="text-sm text-gray-600">{story.role} • {story.location}</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{story.story}"</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Delivery Points Program */}
      <section className="bg-secondary p-8 rounded-lg mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Delivery Points Program</h2>
          <p className="mb-8">
            Our loyalty program rewards community members while supporting local causes. Earn points with every delivery, then use them for discounts or donate to charity partners.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Earn</h3>
              <p className="text-gray-700">Get 1 point for every €1 spent on deliveries. Community Members earn 2x points!</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Redeem</h3>
              <p className="text-gray-700">Use your points for discounts on future deliveries, or exchange them for local business vouchers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-2">Give Back</h3>
              <p className="text-gray-700">Donate your points to local charities and watch your community thrive together.</p>
            </div>
          </div>
          
          <Link to="/login" className="primary-btn px-6 py-3 rounded-lg inline-block">
            Join & Start Earning Points
          </Link>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Upcoming Community Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="card p-6 hover:shadow-lg transition duration-300">
              <div className="bg-primary text-white text-sm py-1 px-3 rounded inline-block mb-3">
                {event.date}
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <a href="#" className="text-primary font-medium hover:underline">Learn More</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/contact" className="bg-white border border-primary text-primary px-6 py-3 rounded-lg hover:bg-gray-50 inline-block">
            View All Events
          </Link>
        </div>
      </section>
      
      {/* Join Community CTA */}
      <section className="bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Whether you need deliveries, want to become a courier, or are a business looking to expand your reach—City Pickups has a place for you in our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login" className="accent-btn px-6 py-3 rounded-lg">
            Sign Up Now
          </Link>
          <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-opacity-90">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
