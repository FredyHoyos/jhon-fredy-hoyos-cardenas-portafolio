import { SubTitle, Text, Date } from '@/components/atoms/Titles'
import React from 'react'

// Lista de objetos con información académica y educativa
const features = [
  {
    title: 'Universidad de Antioquia',
    ocupation: 'Estudiante',
    time: '2020 - Actualidad',
    qualification: 'Ingeniería de Sistemas',
    description: 'Estudios sobre diversas ramas de la tecnología, gestión de equipos de desarrollo, metodologías ágiles, etc.',
  },
  {
    title: 'SENA',
    ocupation: 'Estudiante',
    time: '2014 - 2015',
    qualification: 'Media Técnica en Técnico de Computadores',
    description: 'Estudios en mantenimiento y reparación de computadores, redes y sistemas operativos.',
  },
  {
    title: 'I.E. Pbro Luis Rodolfo Gómez Ramírez',
    ocupation: 'Estudiante',
    time: '2004 - 2015',
    qualification: 'Bachiller y media técnica',
    description: 'Bachiller de educación media técnica especialidad comercio con énfasis en administración.',
  },
]

// Componente principal que renderiza la lista de formaciones
const index = () => {
  return (
    <div className='p-4'>
      {features.map(({ title, ocupation, time, qualification, description }, index) => (
        <div key={index} className='flex flex-col backdrop-blur-xl bg-white/20 border-white/10 shadow-xl'>
          <div className='flex md:flex-row flex-col items-center space-y-4 justify-around rounded-lg p-10 transition-transform duration-300 hover:scale-105 hover:border-primary'>
            
            {/* Columna izquierda: nombre de la institución, ocupación y fecha */}
            <div className='flex flex-col space-y-4 w-1/2'>
              <SubTitle text={title} />
              <div className='flex flex-row items-center space-x-2'>
                <Text text={ocupation} />
                <Date text={time} />
              </div>
            </div>
            
            {/* Columna derecha: título obtenido y descripción */}
            <div className='flex flex-col space-y-4 w-1/2'>
              <SubTitle text={qualification} />
              <Text text={description} />
            </div>

          </div>

          {/* Línea divisoria entre elementos */}
          <div className="border-t border-gray-400 mr-9 ml-9" />
        </div>
      ))}
    </div>
  )
}

export default index
