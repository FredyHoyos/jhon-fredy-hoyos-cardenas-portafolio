import React from 'react'

// Componente SuperTitle: renderiza un <h1> con clase y color personalizado.
// Props:
// - text: texto a mostrar.
// - color: nombre de clase para el color (opcional, por defecto 'colortitle').
const SuperTitle = ({ text, color = 'colortitle' }: { text: string, color?: string }) => {
  return (
    <div>
      <h1 className={`text-${color} text-center text-big font-bold`}>
        {text}
      </h1>
    </div>
  )
}

// Componente Title: título de tercer nivel con estilo predefinido.
// Props:
// - text: texto a mostrar.
const Title = ({ text }: { text: string }) => {
  return (
    <h3 className='text-colortitle font-light text-title'>
      {text}
    </h3>
  )
}

// Componente SubTitle: subtítulo con estilo personalizado.
// Props:
// - text: texto a mostrar.
const SubTitle = ({ text }: { text: string }) => {
  return (
    <h3 className='text-semi text-colortext'>
      {text}
    </h3>
  )
}

// Componente Text: párrafo de texto con estilo ligero.
// Props:
// - text: texto a mostrar.
const Text = ({ text }: { text: string }) => {
  return (
    <div>
      <p className='text-sub font-light text-gris'>
        {text}
      </p>
    </div>
  )
}

// Componente Date: texto pequeño con fondo primario para fechas.
// Props:
// - text: texto a mostrar (formato de fecha u otra información breve).
const Date = ({ text }: { text: string }) => {
  return (
    <div>
      <p className='text-[10px] font-light text-white bg-primary p-[2px]'>
        {text}
      </p>
    </div>
  )
}

// Exportación de todos los componentes para uso en otros módulos
export { SuperTitle, SubTitle, Title, Text, Date }
