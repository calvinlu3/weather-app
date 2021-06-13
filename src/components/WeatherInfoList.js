export function WeatherInfoList({ currentData }) {
  return (
    <>
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
    </>
  );
}
