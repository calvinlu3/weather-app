import { SearchBox } from './SearchBox';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <div className='header row justify-content-between'>
      <div className='header-title'>
        <Link className='navbar-brand' to='/'>
          Weather App
        </Link>
      </div>
      <div className='header-search-bar col-lg-4 col-sm-4 col-4'>
        <SearchBox></SearchBox>
      </div>
    </div>
  );
}
