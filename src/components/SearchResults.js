import { Link } from 'react-router-dom';

export const SearchResults = ({ searchResults }) => {
  return (
    <div className='row'>
      {searchResults.map((location, idx) => {
        return (
          <div className='col-lg-4 col-md-6 col-sm-12' key={idx}>
            <Link to={`/weather/location=${location.lat},${location.lon}`}>
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
  );
};
