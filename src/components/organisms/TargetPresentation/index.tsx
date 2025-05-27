import { SuperTitle, Text } from '@/components/atoms/Titles'
import React from 'react'
import LearMore from '@/components/atoms/LearnMore'
import Cv from '@/components/atoms/ButtonCv'
import Image from 'next/image'

const index = () => {
  return (
    <div className='flex lg:flex-row flex-col p-10 backdrop-blur-md bg-white/20 border-white/10 shadow-xl pt-16'>
        <div className='lg:w-2/3 space-y-4'>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <SuperTitle text="Hola, soy Fredy Hoyos desarrollador" />
                <SuperTitle text="Full-Stack" color="primary" />
            </div>
            <div>
                <Text text="Soy estudiante de Ingeniería de Sistemas de la Universidad de Antioquia y un apasionado por la automatización y el desarrollo tecnológico. Actualmente, busco el aprendizaje y la mejora continua en el desarrollo Full-Stack, la automatización de procesos y el fortalecimiento de mis habilidades blandas." />
            </div>
            <div className='flex flex-row items-end space-x-4'>
                <Cv />
                <LearMore />
            </div>
        </div>
        <div className='relative lg:w-1/3 h-96'>
            <Image
                src="/fotosinfondo.png"
                alt="Image"
                fill
                className="object-cover"
             />
        </div>
    </div>
  )
}

export default index