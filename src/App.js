import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import HomePage from './components/HomePage';
import { Header } from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({resumeData: data});
        //console.log(this.state.resumeData);
        //console.log(data);
      });
  }

  componentDidMount() {
    this.setResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/projects" />
            <Route path="/resume" />
            <Route exact path="/" render={() => <HomePage data={this.state.resumeData}></HomePage>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
