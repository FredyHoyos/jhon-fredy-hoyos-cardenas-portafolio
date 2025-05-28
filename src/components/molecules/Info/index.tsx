import React from 'react'
import { Text } from '@/components/atoms/Titles' 


const features = [
  {
    title: 'Edad:',
    text: '26',
  },
  {
    title: 'Residencia:',
    text: 'El santuario (CO)',
  },
  {
    title: 'Freelancer:',
    text: 'Disponible',
  },
  {
    title: 'Universidad:',
    text: 'UdeA',
  },
  {
    title: 'Correo:',
    text: 'frediicardenas1234@gmail.com',
  },
  {
    title: 'Celular:',
    text: '3143602267',
  },
]

const index = () => {
  return (
    <div className='p-4 space-y-4'>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-row justify-between flex-wrap">
          <Text text={feature.title}/>
          <Text text={feature.text}/>   
        </div>
      ))}
    </div>
  )
}

export default index
