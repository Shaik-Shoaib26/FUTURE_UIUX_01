import { Phone, CalendarCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 px-2 py-2 safe-area-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a 
          href="tel:+15551234567" 
          className="flex-1 flex flex-col items-center justify-center py-2 bg-brand-50 text-brand-700 rounded-lg hover:bg-brand-100 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>
        
        <a 
          href="https://wa.me/15551234567" 
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 bg-[#E8F8F5] text-[#128C7E] rounded-lg hover:bg-[#D1F2EB] transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>

        <Link 
          to="/contact" 
          className="flex-[1.5] flex flex-col items-center justify-center py-2 bg-brand-600 text-white rounded-lg shadow-sm hover:bg-brand-700 transition-colors"
        >
          <CalendarCheck className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">Book Appt</span>
        </Link>
      </div>
    </div>
  );
}
