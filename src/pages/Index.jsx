import { useState, useEffect } from 'react';

const Index = () => {
  const [health, setHealth] = useState(100);
  const [ammo, setAmmo] = useState(30);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        setAmmo((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-blue-200 to-white">
      {/* Icy background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-white rounded-full opacity-30 blur-3xl"></div>
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full opacity-25 blur-3xl"></div>

      {/* Game UI */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Crosshair */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <line x1="12" y1="6" x2="12" y2="18" stroke="white" strokeWidth="2"/>
            <line x1="6" y1="12" x2="18" y2="12" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Health and Ammo UI */}
        <div className="mt-auto p-4 flex justify-between items-end">
          <div className="bg-black bg-opacity-50 p-2 rounded">
            <div className="text-red-500 font-bold">Health: {health}</div>
            <div className="w-32 h-2 bg-gray-300 rounded">
              <div className="h-full bg-red-500 rounded" style={{width: `${health}%`}}></div>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 p-2 rounded">
            <div className="text-yellow-500 font-bold">Ammo: {ammo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
