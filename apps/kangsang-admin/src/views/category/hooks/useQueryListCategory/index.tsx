import categoryApi from "@/services/category";
import { ListCategoryResponse } from "@/services/category/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseFetchListCategoryProps {
  search?: string;
  page: number;
  limit: number;
  orderBy: string;
}

const useFetchListCategory = ({
  search,
  page = 0,
  limit = 20,
  orderBy = "updatedAt:desc",
}: UseFetchListCategoryProps): UseQueryResult<ListCategoryResponse> => {
  return useQuery({
    queryKey: search
      ? ["list-category"]
      : ["list-category", page, limit, orderBy],
    queryFn: async () => {
      const resp = await categoryApi.listCategory(page + 1, limit, orderBy);
      return resp;
    },
    ...(search ? {} : { staleTime: 1000 * 10 }), // 10 seconds
  });
};

export default useFetchListCategory;
