import React from 'react'
import { Text, SubTitle} from '@/components/atoms/Titles' 


const features = [
  {
    skill: 'Español:',
    percentage: '100',
  },
  {
    skill: 'Ingles:',
    percentage: '50',
  },
]

const index = () => {
  return (
    <div className='p-4 space-y-4'>
      <SubTitle text="Lenguajes" />
      {features.map((feature, index) => (
            <div  key={index} className="mb-4 w-full">
                <div className="flex justify-between text-sm mb-1">
                    <Text text={feature.skill}/>
                    <Text text={`${feature.percentage}%`}/>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full border-[1px] border-primary">
                    <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: `${feature.percentage}%` }}
                    ></div>
                </div>
            </div>
      ))}
    </div>
  )
}

export default index