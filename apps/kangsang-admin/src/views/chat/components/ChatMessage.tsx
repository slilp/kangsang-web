"use client";

import { useEffect, useState } from "react";
import { Box, Divider, Input } from "kangsang-mui";
import useFetchMessages from "../hooks/useQueryMessages";
import { MessageItem } from "@/services/chat/types";

interface ChatMessageProps {
  roomId: string;
  latestMessage?: MessageItem;
}

function ChatMessage({ roomId, latestMessage }: ChatMessageProps) {
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const { data: messageData } = useFetchMessages({ roomId });

  useEffect(() => {
    if (messageData) {
      setMessages(messageData);
    }
  }, [messageData]);

  useEffect(() => {
    if (latestMessage) {
      setMessages((prev) => [...prev, latestMessage]);
    }
  }, [latestMessage]);

  return (
    <Box flex={1} textAlign="center">
      <Box display="flex" height="70vh" gap={2} p={2}>
        {messages.map((msg) => (
          <Box key={msg.id}>{msg.content}</Box>
        ))}
      </Box>
      <Divider />
      <Box p={2}>
        <Input
          placeholder="Type a message..."
          fullWidth
          value={newMessage}
          disableUnderline
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
}

export default ChatMessage;
