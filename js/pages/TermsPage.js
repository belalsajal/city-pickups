import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Terms of Service</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 mb-8 text-center">
          Last Updated: May 15, 2023
        </p>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to City Pickups, a peer-to-peer delivery platform. These Terms of Service ("Terms") govern your use of the City Pickups website, mobile application, and services (collectively, the "Service"), operated by City Pickups GmbH ("we," "us," or "our").
          </p>
          <p className="text-gray-700">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="text-gray-700 mb-4">
            City Pickups is a platform that connects individuals and businesses ("Customers") who need items delivered with local couriers ("Couriers") who are willing to make those deliveries. We do not provide delivery services directly; we facilitate connections between Customers and Couriers.
          </p>
          <p className="text-gray-700">
            City Pickups is not responsible for the actions or inactions of Customers or Couriers. We do not guarantee the quality, safety, or legality of items delivered, nor the reliability, capability, or qualifications of Couriers beyond our basic verification processes.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            To use certain features of the Service, you must register for an account. You must provide accurate, current, and complete information during the registration process and keep your account information updated.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
          </p>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your account if any information provided during registration or thereafter proves to be inaccurate, not current, or incomplete.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Customer Terms</h2>
          <p className="text-gray-700 mb-4">
            <strong>4.1 Delivery Requests</strong>: When you create a delivery request, you agree to provide accurate details about the pickup and dropoff locations, package contents, and any special handling instructions.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>4.2 Prohibited Items</strong>: You agree not to request delivery of illegal items, dangerous goods, perishables (unless specifically arranged), oversized items beyond our stated limitations, or any items that violate our Prohibited Items Policy.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>4.3 Payment</strong>: You agree to pay all fees associated with your delivery requests, including the base fee, per-kilometer charge, and any applicable surcharges or subscription fees. All payments are processed securely through our payment processors.
          </p>
          <p className="text-gray-700">
            <strong>4.4 Cancellations</strong>: Cancellation fees may apply depending on when you cancel a delivery request relative to its acceptance by a Courier and their progress on the delivery.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Courier Terms</h2>
          <p className="text-gray-700 mb-4">
            <strong>5.1 Eligibility</strong>: To register as a Courier, you must meet our age requirements, pass our background check, and comply with all local regulations regarding delivery services.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>5.2 Independent Contractor Status</strong>: Couriers are independent contractors, not employees of City Pickups. You are free to determine when and where you work, which delivery requests you accept, and how you complete deliveries (subject to our guidelines and local regulations).
          </p>
          <p className="text-gray-700 mb-4">
            <strong>5.3 Delivery Standards</strong>: As a Courier, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Complete deliveries in a timely, professional manner</li>
            <li>Handle packages with care appropriate to their contents</li>
            <li>Follow all delivery instructions provided by Customers</li>
            <li>Comply with all traffic and safety regulations</li>
            <li>Maintain appropriate insurance for your delivery activities</li>
            <li>Communicate promptly with Customers when necessary</li>
          </ul>
          <p className="text-gray-700">
            <strong>5.4 Payment</strong>: You will receive payment for completed deliveries as described in our Courier Compensation Guide, with payments processed according to the schedule in our Courier Terms.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of City Pickups and its licensors. The Service is protected by copyright, trademark, and other laws of both Germany and foreign countries.
          </p>
          <p className="text-gray-700">
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of City Pickups.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            To the maximum extent permitted by law, City Pickups shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <p className="text-gray-700">
            In no event shall our total liability to you for all claims exceed the amount you have paid to us in the past six months.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p className="text-gray-700">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700">City Pickups GmbH</p>
            <p className="text-gray-700">Friedrichstraße 123</p>
            <p className="text-gray-700">10117 Berlin, Germany</p>
            <p className="text-gray-700">Email: legal@citypickups.com</p>
            <p className="text-gray-700">Phone: +49 30 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
}
