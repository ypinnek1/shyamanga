import React from 'react';

const Footer = () => (
    <footer className="bg-black text-gray-500">
        <div className="container mx-auto px-6 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Pinneka Productions Private Limited. All Rights Reserved.</p>
            <p className="text-xs mt-2">Designed with passion.</p>
        </div>
    </footer>
);

export default Footer;
