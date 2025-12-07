import chatApi from "@/services/chat";
import { ChatItem } from "@/services/chat/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseFetchListChatRoomsProps {
  page: number;
  limit: number;
}

const useFetchListChatRooms = ({
  page = 0,
  limit = 20,
}: UseFetchListChatRoomsProps): UseQueryResult<ChatItem[]> => {
  return useQuery({
    queryKey: ["list-chat", page, limit],
    queryFn: async () => {
      const resp = await chatApi.listChatRooms(page + 1, limit);
      return resp?.data?.data || [];
    },
  });
};

export default useFetchListChatRooms;
