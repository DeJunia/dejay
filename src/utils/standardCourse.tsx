import React from 'react'
import { courses } from '@/lib/data'
import { Course } from '@/types/type'

export const getStAutoCourse = () => {
  const modes = ["full_license", "driving_only", "refresher"] as const;
  return modes
    .map((mode) =>
      courses.find(
        (course) =>
          course.level === "standard" &&
          course.transmission === "automatic" &&
          course.mode === mode
      )
    )
    .filter(Boolean) as Course[];
}

