import React from 'react';

export function HomePage() {
  return (
    <div className="bg-yellow-400 min-h-screen py-32 text-center">
      <h1 className="text-6xl font-bold text-orange-900 mb-6">
        Bienvenido a nuestro Supermercado
      </h1>
      <img src="/d.png" alt="Logo del Supermercado" className="mx-auto mb-8" />
      <p className="text-2xl text-gray-800 max-w-3xl mx-auto px-4">
        Llena tu carrito de frescura, calidad y grandes ofertas! En nuestro supermercado, 
        cada visita es una oportunidad para ahorrar y disfrutar de lo mejor para ti y tu familia.
      </p>
    </div>
  );
}