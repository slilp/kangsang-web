import { Box, Button, Typography } from "kangsang-mui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

function LoginSocialSection() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        my={2}
      >
        <Box height="1px" width="50px" bgcolor="black" />
        <Typography variant="body2">First Sign in with</Typography>
        <Box height="1px" width="50px" bgcolor="black" />
      </Box>
      <Box display="flex" gap={2} mb={2}>
        <Button
          variant="outlined"
          fullWidth
          sx={{ display: "flex" }}
          startIcon={<FontAwesomeIcon icon={faGoogle} />}
        >
          <Typography variant="body2">Google</Typography>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ display: "flex" }}
          startIcon={<FontAwesomeIcon icon={faFacebook} />}
        >
          <Typography variant="body2">Facebook</Typography>
        </Button>
      </Box>
    </>
  );
}

export default LoginSocialSection;
