import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchBox = () => {
  const [inputLocation, setInputLocation] = useState('');
  let history = useHistory();

  const handleSearch = () => {
    if (inputLocation.length === 0) return;
    history.push(`/search/${inputLocation}`);
  };

  return (
    <div className='input-group mb-3'>
      <form className='search-form' onSubmit={handleSearch}>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter city name or zipcode'
          onChange={(e) => setInputLocation(e.target.value)}
        />
      </form>
    </div>
  );
};
