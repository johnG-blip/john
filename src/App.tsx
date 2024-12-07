import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomePage />;
      case 'catalog':
        return <CatalogPage />;
      case 'videos':
        return <VideoSection />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onTabChange={setCurrentTab} currentTab={currentTab} />
      
      {renderContent()}

      <div className="mt-auto">
        <section className="bg-red-50 py-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¡Queremos conocer tu opinión!</h3>
          <p className="mb-6">Tu retroalimentación es muy importante para mejorar nuestros productos y servicios.</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmC_QOyA0Wa-yIhn7iqeBMDds_rb8QA5mE3u-6-zxk17RTyg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors"
          >
            Participa en la encuesta
          </a>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;