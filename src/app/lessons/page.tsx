"use client";
import React from "react";
import { reactIcons } from "@/constant";
import { useRouter } from "next/navigation";

const LessonPage = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen">
      <div className="max-w-6xl mx-auto pt-20 px-4">
        <div className="mt-10 flex flex-row gap-3 justify-between">
          <div className="px-4 py-3 bg-green-50 rounded-full w-fit flex flex-row gap-3 items-center">
            <reactIcons.graduate className="w-5 h-5 text-green-700" />
            <span className="text-green-700 ">Welcome Back User</span>
          </div>
          <div
            className="px-4 py-3 w-fit flex flex-row gap-3 items-center cursor-pointer"
            onClick={() => router.push("/lessons/add")}
          >
            <reactIcons.add className="w-5 h-5 text-green-700" />
            <span className="text-green-700 ">Add</span>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-xl md:text-3xl font-bold font-inter">
            Master the road with our Professional Driving Lessons
          </h1>
          <span className="text-sm md:text-base font-inter text-gray-500">
            Access your daily lessons, study materials, and practice guides.
            Learn at your own pace with our comprehensive driving curriculum.
          </span>
        </div>
        <div className="mt-8">
          <div>
            <div>
              <div className="flex flex-row gap-3 items-end ">
                <div className="bg-green-50 py-3 px-3 rounded-lg">
                  <reactIcons.calender className="w-5 h-5" />
                </div>

                <span className="font-bold font-inter text-xl">
                  Today's Lesson
                </span>
              </div>
              <span className="font-inter text-gray-500 text-sm ml-4">
                Wednesday, December 10
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <div>
              <div className="flex flex-row gap-3 items-end ">
                <div className="bg-green-50 py-3 px-3 rounded-lg">
                  <reactIcons.gallery className="w-5 h-5" />
                </div>

                <span className="font-bold font-inter text-xl">
                  All Lessons
                </span>
              </div>
              <span className="font-inter text-gray-500 text-sm ml-4">
                Wednesday, December 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
