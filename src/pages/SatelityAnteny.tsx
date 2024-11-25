import React from 'react';
import { Satellite, Antenna, Tv, Wifi, Settings, Signal } from 'lucide-react';

const services = [
  {
    icon: Satellite,
    title: 'Satelitní systémy',
    description: 'Montáž a servis satelitních přijímačů, parabol a LNB konvertorů.',
  },
  {
    icon: Antenna,
    title: 'TV antény',
    description: 'Instalace a opravy televizních antén pro příjem DVB-T2 vysílání.',
  },
  {
    icon: Tv,
    title: 'Společné TV rozvody',
    description: 'Návrh a realizace rozvodů pro bytové domy a komerční objekty.',
  },
  {
    icon: Wifi,
    title: 'Internetové připojení',
    description: 'Instalace přijímačů pro bezdrátové internetové připojení.',
  },
  {
    icon: Settings,
    title: 'Nastavení a ladění',
    description: 'Profesionální nastavení a optimalizace příjmu všech typů signálů.',
  },
  {
    icon: Signal,
    title: 'Měření signálu',
    description: 'Analýza kvality signálu a odstranění rušení pomocí profesionálních měřicích přístrojů.',
  },
];

export function SatelityAnteny() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Satelity a antény
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Poskytujeme komplexní služby v oblasti instalace a servisu satelitní a anténní techniky.
          Zajistíme kvalitní příjem televizního a internetového signálu.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}