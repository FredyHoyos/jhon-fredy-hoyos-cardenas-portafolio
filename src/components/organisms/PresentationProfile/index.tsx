import React from 'react'
// Importación de componentes moleculares que conforman secciones del sidebar o menú lateral
import Profile from '@/components/molecules/Profile'
import Info from '@/components/molecules/Info'
import Languages from '@/components/molecules/Languages'
import LangPrograming from '@/components/molecules/LangPrograming'
import Skills from '@/components/molecules/Skills'

// Componente funcional principal que representa un sidebar fijo con información personal y habilidades
const index = () => {
  return (
    // Contenedor principal con estilos para posicionarlo fijo a la izquierda, scroll vertical y apariencia traslúcida
    <div className="fixed mt-7 top-0 left-0 flex flex-col overflow-y-scroll scrollbar-hide h-full space-y-7 p-7 w-[300px]  backdrop-blur-sm bg-white/40 border-white/40 md:bg-white/20 md:border-white/20 shadow-lg pt-16 ">
      
      {/* Sección de perfil */}
      <div>
        <Profile />
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-400 "/>

      {/* Sección de información general */}
      <div>
        <Info />
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-400 "/>

      {/* Sección de idiomas */}
      <div>
        <Languages />
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-400 "/>

      {/* Sección de lenguajes de programación */}
      <div>
        <LangPrograming />
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-400 "/>

      {/* Sección de habilidades */}
      <div>
        <Skills />
      </div>
    </div>
  )
}

export default index
