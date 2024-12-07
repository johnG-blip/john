import React from 'react';

interface NavigationProps {
  onTabChange: (tab: string) => void;
  currentTab: string;
}

const socialLinks = [
  { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61569241297932' },
  { icon: 'instagram', url: 'https://www.instagram.com/distrimargdulceriagalleteria/' },
  { icon: 'youtube', url: 'https://www.youtube.com/@DistrimargDulceriaGalleteria' },
  { icon: 'tiktok', url: 'https://www.tiktok.com/@distrimargdulceriagallet' }
];

export function Navigation({ onTabChange, currentTab }: NavigationProps) {
  const navItems = [
    { label: 'Inicio', id: 'home' },
    { label: 'Catálogo', id: 'catalog' },
    { label: 'Videos', id: 'videos' }
  ];

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-orange-600 px-5 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <img src="/LOGO-1.png" alt="Logo del Supermercado" className="h-32 rounded-full" />
      
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleTabChange(item.id)}
                className={`font-poppins text-xl font-bold tracking-wider transition-colors ${
                  currentTab === item.id 
                    ? 'text-yellow-200' 
                    : 'text-white hover:text-yellow-200'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.icon}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-yellow-200 transition-colors"
          >
            <i className={`fab fa-${link.icon}`}></i>
          </a>
        ))}
      </div>
    </nav>
  );
}