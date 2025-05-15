import { useMutation } from "@tanstack/react-query";
import categoryApi from "@/services/category";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";

type UseMutateEditCategoryProps = {
  onSuccess: () => void;
};

const useMutateEditCategory = ({ onSuccess }: UseMutateEditCategoryProps) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: categoryApi.createCategory,
    onSuccess: () => {
      onSuccess();
      dispatch(
        openSnackbar({
          open: true,
          message: "You have successfully edit category",
          severity: "success",
        })
      );
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to edit category, please try again",
          severity: "error",
        })
      );
    },
  });
};

export default useMutateEditCategory;
