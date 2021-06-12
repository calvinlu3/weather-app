import { useState } from 'react';
import axios from 'axios';

const fetchLocationInfo = async (type, params) => {
  var geocodeData;
  try {
    switch (type) {
      case 'zip':
        geocodeData = await axios.get(
          `http://api.openweathermap.org/geo/1.0/zip?zip=${params}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        break;
      case 'name':
        geocodeData = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${params}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        break;
      default:
        break;
    }
  } catch (err) {
    console.log(err);
  }

  return geocodeData;
};

function HomePage() {
  const [inputLocation, setInputLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');

  const getGeocodedLocation = () => {
    var queryParams;
    var isZip = true;

    if (inputLocation.match(/\d+/g)) {
      var zipcodeSplitIndex = inputLocation.search(/[\s,]+/g);
      queryParams = inputLocation;
      if (zipcodeSplitIndex !== -1) {
        queryParams = inputLocation.slice(0, zipcodeSplitIndex);
        queryParams += `,${inputLocation.slice(zipcodeSplitIndex + 1).trim()}`;
      }
    } else {
      isZip = false;
      var searchParamList = inputLocation
        .split(/,\s+/g)
        .map((e) => e.trim().replace(/\s/g, '+'));
      queryParams = searchParamList.join(',');
      if (searchParamList.length === 2) {
        if (
          searchParamList[1].toLowerCase() !== 'us' ||
          searchParamList[1].toLowerCase() !== 'usa'
        ) {
          queryParams += ',US';
        }
      }
    }

    fetchLocationInfo(isZip ? 'zip' : 'name', queryParams).then(
      (geocodeData) => {
        geocodeData
          ? setSearchResults(isZip ? [geocodeData.data] : geocodeData.data)
          : setSearchError('No search results');
      }
    );
  };

  return (
    <div className='home'>
      <div className='home-main'>
        <div className='home-text'>Get up to date weather information</div>
        <div className='home-search'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter city name or zipcode'
              onChange={(e) => setInputLocation(e.target.value)}
            />
            <div className='input-group-append'>
              <button
                className='btn btn-light'
                type='button'
                onClick={getGeocodedLocation}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container home-results'>
        <h2 style={{ fontWeight: 700 }}>Search Results</h2>
        <div className='row'>
          {searchResults.map((location, idx) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='result-container'>
                  <div className='result-content'>
                    <div className='result-content-text-title'>
                      {location.name}
                    </div>
                    <div className='result-content-text-extra'>
                      {location.state
                        ? `${location.state}, ${location.country}`
                        : `${location.country}`}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
