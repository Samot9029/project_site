import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    title: 'Oprava elektroniky',
  },
  {
    url: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80',
    title: 'Diagnostika zařízení',
  },
  {
    url: 'https://images.unsplash.com/photo-1601839215170-e4650e1da27f?auto=format&fit=crop&q=80',
    title: 'Servis počítačů',
  },
  {
    url: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80',
    title: 'Oprava mobilních telefonů',
  },
  {
    url: 'https://images.unsplash.com/photo-1635501049460-8da8e68cd37a?auto=format&fit=crop&q=80',
    title: 'Instalace antén',
  },
  {
    url: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?auto=format&fit=crop&q=80',
    title: 'Satelitní technika',
  },
  {
    url: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&q=80',
    title: 'Autodiagnostika',
  },
  {
    url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80',
    title: 'Servis televizorů',
  },
  {
    url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80',
    title: 'Oprava notebooků',
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    title: 'Pracovní prostředí',
  },
  {
    url: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80',
    title: 'Diagnostické nástroje',
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    title: 'Servisní centrum',
  },
];

export function Galerie() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Galerie
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Prohlédněte si fotografie z našeho servisního centra a ukázky naší práce.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}