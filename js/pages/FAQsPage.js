import React, { useState } from 'react';

export default function FAQsPage() {
  // Track expanded FAQ items
  const [expandedItem, setExpandedItem] = useState(null);
  
  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "How does City Pickups work?",
      answer: "City Pickups connects people who need items delivered with local couriers. Simply create a delivery request through our app or website, specifying pickup and dropoff locations and package details. A nearby courier will accept your request, pick up your item, and deliver it to the destination. You can track the entire process in real-time."
    },
    {
      question: "How much does delivery cost?",
      answer: "Our basic pricing is €1.80 base fee plus €0.90 per kilometer. Community Members pay €4.50/month and have the base fee waived. Business accounts start at €45/month for unlimited local deliveries. Additional services like express delivery or large item delivery have small surcharges."
    },
    {
      question: "How quickly will my item be delivered?",
      answer: "Most deliveries in urban areas are completed within 60 minutes of being accepted by a courier. Standard deliveries are guaranteed within 2 hours, and Express deliveries (with a small surcharge) are guaranteed within 30 minutes where available."
    },
    {
      question: "How do I become a courier?",
      answer: "Sign up through our app or website, complete the verification process (including ID verification and background check), and you're ready to go! No minimum hours required—deliver when it works for you."
    },
    {
      question: "Is there a size or weight limit for deliveries?",
      answer: "Standard deliveries are limited to packages weighing up to 10kg and measuring no more than 45x35x25cm. For larger or heavier items, we offer special deliveries with couriers who have cars or cargo bikes—just select 'Large Item' when creating your delivery request."
    },
    {
      question: "What if something goes wrong with my delivery?",
      answer: "Our Customer Support team is available 7 days a week. All deliveries include basic insurance coverage up to €50, with options for additional coverage for higher-value items. Just contact us within 24 hours of the delivery."
    },
    {
      question: "How does City Pickups handle data privacy?",
      answer: "We follow strict GDPR compliance for all European operations. We only share the minimum information needed between customers and couriers to complete deliveries successfully. You can review our complete Privacy Policy for details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, PayPal, Google Pay, and Apple Pay. For business accounts, we also offer invoice payment options with net-30 terms."
    },
    {
      question: "What are Delivery Points?",
      answer: "Delivery Points are our loyalty program. You earn 1 point for every €1 spent (or km delivered as a courier). Community Members earn double points. Points can be redeemed for delivery discounts or donated to local charities."
    },
    {
      question: "Do you deliver to all areas?",
      answer: "We currently operate in major metropolitan areas. Starting in Berlin, we're expanding to other German and European cities. Check our app for real-time coverage information in your area."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Frequently Asked Questions</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Find answers to the most common questions about City Pickups. If you can't find what you're looking for, please contact our support team.
      </p>
      
      <div className="max-w-3xl mx-auto mb-12">
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              className="card overflow-hidden"
            >
              <button 
                className="w-full p-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedItem === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-5 pt-0 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-secondary p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Still Have Questions?</h2>
        <p className="text-center mb-6">
          Our support team is here to help you with any other questions you may have.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:support@citypickups.com" className="primary-btn py-3 px-6 rounded-lg text-center">
            Email Support
          </a>
          <a href="tel:+4930123456789" className="bg-white border border-primary text-primary py-3 px-6 rounded-lg text-center hover:bg-gray-50">
            Call Us: +49 30 123 456 789
          </a>
        </div>
      </div>
    </div>
  );
}
