import React from 'react';

export function VideoSection() {
  return (
    <div className="min-h-screen bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-900 text-center mb-12 font-poppins">
          Disfruta de nuestros videos
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="aspect-w-16 aspect-h-9">
              <video
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Presentación de Productos
              </h3>
            </div>
          </div>

          {/* Mensaje informativo */}
          <div className="text-center mt-8 p-6 bg-orange-100 rounded-lg">
            <p className="text-lg text-gray-700">
              ¡Mantente atento a nuestro canal de YouTube para más contenido!
            </p>
            <a 
              href="https://www.youtube.com/@DistrimargDulceriaGalleteria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <i className="fab fa-youtube mr-2"></i>
              Visitar nuestro canal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}