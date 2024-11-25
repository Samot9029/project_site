import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SpotrebniElektronika } from './pages/SpotrebniElektronika';
import { Autoelektronika } from './pages/Autoelektronika';
import { SatelityAnteny } from './pages/SatelityAnteny';
import { Galerie } from './pages/Galerie';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="spotrebni-elektronika" element={<SpotrebniElektronika />} />
        <Route path="autoelektronika" element={<Autoelektronika />} />
        <Route path="satelity-anteny" element={<SatelityAnteny />} />
        <Route path="galerie" element={<Galerie />} />
      </Route>
    </Routes>
  );
}

export default App;