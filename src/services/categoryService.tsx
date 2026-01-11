import api from "./api";
import { Category, CategoryRes } from "@/types/type";

const categoryService = {
  getCategories: async (
    limit?: number,
    page?: number
  ): Promise<CategoryRes> => {
    try {
      const response = await api.get(`category?limit=${limit}&page=${page}`);
      return response.data as CategoryRes;
    } catch (error) {
      throw error;
    }
  },

  createCategory: async (category: Category): Promise<any> => {
    try {
      const response = await api.post("category", category);
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  },
};

export default categoryService;
