import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Smile } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                <Smile className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <span className="block font-heading font-bold text-2xl text-brand-900 tracking-tight">Bright Smile</span>
                <span className="block text-sm text-gray-500 tracking-wide">Dental Clinic</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Home</Link>
            <Link to="/service/teeth-cleaning" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-brand-600 font-medium transition-colors">Contact</Link>
            
            <a href="tel:+1234567890" className="flex items-center gap-2 text-brand-600 font-semibold px-4 py-2 rounded-full border-2 border-brand-100 hover:bg-brand-50 transition-colors">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            
            <Link to="/contact" className="px-6 py-2.5 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-600 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col shadow-inner">
            <Link 
              to="/" 
              className="block px-3 py-4 text-base font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/service/teeth-cleaning" 
              className="block px-3 py-4 text-base font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-4 text-base font-medium text-gray-800 hover:bg-brand-50 hover:text-brand-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="mt-4 pt-4 border-t border-gray-100 px-3 flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-brand-600 font-semibold px-4 py-3 rounded-xl border-2 border-brand-100 bg-brand-50">
                <Phone className="w-5 h-5" />
                Call (555) 123-4567
              </a>
              <Link 
                to="/contact" 
                className="flex justify-center px-4 py-3 bg-brand-600 text-white font-medium rounded-xl shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
