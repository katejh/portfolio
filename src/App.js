import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import components
import HomePage from './components/HomePage';
import Header from './components/Header';
import NotFound404 from './components/NotFound404';
import Experience from './components/Experience';

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
    const darkTheme = createTheme({
      palette: {
        mode: 'dark'
      }
    });

    //console.log(this.state.resumeData);
    if (!this.state.loaded) {
      return (
        <div className="App" />
      );
    }

    // add <CssBaseline /> as child of ThemeProvider if dark background desired
    return (
      <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Router>
          <Header name={this.state.resumeData.basic_info.name}/>
          <Switch>
            <Route path="/projects" />
            <Route path="/experience" render={() => <Experience experience={this.state.resumeData.experience} />}/>
            <Route exact path="/" render={() => <HomePage data={this.state.resumeData} />} />
            <Route path="/" render={() => <NotFound404 />}></Route>
          </Switch>
        </Router>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
