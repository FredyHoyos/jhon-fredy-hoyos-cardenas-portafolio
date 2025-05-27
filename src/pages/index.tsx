import React, { useState } from 'react';
import PresentationProfile from '@/components/organisms/PresentationProfile';
import Networks from '@/components/organisms/Networks';
import TargetPresentation from '@/components/organisms/TargetPresentation';
import Knowledge from '@/components/organisms/Knowledge';
import Education from '@/components/organisms/Education';
import Portafolio from '@/components/organisms/Portafolio';
import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Contact from '@/components/organisms/Contac';
import ColorCustomizer from '@/components/atoms/ColorCustomizer';
import { User, X } from 'lucide-react';

export default function Home() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <NavBar />

      {/* Botón visible solo en pantallas pequeñas */}
      <div className="fixed top-14 left-1 z-50 md:hidden">
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="bg-primary text-white px-4 py-2 rounded shadow-lg"
        >
            {showProfile ? <X size={20} /> : <User size={20} />}
        </button>
      </div>

      <div className="flex flex-row lg:space-x-6 md:mr-20 lg:p-8 md:ml-72">

        {/* Mostrar PresentationProfile según tamaño y toggle */}
        <div className="hidden md:block">
          <PresentationProfile />
        </div>

        {showProfile && (
          <div className="block md:hidden fixed top-16 left-4 right-4 bg-white z-40 p-4 rounded-lg shadow-xl">
            <PresentationProfile />
          </div>
        )}

        <div className="flex flex-col space-y-6 flex-1">
          <div className="h-8"></div>

          <div id="target" className="relative">
            <TargetPresentation />
          </div>

          <div className="flex flex-col items-center justify-center">
            <ColorCustomizer />
          </div>

          <div id="knowledge">
            <Knowledge />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="portafolio">
            <Portafolio />
          </div>

          <div id="contact">
            <Contact />
          </div>

          <Footer />
        </div>

        <Networks />
      </div>
    </>
  );
}
