

import { WeatherData } from "@/types";

export async function fetchWeatherData(city: string): Promise<WeatherData | null> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
}
