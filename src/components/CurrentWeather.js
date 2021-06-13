import moment from 'moment';

export function CurrentWeather({ currentData }) {
  return (
    <div className='current-weather-box row'>
      <div className='col-lg-6 col-md-6 col-sm-12'>
        <h3>Current Weather</h3>
        <div>
          Last update: {moment.unix(currentData.dt).format('MM/DD/YYYY h:mm A')}
        </div>
        <div className='row' style={{ width: 'fit-content' }}>
          <div className='col-md-6 temperature'>
            {Math.round(currentData.temp)}°
          </div>
          <div className='col-md-6'>
            <img
              src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`}
              alt='loading'
            ></img>
          </div>
        </div>
        <div>Feels like {Math.round(currentData.feels_like)}°</div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12' style={{ width: '20%' }}>
        <div className='row weather-category-item'>
          <div className='col-lg-6 col-sm-12 weather-category-title'>
            Condition
          </div>
          <div className='col-lg-6 col-sm-12 weather-category-value'>
            {currentData.weather[0].description}
          </div>
        </div>
        <div className='row weather-category-item'>
          <div className='col-lg-6 col-sm-12 weather-category-title'>
            Humidity
          </div>
          <div className='col-lg-6 col-sm-12 weather-category-value'>{`${currentData.humidity}%`}</div>
        </div>
        <div className='row weather-category-item'>
          <div className='col-lg-6 col-sm-12 weather-category-title'>
            UV Index
          </div>
          <div className='col-lg-6 col-sm-12 weather-category-value'>
            {Math.round(currentData.uvi)} (Max: 10)
          </div>
        </div>
        <div className='row weather-category-item'>
          <div className='col-lg-6 col-sm-12 weather-category-title'>
            Wind Speed
          </div>
          <div className='col-lg-6 col-sm-12 weather-category-value'>
            {Math.round(currentData.wind_speed)} mph
          </div>
        </div>
      </div>
    </div>
  );
}
