import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => (
  <SectionWrapper id="contact" title="Get In Touch" icon={Mail}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">Contact Information</h3>
        <p className="text-gray-300 mb-6">
          For general inquiries, partnerships, or business-related questions, please reach out to us.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-amber-400 h-6 w-6 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Registered Address</h4>
              <p className="text-gray-400">H:NO-59C/D, 2ND FLOOR, MLA COLONY, ROAD NO 12, BANJARAHILLS, HYDERABAD.</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="text-amber-400 h-6 w-6 mr-4" />
             <div>
              <h4 className="font-semibold text-white">General Inquiries</h4>
              <a href="mailto:shyamangapictures@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">shyamangapictures@gmail.com</a>
            </div>
          </div>
           <div className="flex items-center">
            <Phone className="text-amber-400 h-6 w-6 mr-4" />
             <div>
              <h4 className="font-semibold text-white">Phone</h4>
              <p className="text-gray-400">9550619486</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">Send Us a Message</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Your Name" className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="email" placeholder="Your Email" className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-gray-700 text-white p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400" />
          <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-700 text-white p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400"></textarea>
          <button type="submit" className="w-full bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </SectionWrapper>
);

export default ContactPage;
