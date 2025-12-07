"use client";

//main
import { FullPage, Box, ContentBox } from "kangsang-mui";

//components
import ChatMessage from "../components/ChatMessage";
import ChatUser from "../components/ChatUser";
import { useState, useEffect, useRef } from "react";

function ChatPage() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>("");
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
    const wsHost = window.location.host;
    // Use absolute path with correct protocol for Next.js API route
    const ws = new WebSocket(`${wsProtocol}://${wsHost}/api/secure-ws`);
    wsRef.current = ws;

    ws.onopen = (event) => {
      console.log("WebSocket open:", event);
    };

    ws.onmessage = (event) => {
      console.log("WebSocket message:", event);
    };

    ws.onerror = (event) => {
      console.error("WebSocket error:", event);
    };

    ws.onclose = (event) => {
      console.log("WebSocket closed:", event);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <FullPage component="div">
      <ContentBox display="flex">
        <ChatUser
          handleSelectRoom={(roomId: string) => setSelectedRoomId(roomId)}
        />
        <Box width={2} bgcolor="divider" />
        <ChatMessage roomId={selectedRoomId} />
      </ContentBox>
    </FullPage>
  );
}

export default ChatPage;
