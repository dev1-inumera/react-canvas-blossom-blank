
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 sm:px-10 border-t mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ReactBlank. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Terms
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
