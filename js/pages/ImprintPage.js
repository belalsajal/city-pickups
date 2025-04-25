import React from 'react';
import { Link } from 'react-router-dom';

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Impressum / Legal Notice</h1>
      <div className="max-w-3xl mx-auto mb-8">
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information according to § 5 TMG</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Company</h3>
            <p className="text-gray-700">CLUQ AI SOLUTIONS</p>
            <p className="text-gray-700">Uhlandstr. 22</p>
            <p className="text-gray-700">13156 Berlin</p>
            <p className="text-gray-700">Germany</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <p className="text-gray-700">Phone: +49 1722332813</p>
            <p className="text-gray-700">Email: info@citypickups.com</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Represented by</h3>
            <p className="text-gray-700">Belal Sajal (Owner & Managing Director)</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Commercial Register</h3>
            <p className="text-gray-700">Registered at: Amtsgericht Berlin-Charlottenburg</p>
            <p className="text-gray-700">Registration Number: HRB XXXXXX</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">VAT Identification Number</h3>
            <p className="text-gray-700">VAT ID: DE XXXXXXXXX</p>
            <p className="text-gray-700">According to § 27a of the German Value Added Tax Act</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Responsible for content according to § 55 Abs. 2 RStV</h3>
            <p className="text-gray-700">Belal Sajal</p>
            <p className="text-gray-700">Uhlandstr. 22</p>
            <p className="text-gray-700">13156 Berlin</p>
            <p className="text-gray-700">Germany</p>
          </div>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
          <p className="text-gray-700 mb-4">
            The European Commission provides a platform for online dispute resolution (OS): 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-gray-700">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Liability for Content</h2>
          <p className="text-gray-700 mb-4">
            As a service provider, we are responsible for our own content on these pages according to § 7 paragraph 1 of the TMG. According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </p>
          <p className="text-gray-700">
            Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such legal infringements, we will remove the relevant content immediately.
          </p>
        </div>
        
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Liability for Links</h2>
          <p className="text-gray-700">
            Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. If we become aware of any infringements, we will remove such links immediately.
          </p>
        </div>
        
        <div className="card p-6">
          <h2 className="text-2xl font-semibold mb-4">Copyright</h2>
          <p className="text-gray-700 mb-4">
            The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.
          </p>
          <p className="text-gray-700 mb-4">
            Downloads and copies of this site are only permitted for private, non-commercial use.
          </p>
          <p className="text-gray-700">
            Insofar as the content on this site was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/contact" className="primary-btn px-6 py-3 rounded-lg inline-block">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
