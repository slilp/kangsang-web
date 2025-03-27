import { Button, colors, Typography } from "kangsang-mui";

interface SubMenuButtonProps {
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

function SubMenuButton({ isSelected, onClick, label }: SubMenuButtonProps) {
  return (
    <Button
      fullWidth
      sx={{
        color: "text.secondary",
        display: "flex",
        justifyContent: "flex-start",
        ...(isSelected && {
          color: colors.deepOrange[500],
          bgcolor: colors.grey[100],
        }),
      }}
      onClick={onClick}
    >
      <Typography variant="body2">{label}</Typography>
    </Button>
  );
}

export default SubMenuButton;
