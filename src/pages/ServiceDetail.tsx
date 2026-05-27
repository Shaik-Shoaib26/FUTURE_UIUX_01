import { CheckCircle2, ChevronRight, PhoneCall, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { useState } from 'react';

export default function ServiceDetail() {
  const [showMessage, setShowMessage] = useState(false);
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? SERVICES_DATA[serviceId] : null;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen pt-20 pb-16 md:pb-0">
      
      {/* Hero Breadcrumb & Title */}
      <section className="bg-brand-50 pt-10 pb-16 border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-gray-400">Services</span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-brand-600 font-medium">{service.title}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {service.subtitle}
              </p>
              <div className="text-brand-700 font-bold text-2xl mb-8">
                {service.price}
              </div>
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-0.5">
                Book a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-12">
              
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">What is {service.title}?</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>{service.whatIsIt}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle2 className="w-6 h-6 text-brand-600 shrink-0" />
                      <span className="font-medium text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {service.process && (
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">The Process</h3>
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-200 before:to-transparent">
                    {service.process.map((p, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-100 text-brand-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">{p.step}</div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                          <p className="text-sm text-gray-600">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faq.map((f, idx) => (
                    <details key={idx} className="group bg-gray-50 rounded-xl max-w-3xl open:bg-white open:shadow-sm open:ring-1 open:ring-black/5">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-gray-900">
                        {f.q}
                        <span className="ml-4 shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-gray-600">
                        {f.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Form / Sticky CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Interested?</h4>
                <p className="text-gray-600 mb-6 text-sm">Schedule a consultation to see if {service.title} is right for you.</p>
                
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setShowMessage(true);
                  setTimeout(() => setShowMessage(false), 3000);
                }}>
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" required />
                  </div>
                  <div>
                    <button className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-md">
                      Request Appointment
                    </button>
                  </div>
                  {showMessage && (
                    <div className="text-center text-green-600 font-medium animate-pulse">Your appointment request has been submitted successfully!</div>
                  )}
                  <p className="text-xs text-center text-gray-400 mt-4">We will call you to confirm your appointment time.</p>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm font-medium text-gray-500 mb-3">Or call us immediately for urgent queries</p>
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-brand-600 font-bold text-lg hover:text-brand-700">
                    <PhoneCall className="w-5 h-5" />
                    (+91) 98765 43210
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}