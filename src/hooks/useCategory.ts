import { useQuery } from "@tanstack/react-query";
import categoryService from "@/services/categoryService";
import { CategoryRes } from "@/types/type";

export function useCategory() {
  return useQuery<CategoryRes>({
    queryKey: ["category"],
    queryFn: async () => {
      return await categoryService.getCategories();
    },
  });
}
