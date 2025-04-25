import React from 'react';

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Cookie Policy</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 mb-8 text-center">
          Last Updated: May 15, 2023
        </p>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p className="text-gray-700 mb-4">
            Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, like your preferred language and other settings. That can make your next visit easier and the site more useful to you.
          </p>
          <p className="text-gray-700">
            City Pickups uses cookies and similar technologies to provide, protect, and improve our Service. This policy explains how and why we use these technologies and the choices you have.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Authentication:</strong> We use cookies to identify you when you visit our Service and as you navigate through pages.</li>
            <li><strong>Security:</strong> We use cookies as an element of the security measures to protect user accounts, including preventing fraudulent use of login credentials and protecting our Service generally.</li>
            <li><strong>Preferences:</strong> We use cookies to store information about your preferences and to personalize the Service for you.</li>
            <li><strong>Analytics:</strong> We use cookies to help us analyze the use and performance of our Service.</li>
            <li><strong>Advertising:</strong> We may use cookies to help us deliver targeted advertisements that are relevant to you.</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <p className="text-gray-700 mb-4">
            Our Service uses the following types of cookies:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the Service and use its features, such as accessing secure areas.</li>
            <li><strong>Performance Cookies:</strong> These cookies collect information about how you use the Service, such as which pages you visit most often.</li>
            <li><strong>Functionality Cookies:</strong> These cookies allow the Service to remember choices you make and provide enhanced, more personal features.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests.</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Cookie Choices</h2>
          <p className="text-gray-700 mb-4">
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Service.
          </p>
          <p className="text-gray-700">
            In addition to browser settings, you can control cookies through our cookie consent tool that appears when you first visit our Service, or by contacting us at privacy@citypickups.com.
          </p>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">5. Updates to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="text-gray-700">
            If you have any questions about our use of cookies, please contact us at privacy@citypickups.com.
          </p>
        </div>
      </div>
    </div>
  );
}
