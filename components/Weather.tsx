"use client";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Spinner from "@/components/Spinner";
import { fetchWeatherData } from "@/utils/fetchWeather";
import { WeatherData } from "@/types";
import Image from "next/image";

interface WeatherProps {
  initialData: WeatherData | null; // Props to receive initial SSR data
}

const Weather = ({ initialData }: WeatherProps) => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(initialData); // Use initial data
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await fetchWeatherData(city); // Fetch weather data client-side
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    } finally {
      setLoading(false);
      setCity(""); // Clear the input field after fetching
    }
  };

  return (
    <div className="relative flex-col justify-between z-20 flex items-center h-full w-full">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {weather ? (
            <div className="weather-container">
              <div>
                <p className="p-degree">
                  {Math.round(((weather.main.temp - 32) * 5) / 9)}°C
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  width={150}
                  height={150}
                />
                <p className="capitalize text-[20px]">
                  {weather.weather[0].description}
                </p>
              </div>

              <div className="flex flex-col justify-between items-center mt-4 h-full">
                <h1 className="city-font">
                  {weather.name}, {weather.sys.country}
                </h1>

                <div className="details">
                  <p className="p-details">
                    Feels like:{" "}
                    {Math.round(((weather.main.feels_like - 32) * 5) / 9)}°C
                  </p>
                  <p className="p-details">
                    Humidity: {weather.main.humidity}%
                  </p>
                  <p className="p-details">
                    Wind Speed: {weather.wind.speed} mph
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white sm:text-[50px] text-[20px] flex justify-center items-center h-full ">
              No weather data available
            </p>
          )}
        </>
      )}

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex justify-between items-center w-full p-3 border-t border-t-gray-600"
        name="form"
      >
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="w-full bg-transparent border-none text-gray-300 focus:outline-none text-2xl"
          type="text"
          placeholder="Search City"
        />
        <button type="submit">
          <BsSearch size={20} className="text-gray-500" />
        </button>
      </form>
    </div>
  );
};

export default Weather;
