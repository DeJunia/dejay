import { useQuery } from "@tanstack/react-query";
import categoryService from "@/services/categoryService";
import { CategoryRes } from "@/types/type";

export function useCategories(limit: number, page: number) {
  return useQuery<CategoryRes, Error>({
    queryKey: ["category"],
    queryFn: async () => {
      return await categoryService.getCategories(limit, page);
    },
  });
}
