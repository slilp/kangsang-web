import { Avatar, Box, CommonModal, Typography } from "kangsang-mui";
import useFetchListChatUsers from "../hooks/useQueryListChatUsers";

interface SelectUserModalProps {
  open: boolean;
  handleSelect: (userId: string) => void;
  handleClose: () => void;
}

function SelectUserModal({
  open,
  handleSelect,
  handleClose,
}: SelectUserModalProps) {
  const { data: users, isLoading } = useFetchListChatUsers();

  return (
    <CommonModal open={open} handleClose={handleClose}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box
          display="flex"
          maxHeight="50vh"
          flexDirection="column"
          overflow="auto"
          gap={2}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {(users || []).length === 0 ? (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              py={2}
            >
              No users found
            </Typography>
          ) : (
            (users || []).map((user) => (
              <Box
                key={`select.${user.userId}`}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={1}
                py={0.5}
                borderRadius={2}
                onClick={() => handleSelect(user.userId)}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <Avatar src={user.displayImage} />
                {user.displayName || "Unknown User"}
              </Box>
            ))
          )}
        </Box>
      )}
    </CommonModal>
  );
}

export default SelectUserModal;
