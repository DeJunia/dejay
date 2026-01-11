import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import lessonService from "@/services/lessonService";
import { LessonRes } from "@/types/type";

export const useRecentLessons = () => {
  return useQuery({
    queryKey: ["lessons"],
    queryFn: async () => await lessonService.getLessons(1, 4),
  });
};

export const useReadLesson = (id: string) => {
  return useQuery<LessonRes, Error>({
    queryKey: ["lesson", id],
    queryFn: async () => await lessonService.getLesson(id),
  });
};

export const getTodaysLesson = () => {
  return useQuery<LessonRes, Error>({
    queryKey: ["today-lesson"],
    queryFn: async () => await lessonService.getTodaysLesson(),
  });
};
