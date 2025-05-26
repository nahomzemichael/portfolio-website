"use client"
import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/magic-button'
import { FaLocationArrow } from 'react-icons/fa'
import {navItems} from "@/data/index"

const Hero = () => {
 
  return (
    <div className=''>
      <div>
         <Spotlight className='-top-40 -left-10' fill='white'/>
         <Spotlight className='top-50 left-10' fill='white'/>
      </div>
      
      <div>
        <div className="absolute top-0 left-0  flex h-screen w-full items-center justify-center bg-black dark:bg-black">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#838385_1px,transparent_1px),linear-gradient(to_bottom,#838385_0.3px,transparent_0.3px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='relative uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>A dynamic portfolio page</h2>
            <TextGenerateEffect 
              className='text-center text-[40px] md:text-5xl lg:6xl'
              words="Transfigure Concepts Into Enjoyable Experiences" />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>HI! I am Nahom, a React and Next.js developer based in Ethiopia.</p>
            <a href="#projects">
            <MagicButton title='view my work' icon={<FaLocationArrow />} position='right' />
            </a>
          </div>

        </div>
      </div>
    
    </div>
)
}  


export default Hero
