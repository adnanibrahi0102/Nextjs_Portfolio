"use client"
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const Projects = () => {
    const router =  useRouter();

    
  return (
    <div className='py-20  ' id='projects'>
     <h1 className='lg:text-2xl sm:text-xl font-bold text-center'>
        My Recently Developed {' '}
        <span className='text-purple'>Projects</span>
     </h1>

     <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-5'>
         {projects.map((item,i)=>(
            <div className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]' key={i}>
                <PinContainer title={item.link} href={item.link}>
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] '>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-xl '>
                            <img src="/bg.png" alt="title" />
                        </div>
                        <img src={item.img} alt={item.title} className='z-10 absolute ' />
                    </div>
                    <h1 className=' font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{item.title}</h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{item.des}</p>

                    <div className='flex items-center justify-between mt-7 mb-3 '>
                       <div  className='flex items-center'>
                            {item.iconLists.map((icon)=>(
                                <div className='border  border-white rounded-3xl justify-center items-center' key={icon}>
                                    <img  className="p-2" src={icon} alt={icon} />
                                </div>
                            ))}
                       </div>

                       <div className='flex justify-center items-center ' >
                         <p onClick={()=>router.push(item.link)}  className=' flex lg:text-xl md:text-xs text-sm text-purple'> Live </p>
                         <FaLocationArrow className='ms-3'/>
                       </div>
                    </div>
                </PinContainer>
            </div>
         ))}
     </div>
    </div>
  )
}

export default Projects
