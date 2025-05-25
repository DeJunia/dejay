"use client"
import React, { useState, useEffect } from 'react'
import swiper from 'swiper'
import { TestimonialProps } from '@/types/type'
import Card from '../ui/Card'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface TestimonialCouraselProps {
  head?: string,
  testimonials: TestimonialProps[]
}

const TestimonialCourasel = ({testimonials, head} : TestimonialCouraselProps) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className='max-w-6xl mx-auto py-20 px-5 md:py-24'>
      <div className='flex flex-row justify-between items-center mb-8'>
        <h2 className='font-bold font-inter text-lg sm:text-2xl md:text-4xl'>{head}</h2>
        <div className='flex flex-row gap-3'>
          <button onClick={prev}
          className="p-2 rounded-full border-2 border-gray-100 bg-white hover:bg-gray-100  transition-colors"
            aria-label="Previous testimonial"
          >
            <MdOutlineKeyboardArrowLeft className='size-5'/>
          </button>
          <button onClick={next} 
          className="p-2 rounded-full border border-gray-100 bg-white hover:bg-gray-100  transition-colors"
            aria-label="Previous testimonial"
          >
            <MdOutlineKeyboardArrowRight className='size-5'/>
          </button>
        </div>
      </div>
      <div className='overflow-hidden max-w-4xl mx-auto'>
        <div className='flex transition ease-in-out duration-1000' style={{ transform: `translateX(-${current * 100}%)` }}>
          {
            testimonials.map((item) => (
              <Card item={item} key={item.id} />
            ))
          }
        </div>
      </div>

      <div className='flex flex-row justify-center items-center mt-6 space-x-2'>
          {
            testimonials.map((_, index) => (
              <button 
              key={index}
              onClick={
                () => {
                  setCurrent(index);
                  setAutoPlay(false);
                }
              }
              className={`h-2 w-2 rounded-full ${current === index ? "bg-green-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
              />
            ))
          }
      </div>
    </div>
  )
}

export default TestimonialCourasel
