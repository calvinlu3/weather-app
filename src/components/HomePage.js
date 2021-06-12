import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const afterSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className='home'>
      <div className='home-main'>
        <div className='home-text'>Get up to date weather information</div>
        <div className='home-search'>
          <Search searchCallback={afterSearch} />
        </div>
      </div>
      <div className='container home-results'>
        <h2 style={{ fontWeight: 700 }}>Search Results</h2>
        <div className='row'>
          {searchResults.map((location, idx) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-12' key={idx}>
                <Link to={`weather/location=${location.lat},${location.lon}`}>
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
