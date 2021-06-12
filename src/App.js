import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ForcastPage from './components/ForecastPage';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Route path='/' component={HomePage} />
        <Route path='/weather/:location' component={ForcastPage} />
      </Router>
    </div>
  );
};

export default App;
