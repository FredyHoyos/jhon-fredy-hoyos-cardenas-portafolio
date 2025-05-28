import { SubTitle } from '@/components/atoms/Titles'
import Image from 'next/image'
import React from 'react'

// Componente funcional que muestra datos de contacto con íconos animados
const index = () => {
  return (
    <div className='flex flex-col items-center pt-16 space-y-4'>
      {/* Título principal de la sección de contacto */}
      <SubTitle text="Contactame 📞 " />
      
      {/* Contenedor que adapta la disposición según el tamaño de pantalla */}
      <div className='flex lg:flex-row flex-col lg:space-x-10'>
        
        {/* Bloque para contacto por WhatsApp */}
        <div className='flex flex-row items-center space-x-2'>
          <Image
            src='/whatsapp.svg'      // Icono de WhatsApp
            alt="whatsapp"
            width={48}
            height={48}
            className="animate-bounce"  // Animación de rebote para llamar la atención
          />
          {/* Número de contacto */}
          <SubTitle text="3143602267" />
        </div>
        
        {/* Bloque para contacto por Gmail */}
        <div className='flex flex-row items-center space-x-2'>
          <Image
            src='/gmail.svg'         // Icono de Gmail
            alt="Gmail"
            width={48}
            height={48}
            className="animate-bounce"  // Misma animación que WhatsApp
          />
          {/* Dirección de correo */}
          <SubTitle text="frediicardenas1234@gmail.com" />
        </div>
      </div>
    </div>
  )
}

export default index
