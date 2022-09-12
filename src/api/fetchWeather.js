import axios from "axios";

export const fetchWeather = async (query) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8e790c251f0ca8b6c00320fd63259b9b";

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metrics",
      APPID: API_KEY,
    },
  });

  return data;
};
