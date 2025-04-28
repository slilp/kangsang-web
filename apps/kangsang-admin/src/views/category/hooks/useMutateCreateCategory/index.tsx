import { useMutation } from "@tanstack/react-query";
import categoryApi from "@/services/category";

type UseMutateCreateCategoryProps = {
  onSuccess: () => void;
  onError: () => void;
};

const useMutateCreateCategory = ({
  onSuccess,
  onError,
}: UseMutateCreateCategoryProps) => {
  return useMutation({
    mutationFn: categoryApi.createCategory,
    onSuccess,
    onError,
  });
};

export default useMutateCreateCategory;
