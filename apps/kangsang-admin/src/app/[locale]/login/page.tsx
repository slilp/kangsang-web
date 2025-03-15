import {
  Box,
  Button,
  ButtonMui,
  Center,
  FullPage,
  TextField,
  Typography,
} from "kangsang-mui";

export default function Login() {
  return (
    <FullPage>
      <Center>
        <Box
          borderRadius={4}
          boxShadow={2}
          p={3}
          width="350px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography variant="h5" fontWeight="bold">
            Login
          </Typography>
          <Typography variant="body1">Welcome to Admin Dashboard</Typography>
          <TextField />
          <TextField />
          <Typography variant="body2" textAlign="right">
            Forgot password ?
          </Typography>
          <Button variant="contained">
            <Typography variant="body1">Sign in</Typography>
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            my={2}
          >
            <Box height="1px" width="50px" bgcolor="black" />
            <Typography variant="body2">Or Sign in with</Typography>
            <Box height="1px" width="50px" bgcolor="black" />
          </Box>
          <Box display="flex" gap={2}>
            <Button variant="outlined" sx={{ display: "flex" }}>
              <Typography>Icon</Typography>
              <Typography>Hello</Typography>
            </Button>
            <Button variant="outlined" sx={{ display: "flex" }}>
              <Typography>Icon</Typography>
              <Typography>Hello</Typography>
            </Button>
            <Button variant="outlined" sx={{ display: "flex" }}>
              <Typography>Icon</Typography>
              <Typography>Hello</Typography>
            </Button>
          </Box>
          <Typography variant="body2">
            Don't have an account ?{" "}
            <Typography variant="body2" component="span" fontWeight="bold">
              Register now
            </Typography>
          </Typography>
        </Box>
      </Center>
    </FullPage>
  );
}
