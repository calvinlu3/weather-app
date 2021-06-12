import { useState } from 'react';
import { SearchBox } from './SearchBox';
import { SearchResults } from './SearchResults';

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
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
