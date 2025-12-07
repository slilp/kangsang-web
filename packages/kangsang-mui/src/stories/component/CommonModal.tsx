import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "background.paper",
  p: 2,
  borderRadius: 2,
};

interface CommonModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

function CommonModal({ open, handleClose, children }: CommonModalProps) {
  return (
    <Modal
      data-testid="kangsang-modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default CommonModal;
