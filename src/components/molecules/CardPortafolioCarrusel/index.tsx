import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StaticImageData } from 'next/image';
import Image from 'next/image'
import { SubTitle, Text } from '@/components/atoms/Titles'
import ButtonLearnMore from '@/components/atoms/ButtonLearnMore'
import FleetGuard360 from '@/assets/picture/FrontFleetGuard360.png'
import BackFleetGuard360 from '@/assets/picture/BackFleetGuard360.png'
import Optimizacion from '@/assets/picture/Optimizacion.png'
import PickerPacker from '@/assets/picture/PickerPacker.jpeg'
import Ia from '@/assets/picture/Ia.png'







interface Card {
  id: number;
  img: string | StaticImageData;
  title: string;
  description: string;
  url: string;
}

interface CardCarouselProps {
  cards?: Card[];
}

const CardCarousel = ({ cards: propCards }: CardCarouselProps) => {
  const defaultCards: Card[] = [
  {
    id: 1,
    img: FleetGuard360,
    title: 'FrontFleetGuard360',
    description: 'Sistema de gestión de flota de vehículos, desarrollado con React, Next.js y Tailwind CSS. Disponible en: https://front-fleet-guard360.vercel.app/',
    url: 'https://github.com/FredyHoyos/FrontFleetGuard360.git',
  },
  {
    id: 2,
    img: BackFleetGuard360,
    title: 'BackFleetGuard360',
    description: 'Backend del sistema de gestión de flota de vehículos, desarrollado con Spring Boot y PostgreSQL.',
    url: 'https://github.com/FredyHoyos/BackFleetGuard360.git',
  },
  {
    id: 3,
    img: Optimizacion,
    title: 'Métodos de Optimización',
    description: 'Este proyecto implementa una interfaz gráfica en Python que permite aplicar y visualizar distintos métodos numéricos de optimización, tanto para la búsqueda de raíces como para la búsqueda de máximos y mínimos de funciones.',
    url: 'https://github.com/FredyHoyos/OptimizacionFuncionesPrograma.git',
  },
  {
    id: 4,
    img: PickerPacker,
    title: 'PickerPacker',
    description: 'Aplicación móvil desarrollada en Kotlin y Jetpack Compose, que permite comprimir imágenes para reducir su tamaño utilizando árboles Quadtree.',
    url: 'https://github.com/FredyHoyos/ProyectoFinalCM20242-Gr01.git',
  },
  {
    id: 5,
    img: Ia,
    title: 'Inteligencia Artificial',
    description: 'Proyecto en Python que utiliza librerías como Matplotlib, NumPy, Seaborn, entre otras, para realizar análisis y visualización de datos a partir de distintos conjuntos de datos.',
    url: 'https://github.com/FredyHoyos/IA_2023-2.git',
  },
]
;

  const cards = propCards || defaultCards;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalCards = cards.length;
    
    // Handle wrap around
    let position = diff;
    if (diff > totalCards / 2) {
      position = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      position = diff + totalCards;
    }

    if (position === 0) {
      // Center card
      return "transform translate-x-0 scale-100 z-20 opacity-100 blur-none";
    } else if (position === -1) {
      // Left card
      return "transform -translate-x-[33%] scale-75 z-10 opacity-70 blur-[1px]";
    } else if (position === 1) {
      // Right card
      return "transform translate-x-[33%] scale-75 z-10 opacity-70 blur-[1px]";
    } else if (position === -2) {
      // Far left card
      return "transform -translate-x-[57%] scale-50 z-0 opacity-40 blur-[3px]";
    } else if (position === 2) {
      // Far right card
      return "transform translate-x-[57%]  scale-50 z-0 opacity-40 blur-[3px]";
    } else {
      // Hidden cards
      return "transform scale-0 z-0 opacity-0";
    }
  };

  return (
    <div className="">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <Button
          onClick={goToPrevious}
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white border-white/50 shadow-lg backdrop-blur-sm md:left-8"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={goToNext}
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white border-white/50 shadow-lg backdrop-blur-sm md:right-8"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>

        {/* Cards Container */}
        <div className="relative h-[600px] overflow-hidden">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${getCardStyle(index)}`}
            >
              <div className="mx-auto w-full max-w-52 md:max-w-60 lg:max-w-96 h-full">
                <div className="overflow-hidden backdrop-blur-xl bg-white/20 border-white/10 rounded-2xl shadow-2xl h-full flex flex-col">
                    <div className="relative h-full transition-transform duration-300 hover:scale-110">
                        <Image 
                             src={card.img} 
                              alt={card.title} 
                              fill
                             className="object-cover rounded-md" 
                        />
                     </div>
                    <div className='p-8 space-y-2'>
                        <SubTitle text={card.title} />
                        <Text text={card.description} />
                        <ButtonLearnMore text='Saber más' url={card.url} />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;