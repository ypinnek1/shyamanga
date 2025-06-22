import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Users, Mail } from 'lucide-react';
import auditionsPoster from '../assets/auditions-poster.jpg';

const AuditionsPage = () => (
  <SectionWrapper id="auditions" title="Auditions & Casting" icon={Users}>
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
          <h3 className="text-2xl font-bold text-amber-400 mb-4">Your Stage Awaits</h3>
          <p className="text-lg text-gray-300 mb-6">
              We are always searching for fresh, passionate, and dedicated talent to bring our stories to life. If you are an actor with a fire to perform, we want to hear from you.
          </p>
          <div className="border-t border-gray-700 my-6"></div>
          <img
            src={auditionsPoster}
            alt="Open Auditions Poster"
            className="mx-auto mb-8 rounded-lg shadow-lg max-h-[600px] object-contain"
            style={{ backgroundColor: '#18181b', border: '1px solid #27272a' }}
          />
          <h4 className="text-xl font-semibold mb-3">How to Submit</h4>
          <p className="text-gray-400 mb-6">
              For all casting inquiries and submissions, please send your portfolio to our casting department. Make sure to include the following:
          </p>
          <ul className="text-left max-w-md mx-auto list-disc list-inside text-gray-300 space-y-2 mb-8">
              <li>A professional headshot and a full-body photograph.</li>
              <li>A detailed resume of your acting experience.</li>
              <li>A link to your showreel (if available).</li>
              <li>Your primary contact information (phone and email).</li>
          </ul>
          <div className="bg-gray-900 inline-flex items-center p-4 rounded-lg">
              <Mail className="text-amber-400 mr-3 h-6 w-6" />
              <a href="mailto:shyamangapictures@gmail.com" className="text-xl font-mono text-white hover:text-amber-400 transition-colors">
                  shyamangapictures@gmail.com
              </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
              Please note that due to the high volume of submissions, we can only respond to those selected for an audition. We do not accept unsolicited scripts or story ideas. Thank you for your interest in Shyamanga Pictures.
          </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AuditionsPage;
