import React from 'react'
import { SubTitle } from '@/components/atoms/Titles';
import Icon from '@/components/atoms/Icono';

// Importamos íconos SVG para las redes sociales
import GithubIcon from '@/assets/svg/github.svg';
import LinkedinIcon from '@/assets/svg/linkeding.svg';
import YouTubeIcon from '@/assets/svg/youtube.svg';

// Array con la información de las redes sociales: nombre, URL y componente del ícono
const networks = [
    {
        name: 'Github',
        url: 'https://github.com/FredyHoyos',
        icon: GithubIcon,
    },
    {
        name: 'Linkedin',   
        url: 'https://www.linkedin.com/in/fredy-c%C3%A1rdenas-a4072731a/',
        icon: LinkedinIcon,
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@JHONFREDYHOYOSCARDENAS',
        icon: YouTubeIcon,
    },
]

// Componente funcional que renderiza los enlaces a las redes sociales
const index = () => {
  return (
    <div className="flex flex-col justify-center items-start space-y-3">
      {/* Título de la sección */}
      <SubTitle text="Links" />
      
      {/* Mapeamos el array de redes para generar un enlace con ícono para cada una */}
      {networks.map(({name, url, icon}, index) => (
        <a 
          key={index} 
          href={url} 
          target="_blank"  // Abrir en nueva pestaña
          rel="noopener noreferrer" // Seguridad para enlaces externos
        >
          {/* Icono de la red con estilos y animación al pasar el cursor */}
          <Icon 
            component={icon} 
            className="text-primary w-12 h-12 transition-transform duration-300 hover:scale-125 p-1" 
          />
          {/* Texto accesible solo para lectores de pantalla */}
          <span className="sr-only">{name}</span>
        </a>
      ))}
    </div>
  )
}

export default index
