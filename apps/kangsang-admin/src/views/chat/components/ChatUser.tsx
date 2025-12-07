"use client";
import { useEffect, useState } from "react";
import { Avatar, Box, IconButton, Typography } from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

//hooks
import useFetchListChatRooms from "../hooks/useQueryListChatRoom";
import useFetchListChatUsers from "../hooks/useQueryListChatUsers";
import useMutateCreateChat from "../hooks/useMutateCreateChat";

//components
import SelectUserModal from "./SelectUserModal";

//utils
import { ChatItem } from "@/services/chat/types";

interface ChatUserProps {
  handleSelectRoom: (roomId: string) => void;
}

function ChatUser({ handleSelectRoom }: ChatUserProps) {
  const [openModal, setOpenModal] = useState(false);
  const [listRooms, setListRooms] = useState<ChatItem[]>([]);

  const {
    data: rooms,
    isLoading,
    refetch,
  } = useFetchListChatRooms({
    page: 0,
    limit: 100,
  });

  const { data: users } = useFetchListChatUsers();

  useEffect(() => {
    if (rooms && rooms.length > 0) {
      setListRooms(rooms);
    }
  }, [rooms]);

  const createChatMutate = useMutateCreateChat({
    onSuccess: (receiverId: string) => {
      refetch();
    },
  });

  const handleSelectUser = (userId: string) => {
    createChatMutate.mutate({
      receiverId: userId,
    });
    setOpenModal(false);
  };

  return (
    <Box width="27.5%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" p={2}>
          Chat Rooms
        </Typography>
        <IconButton
          size="small"
          sx={{ width: 32, height: 32, mr: 2 }}
          onClick={() => setOpenModal(true)}
        >
          <FontAwesomeIcon size="xs" icon={faUserPlus} />
        </IconButton>
      </Box>
      {isLoading ? (
        <Typography
          variant="body2"
          color="textSecondary"
          p={2}
          textAlign="center"
        >
          Loading...
        </Typography>
      ) : listRooms && listRooms.length > 0 ? (
        listRooms.map((room) => (
          <Box
            key={room.id}
            p={1}
            borderRadius="8px 0 0 8px"
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "action.hover" },
            }}
            display="flex"
            alignItems="center"
            onClick={() => {
              handleSelectRoom(room.id);
            }}
          >
            <Avatar sx={{ width: 36, height: 36 }} />
            <Box flexGrow={1} ml={1}>
              <Typography
                variant="body2"
                overflow="hidden"
                textOverflow="ellipsis"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {users?.find((user) => user.userId === room.receiverId)
                  ?.displayName || "Unknown User"}
              </Typography>
              <Typography
                overflow="hidden"
                variant="caption"
                color="textSecondary"
                textOverflow="ellipsis"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {room.newestMessage}
              </Typography>
            </Box>
            {!room.isReaded && (
              <Box
                width={12}
                height={12}
                bgcolor="success.main"
                borderRadius="100%"
              />
            )}
          </Box>
        ))
      ) : (
        <Typography
          variant="body2"
          color="textSecondary"
          p={2}
          textAlign="center"
        >
          No chat rooms available
        </Typography>
      )}
      <SelectUserModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleSelect={handleSelectUser}
      />
    </Box>
  );
}

export default ChatUser;
