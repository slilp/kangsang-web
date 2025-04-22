import { Box, Center, FullPage, Typography } from "kangsang-mui";
import Link from "next/link";

//components
import LoginSocialSection from "../components/LoginSocialSection";
import RegisterFormSection from "../components/RegisterFormSection";

function RegisterPage() {
  return (
    <FullPage>
      <Center>
        <Box
          borderRadius={4}
          boxShadow={3}
          p={3}
          width="350px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <RegisterFormSection />
          <LoginSocialSection />
          <Typography variant="body2">
            Already have an account ?{" "}
            <Link
              href="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Typography
                variant="body2"
                component="span"
                fontWeight="medium"
                sx={{ "&:hover": { opacity: 0.7 } }}
              >
                Login now
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Center>
    </FullPage>
  );
}

export default RegisterPage;
