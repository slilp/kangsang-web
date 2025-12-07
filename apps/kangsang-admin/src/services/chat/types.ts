export interface ChatItem {
  id: string;
  isReaded: boolean;
  newestMessage: string;
  receiverId: string;
  updatedAt: string;
}

export interface ChatResponse {
  data: ChatItem[];
}

export interface MessageItem {
  id: string;
  content: string;
  sentAt: string;
  sender: string;
}

export interface ChatMessageResponse {
  data: MessageItem[];
}
