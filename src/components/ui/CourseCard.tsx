import React from 'react'
import { Course } from '@/types/type'
import { FiCheck } from "react-icons/fi";
import { SimpleButton } from './Button';
import { formatWithCommas } from '@/utils/currency';

interface Props {
  item: Course,
  popular?: boolean
}

export const CourseCard: React.FC<Props> = ({item, popular}) => {
  return (
    <div className={`relative pt-10 pb-20 px-5 border-2  bg-white rounded-lg ${popular ? "border-green-500" : "border-gray-100"} overflow-hidden min-h-[510px]`}>
      {
        popular && 
        <div className='absolute top-0 right-0 p-2 w-full text-white bg-green-500'>
          <p className='font-semibold font-inter text-center'>Most Popular</p>
        </div>
      }

      <div className='mt-5 flex flex-col'>
        <p className='font-bold font-inter text-xl'>{item.level.toUpperCase() + " " + item.transmission + " " + item.mode.replace("_", " ")}</p>
        <p className='text-gray-600 font-inter mt-1'>{item.description}</p>
        <p className='mt-5 font-bold font-inter text-2xl'>GH₵ {formatWithCommas(Number(item.fee)) || "Free"}</p>
        <div className='mt-5 flex flex-row justify-between'>
          <p className='text-base text-gray-600 font-inter font-semibold'>Duration: {item.duration}</p>
          <p className='text-sm text-gray-600 font-inter'>{item.routine[0]}</p>
        </div>
        <div className='mt-5 flex flex-col gap-5'>
          {
            item.packages.map((item, index) => (
              <div key={index} className='flex flex-row gap-2 items-center'>
                <FiCheck className='text-green-500 size-5'/>
                <p className='text-gray-600 font-inter'>{item}</p>
              </div>
            ))
          }
        </div>
        <div className='absolute bottom-5 left-0 w-full px-5 h-14 flex flex-col justify-end'>
        <SimpleButton link="/contact" text="Book Your First Lesson" style="bg-green-500 w-full text-white font-bold py-2 px-5 rounded font-inter" tesxtStyle="font-semibold text-center" />
        </div>

      </div>
    </div>
  )
}

