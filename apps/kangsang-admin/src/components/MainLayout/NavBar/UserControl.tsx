"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
  useTheme,
} from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
        sx={{ color: "text.primary", width: "125px" }}
        startIcon={
          <FontAwesomeIcon icon={faUser} color={theme.palette.text.secondary} />
        }
      >
        <Typography variant="body2" noWrap color="text.secondary">
          {session?.user?.displayName ?? "-"}
        </Typography>{" "}
      </Button>

      <Popover
        sx={{ width: "300px" }}
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
        <Box sx={{ width: "100%", maxWidth: 360 }}>
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
              <ListItemButton>
                <ListItemIcon>
                  <FontAwesomeIcon icon={faGear} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Settings</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ borderStyle: "dashed" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() =>
                  signOut({
                    callbackUrl: "/login",
                  })
                }
              >
                <ListItemIcon>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Logout</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Popover>
    </>
  );
}

export default UserControl;
