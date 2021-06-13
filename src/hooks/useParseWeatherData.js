import { useState, useEffect } from 'react';
import moment from 'moment';

export const useParseWeatherData = (weatherData, dependencies) => {
  const [parsedWeatherData, setParsedWeatherData] = useState([]);

  useEffect(() => {
    var isDaily = weatherData.length > 1;
    var parsed = weatherData.slice(isDaily ? 1 : 0, 6).map((dayWeather) => {
      var formattedDay = {
        ...dayWeather,
        dt_full: moment.unix(dayWeather.dt).format('MM/DD/YYYY h:mm A'),
        dt_day:
          moment.unix(dayWeather.dt).format('dddd') +
          ' ' +
          moment.unix(dayWeather.dt).format('M/DD/YY'),
        wind_speed: Math.round(dayWeather.wind_speed),
        pop: dayWeather.pop * 100,
        uvi: Math.round(dayWeather.uvi),
      };
      if (isDaily) {
        formattedDay.temp.min = Math.round(formattedDay.temp.min);
        formattedDay.temp.max = Math.round(formattedDay.temp.max);
      } else {
        formattedDay.temp = Math.round(formattedDay.temp);
      }
      return formattedDay;
    });
    setParsedWeatherData(parsed);
  }, dependencies);

  return [parsedWeatherData];
};
