import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function BadRoute() {
  const [countdownTime, setCountdownTime] = useState(10);
  let history = useHistory();

  useEffect(() => {
    if (countdownTime > 0) {
      setTimeout(() => setCountdownTime(countdownTime - 1), 1000);
    } else {
      history.push('/');
    }
  }, [countdownTime]);

  return (
    <div className='bad-route-container container'>
      <div className='bad-route-title'>404 ERROR</div>
      <div className='bad-route-text'>
        This page does not exist! Please use the button to return to the home
        screen. Otherwise, you will be redirected in {countdownTime} seconds.
      </div>
      <button
        className='btn btn-success btn-lg'
        type='button'
        onClick={() => history.push('/')}
      >
        <i class='bi bi-house-door icon-text'></i>
        Home
      </button>
    </div>
  );
}

export default BadRoute;
