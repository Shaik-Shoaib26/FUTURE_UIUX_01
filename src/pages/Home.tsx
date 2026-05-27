import { Link } from 'react-router-dom';
import { Star, Shield, Users, Award, CheckCircle2, ArrowRight, PhoneCall, Calendar, Smile } from 'lucide-react';

const SERVICES = [
  { id: "teeth-cleaning", title: "Teeth Cleaning", desc: "Professional cleaning to maintain oral hygiene and prevent decay." },
  { id: "root-canal", title: "Root Canal", desc: "Painless root canal treatments by endodontic specialists." },
  { id: "braces", title: "Braces & Aligners", desc: "Straighten your teeth with modern invisible aligners or traditional braces." },
  { id: "teeth-whitening", title: "Teeth Whitening", desc: "Brighten your smile up to 8 shades in a single clinical session." },
  { id: "dental-implants", title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { id: "kids-dentistry", title: "Kids Dentistry", desc: "Gentle and fun dental care to keep your little ones smiling bright." }
];

const REVIEWS = [
  { name: "Sarah Johnson", text: "The most painless dental experience I've ever had. Highly recommend Dr. Smith and the team!", rating: 5 },
  { name: "Michael Chen", text: "Very professional and clean clinic. They explained every step of my implant procedure.", rating: 5 },
  { name: "Emma Davis", text: "Finally found a dentist my kids aren't afraid of! Amazing staff and comfortable environment.", rating: 5 }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20 pb-16 md:pb-0">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-50 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-700 font-semibold text-sm mb-6">
                <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
                Rated 4.9/5 on Google Reviews
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-900 leading-[1.15] tracking-tight mb-6">
                Confident Smiles <br className="hidden sm:block" />
                Start Here.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Experience pain-free, modern dental care in a relaxing environment. From routine cleanings to advanced implants, we're here for your family's oral health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-brand-600 text-white font-semibold text-lg hover:bg-brand-700 shadow-xl shadow-brand-500/30 transition-all hover:-translate-y-1">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a href="tel:+15551234567" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-700 border-2 border-brand-200 font-semibold text-lg hover:bg-brand-50 hover:border-brand-300 transition-all">
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
              </div>
              
              {/* Trust Badges - Mini */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Accept Most Insurance</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Evening Appointments</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Kids Dentistry Available</div>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              {/* Background styling elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-200 to-brand-50 rounded-full blur-3xl opacity-50 z-0"></div>
              
              <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                  alt="Friendly Dentist smiling in clinic" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">15+ Years</p>
                  <p className="text-xs text-gray-500 font-medium">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
            <div className="text-center px-4">
              <h3 className="text-4xl font-heading font-bold text-brand-900 mb-2">4.9</h3>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Google Rating</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-heading font-bold text-brand-900 mb-2">15+</h3>
              <p className="text-gray-400 mb-2"><Shield className="w-5 h-5 inline-block mx-auto" /></p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Years Exp.</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-heading font-bold text-brand-900 mb-2">5</h3>
              <p className="text-gray-400 mb-2"><Award className="w-5 h-5 inline-block mx-auto" /></p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Certified Docs</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-heading font-bold text-brand-900 mb-2">10k+</h3>
              <p className="text-gray-400 mb-2"><Users className="w-5 h-5 inline-block mx-auto" /></p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Happy Patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-semibold text-lg mb-2">Our Services</h2>
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">Comprehensive Care for <br/> Your Whole Family</h3>
            <p className="text-gray-600">We offer a wide range of dental services under one roof, using the latest technology to ensure your comfort and the best possible results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow border border-gray-100 group">
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.desc}</p>
                <Link to={`/service/${service.id}`} className="inline-flex items-center text-brand-600 font-medium group-hover:text-brand-700">
                  Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Clinic Equipment" 
                className="rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
            </div>
            
            <div>
              <h2 className="text-brand-600 font-semibold text-lg mb-2">Why Choose Us</h2>
              <h3 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-8">Modern Dentistry with a Gentle Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0"><Users className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Experienced Doctors</h4>
                    <p className="text-gray-600">Our team consists of highly skilled specialists with decades of combined clinical experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0"><Shield className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Modern Equipment</h4>
                    <p className="text-gray-600">We utilize 3D imaging, digital scanners, and pain-free tech for precise diagnostics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0"><Award className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Affordable Care</h4>
                    <p className="text-gray-600">Transparent pricing, flexible payment plans, and we accept most major insurances.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-50 p-3 rounded-xl text-pink-500 shrink-0"><Smile className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Kids Dentistry</h4>
                    <p className="text-gray-600">A welcoming and comforting environment specifically designed to make children feel safe.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-300 font-semibold text-lg mb-2">Patient Stories</h2>
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">Don't Just Take Our Word For It</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-brand-50 text-lg mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-6">Book Your First Consultation Today</h2>
          <p className="text-brand-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Take the first step towards a healthier, brighter smile. Our friendly team is ready to welcome you.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-white text-brand-700 font-bold text-xl hover:bg-brand-50 shadow-2xl transition-all hover:scale-105 active:scale-95">
            <Calendar className="w-6 h-6" />
            Schedule Appointment
          </Link>
        </div>
      </section>

    </div>
  );
}
