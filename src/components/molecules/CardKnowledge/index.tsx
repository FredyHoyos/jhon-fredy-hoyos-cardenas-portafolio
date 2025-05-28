import React from 'react'
import Icon from '@/components/atoms/Icono'; 
import { SubTitle, Text } from '@/components/atoms/Titles';

// Importación de íconos SVG utilizados para representar habilidades o características
import Web from '@/assets/svg/web.svg';
import Solution from '@/assets/svg/solution.svg';
import Mobile from '@/assets/svg/mobile.svg';
import Figma from '@/assets/svg/figma.svg';
import Db from '@/assets/svg/db.svg';
import Scrum from '@/assets/svg/scrum.svg';
import Back from '@/assets/svg/backend.svg';
import Team from '@/assets/svg/team.svg';
import Learning from '@/assets/svg/learning.svg';
import Infinity from '@/assets/svg/infinity.svg';

// Lista de habilidades o características con sus respectivos íconos y descripciones
const features = [
  {
    ico: Web,
    title: 'Desarrollo Web',
    description: 'Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS.',
  },
  {
    ico: Back,
    title: 'Desarrollo Backend',
    description: 'Desarrollo de aplicaciones backend utilizando Spring Boot y PostgreSQL.',
  },
  {
    ico: Mobile,
    title: 'Desarrollo Móvil',
    description: 'Desarrollo de aplicaciones móviles utilizando Kotlin junto a Jetpack Compose.',
  },
  {
    ico: Figma,
    title: 'Diseño UI/UX',
    description: 'Diseño de interfaces de usuario utilizando Figma.',
  },
  {
    ico: Db,
    title: 'Manejo de Bases de Datos',
    description: 'Manejo de bases de datos relacionales como PostgreSQL.',
  },
  {
    ico: Infinity,
    title: 'CI-DC',
    description: 'Con GitHub Actions, Docker para la integración y despliegue continuo.',
  },
  {
    ico: Scrum,
    title: 'Metodologías Ágiles',
    description: 'Trabajo en equipo utilizando metodologías ágiles como Scrum.',
  },
  {
    ico: Solution,
    title: 'Resolución de Problemas',
    description: 'Habilidad para resolver problemas y encontrar soluciones efectivas.',
  },
  {
    ico: Team,
    title: 'Trabajo en Equipo',
    description: 'Colaboración efectiva en equipos de trabajo.',
  },
  {
    ico: Learning,
    title: 'Aprendizaje Continuo',
    description: 'Compromiso con el aprendizaje continuo y la mejora personal.',
  },
]

// Componente que muestra una cuadrícula de tarjetas con habilidades y características
const index = () => {
  return (
    <div className='gap-8 flex flex-wrap items-center justify-center'>
      {features.map(({ ico, title, description }, index) => (
        <div
          key={index}
          className='w-64 h-56 backdrop-blur-xl bg-white/20 border-white/10 shadow-xl rounded-lg flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:scale-110 border-2 hover:border-primary space-y-2'
        >
          {/* Ícono representativo */}
          <div>
            <Icon component={ico} className="text-primary" />
            {/* Etiqueta oculta para accesibilidad */}
            <span className="sr-only">{title}</span>
          </div>

          {/* Título de la característica */}
          <div>
            <SubTitle text={title} />
          </div>

          {/* Descripción de la característica */}
          <div>
            <Text text={description} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default index
