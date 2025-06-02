import React, { useState } from 'react';
// Importación de componentes organizacionales que componen las secciones principales de la página
import PresentationProfile from '@/components/organisms/PresentationProfile';
import Networks from '@/components/organisms/Networks';
import TargetPresentation from '@/components/organisms/TargetPresentation';
import Knowledge from '@/components/organisms/Knowledge';
import Education from '@/components/organisms/Education';
import Portafolio from '@/components/organisms/Portafolio';
import Footer from '@/components/organisms/Footer';
import NavBar from '@/components/organisms/NavBar';
import Contact from '@/components/organisms/Contac'; // Nota: posible typo en 'Contac' (¿Contact?)
import Experience from '@/components/organisms/Experience';
import Certification from '@/components/organisms/Certification';
import ColorCustomizer from '@/components/atoms/ColorCustomizer';

// Iconos importados de la librería lucide-react para botones
import { User, X } from 'lucide-react';

export default function Home() {
  // Estado para controlar la visibilidad del componente PresentationProfile en móviles
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* Barra de navegación siempre visible */}
      <NavBar />

      {/* Botón flotante visible solo en dispositivos móviles (pantallas pequeñas) para mostrar/ocultar perfil */}
      <div className="fixed top-14 left-1 z-50 lg:hidden">
        <button
          onClick={() => setShowProfile(!showProfile)} // Alterna el estado showProfile
          className="bg-primary text-white px-4 py-2 rounded shadow-lg"
        >
          {/* Cambia el ícono según el estado */}
          {showProfile ? <X size={20} /> : <User size={20} />}
        </button>
      </div>

      {/* Contenedor principal con layout en fila y espacio entre secciones en pantallas grandes */}
      <div className="flex flex-row lg:space-x-6 md:mr-20 lg:p-8 lg:ml-72">

        {/* Mostrar PresentationProfile fijo y visible solo en tablets y escritorio */}
        <div className="hidden lg:block">
          <PresentationProfile />
        </div>

        {/* Mostrar PresentationProfile como modal flotante en móviles si showProfile es true */}
        {showProfile && (
          <div className="block lg:hidden fixed top-16 left-4 right-4 z-40 p-4 rounded-lg shadow-xl">
            <PresentationProfile />
          </div>
        )}

        {/* Contenedor principal del contenido, organizado en columna con espacio vertical */}
        <div className="flex flex-col space-y-6 flex-1">
          <div className="h-8"></div> {/* Espacio vacío para separación */}

          {/* Sección objetivo o principal de presentación */}
          <div id="target" className="relative">
            <TargetPresentation />
          </div>

          {/* Contenedor centrado para el selector de colores */}
          <div className="flex flex-col items-center justify-center">
            <ColorCustomizer />
          </div>

          {/* Sección de conocimientos */}
          <div id="knowledge">
            <Knowledge />
          </div>

          {/* Sección educativa */}
          <div id="education">
            <Education />
          </div>

          {/* Sección de certificaciones */}
          <div id="certification">
            <Certification />
          </div>

          {/* Sección de experiencia laboral */}
          <div>
            <Experience />
          </div>

          {/* Sección de portafolio */}
          <div id="portafolio">
            <Portafolio />
          </div>

          {/* Sección de contacto */}
          <div id="contact">
            <Contact />
          </div>

          {/* Pie de página */}
          <Footer />
        </div>

        {/* Redes sociales o contactos rápidos */}
        <Networks />
      </div>
    </>
  );
}
