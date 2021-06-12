import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchBox = () => {
  const [inputLocation, setInputLocation] = useState('');

  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        className='form-control form-control-lg'
        placeholder='Enter city name or zipcode'
        onChange={(e) => setInputLocation(e.target.value)}
      />
      <div className='input-group-append'>
        <button className='btn btn-light' type='button'>
          <Link to={`/search/${inputLocation}`}>Search</Link>
        </button>
      </div>
    </div>
  );
};
