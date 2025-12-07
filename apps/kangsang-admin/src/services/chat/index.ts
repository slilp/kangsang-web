import axios from "axios";
import { service } from "../servicePath";
import { ChatResponse, ChatMessageResponse } from "./types";

const listChatRooms = async (page: number, limit: number) => {
  return await axios.get<ChatResponse>(`${service.secure}/chat/room?`, {
    params: { page, limit },
  });
};

const createChatRooms = async ({ receiverId }: { receiverId: string }) => {
  await axios.post(`${service.secure}/chat/create-chat-to-other`, {
    destinationUserId: receiverId,
  });

  return { receiverId };
};

const roomMessages = async (roomId: string, page: number, limit: number) => {
  return await axios.get<ChatMessageResponse>(
    `${service.secure}/chat/${roomId}/messages?page=${page}&limit=${limit}`
  );
};

const chatApi = {
  listChatRooms,
  createChatRooms,
  roomMessages,
};

export default chatApi;
