import React from 'react'
import { TestimonialProps } from '@/types/type'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { avatarCardProps } from '@/types/type';

const Card: React.FC<{item: TestimonialProps}> = ({item}) => {
  return (
    <div className='w-full flex-shrink-0 p-5 bg-white rounded-lg border-2 border-gray-100'>
      <div className='w-full'>
        <div className='flex flex-row gap-5 items-start justify-between'>
          <div className='flex flex-row gap-3 sm:gap-5 items-center'>
            <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0'>
              <Image src={item.avatar} alt="" className='w-full h-full object-cover' />
            </div>

            <div>
              <p className='font-bold font-inter'>{item.name}</p>
              <p className='font-inter text-sm'>{item.course}</p>
            </div>
          </div>

          <div className='flex flex-row gap-1 items-center'>
            {
              [...Array(5)].map((_, i) => (
              <GoStarFill key={i} 
              className={`size-3 sm:size-4 ${
                i < item.rating ? "text-yellow-500" : "text-gray-100"
                }`}
              />
            ))
            }
          </div>
        </div>
        <div>
          <p className='mt-4 text-gray-600 font-inter italic'>"" {item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

export const AvatarCard: React.FC<{item: avatarCardProps}> = ({item}) => {

  return(
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Image 
        src={item.avatar}
        alt="Michael Chen - Founder & CEO" 
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6 font-inter">
        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.position}</p>
        <p className="text-sm text-gray-500">{item.theme}</p>
      </div>
  </div>
  )
}
