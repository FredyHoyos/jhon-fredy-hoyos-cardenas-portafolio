import React from 'react'
import Education from '@/components/molecules/CardEducation';
import { SubTitle, Text } from '@/components/atoms/Titles'



const index = () => {
  return (
        <div className='flex flex-col items-center p-4 space-y-4 pt-16'>
        <SubTitle text="Estudios" />
        <Text text="Estos son mis estudios hasta el momento y espero seguir aprendiendo." />
        <Education />

    </div>
  )
}

export default index