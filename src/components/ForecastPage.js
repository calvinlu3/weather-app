import { useParams } from 'react-router-dom';
import { CurrentWeather } from './CurrentWeather';
import { Daily } from './Daily';
import { useCacheData } from '../hooks/useCacheData';

function ForcastPage() {
  const { lat, long, name } = useParams();
  const [fetchedData] = useCacheData(
    name,
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  return (
    <div className='forecast container'>
      {fetchedData.current ? (
        <>
          <CurrentWeather currentData={fetchedData.current} name={name} />
          <Daily daily={fetchedData.daily} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ForcastPage;
