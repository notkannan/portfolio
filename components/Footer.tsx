import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
            src="/footer-grid.svg" 
            alt="Kannan Karthikeyan"
            className='w-full h-full opacity-30' />
        </div>
        <div className="flex flex-col items-center">
            <h1 className='heading lg:max-w-[50vw]'>Let&apos;s <span className='text-purple'>build</span> something amazing<span className='text-purple'> together, </span>I&apos;m all ears</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center max-w-[40vw] sm:max-w-[50vw]'>Feel free to reach out using the below links, Let&apos;s discuss how I can help you bring your ideas to reality, See you there!</p>
            <a href='mailto:karthikeyan.k@northeastern.edu'>
                <MagicButton 
                    title ="Let's get in touch"
                    icon = {<FaLocationArrow />}
                    position = "right"
                    />
            </a>
        </div>
        <div className='flex mt-12 md:flex-row flex-col justify-center items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Kannan</p>
        </div>

        <div className="flex justify-center mt-5 items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link href={profile.link} target='_blank' key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <Image src={profile.img} alt='Kannan Karthikeyan' width={20} height={20} />
            </Link>
          ))}
        </div>
        <div className='flex mt-6 md:flex-row flex-col justify-center items-center'>
         <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Made with Next.JS</h2>
        </div>

        
    </footer>
  )
}

export default Footer