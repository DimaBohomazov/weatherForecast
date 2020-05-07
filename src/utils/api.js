// export const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';  // AJ
export const openWeatherApiKey = '29c7fb83d633d43cf3d3248fc11582a2'; // MY

export const weatherApiLink = (method, city) =>
    `//api.openweathermap.org/data/2.5/${method}?q=${city},ua&units=metric&mode=json&appid=${openWeatherApiKey}`;

// weather, forecast