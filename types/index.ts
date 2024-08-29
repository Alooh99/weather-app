// Interface for the main weather data
export interface WeatherData {
    main: {
      temp: number; // Temperature
      feels_like: number; // Feels like temperature
      temp_min: number; // Minimum temperature
      temp_max: number; // Maximum temperature
      humidity: number; // Humidity percentage
    };
    weather: [
      {
        description: string; // Weather description (e.g., clear sky)
        icon: string; // Icon code for weather (e.g., 01d)
      }
    ];
    wind: {
      speed: number; // Wind speed
    };
    name: string; // City name
    [key: string]: any; // To handle any other properties that might come from the API
  }
  