import moment from 'moment';
import { useEffect } from 'react';
import { WeatherInfoList } from './WeatherInfoList';

export function Daily({ daily }) {
  return (
    <div className='daily-weather-box row'>
      <div className='col-lg-12'>
        <h3>5-Day Weather Forecast</h3>
      </div>

      {daily.slice(1, 6).map((day) => (
        <div className='col-lg-12 daily-weather-container'>
          <div className='daily-weather-date'>
            {moment.unix(day.dt).format('dddd')}{' '}
            {moment.unix(day.dt).format('M/DD/YY')}
          </div>
          <div className='row'>
            <div className='col-lg-2 daily-weather-temperatures'>
              {Math.round(day.temp.max)}°/{Math.round(day.temp.min)}°
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
            <div className='col-lg-2 center-div'>
              Precipitation {day.pop * 100}%
            </div>
            <div className='col-lg-6'>
              <WeatherInfoList currentData={day}></WeatherInfoList>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
