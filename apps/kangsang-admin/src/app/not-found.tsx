import { Box, Button, Center, FullPage, Typography } from "kangsang-mui";
import Link from "next/link";

export default function NotFound() {
  return (
    <FullPage>
      <Center flexDirection="column" p={2}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          It might have been removed or the URL might be incorrect.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Go Back to Home
          </Button>
        </Link>
      </Center>
    </FullPage>
  );
}
