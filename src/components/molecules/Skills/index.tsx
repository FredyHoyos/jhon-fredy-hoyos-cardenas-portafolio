import React from 'react'
import { Text , SubTitle } from '@/components/atoms/Titles'
import IcoSkills from '@/assets/svg/IcoSkills.svg'; 

const features = [
    {
    urlImage: "/icoskills.svg",
    info: 'Tailwind CSS, React',
     },
    {
        urlImage: "/icoskills.svg",
        info: 'TypeScript',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Git, GitHub',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'PostgreSQL, Prisma',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Docker, Vercel, Render',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Figma',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Scrum, Agile',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Trabajo en equipo',
    },
    {
        urlImage: "/icoskills.svg",
        info: 'Resolución de problemas',
    },
]

const index = () => {
  return (
    <div className='p-4 space-y-4'>
        <SubTitle text="Habilidades" />
        {features.map((features, index) =>(
            <div key={index} className="w-full">
                <div className="flex justify-start mb-1">
                    <IcoSkills  
                        src={features.urlImage} 
                        alt="Skill Icon" 
                        width={24}
                        height={24}
                        className="mr-2 text-primary" 
                    />
                    <Text text={features.info} />
                </div>
            </div>
        ))}
    </div>
  )
}

export default index