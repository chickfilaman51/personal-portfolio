import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleLinkClick(to) {
    setActivePage(to);
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  }

  function handleMenuIconClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
  }

  return (
    <nav id="header" className="z-10 sticky top-0 bg-gray-800 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-white text-xl flex items-center">
              <img className="w-14" src="/src/assets/logo.png" alt="Logo" />
              <span className="font-beckman lg:text-3xl text-lg font-bold text-blue-400 ml-2">Krish B.</span>
            </Link>
          </div>
          {/* Navigation links (hidden on small screens) */}
          <div className="hidden md:flex space-x-16">
            <Link
              to="/videos"
              className={`text-white text-lg hover:opacity-75 ${activePage === '/videos' ? 'text-blue-300 font-bold' : ''}`}
              onClick={() => handleLinkClick('/videos')}
            >
              Videos
            </Link>
            <Link
              to="/blog"
              className={`text-white text-lg hover:opacity-75 ${activePage === '/blog' ? 'text-blue-300 font-bold' : ''}`}
              onClick={() => handleLinkClick('/blog')}
            >
              Blog
            </Link>
            <Link
              to="/"
              className={`text-white text-lg hover:opacity-75 ${activePage === '/' ? 'text-blue-300 font-bold' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
          </div>
          {/* Menu icon (visible on small screens) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:opacity-75 focus:outline-none"
              onClick={handleMenuIconClick}
            >
              {/* You can use any menu icon here, for example: */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu (visible on small screens when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-gray-900 py-4 space-y-4">
            <Link
              to="/videos"
              className={`block px-4 py-2 text-white hover:bg-blue-800 ${activePage === '/videos' ? 'font-bold' : ''}`}
              onClick={() => handleLinkClick('/videos')}
            >
              Videos
            </Link>
            <Link
              to="/blog"
              className={`block px-4 py-2 text-white hover:bg-blue-800 ${activePage === '/blog' ? 'font-bold' : ''}`}
              onClick={() => handleLinkClick('/blog')}
            >
              Blog
            </Link>
            <Link
              to="/"
              className={`block px-4 py-2 text-white hover:bg-blue-800 ${activePage === '/' ? 'font-bold' : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
