import { useMutation } from "@tanstack/react-query";
import authApi from "@/services/auth";

type UseMutateLoginProps = {
  onSuccess: () => void;
  onError: () => void;
};

const useMutateLogin = ({ onSuccess, onError }: UseMutateLoginProps) => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess,
    onError,
  });
};

export default useMutateLogin;
