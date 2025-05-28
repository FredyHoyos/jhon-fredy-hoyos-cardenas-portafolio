import React from 'react'
import { Text, SubTitle } from '@/components/atoms/Titles' 

// Array con los lenguajes de programación y el porcentaje de dominio en cada uno
const features = [
  { skill: 'Html:', percentage: '80' },
  { skill: 'Python:', percentage: '80' },
  { skill: 'Java:', percentage: '80' },
  { skill: 'Tsx:', percentage: '70' },
  { skill: 'Kotlin:', percentage: '70' },
  { skill: 'SQL:', percentage: '60' },
  { skill: 'CSS:', percentage: '50' },
  { skill: 'Js:', percentage: '50' },
  { skill: 'C#:', percentage: '40' },
]

// Componente funcional que renderiza la lista de habilidades con barras de progreso
const index = () => {
  return (
    <div className='p-4 space-y-4'>
      {/* Título de la sección */}
      <SubTitle text="Lenguajes de Programación" />

      {/* Mapeo para mostrar cada habilidad */}
      {features.map((feature, index) => (
        <div key={index} className="mb-4 w-full">
          {/* Contenedor con nombre de la habilidad y porcentaje alineados a los extremos */}
          <div className="flex justify-between text-sm mb-1">
            <Text text={feature.skill} />
            <Text text={`${feature.percentage}%`} />
          </div>

          {/* Barra de progreso con fondo gris y borde */}
          <div className="w-full h-2 bg-gray-200 rounded-full border-[1px] border-primary">
            {/* Barra interna que indica el porcentaje con color primario */}
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
