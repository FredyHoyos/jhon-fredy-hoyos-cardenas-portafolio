import React from 'react'
import Certifications from '@/components/molecules/CardCertification';
import { SubTitle, Text } from '@/components/atoms/Titles'

const index = () => {
  return (
        <div className='flex flex-col items-center p-4 space-y-4 pt-16'>
        <SubTitle text="Certificaciones" />
        <Text text="Cursos y eventos en los que he tenido la posibilidad de participar." />
        <Certifications />

    </div>
  )
}

export default index