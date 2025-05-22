import { Center, CircularProgress, FullPage } from "kangsang-mui";

function LoadingLayout() {
  return (
    <FullPage>
      <Center>
        <CircularProgress size="50px" />
      </Center>
    </FullPage>
  );
}

export default LoadingLayout;
