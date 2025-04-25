import React from 'react';
import { Link } from 'react-router-dom';

export default function ComingSoonPage({ title = "Coming Soon" }) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary mb-6">{title}</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-secondary rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">This page is coming soon!</h2>
          <p className="text-lg text-gray-700 mb-6">
            We're working hard to bring you an amazing experience. 
            This section is currently under development and will be available soon.
          </p>
          <div className="w-24 h-24 mx-auto mb-6">
            <svg className="animate-spin text-primary" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <Link to="/" className="primary-btn px-6 py-3 rounded-lg inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
