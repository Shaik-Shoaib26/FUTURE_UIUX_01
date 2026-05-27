import { FormEvent, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Smile } from 'lucide-react';

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setSuccessMessage('Your appointment request has been submitted successfully!');
    window.setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 pb-16 md:pb-0">
      
      {/* Page Header */}
      <section className="bg-brand-900 text-white pt-16 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold mb-4">Contact Us</h1>
          <p className="text-brand-100 text-lg">We're here to help. Book an appointment or ask a question.</p>
        </div>
      </section>

      {/* Main Container - Pulled up to overlap header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 w-full mb-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            
            {/* Contact Information Cards (Left side) */}
            <div className="lg:col-span-2 bg-brand-50 p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-brand-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-200/50 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-brand-700 font-medium text-lg hover:underline"><a href="tel:+919876543210">(+91) 98765 43210</a></p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Sat for calls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-200/50 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">123 Dental Way, Suite 100<br/>Tirupati, AP 517501</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-200/50 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600"><a href="mailto:hello@brightsmile.in" className="hover:text-brand-600">hello@brightsmile.in</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-200/50 rounded-full flex items-center justify-center shrink-0 text-brand-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 8AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 9AM - 2PM</p>
                    <p className="text-gray-500 text-sm font-medium mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Kids Dentistry Alert Box */}
              <div className="mt-12 bg-pink-50 border border-pink-200 p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-pink-700 font-bold mb-2">
                  <Smile className="w-6 h-6" /> Kids Dentistry Available
                </div>
                <p className="text-pink-800/80 text-sm mb-4">We provide a fun, relaxing, and safe environment for your child's dental journey.</p>
                <button className="block w-full py-3 bg-pink-600 hover:bg-pink-700 text-white text-center font-semibold rounded-xl transition-colors">
                  Book for Your Child
                </button>
              </div>
            </div>

            {/* Form Container (Right Side) */}
            <div className="lg:col-span-3 p-8 sm:p-12 bg-white">
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">Book an Appointment</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and our front desk will call you to confirm your desired time slot.</p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {successMessage && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800 shadow-sm">
                    {successMessage}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm" placeholder="(555) 000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm bg-white cursor-pointer" required>
                      <option value="">Select a service...</option>
                      <option value="cleaning">General Checkup & Cleaning</option>
                      <option value="pain">Tooth Pain / Root Canal</option>
                      <option value="implants">Dental Implants Consultation</option>
                      <option value="braces">Braces / Aligners</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm text-gray-700 cursor-pointer" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all shadow-sm resize-none" placeholder="Any specific concerns or symptoms?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 h-96 w-full relative">
        {/* Placeholder for actual Google Map iframe */}
        <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-400">
          <MapPin className="w-12 h-12 mb-2 opacity-50" />
          <p className="font-medium text-lg">Interactive Google Map goes here</p>
          <p className="text-sm">123 Dental Way, Suite 100, Tirupati, AP 517501</p>
        </div>
      </section>

    </div>
  );
}
