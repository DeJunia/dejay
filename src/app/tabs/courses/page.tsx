import React from 'react'
import Image from 'next/image'
import { image } from '@/constant'
import { SimpleButton } from '@/components/ui/Button'
import { courses } from '@/lib/data'
import { FiCheck } from "react-icons/fi";

const formatMode = (mode: string) => {
  return mode
    .replace("full_license", "Full License")
    .replace("driving_only", "Driving Only")
    .replace("refresher", "Refresher");
};

const formatLevel = (level: string) => {
  return level.charAt(0).toUpperCase() + level.slice(1);
};

const formattransmission = (transmission: string) => {
  return transmission.charAt(0).toUpperCase() + transmission.slice(1);
};

const Courses = () => {
  return (
    <div className='Courses w-full overflow-hidden'>
     <section>
        <div className='relative h-[600] overflow-hidden w-full'>
          <div className='relative'>
            <Image src={image.bg1} className='img w-full h-[600px] object-top-right' style={{ objectFit: "cover" }} alt='Dejay Home Page' />
            <div className='any absolute top-0 right-0 w-full h-[600px]'></div>
          </div>
          <div className='absolute top-0 right-0 w-full h-[600px] pt-24'>
            <div className='max-w-6xl mx-auto h-full flex flex-col gap-5 justify-center px-5'>
              <h1 className='text-3xl md:text-5xl font-extrabold font-inter '>Driving Courses for Every Need</h1>
              <p className='text-base md:text-2xl font-inter font-semibold md:font-medium'>From complete beginners to experienced drivers looking to enhance their skills, we have the perfect course for you.</p>
              <div className="flex flex-row gap-5 flex-wrap ">
              <SimpleButton link="/contact" text="Book Your First Lesson" style="bg-green-500 text-white font-bold py-3 px-5 rounded-lg font-inter" tesxtStyle="font-semibold" />
              <SimpleButton link="/courses" text="View Courses" style="bg-white text-gray-800 font-bold py-3 px-5 rounded-lg font-inter" tesxtStyle="font-semibold" />   
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='max-w-6xl mx-auto py-24 px-5'>
        <p className="font-bold text-2xl sm:text-3xl text-center font-inter">Our Driving Courses</p>
        <p className="text-center text-gray-600 mt-5 mb-8 text-base md:text-lg font-inter">Whether you're just starting out or looking to improve specific skills, we offer a range of professional driving courses to meet your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition font-inter overflow-hidden"
          >
            <div className={`absolute top-0 left-0 
              ${course.level === "standard"
                ? "bg-blue-500"
                : course.level === "express"
                ? "bg-yellow-500"
                : "bg-green-500"}
              py-2 px-4 text-white rounded-br-lg`}>
              <p>{formatLevel(course.level)}</p>
            </div>
            <div className='flex flex-col mt-10'>
              <h2 className="text-xl font-semibold mb-1">  
                {formattransmission(course.transmission)} with {formatMode(course.mode)}
              </h2>
              <p className="mb-5 text-gray-700 text-sm">{course.description}</p>
              <p className="text-base text-gray-600 mb-3">Duration: {course.duration}</p>
              <div className='mb-5'>
                <h3 className="font-medium text-sm text-gray-800 mb-2">Study Routine:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 flex flex-col gap-2">
                  {course.routine.map((routine, idx) => (
                    <li key={idx}>{routine}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <h3 className="font-medium text-sm text-gray-800 mb-3">Packages:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 flex flex-col gap-2">
                  {course.packages.map((pkg, idx) => (
                    <div key={idx} className='flex flex-row gap-2'>
                      <FiCheck className="text-green-500 size-4" />
                      <p>{pkg}</p>
                    </div>
                  ))}
                </ul>
              </div>
              
            </div>    
          </div>
        ))}
        </div>
        <div className='flex mt-10 w-full justify-center items-center'>
        <SimpleButton link="/contact" text="Book Your First Lesson" style="bg-green-500 text-white font-bold py-3 px-5 rounded-lg font-inter" tesxtStyle="font-semibold" />
        </div>

        <div className='mt-20 bg-green-100 p-10 rounded-xl font-inter'>
          <p className='font-semibold text-lg md:text-2xl'>Specialized Training for Specific Needs</p>
          <div className='flex flex-col gap-3 mt-5'>
            <div className='flex flex-row gap-2'>
              <FiCheck className="text-green-500 size-5" />
              <p>Tailored instruction based on your individual requirements</p>
            </div>
            <div className='flex flex-row gap-2'>
              <FiCheck className="text-green-500 size-5" />
              <p>Focused curriculum addressing specific challenges</p>
            </div>
            <div className='flex flex-row gap-2'>
              <FiCheck className="text-green-500 size-5" />
              <p>Flexible scheduling to accommodate your lifestyle</p>
            </div>
            <div className='flex flex-row gap-2'>
              <FiCheck className="text-green-500 size-5" />
              <p>Expert instructors with specialized training</p>
            </div>
          </div>
          <div className='flex mt-5 w-full justify-center items-center'>
            <SimpleButton link="/pricing" text="View all Pricing" style="bg-white text-green-500 font-bold py-3 px-5 rounded-lg font-inter mt-5" tesxtStyle="font-semibold" />
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
