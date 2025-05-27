import React, { useState } from 'react'
import Image from 'next/image'
import { SubTitle, Text } from '@/components/atoms/Titles'
import html from '@/assets/picture/html.jpg'
import hackaton from '@/assets/picture/hackaton.jpg'
import office from '@/assets/picture/office.jpg'
import emprendimiento from '@/assets/picture/emprendimiento.jpeg'
import tecsistemas from '@/assets/picture/tecsistemas.jpg'
import { Calendar, X, Award } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const features = [
  { img: html, title: 'HTML+5 y CSS', date: '26 de Febrero de 2025' },
  { img: hackaton, title: 'Hackathon Indra', date: '14 de Marzo de 2024' },
  { img: office, title: 'Office Intermedio', date: '12 de Septiembre de 2023' },
  { img: emprendimiento, title: 'Diseño Gráfico', date: 'Noviembre de 2015' },
  { img: tecsistemas, title: 'Técnico en Sistemas', date: '24 de Noviembre de 2015' },
]

const CardPortafolio = () => {
const [selectedImage, setSelectedImage] = useState<null | { src: StaticImageData; title: string }>(null)
  return (
    <>
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="relative p-4 bg-white rounded-lg max-w-screen-md w-full max-h-screen overflow-hidden">
            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 z-10"
            >
                <X size={34} />
            </button>

            {/* Zoom and Pan Wrapper */}
            <TransformWrapper>
                <TransformComponent>
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    width={800}
                    height={600}
                    className="rounded-lg object-contain mx-auto"
                />
                </TransformComponent>
            </TransformWrapper>
            </div>
        </div>
        )}

      {/* Tarjetas */}
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white/40 border-white/30 shadow-xl backdrop-blur-xl p-4 w-72 h-96 rounded-lg"
          >
            <div
              className="w-full h-60 relative cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setSelectedImage({ src: item.img, title: item.title })}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="p-4 space-y-2">
                <div>
                    <SubTitle text={item.title} />
                     <Award className="animate-pulse absolute top-2 right-0 h-10 w-10 text-yellow-400 drop-shadow-md z-10" />
                </div>
              <div className="flex flex-row items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <Text text={item.date} />
              </div>
              <button
                className="text-primary underline text-sm hover:scale-110"
                onClick={() => setSelectedImage({ src: item.img, title: item.title })}
              >
                Ver imagen
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardPortafolio
