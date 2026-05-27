import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-24 md:pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-4 shadow-sm p-0 rounded-none bg-transparent">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-700 font-bold text-xl">
                BS
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">Bright Smile</span>
            </div>
            <p className="text-brand-100 leading-relaxed max-w-sm">
              Providing premium, modern, and compassionate dental care for you and your whole family.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-brand-100 hover:text-white transition-colors bg-white/10 p-2 rounded-full"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors bg-white/10 p-2 rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-brand-100 hover:text-white transition-colors bg-white/10 p-2 rounded-full"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-brand-100 hover:text-white transition-colors inline-block">Home</Link></li>
              <li><Link to="/service/teeth-cleaning" className="text-brand-100 hover:text-white transition-colors inline-block">Services</Link></li>
              <li><Link to="/contact" className="text-brand-100 hover:text-white transition-colors inline-block">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-brand-100 hover:text-white transition-colors inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-100">
                <MapPin className="w-5 h-5 shrink-0 text-white" />
                <span>123 Dental Way, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-brand-100">
                <Phone className="w-5 h-5 shrink-0 text-white" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-brand-100">
                <Mail className="w-5 h-5 shrink-0 text-white" />
                <a href="mailto:hello@brightsmile.com" className="hover:text-white transition-colors">hello@brightsmile.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 tracking-wide">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-brand-100 border-b border-brand-700/50 pb-2">
                <span>Mon - Fri</span>
                <span className="font-medium text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-brand-100 border-b border-brand-700/50 pb-2">
                <span>Saturday</span>
                <span className="font-medium text-white">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-brand-100 pb-2">
                <span>Sunday</span>
                <span className="font-medium text-brand-300">Closed</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-brand-100 bg-brand-800/50 p-3 rounded-lg border border-brand-700/50">
              <Smile className="w-5 h-5 text-brand-300" />
              <span className="text-sm font-medium">Proudly offering Kids Dentistry services</span>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-brand-800 text-center text-sm text-brand-200">
          <p>&copy; {new Date().getFullYear()} Bright Smile Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
