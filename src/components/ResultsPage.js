import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SearchResults } from './SearchResults';

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
          `http://api.openweathermap.org/geo/1.0/direct?q=${params}&limit=8&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
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

function formatInput(search) {
  var queryParams;
  var isZip = true;

  if (search.match(/\d+/g)) {
    var zipcodeSplitIndex = search.search(/[\s,]+/g);
    queryParams = search;
    if (zipcodeSplitIndex !== -1) {
      queryParams = search.slice(0, zipcodeSplitIndex);
      queryParams += `,${search.slice(zipcodeSplitIndex + 1).trim()}`;
    }
  } else {
    isZip = false;
    var searchParamList = search
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
  return [queryParams, isZip];
}

function ResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    if (search.length === 0) return;
    const [queryParams, isZip] = formatInput(search);
    fetchLocationInfo(isZip ? 'zip' : 'name', queryParams).then(
      (geocodeData) => {
        if (geocodeData)
          setSearchResults(isZip ? [geocodeData.data] : geocodeData.data);
      }
    );
  }, [search]);

  return (
    <div className='results'>
      <div className='results-main'>
        <div className='results-text'>Search Results for '{search}'</div>
      </div>
      <div className='results-container container'>
        {searchResults.length !== 0 ? (
          <SearchResults {...{ searchResults }} />
        ) : (
          <div className='results-empty'>
            <div>Can't find your location?</div>
            <div>Make sure to use city names!</div>
            <div>Add country code to zipcode.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
