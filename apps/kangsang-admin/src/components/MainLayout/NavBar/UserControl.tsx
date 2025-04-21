"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Popover,
  Typography,
  useTheme,
} from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { setThemeStorage } from "@/utils/storage";

function UserControl() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const theme = useTheme();

  const { data: session } = useSession();

  const onOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  return (
    <>
      <Button
        onClick={onOpenPopover}
        sx={{ color: "text.primary", width: { xs: "125px", md: "160px" } }}
        startIcon={
          <FontAwesomeIcon icon={faUser} color={theme.palette.text.secondary} />
        }
      >
        <Typography variant="body2" noWrap color="text.secondary">
          {session?.user?.displayName ?? "-"}
        </Typography>{" "}
      </Button>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ width: { xs: "125px", md: "160px" } }}>
          <List>
            <ListItem>
              <Typography variant="body2" noWrap>
                {session?.user?.displayName ?? "-"}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" noWrap color="text.secondary">
                {session?.user?.email ?? "-"}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <Button
                fullWidth
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <FontAwesomeIcon icon={faGear} />
                <Typography variant="body2">Settings</Typography>
                <Box />
              </Button>
            </ListItem>
          </List>
          <Divider sx={{ borderStyle: "dashed" }} />
          <List>
            <ListItem disablePadding>
              <Button
                fullWidth
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  setThemeStorage("light");

                  signOut({
                    callbackUrl: "/login",
                  });
                }}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <Typography variant="body2">Logout</Typography>
                <Box />
              </Button>
            </ListItem>
          </List>
        </Box>
      </Popover>
    </>
  );
}

export default UserControl;
