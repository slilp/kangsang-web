import { useMutation } from "@tanstack/react-query";
import uploadApi from "@/services/upload";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";

type UseMutateUploadImgProps = {
  onSuccess: (resp: { imageUrl: string }) => void;
};

const useMutateUploadImg = ({ onSuccess }: UseMutateUploadImgProps) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: uploadApi.uploadImage,
    onSuccess: (resp) => {
      onSuccess(resp);
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

export default useMutateUploadImg;
