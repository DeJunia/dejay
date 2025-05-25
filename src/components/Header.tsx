'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SiteLinks as Links } from '@/lib/data'
import { image } from '@/constant'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'

const Header = () => {

  const pathname = usePathname();
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 1)"]
  );

  const isLinkActive = (link: typeof Links[0]) => {
    if (pathname === link.link) {
      return true;
    }
    return false;
  }


  return (
    <div className='Header w-full fixed z-50 top-0 justify-center flex items-center'>
      <motion.div className='w-full p-5 gap-5 flex flex-row justify-between  px-10' 
      style={{
        background: backgroundColor
      }}
      >
        <Link href='/' className='logo flex flex-row gap-3 items-start'> 
          <Image src={image.logo} alt='Dejay driving school Logo' className='size-12 rounded-full'/>
          <div>
            <p className='text-green-600 font-bold font-chango text-xl'>DEJAY</p>
            <p className='text-sm font-semibold'>Driving School</p>
          </div>
        </Link>
        <div className='midnav h-14 flex flex-row items-center gap-3'>
          <ul className='flex flex-row gap-5 h-full '>
            {
              Links.map((link) => {
                const isActive = isLinkActive(link);

                return (
                  <li key={link.name}>
                    <Link href={link.link}>
                      <motion.div className='flex flex-col relative items-center justify-center h-full'>
                        <motion.div>
                          <motion.div className={`flex flex-row items-center justify-center ${isActive ? 'text-green-600 bg-gray-100' : ''} gap-2 px-3 h-8 rounded-md text-gray-800`}
                          initial={false}
                          animate={{
                            transition: {
                              duration: 0.5,
                            }
                          }}
                          >
                            <link.icon className='size-4'/>
                            <p className='font-inter text-sm'>
                              {link.name}
                            </p>
                          </motion.div>
                          
                        </motion.div>
                        {
                          isActive && (
                            <motion.div className='absolute bottom-0 w-full h-0.5 bg-green-500 rounded-md' layoutId="underline" />
                          )
                        }
                      </motion.div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
            <Link href='/'>
              <motion.div 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className='bg-green-500 flex flex-row items-center justify-center gap-2 px-3 h-8 rounded-md text-white font-inter font-semibold'>
                <p>Book a Lesson</p>
              </motion.div>
            </Link> 
        </div>
      </motion.div>
    </div>
  )
}

export default Header
