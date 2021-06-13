import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBox = () => {
  const [inputLocation, setInputLocation] = useState('');
  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputLocation.length === 0) return;
    history.push(`/search/${inputLocation}`);
  };

  return (
    <div className='input-group'>
      <form className='search-form' onSubmit={(e) => handleSearch(e)}>
        <input
          type='text'
          className='form-control form-control-md'
          placeholder='Enter city name or zipcode'
          onChange={(e) => setInputLocation(e.target.value)}
        />
        <button className='btn btn-light search-btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};
