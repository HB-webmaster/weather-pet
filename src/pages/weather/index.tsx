import { CityTabs } from "@components/cityTabs";
import { Container, Typography } from "@mui/material";

const Weather = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ mt: "70px"}}
      >
        <Typography variant="h1" sx={{ fontSize: "42px", mb: "40px", textAlign: "center" }}>
          The most Interesting facts about Cities
        </Typography>
        <CityTabs />
      </Container>
    </>
  );
};
export default Weather;