import React from 'react'


const SuperTitle = ({text, color ='colortitle'}:{text:string, color?:string}) => {
  return (
    <div>
      <h1 className={`text-${color} text-center text-big font-bold`}>
        {text}
      </h1>
    </div>
  )
}

const Title = ({text}:{text: string }) => {
    return (
      <h3 className='text-colortitle font-light text-title'>
        {text}</h3>
    )
}
const SubTitle = ({text}:{text: string }) => {
    return (
      <h3 className='text-semi text-colortext'>
        {text}</h3>
    )
}
const Text = ({text}:{text: string }) => {
    return (
    <div>
      <p className='text-sub font-light text-gris'>
      {text}</p>
    </div>
    )
}

const Date = ({text}:{text: string }) => {
    return (
    <div>
      <p className='text-[10px] font-light text-white bg-primary p-[2px]'>
      {text}</p>
    </div>
    )
}

export {SuperTitle, SubTitle, Title, Text, Date}