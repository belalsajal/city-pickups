import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Privacy Policy</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 mb-8 text-center">
          Last Updated: May 15, 2023
        </p>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            City Pickups GmbH ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website, mobile application, and services (collectively referred to as the "Service").
          </p>
          <p className="text-gray-700">
            We adhere to the General Data Protection Regulation (GDPR) and are committed to ensuring the security and protection of the personal information that we process.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            <strong>2.1 Personal Information:</strong> When you register for an account, we collect your name, email address, phone number, and payment information. If you register as a courier, we may also collect additional verification information, including identification documents and background check information.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>2.2 Location Information:</strong> For the Service to function properly, we collect precise location information from customers creating delivery requests and from couriers fulfilling these requests.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>2.3 Usage Data:</strong> We collect information about how you interact with our Service, including log data, device information, and analytics data.
          </p>
          <p className="text-gray-700">
            <strong>2.4 Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information. See our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for more details.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Connect customers with couriers for delivery services</li>
            <li>Send service-related notifications and updates</li>
            <li>Respond to customer service requests and support needs</li>
            <li>Monitor and analyze usage and trends to improve your experience</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Verify courier eligibility and background information</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Other Users:</strong> When you request a delivery, limited information is shared between the customer and courier to facilitate the delivery process.</li>
            <li><strong>Service Providers:</strong> We may employ third-party companies to facilitate our Service, provide the Service on our behalf, or assist us in analyzing how our Service is used.</li>
            <li><strong>Payment Processors:</strong> We share payment information with payment processors to complete transactions.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
          </ul>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Data Protection Rights</h2>
          <p className="text-gray-700 mb-4">
            Under GDPR, you have the following rights:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Right to Access:</strong> You can request copies of your personal data.</li>
            <li><strong>Right to Rectification:</strong> You can ask us to correct inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure:</strong> You can ask us to delete your personal data in certain circumstances.</li>
            <li><strong>Right to Restrict Processing:</strong> You can ask us to limit the processing of your information.</li>
            <li><strong>Right to Data Portability:</strong> You can request that we transfer your data to another organization or directly to you.</li>
            <li><strong>Right to Object:</strong> You can object to our processing of your personal data.</li>
          </ul>
          <p className="text-gray-700">
            To exercise any of these rights, please contact us at privacy@citypickups.com.
          </p>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700">City Pickups GmbH</p>
            <p className="text-gray-700">Friedrichstraße 123</p>
            <p className="text-gray-700">10117 Berlin, Germany</p>
            <p className="text-gray-700">Email: privacy@citypickups.com</p>
            <p className="text-gray-700">Phone: +49 30 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
