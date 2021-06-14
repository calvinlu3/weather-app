import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentWeather } from './CurrentWeather';
import { Daily } from './Daily';
import axios from 'axios';

function ForcastPage() {
  const [forecastData, setForecastData] = useState({});
  const { lat, long, name } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((res) => {
        setForecastData(res.data);
      });
  }, []);

  return (
    <div className='forecast container'>
      {forecastData.current ? (
        <>
          <CurrentWeather currentData={forecastData.current} name={name} />
          <Daily daily={forecastData.daily} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ForcastPage;
