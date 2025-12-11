import React from 'react';

const Footer = ({ darkMode }) => (
  <div className={`text-center mt-8 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
    Made with ❤️ using React + Tailwind CSS
  </div>
);

export default Footer;