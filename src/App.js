import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ForcastPage from './components/ForecastPage';
import ResultsPage from './components/ResultsPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <>
            <Header />
            <Route path='/search/:search' component={ResultsPage} />
            <Route
              path='/weather/location=:lat,:long'
              component={ForcastPage}
            />
            <Footer></Footer>
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
