import React from 'react';
import { Car, Cpu, Battery, Radio, Navigation, Shield } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Diagnostika řídicích jednotek',
    description: 'Profesionální diagnostika závad řídicích jednotek motoru, ABS, airbagů a dalších systémů.',
  },
  {
    icon: Battery,
    title: 'Startéry a alternátory',
    description: 'Opravy a výměny startérů a alternátorů. Kontrola nabíjecí soustavy.',
  },
  {
    icon: Radio,
    title: 'Car Audio',
    description: 'Instalace a opravy autorádií, reproduktorů, zesilovačů a multimediálních systémů.',
  },
  {
    icon: Navigation,
    title: 'Navigační systémy',
    description: 'Montáž, aktualizace a opravy GPS navigací a palubních počítačů.',
  },
  {
    icon: Car,
    title: 'Komfortní systémy',
    description: 'Servis centrálního zamykání, elektrického ovládání oken a klimatizace.',
  },
  {
    icon: Shield,
    title: 'Zabezpečovací systémy',
    description: 'Montáž a servis alarmů, imobilizérů a sledovacích zařízení.',
  },
];

export function Autoelektronika() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Autoelektronika
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Specializujeme se na kompletní servis autoelektroniky. Disponujeme moderním diagnostickým
          vybavením pro všechny značky vozidel.
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