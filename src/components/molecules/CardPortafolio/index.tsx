import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { SubTitle, Text } from '@/components/atoms/Titles'
import Back from '@/assets/picture/Image.png'
import ButtonLearnMore from '@/components/atoms/ButtonLearnMore'

const features = [
  {
    img: Back,
    title: 'Desarrollo Web',
    description: 'Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS.',
  },
  {
    img: Back,
    title: 'Backend',
    description: 'Spring Boot, Express, PostgreSQL.',
  },
  {
    img: Back,
    title: 'Móvil',
    description: 'Kotlin y Jetpack Compose.',
  },
  {
    img: Back,
    title: 'Desarrollo Web',
    description: 'Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS.',
  },
  {
    img: Back,
    title: 'Backend',
    description: 'Spring Boot, Express, PostgreSQL.',
  },
  {
    img: Back,
    title: 'Móvil',
    description: 'Kotlin y Jetpack Compose.',
  },
]

const CardPortafolio = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 25,
    },
    loop: true,
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(max-width: 840px)': {
        slides: { perView: 1, spacing: 10 },
      },
    },
  })

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-1/2 sm:w-3/4 z-50">
      <div ref={sliderRef} className="keen-slider overflow-hidden py-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide backdrop-blur-xl bg-white/20 border-white/10 shadow-xl rounded-lg border hover:border-primary flex flex-col items-center space-y-4"
          >
            <div className="w-full h-40 relative  transition-transform duration-300 hover:scale-110">
                <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    className="object-cover rounded-md" 
                />
            </div>
            <div className='p-4 space-y-2'>
                <SubTitle text={item.title} />
                <Text text={item.description} />
                <ButtonLearnMore text='Saber más' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default CardPortafolio
