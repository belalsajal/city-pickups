import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// HowItWorksPage component
export default function HowItWorksPage() {
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
      <section id="how-it-works-hero" className={`py-20 bg-secondary ${visibleSection === 'how-it-works-hero' ? 'fade-in' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">How City Pickups Delivers for Your Community</h1>
            <p className="text-xl text-gray-700 mb-8">
              Starting in Berlin, we're building a delivery platform that empowers local couriers, businesses, and neighborhoods—ready to grow across Germany, Europe, and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/" className="primary-btn px-6 py-3 rounded-lg">
                Get Started
              </Link>
              <a href="#detailed-process" className="bg-white border border-primary text-primary px-6 py-3 rounded-lg hover:bg-gray-50 transition">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Process Section */}
      <section id="detailed-process" className={`py-16 bg-white ${visibleSection === 'detailed-process' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Complete City Pickups Process</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            Our six-step process ensures reliable, efficient deliveries while strengthening local communities—whether you're in Berlin, Hamburg, or Amsterdam.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">1. Create a Delivery Request</h3>
              <p className="text-gray-600 mb-4">
                Using our intuitive form, customers specify pickup and dropoff locations, package details, and preferred delivery times. Whether you're sending a gift across Kreuzberg or important documents in Munich.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> Maria in Berlin needs to send a birthday gift to her friend in Friedrichshain. She fills out the request form in less than a minute.
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">2. Local Courier Matches</h3>
              <p className="text-gray-600 mb-4">
                Nearby couriers receive your request in real-time, selecting deliveries that fit their schedule and location. Our community of verified couriers ranges from students earning extra money to dedicated professionals.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> Thomas, a student at TU Berlin, sees Maria's request while in the area and accepts it, as it aligns with his route home.
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">3. AI-Optimized Routing</h3>
              <p className="text-gray-600 mb-4">
                Our smart technology calculates the fastest, most eco-friendly route, adapting to local traffic conditions whether in Berlin's busy Mitte district, Munich's Schwabing, or Amsterdam's city center.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> The app suggests Thomas avoid Warschauer Straße during rush hour, saving 15 minutes on his delivery time.
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">4. Real-Time Tracking</h3>
              <p className="text-gray-600 mb-4">
                Customers track their courier's progress on an interactive map with live ETA updates. Our WebSocket connections ensure accurate, up-to-the-second information no matter where you are.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> Maria watches Thomas's route on her phone and shares the tracking link with her friend so they know exactly when to expect the gift.
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">5. Delivery and Feedback</h3>
              <p className="text-gray-600 mb-4">
                Once the delivery is complete, both courier and customer rate the experience. This rating system maintains high standards and builds trust in our community across all cities.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> Thomas delivers the gift on time. Maria and Thomas both leave 5-star ratings and earn Delivery Points for their completed transaction.
              </div>
            </div>
            
            {/* Step 6 */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="text-primary text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">6. Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Delivery Points can be redeemed for discounts on future deliveries or donated to local charities, strengthening communities from Berlin to Paris and beyond.
              </p>
              <div className="bg-secondary p-3 rounded text-sm italic">
                <strong>Example:</strong> Maria donates her points to Berliner Tafel, while Thomas uses his toward his next City Pickups delivery fee.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Benefits Section */}
      <section id="community-benefits" className={`py-16 bg-secondary ${visibleSection === 'community-benefits' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Everyone in the Community</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            From the community, by the community, for the community—our platform delivers value to all participants, no matter where you are.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Customers */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">For Customers</h3>
              </div>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Affordable Pricing</strong>
                    <span className="text-gray-600">€1.80 base + €0.90/km, with your first delivery free up to 5km</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Fast, Reliable Service</strong>
                    <span className="text-gray-600">90% of our deliveries arrive in under 60 minutes</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Community Membership</strong>
                    <span className="text-gray-600">Join for €4.50/month to waive the base fee and earn 2x Delivery Points</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Local Support</strong>
                    <span className="text-gray-600">Every delivery supports your neighborhood's economy</span>
                  </div>
                </li>
              </ul>
              <div className="bg-primary bg-opacity-10 p-4 rounded">
                <p className="text-primary font-medium">"I use City Pickups weekly to send packages across Berlin. It's faster than Deutsche Post and supports local couriers." — Lisa, Berlin</p>
              </div>
            </div>
            
            {/* Couriers */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">For Couriers</h3>
              </div>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Fair Earnings</strong>
                    <span className="text-gray-600">80-90% of delivery fees go directly to you, plus tips</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Flexible Schedule</strong>
                    <span className="text-gray-600">Work whenever you want, for as long as you want</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Courier Plus</strong>
                    <span className="text-gray-600">€9/month for priority delivery access and higher per-km rates</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Community Recognition</strong>
                    <span className="text-gray-600">Earn badges and status based on delivery quality and volume</span>
                  </div>
                </li>
              </ul>
              <div className="bg-primary bg-opacity-10 p-4 rounded">
                <p className="text-primary font-medium">"I earn €200-300 per weekend making deliveries by bike in Hamburg. It keeps me fit and the flexible hours work perfectly with my studies." — Marcel, Hamburg</p>
              </div>
            </div>
            
            {/* Businesses */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">For Local Businesses</h3>
              </div>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Merchant Partner Plan</strong>
                    <span className="text-gray-600">€45/month for unlimited deliveries within 5km, API integration, and branded tracking</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">No Fleet Needed</strong>
                    <span className="text-gray-600">Access our network of couriers without hiring your own delivery staff</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Compete with Chains</strong>
                    <span className="text-gray-600">Offer delivery services that rival major competitors</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Local Promotion</strong>
                    <span className="text-gray-600">Get featured in our app as a local partner</span>
                  </div>
                </li>
              </ul>
              <div className="bg-primary bg-opacity-10 p-4 rounded">
                <p className="text-primary font-medium">"As a small bookstore in Prenzlauer Berg, we couldn't compete with Amazon. Now we offer same-day deliveries and our online sales have doubled." — Buchhandlung Morgenstern, Berlin</p>
              </div>
            </div>
            
            {/* Community Impact */}
            <div className="card p-6 hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">For Communities</h3>
              </div>
              <ul className="space-y-4 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Local Economic Support</strong>
                    <span className="text-gray-600">Keep money in neighborhoods—from Berlin's Neukölln to Munich's Glockenbach</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Environmental Benefits</strong>
                    <span className="text-gray-600">80% of our deliveries in central areas use bikes or public transport</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Charity Donations</strong>
                    <span className="text-gray-600">Donate Delivery Points to local causes or participate in monthly charity drives</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="block">Social Connection</strong>
                    <span className="text-gray-600">Create opportunities for neighbors to help neighbors</span>
                  </div>
                </li>
              </ul>
              <div className="bg-primary bg-opacity-10 p-4 rounded">
                <p className="text-primary font-medium">"City Pickups users have donated over €15,000 to Berliner Tafel through our platform, helping feed thousands of families in need." — Community Impact Report 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Points Section */}
      <section id="delivery-points-detail" className={`py-16 bg-white ${visibleSection === 'delivery-points-detail' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">The Delivery Points Program</h2>
              <p className="text-lg text-gray-700">
                Our loyalty program rewards everyone while strengthening communities across Europe.
              </p>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">1</div>
                  <p className="text-xl font-medium mb-2">Point</p>
                  <p>For every €1 spent or km delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">500</div>
                  <p className="text-xl font-medium mb-2">Points</p>
                  <p>= €4.50 discount on deliveries</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">1M+</div>
                  <p className="text-xl font-medium mb-2">Points</p>
                  <p>Donated to charity so far</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">How to Earn Points</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>1 point per €1 spent on deliveries as a customer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>1 point per km delivered as a courier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>50 points for referring new users who complete a delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>2x points for Community Members and Courier Plus subscribers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Bonus points during special events and promotions</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-6 hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">How to Use Points</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Redeem 500 points for €4.50 off your next delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Convert to vouchers for local business partners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Donate to local charities like Berliner Tafel or Hamburger Tafel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Apply toward Community Membership dues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Exchange for exclusive City Pickups merchandise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section id="comparison" className={`py-16 bg-secondary ${visibleSection === 'comparison' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            Unlike corporate delivery services, City Pickups is built by the community, for the community—and it shows in our approach.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">City Pickups</th>
                  <th className="py-4 px-6 text-center">Lieferando / Uber Eats</th>
                  <th className="py-4 px-6 text-center">Amazon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Delivery Types</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>All types (food, retail, personal)</div>
                    <div className="text-xs text-gray-500 mt-1">From groceries to gifts</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>Food only</div>
                    <div className="text-xs text-gray-500 mt-1">Limited to restaurants</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>E-commerce only</div>
                    <div className="text-xs text-gray-500 mt-1">Limited to online purchases</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Pricing</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>€1.80 + €0.90/km</div>
                    <div className="text-xs text-gray-500 mt-1">Transparent, distance-based</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>€2–€5 delivery fee</div>
                    <div className="text-xs text-gray-500 mt-1">+ surge pricing during peak hours</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>€3.99+ or "free" with Prime</div>
                    <div className="text-xs text-gray-500 mt-1">Hidden in Prime membership</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Speed</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>Typically under 60 minutes</div>
                    <div className="text-xs text-gray-500 mt-1">90% of deliveries</div>
                  </td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>30-60 minutes</div>
                    <div className="text-xs text-gray-500 mt-1">For nearby restaurants</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>Same day to multiple days</div>
                    <div className="text-xs text-gray-500 mt-1">Depending on item</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Courier Pay</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>80-90% of fees</div>
                    <div className="text-xs text-gray-500 mt-1">Fair, transparent pay</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>50-70% of fees</div>
                    <div className="text-xs text-gray-500 mt-1">Variable, algorithm-based</div>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <div>Fixed hourly rates</div>
                    <div className="text-xs text-gray-500 mt-1">Rigid schedules, high pressure</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Local Business Support</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>Strong focus</div>
                    <div className="text-xs text-gray-500 mt-1">Merchant Partner Program</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>Limited</div>
                    <div className="text-xs text-gray-500 mt-1">15-30% commission fees</div>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <div>Minimal</div>
                    <div className="text-xs text-gray-500 mt-1">Competes with local businesses</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">Community Focus</td>
                  <td className="py-4 px-6 text-center text-green-600">
                    <div>Core mission</div>
                    <div className="text-xs text-gray-500 mt-1">From, by, for the community</div>
                  </td>
                  <td className="py-4 px-6 text-center text-yellow-600">
                    <div>Limited</div>
                    <div className="text-xs text-gray-500 mt-1">Profit-driven approach</div>
                  </td>
                  <td className="py-4 px-6 text-center text-red-600">
                    <div>None</div>
                    <div className="text-xs text-gray-500 mt-1">Global corporate focus</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Scalability Vision Section */}
      <section id="scalability" className={`py-16 bg-white ${visibleSection === 'scalability' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">From Berlin to the World</h2>
            <p className="text-center text-lg text-gray-700 mb-12">
              Our community-focused model works anywhere people need deliveries—scaling from neighborhoods to cities to countries.
            </p>
            
            <div className="relative py-8 px-4">
              <div className="absolute inset-0 bg-primary opacity-5 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-4">Starting Local</h3>
                    <p className="text-gray-700 mb-4">
                      We began in Berlin's Kreuzberg and Friedrichshain districts, connecting neighbors through local deliveries. By focusing on specific neighborhoods, we built dense networks of couriers and customers.
                    </p>
                    <p className="text-gray-700">
                      Today, we cover all of Berlin with over 5,000 active users and 800+ couriers completing more than 10,000 deliveries monthly.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-4">Growing Regionally</h3>
                    <p className="text-gray-700 mb-4">
                      From Berlin, we've expanded to Hamburg and Munich, adapting our model to each city's unique geography and culture. Whether it's bike-friendly Hamburg or car-dependent Munich suburbs, our flexible approach works.
                    </p>
                    <p className="text-gray-700">
                      Each new city reaches profitability within 6 months as the community network effect takes hold.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-4">European Expansion</h3>
                    <p className="text-gray-700 mb-4">
                      Our next steps include Amsterdam, Paris, and Barcelona—cities with strong community values and dense urban cores perfect for our model.
                    </p>
                    <p className="text-gray-700">
                      The principles remain the same: empower local couriers, support neighborhood businesses, and build community through deliveries.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-4">Global Vision</h3>
                    <p className="text-gray-700 mb-4">
                      While we expand city by city, our technology platform is built for global scale. Our vision is a worldwide network of local delivery communities.
                    </p>
                    <p className="text-gray-700">
                      In Berlin, couriers bike through Kreuzberg. In Paris, they navigate Montmartre. Wherever you are, City Pickups connects your community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-primary mb-4">City Pickups is now active in:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-primary text-white px-4 py-2 rounded">Berlin</span>
                <span className="bg-primary text-white px-4 py-2 rounded">Hamburg</span>
                <span className="bg-primary text-white px-4 py-2 rounded">Munich</span>
                <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Amsterdam (Coming Soon)</span>
                <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Paris (Coming Soon)</span>
                <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Barcelona (Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="join-cta" className={`py-16 bg-primary text-white ${visibleSection === 'join-cta' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Community Delivery Revolution!</h2>
            <p className="text-xl mb-12">
              Whether you need a package delivered, want to earn as a courier, or are a business looking to expand your reach—City Pickups has a place for you in our community.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link to="/" className="accent-btn px-8 py-4 rounded-lg text-lg font-bold">
                Get Started
              </Link>
              <Link to="/pricing" className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition">
                See Pricing
              </Link>
            </div>
            
            <p className="text-white text-opacity-80">
              First delivery free up to 5km. No obligations, no subscription fees.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className={`py-16 bg-white ${visibleSection === 'faq' ? 'slide-up' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="card p-6 hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">How quickly can I get something delivered?</h3>
                <p className="text-gray-700">
                  Most deliveries in urban areas are completed within 60 minutes of being accepted by a courier. For less dense areas, it may take up to 90 minutes. You'll see an estimated delivery time before confirming your request.
                </p>
              </div>
              
              <div className="card p-6 hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">How do I become a courier?</h3>
                <p className="text-gray-700">
                  Sign up through our app or website, complete the verification process (including ID verification and background check), and you're ready to go! No minimum hours required—deliver when it works for you.
                </p>
              </div>
              
              <div className="card p-6 hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">What if something goes wrong with my delivery?</h3>
                <p className="text-gray-700">
                  Our Customer Support team is available 7 days a week. All deliveries include basic insurance coverage up to €50, with options for additional coverage for higher-value items. Just contact us within 24 hours of the delivery.
                </p>
              </div>
              
              <div className="card p-6 hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">How does City Pickups handle data privacy?</h3>
                <p className="text-gray-700">
                  We follow strict GDPR compliance for all European operations. We only share the minimum information needed between customers and couriers to complete deliveries successfully. You can review our complete Privacy Policy for details.
                </p>
              </div>
              
              <div className="card p-6 hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold text-primary mb-3">Is there a size or weight limit for deliveries?</h3>
                <p className="text-gray-700">
                  Standard deliveries are limited to packages weighing up to 10kg and measuring no more than 45x35x25cm. For larger or heavier items, we offer special deliveries with couriers who have cars or cargo bikes—just select "Large Item" when creating your delivery request.
                </p>
              </div>
            </div>
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
