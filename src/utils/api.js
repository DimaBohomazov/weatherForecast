export const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';

export const weatherApiLink = (method, city) =>
    `//api.openweathermap.org/data/2.5/${method}?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`;

// weather, forecast