import { WeatherInfoList } from './WeatherInfoList';
import { useParseWeatherData } from '../hooks/useParseWeatherData';

export function Daily({ daily }) {
  const [parsedWeatherData] = useParseWeatherData(daily, [daily]);

  return (
    <div className='daily-weather-box row'>
      <div className='col-lg-12'>
        <h3>5-Day Weather Forecast</h3>
      </div>

      {parsedWeatherData.map((day, idx) => (
        <div className='col-lg-12 daily-weather-container' key={idx}>
          <div className='daily-weather-date'>{day.dt_day}</div>
          <div className='row'>
            <div className='col-lg-2 daily-weather-temperatures'>
              {day.temp.max}°/{day.temp.min}°
            </div>
            <div
              className='col-lg-2 center-div'
              style={{ width: 'fit-content' }}
            >
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt='loading'
              ></img>
            </div>
            <div className='col-lg-2 center-div'>Precipitation {day.pop}%</div>
            <div className='col-lg-6'>
              <WeatherInfoList currentData={day}></WeatherInfoList>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
