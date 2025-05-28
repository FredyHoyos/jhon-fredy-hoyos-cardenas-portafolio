import React from 'react'
import { Text, SubTitle } from '@/components/atoms/Titles'

// Array con los idiomas y el nivel de dominio en porcentaje
const features = [
  {
    skill: 'Español:',
    percentage: '100',
  },
  {
    skill: 'Ingles:',
    percentage: '50',
  },
]

// Componente funcional que muestra los idiomas y sus niveles con barras de progreso
const index = () => {
  return (
    <div className='p-4 space-y-4'>
      {/* Título de la sección */}
      <SubTitle text="Lenguajes" />
      
      {/* Mapeo del array para mostrar cada idioma */}
      {features.map((feature, index) => (
        <div key={index} className="mb-4 w-full">
          {/* Contenedor con el nombre del idioma y el porcentaje alineados a los extremos */}
          <div className="flex justify-between text-sm mb-1">
            <Text text={feature.skill} />
            <Text text={`${feature.percentage}%`} />
          </div>

          {/* Barra de progreso con fondo gris, borde y barra interna indicando el porcentaje */}
          <div className="w-full h-2 bg-gray-200 rounded-full border-[1px] border-primary">
            <div
              className="h-2 bg-primary rounded-full"
              style={{ width: `${feature.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
