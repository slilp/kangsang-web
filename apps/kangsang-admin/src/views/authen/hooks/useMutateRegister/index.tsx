import { useMutation } from "@tanstack/react-query";
import authApi from "@/services/auth";

type UseMutateRegisterProps = {
  onSuccess: () => void;
  onError: () => void;
};

const useMutateRegister = ({ onSuccess, onError }: UseMutateRegisterProps) => {
  return useMutation({
    mutationFn: authApi.register,
    onSuccess,
    onError,
  });
};

export default useMutateRegister;
