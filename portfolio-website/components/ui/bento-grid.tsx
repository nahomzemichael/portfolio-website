"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./bg-animation";
import { GlobeDemo } from "./gridGlobe";
import { useState } from "react";
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  
}) => {
  const [copied,setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nahomworkueshete@gmail.com')
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "group/bento shadow-input  flex flex-col justify-between space-y-4 rounded-3xl relative overflow-hidden border border-white/[0.1] transition duration-200 hover:shadow-xl  dark:shadow-none",
        className,
      )}
      style={{ 
        background: '#020024',
        backgroundColor: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 26%, rgba(0, 212, 255, 1) 100%)'

      }}
    >

     <div className={ `${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-center, object-center')}
           />
          )}
        </div>

        <div className={`absolute right-8 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"

            />
          )}
        </div> 

        {id === 6 && (
          <BackgroundGradientAnimation>
         { /*<div className="absolute z-50 flex item-center justify-center text-white font-bold "/>*/}
          </BackgroundGradientAnimation>
        )} 
        
        <div className={cn(
            titleClassName,' group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}>

            <div className="mt-2 mb-2 font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
              {description}
            </div>
            
            <div className=" mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
        

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3 lg:gap-8 pr-12">
                {['React.js','Next.js', 'Typescript'].map((item)=>
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs  lg:text-base opacity-80 lg:opacity-100 rounded-lg text-center bg-[#10132e] ">
                  {item}
                </span>
                )}
              
              </div>
            </div>
          )}
        
        
          {id === 6 && (
            <div className="mt-5 relative">
            
            <MagicButton
                title = {copied? 'Email copied' : 'copy email'} 
                icon = {<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}

              />
            </div>
          )}
      </div>
    </div>
    </div>
      
  );
};
