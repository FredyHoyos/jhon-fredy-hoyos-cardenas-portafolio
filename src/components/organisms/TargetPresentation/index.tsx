import { SuperTitle, Text } from '@/components/atoms/Titles' // Componentes atómicos para títulos y textos
import React from 'react'
import LearMore from '@/components/atoms/LearnMore' // Componente para enlace o botón "Learn More"
import Cv from '@/components/atoms/ButtonCv' // Botón para descargar o mostrar CV
import Image from 'next/image' // Componente optimizado de Next.js para imágenes

// Componente principal que muestra una presentación personal con texto y una imagen
const index = () => {
  return (
    // Contenedor flexible que cambia de columna en pantallas pequeñas a fila en pantallas grandes
    // Aplica fondo con desenfoque, transparencia y sombras
    <div className='flex lg:flex-row flex-col p-10 backdrop-blur-md bg-white/20 border-white/10 shadow-xl pt-16'>
      
      {/* Contenedor principal del texto, que ocupa dos tercios en pantallas grandes */}
      <div className='lg:w-2/3 space-y-4'>
        
        {/* Títulos principales, con un layout flexible que centra y separa los títulos */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* Título normal */}
          <SuperTitle text="Hola, soy Fredy Hoyos desarrollador junior" />
          {/* Título destacado con color primario */}
          <SuperTitle text="Full-Stack" color="primary" />
        </div>
        
        {/* Párrafo descriptivo */}
        <div>
          <Text text="Soy estudiante de Ingeniería de Sistemas de la Universidad de Antioquia y un apasionado por la automatización y el desarrollo tecnológico. Actualmente, busco el aprendizaje y la mejora continua en el desarrollo Full-Stack, la automatización de procesos y el fortalecimiento de mis habilidades blandas." />
        </div>
        
        {/* Botones para descargar CV y para más información, alineados horizontalmente */}
        <div className='flex flex-row items-end space-x-4'>
          <Cv />
          <LearMore />
        </div>
      </div>
      
      {/* Contenedor de la imagen, ocupa un tercio en pantallas grandes */}
      <div className='relative lg:w-1/3 h-96'>
        {/* Imagen optimizada con 'fill' para ocupar todo el contenedor, con objeto cubierto */}
        <Image
          src="/fotosinfondo.png"
          alt="Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default index
