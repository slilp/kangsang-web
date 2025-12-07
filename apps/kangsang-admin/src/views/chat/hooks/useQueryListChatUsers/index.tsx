import userApi from "@/services/user";
import { UserItem } from "@/services/user/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useFetchListChatUsers = (): UseQueryResult<UserItem[]> => {
  return useQuery({
    queryKey: ["chat-users"],
    queryFn: async () => {
      const resp = await userApi.listAllAdminUsers();
      return resp?.data || [];
    },
    staleTime: 1000 * 60 * 10, // 5 minutes
  });
};

export default useFetchListChatUsers;
