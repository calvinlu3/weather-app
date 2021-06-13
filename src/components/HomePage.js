import { SearchBox } from './SearchBox';

function HomePage() {
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
