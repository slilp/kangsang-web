import { useMutation } from "@tanstack/react-query";
import categoryApi from "@/services/category";
import { useAppDispatch } from "@/redux/hook";
import { openSnackbar } from "@/redux/snackbar";
import chatApi from "@/services/chat";

type UseMutateCreateChatProps = {
  onSuccess: (receiverId: string) => void;
};

const useMutateCreateChat = ({ onSuccess }: UseMutateCreateChatProps) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: chatApi.createChatRooms,
    onSuccess: (data) => {
      onSuccess(data.receiverId);
    },
    onError: () => {
      dispatch(
        openSnackbar({
          open: true,
          message: "Failed to create new chat, please try again",
          severity: "error",
        })
      );
    },
  });
};

export default useMutateCreateChat;
