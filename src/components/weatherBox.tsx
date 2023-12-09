import { Box } from "@mui/material";
import { WeatherBoxItem } from "./weatherBoxItem";
import { useEffect, useState } from "react";
import {
  LocationCity,
  ThermostatAuto,
  Compress,
  Air,
} from "@mui/icons-material";
import Image from "next/image";

interface WeatherData {
  iconSrc?: string;
  name?: string;
  main: {
    temp: number;
    celsiusTemp: number;
    wind: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

export const WeatherBox = ({ localWeather }: { localWeather: string }) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const kelvinTemp = data?.main.temp || 0;
  const celsiusTemp = Math.round(kelvinTemp - 273.15);
  const iconSrc =
    data?.weather && data.weather.length > 0
      ? `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      : undefined;
  // const local = `London,uk`
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${localWeather}&APPID=52615eae056a02e55feeafaee1aebf51`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
        console.log(response.json());
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [apiUrl]);

  return (
    <>
      {data && (
        <Box sx={{ width: "20%", textAlign: "center" }}>
          {iconSrc && (
            <Image src={iconSrc} alt="Weather icon" width={100} height={100} />
          )}
          <WeatherBoxItem
            title="City"
            icon={<LocationCity />}
            value={data.name}
          />
          <WeatherBoxItem
            title="Temperature"
            icon={<ThermostatAuto />}
            value={celsiusTemp}
          />
          <WeatherBoxItem
            title="Pressure"
            icon={<Compress />}
            value={data.main.pressure}
          />
          <WeatherBoxItem
            title="Wind speed"
            icon={<Air />}
            value={data.wind.speed}
          />
        </Box>
      )}
    </>
  );
};
