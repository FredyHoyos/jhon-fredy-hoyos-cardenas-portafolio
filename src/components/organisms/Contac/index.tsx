import { SubTitle } from '@/components/atoms/Titles'
import Image from 'next/image'
import React from 'react'


const index = () => {
  return (
    <div className='flex flex-col items-center pt-16 space-y-4'>
        <SubTitle text="Contactame 📞 " />
    <div className='flex lg:flex-row flex-col lg:space-x-10'>
        <div className='flex flex-row items-center space-x-2'>
            <Image
                src='/whatsapp.svg'
                alt="whatsapp"
                width={48}
                height={48}
                className=" animate-bounce "
            /> 
           <SubTitle text="3143602267" />
        </div>
         <div className='flex flex-row items-center space-x-2'>
            <Image
                src='/gmail.svg'
                alt="Gmail"
                width={48}
                height={48}
                className=" animate-bounce "
            /> 
           <SubTitle text="frediicardenas1234@gmail.com" />
        </div>
    </div>
    </div>

  )
}

export default index