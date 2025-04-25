import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Customer Support</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        We're here to help! Choose the support option that works best for you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form Card */}
        <div className="card p-6 hover:shadow-lg transition duration-300">
          <div className="bg-primary text-white p-3 inline-flex rounded-full mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Send a Message</h2>
          <p className="text-gray-600 mb-3">Fill out our contact form and we'll get back to you within 24 hours.</p>
          <a href="#contact-form" className="text-primary font-medium hover:underline">Contact Us</a>
        </div>
        
        {/* FAQ Card */}
        <div className="card p-6 hover:shadow-lg transition duration-300">
          <div className="bg-primary text-white p-3 inline-flex rounded-full mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Browse FAQs</h2>
          <p className="text-gray-600 mb-3">Find answers to commonly asked questions about our services.</p>
          <Link to="/faqs" className="text-primary font-medium hover:underline">View FAQs</Link>
        </div>
        
        {/* Phone Support Card */}
        <div className="card p-6 hover:shadow-lg transition duration-300">
          <div className="bg-primary text-white p-3 inline-flex rounded-full mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-600 mb-3">Speak directly with our support team during business hours.</p>
          <a href="tel:+4930123456789" className="text-primary font-medium hover:underline">+49 30 123 456 789</a>
          <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-8pm, Sat: 9am-5pm</p>
        </div>
      </div>
      
      {/* Help Topics */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Common Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/faqs#delivery-issues" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Delivery Issues & Problem Resolution</span>
          </Link>
          
          <Link to="/faqs#account" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">Account & Profile Settings</span>
          </Link>
          
          <Link to="/faqs#payment" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="font-medium">Payments & Billing</span>
          </Link>
          
          <Link to="/faqs#courier" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Becoming a Courier</span>
          </Link>
          
          <Link to="/faqs#business" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium">Business & Merchant Solutions</span>
          </Link>
          
          <Link to="/faqs#safety" className="card p-5 hover:shadow-md transition flex items-center">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Safety & Security</span>
          </Link>
        </div>
      </div>
      
      {/* Contact Form */}
      <div id="contact-form" className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="mb-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="primary-btn py-2 px-6 rounded"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Delivery Issue">Delivery Issue</option>
                <option value="Account Problem">Account Problem</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Become a Courier">Become a Courier</option>
                <option value="Business Partnership">Business Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="primary-btn py-3 px-6 rounded w-full flex items-center justify-center"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
