import React from 'react';

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Security</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-center mb-12">
          At City Pickups, your security is our top priority. We've implemented robust measures to protect your data, accounts, and deliveries.
        </p>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p className="text-gray-700 mb-4">
            We employ industry-standard encryption technologies to protect your personal information and payment details. All data transmission between your device and our servers is secured using TLS/SSL encryption.
          </p>
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Our Security Measures Include:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>256-bit encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure data storage with limited access controls</li>
              <li>Compliance with GDPR and other relevant data protection regulations</li>
              <li>Strict internal data access policies</li>
            </ul>
          </div>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Security</h2>
          <p className="text-gray-700 mb-4">
            We've implemented multiple layers of protection to secure your account:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Two-Factor Authentication (2FA):</strong> Add an extra layer of security by enabling 2FA in your account settings.</li>
            <li><strong>Login Alerts:</strong> Receive notifications of suspicious login attempts.</li>
            <li><strong>Secure Password Requirements:</strong> We enforce strong password standards to protect your account.</li>
            <li><strong>Session Management:</strong> Easily view and terminate active sessions from your account settings.</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700">
              <strong>Security Tip:</strong> Never share your password or verification codes with anyone, including City Pickups staff. Our team will never ask for your password.
            </p>
          </div>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Courier Verification</h2>
          <p className="text-gray-700 mb-4">
            We thoroughly verify all couriers on our platform to ensure the safety and reliability of our service:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Identity verification through official government ID</li>
            <li>Comprehensive background checks</li>
            <li>Address verification</li>
            <li>Regular performance reviews</li>
            <li>Real-time monitoring systems</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Delivery Safety</h2>
          <p className="text-gray-700 mb-4">
            Every delivery on our platform includes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Real-time Tracking:</strong> Monitor your delivery's progress from pickup to dropoff.</li>
            <li><strong>Secure Handoff:</strong> Optional PIN verification for package delivery.</li>
            <li><strong>Delivery Insurance:</strong> Basic coverage for all deliveries with options for additional protection.</li>
            <li><strong>Incident Response:</strong> Dedicated team to handle any security concerns during delivery.</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reporting Security Issues</h2>
          <p className="text-gray-700 mb-4">
            If you identify a security vulnerability or have concerns about your account's security, please contact us immediately:
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-medium">Security Team</p>
            <p className="text-gray-700">Email: security@citypickups.com</p>
            <p className="text-gray-700">Emergency Phone: +49 30 123 456 789</p>
          </div>
        </div>
        
        <div className="bg-primary text-white p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Our Security Commitment</h2>
          <p className="mb-4">
            We continuously improve our security measures to protect our community. Security is not just a feature—it's foundational to everything we do at City Pickups.
          </p>
          <a href="mailto:security@citypickups.com" className="accent-btn px-6 py-2 rounded inline-block">
            Contact Security Team
          </a>
        </div>
      </div>
    </div>
  );
}
