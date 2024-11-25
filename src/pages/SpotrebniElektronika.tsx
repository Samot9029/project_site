import React from 'react';
import { Smartphone, Tv, Laptop, Printer, Speaker, Camera } from 'lucide-react';

const services = [
  {
    icon: Tv,
    title: 'Televizory a monitory',
    description: 'Opravy LCD, LED a OLED televizorů všech značek. Výměna podsvícení, opravy napájecích zdrojů.',
  },
  {
    icon: Laptop,
    title: 'Počítače a notebooky',
    description: 'Diagnostika závad, výměna komponent, čištění, instalace software.',
  },
  {
    icon: Smartphone,
    title: 'Mobilní telefony a tablety',
    description: 'Výměna displejů, baterií, konektorů nabíjení. Opravy po pádu či polití.',
  },
  {
    icon: Printer,
    title: 'Tiskárny',
    description: 'Servis inkoustových a laserových tiskáren. Čištění, kalibrace, opravy mechaniky.',
  },
  {
    icon: Speaker,
    title: 'Audio technika',
    description: 'Opravy zesilovačů, reproduktorů, sluchátek a dalších audio zařízení.',
  },
  {
    icon: Camera,
    title: 'Fotoaparáty a kamery',
    description: 'Servis digitálních fotoaparátů a kamer. Čištění senzorů, opravy mechaniky.',
  },
];

export function SpotrebniElektronika() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Spotřební elektronika
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Nabízíme profesionální servis široké škály spotřební elektroniky. Naši technici mají
          rozsáhlé zkušenosti s opravami různých typů zařízení.
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