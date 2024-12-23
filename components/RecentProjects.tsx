import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {

  return (
    <div className='py-20' id='projects'>
        <h1 className="heading">
            A showcase of{' '}
            <span className='text-purple'>recent works</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[37rem] h-[35rem] lg:min-h-[38.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]'>
                                <img src='/bg.webp' alt='Kannan Karthikeyan' width={50} height={50} />
                            </div>
                            <Image
                                src={img}
                                alt='Kannan Karthikeyan'
                                className='z-10 rounded-lg transform rotate-3 absolute top-[50]'
                                loading='lazy'
                                width={475}
                                height={100}
                            />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.3] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{
                                        transform: `translateX(-${7 * index * 2}px)`
                                    }}>
                                        <img src={icon} alt='Kannan Karthikeyan' className='p-2' />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Check Live Site
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9' />
                            </div>
                        </div>
                    </PinContainer>
                </div>    
            ))}
        </div>
    </div>
  )
}

export default RecentProjects