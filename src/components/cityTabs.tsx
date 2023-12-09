import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import { WeatherBox } from "./weatherBox";
import { TextDescription } from "./textDescr";
import cities from "@data/cities.json";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const CityTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
             {cities.map((city, index) => (
            <Tab key={index} label={city.cityName} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {cities.map((city, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <WeatherBox localWeather={`${city.cityName.toLowerCase()},${city.cityCode}`} />
            <TextDescription
              description={city.description}
              educationalHub={city.educationalHub}
              technologyIndustry={city.technologyIndustry}
              metroSystem={city.metroSystem}
            />
          </Box>
        </CustomTabPanel>
      ))}
    </Box>
  );
};
