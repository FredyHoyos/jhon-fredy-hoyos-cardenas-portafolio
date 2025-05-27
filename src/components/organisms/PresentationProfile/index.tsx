import React from 'react'
import Profile from '@/components/molecules/Profile'
import Info from '@/components/molecules/Info'
import Languages from '@/components/molecules/Languages'
import LangPrograming from '@/components/molecules/LangPrograming'
import Skills from '@/components/molecules/Skills'

const index = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col overflow-y-scroll scrollbar-hide h-full space-y-7 p-7 w-[300px]  backdrop-blur-sm bg-white/40 border-white/40 md:bg-white/20 md:border-white/20 shadow-lg pt-16 ">
      <div>
        <Profile />
      </div>
      <div className="border-t border-gray-400 "/>
      <div>
        <Info />
      </div>
      <div className="border-t border-gray-400 "/>
      <div>
        <Languages />
      </div>
      <div className="border-t border-gray-400 "/>
      <div>
        <LangPrograming />
      </div>
      <div className="border-t border-gray-400 "/>
      <div>
        <Skills />
      </div>
    </div>
  )
}

export default index