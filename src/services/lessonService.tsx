import api from "./api";
import { Lesson, LessonRes, LessonSRes } from "@/types/type";

const lessonService = {
  getLessons: async (page: number, limit: number): Promise<LessonSRes> => {
    try {
      const response = await api.get(`lessons?page=${page}&limit=${limit}`);
      return response.data as LessonSRes;
    } catch (error: any) {
      console.error("Error fetching lessons:", error);
      throw error;
    }
  },

  createLesson: async (lesson: Lesson): Promise<LessonRes> => {
    try {
      const response = await api.post("lessons", lesson);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error creating lesson:", error);
      throw error;
    }
  },

  updateLesson: async (id: string, lesson: Lesson): Promise<LessonRes> => {
    try {
      const response = await api.put(`lessons/${id}`, lesson);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error updating lesson:", error);
      throw error;
    }
  },

  deleteLesson: async (id: string): Promise<void> => {
    try {
      await api.delete(`lessons/${id}`);
    } catch (error: any) {
      console.error("Error deleting lesson:", error);
      throw error;
    }
  },

  getLessonsByCategory: async (id: string): Promise<LessonSRes> => {
    try {
      const response = await api.get(`lessons/category/${id}`);
      return response.data as LessonSRes;
    } catch (error: any) {
      console.error("Error fetching lessons by category:", error);
      throw error;
    }
  },

  getLesson: async (id: string): Promise<LessonRes> => {
    try {
      const response = await api.get(`lessons/${id}`);
      console.log("Lesson api data: ", response.data);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error fetching lesson:", error);
      throw error;
    }
  },

  searchLessons: async (query: string): Promise<LessonSRes> => {
    try {
      const response = await api.get(`lessons/search?query=${query}`);
      return response.data as LessonSRes;
    } catch (error: any) {
      console.error("Error searching lessons:", error);
      throw error;
    }
  },

  getTodaysLesson: async (): Promise<LessonRes> => {
    try {
      const response = await api.get(`lessons/lesson/today`);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error fetching today's lessons:", error);
      throw error;
    }
  },

  setTodaysLesson: async (lessonId: string): Promise<LessonRes> => {
    try {
      const response = await api.patch(`lessons/${lessonId}/set-today/`);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error setting today's lesson:", error);
      throw error;
    }
  },

  unsetTodaysLesson: async (): Promise<LessonRes> => {
    try {
      const response = await api.patch(`lessons/unset-today/`);
      return response.data as LessonRes;
    } catch (error: any) {
      console.error("Error unsetting today's lesson:", error);
      throw error;
    }
  },
};

export default lessonService;
