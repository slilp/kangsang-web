import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 2,
};

interface KangsangModalProps {
  open: boolean;
  handleConfirm?: () => void;
  handleClose: () => void;
  title: string;
  description: string;
  txtBtnConfirm?: string;
  txtBtnCancel?: string;
}

function KangsangModal({
  open,
  handleConfirm,
  handleClose,
  title,
  description,
  txtBtnConfirm,
  txtBtnCancel,
}: KangsangModalProps) {
  return (
    <Modal
      data-testid="kangsang-modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Box mt={3} display="flex" gap={2}>
          {handleConfirm && (
            <Button
              fullWidth
              data-testid="confirm-button"
              variant="contained"
              color="primary"
              onClick={handleConfirm}
            >
              {txtBtnConfirm || "Ok"}
            </Button>
          )}
          <Button
            fullWidth
            data-testid="cancel-button"
            variant="outlined"
            color="primary"
            onClick={handleClose}
          >
            {txtBtnCancel || "Cancel"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default KangsangModal;
