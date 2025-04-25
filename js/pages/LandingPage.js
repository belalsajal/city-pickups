import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// LandingPage component
export default function LandingPage() {
  const [visibleSection, setVisibleSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;
      
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setVisibleSection(section.id);
        }
      });
      
      // Show back to top button after scrolling down
      const backToTopButton = document.querySelector('.back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 400) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className={`relative min-h-[80vh] flex items-center ${visibleSection === 'hero' ? 'fade-in' : ''}`}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-full bg-primary bg-opacity-90">
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Fast, Affordable Deliveries That Empower Your Community</h1>
              <p className="text-xl md:text-2xl mb-8">Need a package delivered fast? Want to earn extra cash as a courier? Connect with local couriers for quick, affordable deliveries across your city.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/login" className="primary-btn px-8 py-4 rounded-lg text-lg font-semibold text-center">Get Started</Link>
                <Link to="/how-it-works" className="bg-white border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition text-center">Learn More</Link>
              </div>
              <p className="mt-4">First delivery free up to 5km!</p>
            </div>
            
            {/* Hero image */}
            <div className="hidden md:block">
              <img 
                src="./public/assets/images/hero-background.jpg" 
                alt="City Pickups couriers delivering in Berlin" 
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  console.error("Hero image failed to load");
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section id="problem" className={`py-16 bg-white ${visibleSection === 'problem' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ever Waited Hours for a Delivery?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-4xl text-primary mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Unpredictable Wait Times</h3>
              <p className="text-gray-600">"Your package will arrive between 9 AM and 6 PM." Sound familiar? We've all been there, waiting around all day for deliveries that arrive late or not at all.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-4xl text-primary mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Expensive Rush Fees</h3>
              <p className="text-gray-600">Need something delivered quickly? Get ready to pay premium prices. Express delivery shouldn't cost a fortune, especially for local items.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-4xl text-primary mb-4">🌎</div>
              <h3 className="text-xl font-semibold mb-2">Impersonal Service</h3>
              <p className="text-gray-600">Big delivery companies can't offer the personal touch. Your package is just one of thousands, handled by someone who doesn't know your neighborhood.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className={`py-16 bg-secondary ${visibleSection === 'solution' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover a Better Way to Deliver</h2>
            <p className="text-xl text-gray-700 mb-8">City Pickups connects you with local couriers for fast, fair-priced deliveries. Our community-powered approach means your packages arrive on time, every time, while supporting your local economy.</p>
            
            <div className="relative h-64 md:h-96 bg-gray-300 rounded-lg mb-8">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Courier helping a customer with a package]
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Simple, Transparent Pricing</h3>
              <p className="text-gray-700 mb-4">Just $2 base + $1/km. No hidden fees, no surprises.</p>
              <p className="text-gray-700">Join as a Community Member for $5/month to waive the base fee and earn 2x Delivery Points on every order!</p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">90%</div>
                  <p className="text-gray-600">deliveries under 1 hour</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <p className="text-gray-600">happy users</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <p className="text-gray-600">average rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className={`py-16 bg-white ${visibleSection === 'how-it-works' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How City Pickups Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6 text-center hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Request a Delivery</h3>
              <p className="text-gray-600">Enter pickup and dropoff locations, package details, and when you need it delivered. It takes less than a minute!</p>
            </div>
            
            <div className="card p-6 text-center hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Local Courier Accepts</h3>
              <p className="text-gray-600">A verified courier in your neighborhood accepts your request and heads to the pickup location.</p>
            </div>
            
            <div className="card p-6 text-center hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Track and Receive</h3>
              <p className="text-gray-600">Watch your delivery's journey in real-time and get notified the moment your package arrives.</p>
            </div>
          </div>
          
          {/* Add Learn More link - fixed positioning */}
          <div className="text-center">
            <Link to="/how-it-works" className="accent-btn px-6 py-3 rounded-lg font-semibold inline-block">
              Discover How It Works
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className={`py-16 bg-secondary ${visibleSection === 'features' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features You'll Love</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Follow your package's journey from pickup to delivery on an interactive map. No more wondering where your delivery is.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Smart Route Finding</h3>
              <p className="text-gray-600">Our technology picks the fastest, most eco-friendly routes, saving time for everyone and ensuring your deliveries arrive as quickly as possible.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Direct Messaging</h3>
              <p className="text-gray-600">Chat directly with your courier for special instructions or updates—no more playing phone tag or waiting on hold.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Trusted Couriers</h3>
              <p className="text-gray-600">All couriers are background-checked and rated. See reviews from other customers and know who's handling your package.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Pay securely through the app. Couriers only get paid when your delivery is successfully completed.</p>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-2xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Delivery Points</h3>
              <p className="text-gray-600">Earn 1 point per €1 spent. Redeem for discounts on future deliveries or donate to local charities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className={`py-16 bg-white ${visibleSection === 'benefits' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits for Everyone</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">For Customers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Get deliveries in minutes, not days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pay fair, transparent prices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Track your package in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Support local couriers in your community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Earn and redeem Delivery Points</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">For Couriers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Earn money on your own schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Choose deliveries that work for you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Get optimized routes to save time and fuel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Build a positive reputation with ratings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Receive weekly payments, no delays</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">For Local Businesses</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Offer same-day delivery to customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Compete with large online retailers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>No need to hire dedicated delivery staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Increase customer satisfaction and loyalty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Support your local community's economy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Points Section */}
      <section id="delivery-points" className={`py-16 bg-primary text-white ${visibleSection === 'delivery-points' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivery Points Program</h2>
            <p className="text-xl mb-8">Every delivery strengthens your neighborhood. Earn points with every delivery, then use them for discounts or support local causes.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-accent mb-2">Earn</h3>
                <p>Get 1 point for every €1 spent on deliveries. Community Members earn 2x points!</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-accent mb-2">Redeem</h3>
                <p>Use your points for discounts on future deliveries, or exchange them for local business vouchers.</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-bold text-accent mb-2">Give Back</h3>
                <p>Donate your points to local charities and watch your community thrive together.</p>
              </div>
            </div>
            
            <Link to="/community" className="accent-btn px-8 py-3 rounded-lg text-lg font-semibold">
              Learn More About Delivery Points
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 bg-white ${visibleSection === 'testimonials' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Community Says</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  SR
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Sarah R.</p>
                  <p className="text-sm text-gray-600">Customer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"I needed a last-minute gift delivered for my mom's birthday. City Pickups found a courier who got it there in 30 minutes! Mom was thrilled and so was I. This service is a game-changer."</p>
              <div className="mt-4 text-accent">
                ★★★★★
              </div>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  JT
                </div>
                <div className="ml-4">
                  <p className="font-semibold">James T.</p>
                  <p className="text-sm text-gray-600">Courier</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"I started as a courier to make extra money between college classes. Now I earn enough to cover my rent and I love connecting with people in my neighborhood. The flexible hours mean I can still focus on my studies."</p>
              <div className="mt-4 text-accent">
                ★★★★★
              </div>
            </div>
            
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  MB
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Maria's Bakery</p>
                  <p className="text-sm text-gray-600">Local Business</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"City Pickups saved my small bakery! We couldn't afford full-time delivery staff, but now we offer same-day delivery for our fresh bread and pastries. Our online orders have increased 35% since we partnered with City Pickups."</p>
              <div className="mt-4 text-accent">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className={`py-16 bg-secondary ${visibleSection === 'cta' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform How You Deliver?</h2>
            <p className="text-xl text-gray-700 mb-8">Join thousands of customers and couriers already using City Pickups for faster, more reliable deliveries that support your local community.</p>
            
            <Link to="/login" className="accent-btn px-8 py-4 rounded-lg text-lg font-bold inline-block">
              Join City Pickups Today
            </Link>
            
            <p className="mt-4 text-gray-600">First delivery free up to 5km. No obligations, no subscription fees.</p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className={`py-16 bg-white ${visibleSection === 'pricing' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple & Transparent Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-6 flex flex-col hover:scale-105 transition duration-300">
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
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 24 24">
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
            
            <div className="card p-6 flex flex-col hover:scale-105 transition duration-300">
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

          <div className="text-center mt-8">
            <Link to="/pricing" className="text-primary font-medium hover:underline inline-flex items-center">
              View Full Pricing Details
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Back to top button */}
      <button 
        className="back-to-top primary-btn p-3 rounded-full"
        onClick={scrollToTop}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  );
}
