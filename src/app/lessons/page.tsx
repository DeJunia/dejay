"use client";
import React, { useEffect } from "react";
import { useRecentLessons, getTodaysLesson } from "@/hooks/useLesson";
import { useCategories } from "@/hooks/useCategory";
import { Calendar, TimerReset, Plus, GalleryVerticalEnd } from "lucide-react";
import { LessonData, Category } from "@/types/type";
import { LessonCard, CategoryCard } from "@/components/ui/Card";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const LessonPage = () => {
  const { data } = useRecentLessons();
  const { data: data2 } = getTodaysLesson();
  const { data: data3 } = useCategories(4, 1);

  const lessons = data?.data;
  const todaysLesson = data2?.data as LessonData;
  const categories = data3?.data as Category[];

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(todaysLesson);
  }, [todaysLesson]);
  return (
    <div className="min-h-screen pt-25 pb-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* <section className="px-5 md:px-10">
          <div>Welcome to DejayLearn</div>
          <div>Master the Road with Professional Driving Lessons</div>
          <p>
            Access your daily lessons, study materials, and practice guides.
            Learn at your own pace with our comprehensive driving curriculum.
          </p>
        </section> */}

        {/* <section>
          <div className="px-5 md:px-10 p">
            <h1 className="text-2xl md:text-4xl font-extrabold font-inter text-center">
              Your Daily <span className="text-green-500">Lessons</span>
            </h1>
            <p className="text-xs md:text-base font-inter  text-center mt-2 text-gray-600">
              Access your daily lessons, study materials, and practice guides.
              Learn at your own pace with our comprehensive driving curriculum.
            </p>
          </div>
        </section> */}

        <section className="px-5 ">
          <div className="flex flex-row gap-3 mb-5">
            <div className="size-10 flex items-center justify-center bg-green-50 rounded-lg">
              <Calendar className="size-5 text-green-500" />
            </div>
            <div className="">
              <h1 className="text-black font-semibold font-inter">
                Todays Lessons
              </h1>
              <p className="text-xs md:text-sm text-gray-500">
                Browse through our daily lessons
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <LessonCard lesson={todaysLesson} />
          </div>
        </section>
        {user?.role === "instructor" ? (
          <section className="px-5 mt-15">
            <div className="flex flex-row gap-3 mb-5">
              <div className="size-10 flex items-center justify-center bg-green-50 rounded-lg">
                <GalleryVerticalEnd className="size-5 text-green-500" />
              </div>
              <div className="">
                <h1 className="text-black font-semibold font-inter">
                  Categories
                </h1>
                <p className="text-xs md:text-sm text-gray-500">
                  Browse through our categories
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 ">
              {categories?.slice(0, 3).map((category: Category) => (
                <CategoryCard key={category._id} category={category} />
              ))}

              <div
                className="p-5 h-fit border-2 border-green-500 rounded-lg border-dashed flex flex-row gap-3 items-center cursor-pointer"
                onClick={() => router.push("/lessons/add/category")}
              >
                <div className="size-10 flex items-center justify-center border-2 border-green-500 rounded-full ">
                  <Plus className="size-6 text-green-500" />
                </div>
                <p className="text-lg font-semibold">Add Category</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="px-5 mt-15">
            <div className="flex flex-row gap-3 mb-5">
              <div className="size-10 flex items-center justify-center bg-green-50 rounded-lg">
                <GalleryVerticalEnd className="size-5 text-green-500" />
              </div>
              <div className="">
                <h1 className="text-black font-semibold font-inter">
                  Categories
                </h1>
                <p className="text-xs md:text-sm text-gray-500">
                  Browse through our categories
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {categories?.map((category: Category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </section>
        )}

        <section className="px-5 mt-15">
          <div className="flex flex-row gap-3 mb-5">
            <div className="size-10 flex items-center justify-center bg-green-50 rounded-lg">
              <TimerReset className="size-5 text-green-500" />
            </div>
            <div className="">
              <h1 className="text-black font-semibold font-inter">
                Latest Lessons
              </h1>
              <p className="text-xs md:text-sm text-gray-500">
                Browse through our latest lessons
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {lessons?.map((lesson: LessonData) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonPage;
