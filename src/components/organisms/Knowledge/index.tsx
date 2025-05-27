import { SubTitle, Text } from '@/components/atoms/Titles'
import React from 'react'
import CardKnowledge from '@/components/molecules/CardKnowledge';

const index = () => {
  return (
    <div className='flex flex-col items-center p-4 space-y-4 pt-16'>
        <SubTitle text="Conocimientos" />
        <Text text="Estos son algunos conocimientos que he obtenido y que sigo mejorando." />
        <CardKnowledge />
    </div>
  )
}

export default index