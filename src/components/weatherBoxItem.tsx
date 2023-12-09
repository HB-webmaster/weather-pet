import { Chip, Stack, Paper } from "@mui/material";


interface IWeather {
  title?: string;
  value: any;
  icon?: any;
}

export const WeatherBoxItem = ({ title, value, icon }: IWeather) => {
  return (
    <Stack direction="column" spacing={0} sx={{mb: "15px"}}>
      <Chip icon={icon} label={title} color="primary" sx={{ fontSize: "17px", mb: "5px"}}/>
      <Paper elevation={0} sx={{ fontSize: "18px", fontWeight: "600"}}>{value}</Paper>
    </Stack>
  );
};
