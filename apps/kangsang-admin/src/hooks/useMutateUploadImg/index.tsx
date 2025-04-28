import { useMutation } from "@tanstack/react-query";
import uploadApi from "@/services/upload";

type UseMutateUploadImgProps = {
  onSuccess: (resp: { imageUrl: string }) => void;
  onError: () => void;
};

const useMutateUploadImg = ({
  onSuccess,
  onError,
}: UseMutateUploadImgProps) => {
  return useMutation({
    mutationFn: uploadApi.uploadImage,
    onSuccess,
    onError,
  });
};

export default useMutateUploadImg;
