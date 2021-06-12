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

export function Search({ searchCallback }) {
  const [inputLocation, setInputLocation] = useState('');
  const [searchError, setSearchError] = useState('');

  const getGeocodedLocation = () => {
    if (inputLocation.length === 0) return;

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
          ? searchCallback(isZip ? [geocodeData.data] : geocodeData.data)
          : setSearchError('No search results');
      }
    );
  };

  return (
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
  );
}
