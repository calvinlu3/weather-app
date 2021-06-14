import { WeatherInfoList } from './WeatherInfoList';
import { useParseWeatherData } from '../hooks/useParseWeatherData';

export function CurrentWeather({ currentData }) {
  const [parsedWeatherData] = useParseWeatherData([currentData], [currentData]);

  return (
    <div className='current-weather-box row'>
      {parsedWeatherData.length !== 0 ? (
        <>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h3>Current Weather</h3>
            <div>Last update: {parsedWeatherData[0].dt_full}</div>
            <div className='row' style={{ width: 'fit-content' }}>
              <div className='col-md-6 temperature'>
                {parsedWeatherData[0].temp}°
              </div>
              <div className='col-md-6'>
                <img
                  src={`https://openweathermap.org/img/wn/${parsedWeatherData[0].weather[0].icon}@2x.png`}
                  alt='loading'
                ></img>
              </div>
            </div>
            <div>Feels like {parsedWeatherData[0].feels_like}°</div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{ width: '20%' }}>
            <WeatherInfoList
              currentData={parsedWeatherData[0]}
            ></WeatherInfoList>
          </div>
        </>
      ) : (
        <div> Loading...</div>
      )}
    </div>
  );
}
