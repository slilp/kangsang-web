import { Box, Button, colors, Typography } from "kangsang-mui";
import {
  faChevronDown,
  faChevronRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MiniMenuButtonProps {
  isSelected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: IconDefinition;
  isShowSubMenu: boolean;
}

function MiniMenuButton({
  isSelected,
  onClick,
  label,
  icon,
  isShowSubMenu,
}: MiniMenuButtonProps) {
  return (
    <Button
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary",
        position: "relative",
        ...(isSelected && {
          color: colors.deepOrange[500],
          bgcolor: colors.deepOrange[50],
          borderColor: colors.deepOrange[200],
        }),
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <Typography variant="body2">{label}</Typography>
      {isShowSubMenu && (
        <Box position="absolute" right="5px" top="5px">
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </Box>
      )}
    </Button>
  );
}

export default MiniMenuButton;
