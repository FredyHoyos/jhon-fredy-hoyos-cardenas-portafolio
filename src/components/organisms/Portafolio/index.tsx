import { SubTitle, Text } from '@/components/atoms/Titles'
import React from 'react'
import CardPortafolio from '@/components/molecules/CardPortafolioCarrusel';

const index = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center p-4 space-y-4 pt-16'>
        <SubTitle text="Portafolio" />
        <Text text="Estos son algunos de los proyectos en los que he trabajado." />
      </div>
        <div>
            <CardPortafolio />
        </div>
    </div>
  )
}

export default index