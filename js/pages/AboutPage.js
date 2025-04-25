import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">About City Pickups</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <div className="bg-secondary p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At City Pickups, we're building a community-powered delivery network that connects local couriers with people and businesses who need items delivered. Our mission is to make local deliveries faster, more affordable, and more sustainable while creating flexible earning opportunities and strengthening local economies.
            </p>
          </div>
          
          <p className="text-gray-700 mb-6">
            Founded in Berlin in 2022, City Pickups has grown from a small team with a big idea to a thriving community of thousands of users across multiple German cities. We're proud to be a German company bringing innovation to the delivery space with a focus on community values and sustainability.
          </p>
          
          <p className="text-gray-700">
            Our platform is built on the principle that delivery services should be accessible to everyone—whether you're a student sending a forgotten textbook to a classmate, a small business competing with e-commerce giants, or someone looking to earn flexible income as a courier.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                City Pickups began when our founder noticed a gap in the delivery market: while food delivery services were abundant, there was no easy way to quickly send other items across town. At the same time, many people were looking for flexible earning opportunities that fit around their studies or other commitments.
              </p>
              <p className="text-gray-700">
                What if we could connect these two groups, creating a win-win situation? From this simple idea, City Pickups was born—a platform where community members help each other through a peer-to-peer delivery network.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center p-4">
                [Image: City Pickups founding team in Berlin]
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-3">Our Growth Journey</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">2022</div>
                <div>City Pickups founded in Berlin's vibrant startup ecosystem</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">2022</div>
                <div>Launch of our beta platform with 100 couriers in Kreuzberg and Friedrichshain</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">2023</div>
                <div>Expansion to all Berlin districts with over 2,000 active users</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">2023</div>
                <div>Launch in Hamburg and Munich</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">2024</div>
                <div>Introduction of our Community Member subscription and Delivery Points program</div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-24 font-semibold text-primary">Today</div>
                <div>Over 5,000 active users across German cities, with plans to expand across Europe</div>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-700">
                We believe in the power of community. Every decision we make considers the impact on our users, couriers, and local neighborhoods.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to reducing the environmental impact of deliveries by promoting bike and public transport options and optimizing routes.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-700">
                We believe in clear, fair pricing and open communication. What you see is what you get—no hidden fees or surprise charges.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Trust & Safety</h3>
              <p className="text-gray-700">
                The safety of our community is paramount. We maintain high standards for courier verification and platform security.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously improve our platform with new features and technologies that make deliveries faster, more reliable, and more user-friendly.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                We're building a platform that's accessible to everyone, regardless of background or abilities.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          
          <p className="text-gray-700 mb-6">
            City Pickups is proudly built and operated by CLUQ AI SOLUTIONS, a Berlin-based technology company focused on creating innovative community platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Photo]</span>
              </div>
              <h3 className="font-semibold text-lg">Belal Sajal</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-700 mt-3">
                Leading our vision to transform local deliveries across Europe.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Photo]</span>
              </div>
              <h3 className="font-semibold text-lg">Tech Team</h3>
              <p className="text-gray-600">Engineering Excellence</p>
              <p className="text-gray-700 mt-3">
                Our talented engineers build and maintain the platform that connects our community.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Photo]</span>
              </div>
              <h3 className="font-semibold text-lg">Support Team</h3>
              <p className="text-gray-600">Customer Champions</p>
              <p className="text-gray-700 mt-3">
                Always ready to help our community with any questions or concerns.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="mb-6">
            We're just getting started! Join us in building a better, more connected future for local deliveries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="accent-btn px-6 py-3 rounded-lg inline-block">
              Sign Up Now
            </Link>
            <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-lg inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
