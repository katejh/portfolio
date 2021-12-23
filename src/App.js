import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/projects" />
          <Route path="/resume" />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
