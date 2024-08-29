import Image from "next/image";
import Weather from "@/components/Weather";
import { fetchWeatherData } from "@/utils/fetchWeather";

export default async function Home() {
  const initialCity = "New York"; // Default city
  const weather = await fetchWeatherData(initialCity);

  return (
    <main className="relative w-full">
      <div className="relative w-full h-[100vh]">
        {/* Background Image */}
        <Image
          src="https://images.pexels.com/photos/13201073/pexels-photo-13201073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="weather image"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />

        {/* Weather Info */}
        <div className="relative flex z-20 items-center h-full w-full">
          {weather && <Weather initialData={weather} />}
        </div>
      </div>
    </main>
  );
}
