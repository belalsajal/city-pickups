import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">Transparent Pricing</h1>
      
      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-center mb-12">
          At City Pickups, we believe in complete transparency. Our simple pricing structure ensures you know exactly what you're paying for, with no hidden fees.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="card p-6 flex flex-col hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-center mb-4">Basic</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">€1.80</span>
              <span className="text-gray-600"> + €0.90/km</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                First delivery free (up to 5km)
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Delivery within 2 hours
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time tracking
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                1 Delivery Point per €1 spent
              </li>
            </ul>
            <Link to="/login" className="mt-auto w-full primary-btn py-2 rounded text-center">Get Started</Link>
          </div>
          
          {/* Community Member Plan */}
          <div className="card p-6 flex flex-col relative transform scale-105 border-2 border-primary">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Community Member</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">€4.50</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                No base fee (€0.90/km only)
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Priority matching with couriers
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                2x Delivery Points earned
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Free deliveries on your birthday
              </li>
            </ul>
            <Link to="/login" className="mt-auto w-full primary-btn py-2 rounded text-center">Become a Member</Link>
          </div>
          
          {/* Business Plan */}
          <div className="card p-6 flex flex-col hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-center mb-4">Business</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">€45</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Unlimited deliveries within 5km
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                API integration for your website
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Branded tracking experience
              </li>
            </ul>
            <Link to="/contact" className="mt-auto w-full primary-btn py-2 rounded text-center">Contact Sales</Link>
          </div>
        </div>
        
        {/* Additional Services */}
        <div className="bg-secondary p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Courier Plus</h3>
              <p className="text-gray-700 mb-4">For couriers who want to maximize their earnings.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">€9/month</span>
                <Link to="/contact" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Large Item Delivery</h3>
              <p className="text-gray-700 mb-4">For items over 10kg or larger than standard dimensions.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">+€3 surcharge</span>
                <Link to="/contact" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Express Delivery</h3>
              <p className="text-gray-700 mb-4">Guaranteed delivery within 30 minutes (where available).</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">+€4 surcharge</span>
                <Link to="/contact" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Insurance</h3>
              <p className="text-gray-700 mb-4">Additional coverage for high-value items.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">€1 per €100 value</span>
                <Link to="/contact" className="text-primary font-medium hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="text-lg font-semibold mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-700">No. We pride ourselves on transparency. You only pay the base fee plus per-kilometer rate, with optional surcharges for special services that are clearly communicated before you confirm your delivery.</p>
            </div>
            
            <div className="card p-5">
              <h3 className="text-lg font-semibold mb-2">How are distances calculated?</h3>
              <p className="text-gray-700">We calculate the actual travel distance between pickup and dropoff locations using our mapping technology, not just the straight-line distance.</p>
            </div>
            
            <div className="card p-5">
              <h3 className="text-lg font-semibold mb-2">Can I cancel a delivery?</h3>
              <p className="text-gray-700">You can cancel a delivery for free if it hasn't been accepted by a courier yet. After acceptance, a cancellation fee may apply depending on how far along the delivery process is.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
