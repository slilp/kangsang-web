import chatApi from "@/services/chat";
import { MessageItem } from "@/services/chat/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface UseFetchListChatRoomsProps {
  roomId: string;
  page?: number;
  limit?: number;
}

const useFetchMessages = ({
  roomId,
  page = 0,
  limit = 100,
}: UseFetchListChatRoomsProps): UseQueryResult<MessageItem[]> => {
  return useQuery({
    queryKey: ["messages", roomId, page, limit],
    queryFn: async () => {
      const resp = await chatApi.roomMessages(roomId, page + 1, limit);
      return resp?.data?.data || [];
    },
    enabled: !!roomId,
  });
};

export default useFetchMessages;
