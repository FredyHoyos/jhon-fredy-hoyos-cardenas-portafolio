import React from 'react'
import { SubTitle } from '@/components/atoms/Titles';
import Icon from '@/components/atoms/Icono';
import GithubIcon from '@/assets/svg/github.svg';
import LinkedinIcon from '@/assets/svg/linkeding.svg';
import YouTubeIcon from '@/assets/svg/youtube.svg';


const networks = [
    {
        name: 'Github',
        url: 'https://github.com/FredyHoyos',
        icon: GithubIcon,
    },
    {
        name: 'Linkedin',   
        url: 'https://www.linkedin.com/in/fredy-c%C3%A1rdenas-a4072731a/',
        icon: LinkedinIcon,
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@JHONFREDYHOYOSCARDENAS',
        icon: YouTubeIcon,
    },
]

const index = () => {
  return (
    <div className="flex flex-col justify-center items-start space-y-3">
            <SubTitle text="Links" />
            {networks.map(({name, url, icon}, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <Icon component={icon} className="text-primary w-12 h-12  transition-transform duration-300 hover:scale-125 p-1" />
                <span className="sr-only">{name}</span>
            </a>
            ))}
    </div>
  )
}

export default index