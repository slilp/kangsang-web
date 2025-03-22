import { Box, Center, FullPage, Typography } from "kangsang-mui";
import Link from "next/link";

//components
import LoginSocialSection from "../components/LoginSocialSection";
import LoginFormSection from "../components/LoginFormSection";

function LoginPage() {
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
          <LoginFormSection />
          <LoginSocialSection />
          <Typography variant="body2">
            Don't have an account ?{" "}
            <Link
              href="/register"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography
                variant="body2"
                component="span"
                fontWeight="bold"
                sx={{ "&:hover": { opacity: 0.7 } }}
              >
                Register now
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Center>
    </FullPage>
  );
}

export default LoginPage;
