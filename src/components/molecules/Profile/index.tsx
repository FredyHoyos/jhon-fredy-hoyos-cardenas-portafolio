import React from 'react'
import ImageProfile from '../../atoms/ImageProfile'
import { Text, SubTitle } from '@/components/atoms/Titles' 

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div>
            <ImageProfile />
        </div>
        <div className='mt-4 text-center space-y-4'>
            <SubTitle text="Jhon Fredy Hoyos Cárdenas" />
            <Text text="Estudiante Ing. sistemas" />
        </div>
    </div>
  )
}

export default index