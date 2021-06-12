import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ForcastPage from './components/ForecastPage';
import ResultsPage from './components/ResultsPage';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/search/:search' component={ResultsPage} />
        <Route path='/weather/location=:lat,:long' component={ForcastPage} />
      </Router>
    </div>
  );
};

export default App;
