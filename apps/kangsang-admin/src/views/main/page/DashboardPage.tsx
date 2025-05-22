import { Box, ContentBox, FullPage, Typography } from "kangsang-mui";
import {
  faCircleCheck,
  faHeart,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardPage() {
  return (
    <FullPage>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(45deg, #FF9800 30%, #FF5722 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Kangsang Admin Dashboard
        </Typography>
        <Typography variant="h5" textAlign="center">
          Start from second sprint !
        </Typography>
        <Typography variant="h6" textAlign="center">
          Admin dashboard from developer to developer{" "}
          <FontAwesomeIcon
            icon={faHeart}
            color="red"
            style={{ transform: "rotate(12deg)" }}
          />
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          width={{ xs: "100%", md: "80%" }}
        >
          <ContentBox flex={1} p={2}>
            <Typography color="success" fontWeight="bold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                color="success"
                style={{ marginRight: 10 }}
              />
              Done
            </Typography>
            <Box
              component="ul"
              display="flex"
              mt={2}
              flexDirection="column"
              gap={1}
              pl={2}
            >
              <Box component="li">Junior friendly code structure</Box>
              <Box component="li">Authentication</Box>
              <Box component="li">Unit test</Box>
              <Box component="li">Query state management</Box>
              <Box component="li">Global state management</Box>
              <Box component="li">CRUD integration</Box>
              <Box component="li">Turborepo</Box>
              <Box component="li">Theme setting</Box>
              <Box component="li">Layout & Responsive Design</Box>
            </Box>
          </ContentBox>
          <ContentBox flex={1} p={2}>
            <Typography fontWeight="bold">
              {" "}
              <FontAwesomeIcon
                icon={faHourglassStart}
                style={{ marginRight: 10 }}
              />
              In Progress
            </Typography>
            <Box
              component="ul"
              display="flex"
              mt={2}
              flexDirection="column"
              gap={1}
              pl={2}
              color="text.secondary"
            >
              <Box component="li">Social Login</Box>
              <Box component="li">Multi Language Support</Box>
              <Box component="li">Statistic Graph</Box>
              <Box component="li">Animation</Box>
              <Box component="li">Storybook</Box>
            </Box>
          </ContentBox>
        </Box>
      </Box>
    </FullPage>
  );
}

export default DashboardPage;
