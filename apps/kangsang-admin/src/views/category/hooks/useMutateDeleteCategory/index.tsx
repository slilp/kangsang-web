import { useMutation } from "@tanstack/react-query";
import categoryApi from "@/services/category";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";

type UseMutateDeleteCategoryProps = {
  onSuccess: () => void;
};

const useMutateDeleteCategory = ({
  onSuccess,
}: UseMutateDeleteCategoryProps) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: categoryApi.deleteCategory,
    onSuccess: () => {
      onSuccess();
      dispatch(
        openSnackbar({
          open: true,
          message: "You have successfully delete category",
          severity: "success",
        })
      );
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to delete category, please try again",
          severity: "error",
        })
      );
    },
  });
};

export default useMutateDeleteCategory;
