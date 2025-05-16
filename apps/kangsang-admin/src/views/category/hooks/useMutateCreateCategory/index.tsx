import { useMutation } from "@tanstack/react-query";
import categoryApi from "@/services/category";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";

type UseMutateCreateCategoryProps = {
  onSuccess: () => void;
};

const useMutateCreateCategory = ({
  onSuccess,
}: UseMutateCreateCategoryProps) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: categoryApi.createCategory,
    onSuccess: () => {
      onSuccess();
      dispatch(
        openSnackbar({
          open: true,
          message: "You have successfully create new category",
          severity: "success",
        })
      );
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to create category, please try again",
          severity: "error",
        })
      );
    },
  });
};

export default useMutateCreateCategory;
