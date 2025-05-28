import React from 'react'
import { Text, SubTitle } from '@/components/atoms/Titles'
// Importamos el ícono SVG que se usará para cada habilidad
import IcoSkills from '@/assets/svg/IcoSkills.svg'; 

// Array con las habilidades y la URL del ícono (en este caso es la misma para todas)
const features = [
  { urlImage: "/icoskills.svg", info: 'Tailwind CSS, React' },
  { urlImage: "/icoskills.svg", info: 'TypeScript' },
  { urlImage: "/icoskills.svg", info: 'Git, GitHub' },
  { urlImage: "/icoskills.svg", info: 'CI-DC GitHub actions' },
  { urlImage: "/icoskills.svg", info: 'PostgreSQL, Prisma' },
  { urlImage: "/icoskills.svg", info: 'Docker, Vercel, Render' },
  { urlImage: "/icoskills.svg", info: 'Figma' },
  { urlImage: "/icoskills.svg", info: 'Scrum, Agile' },
  { urlImage: "/icoskills.svg", info: 'Trabajo en equipo' },
  { urlImage: "/icoskills.svg", info: 'Resolución de problemas' },
]

// Componente funcional que renderiza la lista de habilidades con su ícono
const index = () => {
  return (
    <div className='p-4 space-y-4'>
      {/* Título de la sección */}
      <SubTitle text="Habilidades" />
      
      {/* Mapeo del array para mostrar cada habilidad */}
      {features.map((feature, index) => (
        <div key={index} className="w-full">
          <div className="flex justify-start mb-1">
            {/* Ícono de habilidad con tamaño, margen y color */}
            <IcoSkills  
              src={feature.urlImage} 
              alt="Skill Icon" 
              width={24}
              height={24}
              className="mr-2 text-primary" 
            />
            {/* Texto con la descripción de la habilidad */}
            <Text text={feature.info} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
