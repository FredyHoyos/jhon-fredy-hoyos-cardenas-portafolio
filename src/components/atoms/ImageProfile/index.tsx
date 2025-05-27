import React from 'react'
import Image from 'next/image';

const index = () => {
  return (
    <div className='relative w-36 h-36'>
        <Image
            src="/fotoprofile.png"
            alt="Image"
            width={150}
            height={150}
            className="w-full h-full rounded-full object-cover border-2 border-green-500 shadow-lg"
        />
        <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-1 border-white rounded-full" />
    </div>
  )
}

export default index