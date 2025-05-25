import Image from "next/image";
import Link from "next/link";
import { image } from "@/constant";
import { SimpleButton } from "@/components/ui/Button";
import { FiCheck } from "react-icons/fi";
import { WhyUs } from "@/lib/data";
import { getStAutoCourse } from "@/utils/standardCourse";
import { CourseCard } from "@/components/ui/CourseCard";
import TestimonialCourasel from "@/components/system/TestimonialCourasel";
import { testimonials, lessonProcess, questions } from "@/lib/data";

export default function Home() {
  const courses = getStAutoCourse();

  return (
    <div className="Home w-full overflow-hidden">
      <section className="relative w-full">
        <div className="relative hero">
          <Image src={image.bg2} className="img w-full h-full object-bottom" style={{ objectFit: "cover" }} alt="Dejay Home Page" />
          <div className="any absolute top-0 right-0 w-full h-full"></div>
        </div>

        <div className="absolute top-0 right-0 w-full h-full border-2 pt-24 pb-5 px-5 md:px-10 ">
          <div className="max-w-6xl mx-auto h-full flex flex-col gap-5 justify-center">
            <h1 className="text-3xl md:text-5xl font-extrabold font-inter ">Start Your Driving Journey Today</h1>
            <p className="text-base md:text-2xl font-semibold md:font-medium">Professional instructors, modern vehicles, and personalized lessons to help you become a confident driver.</p>
            <div className="flex flex-row gap-5 flex-wrap ">
              <SimpleButton link="/contact" text="Book Your First Lesson" style="bg-green-500 text-white font-bold py-3 px-5 rounded-lg font-inter" tesxtStyle="font-semibold" />
              <SimpleButton link="/courses" text="View Courses" style="bg-white text-gray-800 font-bold py-3 px-5 rounded-lg font-inter" tesxtStyle="font-semibold" />   
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-6">
              <div className="flex flex-row gap-3 items-center">
                <div className="h-10 w-10 bg-gray-800/30 rounded-full flex items-center justify-center">
                <FiCheck className="size-5 text-white"/>
                </div> 
                <p className="font-semibold">Certified Instructors</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="h-10 w-10 bg-gray-800/30 rounded-full flex items-center justify-center">
                <FiCheck className="size-5 text-white"/>
                </div> 
                <p className="font-semibold">Mordern Vehicles</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="h-10 w-10 bg-gray-800/30 rounded-full flex items-center justify-center">
                <FiCheck className="size-5 text-white"/>
                </div> 
                <p className="font-semibold">98% Pass Rate</p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section> 

      <section className="w-full">
        <div className="max-w-6xl mx-auto py-20 px-5 md:py-24">
          <p className="font-bold text-2xl sm:text-3xl text-center">
            Why Choose <span><span className="text-green-500 font-chango">DEJAY</span> Driving School</span>
          </p>
          <p className="text-center text-gray-600 mt-5">We're committed to creating safe, confident drivers through personalized instruction and modern training methods.</p>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {
                WhyUs.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3 items-center border-b border-gray-100 py-4">
                    <div className="p-5 bg-green-500/10 rounded-full w-fit">
                      <item.icon className="size-10 text-green-500"/>
                    </div>
                    <p className="font-bold text-center">{item.title}</p>
                    <p className="text-center text-gray-600">{item.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-green-200/10">
        <div className="max-w-6xl mx-auto py-20 px-5 md:py-24">
          <p className="font-bold text-2xl sm:text-3xl text-center">Our Featured Courses</p>
          <p className="text-center text-gray-600 mt-5 text-base">Whether you're a first-time driver or looking to enhance your skills, we have the perfect course for you.</p>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                courses.map((item, index) => (
                  <div key={index}>
                    <CourseCard item={item} popular={index === 0}/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mt-10 w-full flex justify-center items-center">
          <SimpleButton link="/courses" text="View All Courses" style="w-fit bg-green-500 text-white font-bold py-3 px-5 rounded font-inter" tesxtStyle="font-semibold" />
          </div>
        </div>
      </section>

      <section className="w-full bg-green-600">
        <div className="max-w-6xl mx-auto py-20 px-5 md:py-24">
          <p className="font-extrabold text-2xl sm:text-4xl text-center text-white font-inter">Ready to Start Your Driving Journey?</p>
          <p className="text-center text-gray-100 mt-5 text-lg font-inter">Book your first lesson today and take the first step toward becoming a confident, safe driver.</p>
          <div className="mt-10 w-full flex justify-center items-center">
            <SimpleButton link="/courses" text="View All Courses" style="w-fit bg-white text-green-500 font-bold py-3 px-5 rounded font-inter" tesxtStyle="font-semibold" />
          </div>
        </div>
      </section>

      <section className="w-full bg-green-200/10">
        <TestimonialCourasel testimonials={testimonials} head="What Our Students Say" />
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto py-20 px-5 md:py-24">
          <p className="font-extrabold text-2xl sm:text-4xl text-center text-black font-inter">Our Learning Process</p>
          <p className="text-center text-gray-600 mt-5 text-base md:text-lg font-inter">We've designed a straightforward, effective approach to help you become a confident driver.</p>

          <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {
            lessonProcess.map((item, index) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="size-14 bg-green-500 rounded-full flex justify-center items-center mb-4">
                  <p className="text-white text-center text-2xl font-extrabold font-inter">{item.id}</p>
                </div>
                
                <p className="font-bold font-inter text-lg">{item.title}</p>
                <p className="text-gray-600 font-inter">{item.description}</p>
              </div>
            ))
          }
        </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto py-20 px-5 md:py-24">
          <p className="font-extrabold text-2xl sm:text-4xl text-center text-black font-inter">Frequently Asked Questions</p>
            <div className="max-w-3xl mx-auto mt-10 flex flex-col gap-5">
              {
              questions.map((item, index) => (
                <div key={item.id} className="border-2 border-gray-100 rounded-lg p-5">
                  <p className="text-lg font-bold font-inter">{item.question}</p>
                  <p className="text-gray-600 font-inter mt-2">{item.answer}</p>
                </div>  
              ))
              }
            </div>
          </div>
      </section>
    </div>
  );
}

