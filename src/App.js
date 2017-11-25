import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAppBar from './Components/Header/MyAppBar'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <MyAppBar />
          <p>Testing with yarn</p>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
