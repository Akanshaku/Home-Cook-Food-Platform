import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">HomeCook</h2>
          <p className="text-black text-sm">
            Fresh, homemade meals delivered to your doorstep. Taste the love and
            tradition in every bite.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-400 text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About Us</Link></li>
            <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-orange-400">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-3">Contact Us</h3>
          <p className="text-black text-sm"> +91 98765 43210</p>
          <p className="text-black text-sm"> support@homecook.in</p>
          <p className="text-black text-sm mt-2">Madhya Pradesh, India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">HomeCook</span> — Made with Love for food lovers.
      </div>
    </footer>
  );
};

export default Footer;
