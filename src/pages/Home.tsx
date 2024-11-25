import React from 'react';
import { Phone, Mail, MapPin, Tv, Car, Satellite, Clock, Wrench, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-sm"></div>
        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Expert Servis Nový Jičín
            <span className="block text-2xl md:text-3xl text-blue-700 mt-2">Opravy Elektroniky</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Profesionální servis elektroniky pro domácnosti i firmy. Spolehlivé opravy za rozumné ceny.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                     hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            Kontaktujte nás
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">Naše Služby</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Tv, title: 'Spotřební elektronika', desc: 'Opravy televizorů, počítačů a další domácí elektroniky', link: '/spotrebni-elektronika' },
              { icon: Car, title: 'Autoelektronika', desc: 'Diagnostika a opravy elektronických systémů vozidel', link: '/autoelektronika' },
              { icon: Satellite, title: 'Satelity a antény', desc: 'Instalace a servis satelitních a anténních systémů', link: '/satelity-anteny' }
            ].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">O nás</h2>
              <p className="text-gray-700 text-lg mb-6">
                S více než 20 lety zkušeností jsme předním poskytovatelem servisních služeb v oblasti elektroniky 
                v Novém Jičíně a okolí. Naši technici jsou pravidelně školeni a používají nejmodernější diagnostické 
                vybavení.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">20+ let zkušeností</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Certifikovaní technici</span>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                alt="Servisní technik při práci"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">Kontaktujte nás</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Kontaktní informace</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Hoblíkova 39, Nový Jičín</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <a href="tel:556703970" className="hover:text-blue-600">556 703 970</a>
                      <span className="mx-2">|</span>
                      <a href="tel:603478580" className="hover:text-blue-600">603 478 580</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:expert@expertservis.cz" className="hover:text-blue-600">
                      expert@expertservis.cz
                    </a>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.931677555647!2d18.0097899!3d49.5940833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e33c844df9d9%3A0x7d7a834e1e4b8033!2sHobl%C3%ADkova%2039%2C%20741%2001%20Nov%C3%BD%20Ji%C4%8D%C3%ADn!5e0!3m2!1scs!2scz!4v1709669145061!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Expert Servis Nový Jičín. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}