import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: '$10.00',
    image: '/P1.jpg',
    audio: '/audios/audio1.mp3'
  },
  {
    id: 2,
    name: 'Producto 2',
    price: '$15.00',
    image: '/P2.jpg',
    audio: '/audios/audio2.mp3'
  },
  {
    id: 3,
    name: 'Producto 3',
    price: '$20.00',
    image: '/P3.jpg',
    audio: '/audios/audio3.mp3'
  },
  {
    id: 4,
    name: 'Producto 4',
    price: '$25.00',
    image: '/P4.jpg',
    audio: '/audios/audio4.mp3'
  }
];

export function CatalogPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = sliderRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-900 text-center mb-12 font-poppins">
          ¡Explora nuestro catálogo de productos!
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-orange-600 text-white p-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-none w-72 snap-start bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <audio controls className="w-full">
                    <source src={product.audio} type="audio/mp3" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}