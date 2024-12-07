import React from 'react';

export function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-6 text-center">
      <p className="mb-2">2024 - Todos los derechos reservados</p>
      <p className="mb-2">
        <span className="inline-block mr-2">📱</span>
        Teléfono: +57 300 4889389
      </p>
      <p>
        <span className="inline-block mr-2">📍</span>
        <a 
          href="https://www.google.com/maps/place/Distrimarg+Dulceria+%26+Galleteria/@4.574207,-74.1673668,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-200"
        >
          Dirección: Cl. 73c Sur, Bogotá
        </a>
      </p>
    </footer>
  );
}