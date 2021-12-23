import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import HomePage from './components/HomePage';
import { Header } from './components/Header';
import NotFound404 from './components/NotFound404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      resumeData: {}
    }
  }

  setResumeData() {
    fetch('/resume.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      } 
    )
      .then(r => r.json())
      .then(data => {
        this.setState({resumeData: data, loaded: true});
        //console.log(this.state.resumeData);
        //console.log(data);
      });
  }

  componentDidMount() {
    this.setResumeData();
  }

  render() {
    //console.log(this.state.resumeData);
    if (!this.state.loaded) {
      return (
        <div className="App" />
      );
    }
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/projects" />
            <Route path="/experience" />
            <Route exact path="/" render={() => <HomePage data={this.state.resumeData}></HomePage>} />
            <Route path="/" render={() => <NotFound404 />}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
