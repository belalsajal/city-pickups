import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../app';

export const Header = () => {
  const { isAuthenticated, user, dispatch } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="w-full px-0 md:px-4">
        <div className="flex justify-between items-center">
          {/* Logo - positioned at far left */}
          {location.pathname === '/' ? (
            <div 
              className="flex items-center cursor-pointer ml-4" 
              onClick={scrollToTop}
              aria-label="Go to homepage"
            >
              <img 
                src="./assets/images/logo.svg" 
                alt="City Pickups" 
                className="h-16 w-auto"
              />
            </div>
          ) : (
            <Link to="/" className="flex items-center ml-4">
              <img 
                src="./assets/images/logo.svg" 
                alt="City Pickups" 
                className="h-16 w-auto"
              />
            </Link>
          )}
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mr-4">
            <Link 
              to="/how-it-works" 
              className={`font-medium ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'} transition`}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'} transition`}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'} transition`}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`font-medium ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'} transition`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="primary-btn px-5 py-2 rounded-lg font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`font-medium ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'} transition`}
                >
                  Login
                </Link>
                <Link to="/login" className="primary-btn px-5 py-2 rounded-lg font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <nav className="flex flex-col py-2">
              <Link 
                to="/how-it-works" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 text-left text-primary hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/login"
                    className="px-4 py-2 text-primary font-medium hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
