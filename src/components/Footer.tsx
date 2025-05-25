import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { image } from '@/constant'
import { FiFacebook } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { Button } from '@/components/ui/Button';

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 pt-12 md:pt-14 pb-8 text-gray-300 font-inter'>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <div className='mt-3'>
            <Link href='/' className='flex flex-row gap-3 items-center'>
              <Image src={image.logo} className='size-10 rounded-full' alt="Dejay Logo" />
              <div>
                <p className='font-bold font-chango text-green-500 text-xl'>DEJAY</p>
                <p className='text-sm font-semibold text-white'>Driving School</p>
              </div>
            </Link>
            <p className='mt-5 text-sm'>Professional driving instruction with certified instructors. We help you become a confident, safe driver.</p>
            <div className='mt-5 flex flex-row gap-3'>
              <Link href='/'>
                <FiFacebook className='size-6 hover:text-green-500' />
              </Link>
              <Link href='/'>
                <RxInstagramLogo className='size-6 hover:text-green-500' />
              </Link>
              <Link href='/'>
                <FaWhatsapp className='size-6 hover:text-green-500' />
              </Link>
              <Link href='/'>
                <PiTiktokLogo className='size-6 hover:text-green-500' />
              </Link>
            </div>
          </div>
          <div className='mt-3'>
            <p className='font-semibold font-inter text-lg text-white'>Quick Links</p>
            <div className='mt-5 flex flex-col gap-3'>
              <Link href='/' className='hover:text-green-500'>Home</Link>
              <Link href='/about' className='hover:text-green-500'>About Us</Link>
              <Link href='/courses' className='hover:text-green-500'>Courses</Link>
              <Link href='/contact' className='hover:text-green-500'>Contact</Link>
              <Link href='/pricing' className='hover:text-green-500'>Pricing</Link>
            </div>
          </div>
          <div className='mt-3'>
            <p className='font-semibold font-inter text-lg text-white'>Contact Info</p>
            <div className='mt-5 flex flex-col gap-3'>
              <p>Bantama</p>
              <div className='flex flex-row items-center gap-2'>
                <IoCallOutline className='size-6' />
                <span className='ml-2'>+233 24 977 4177</span>
              </div>
              <p>Ahenema Kokoben</p>
              <div className='flex flex-row items-center gap-2'>
                <IoCallOutline className='size-6' />
                <span className='ml-2'>+233 59 125 9135</span>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <GoMail className='size-6' />
                <span className='ml-2'>LZb7o@example.com</span>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <p className='font-semibold font-inter text-lg text-white'>Stay Updated</p>
            <p className='mt-5 text-sm'>Subscribe to our newsletter to get the latest news and updates on our services and courses.</p>
            <div className='mt-5 flex flex-col'>
              <input type="text" placeholder='Enter your email' className='w-full bg-gray-700 rounded-md py-3 px-3 text-sm' />
              <Button text="Subscribe" style="bg-green-500 text-white font-bold py-2 px-5 rounded-md font-inter mt-3 w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-5 mt-10 '>
        <div className='border-t border-gray-500 gap-5 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-10'>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} DeJay driving school. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm hover:text-green-500 transition-colors">
              Sitemap
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
