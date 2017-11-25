import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MyAppBar from './Components/Header/MyAppBar'
import Graph1 from './Components/Graphs/Graph1'
import Graph2 from './Components/Graphs/Graph2'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <MyAppBar />
          <Graph1 />
          <Graph2 />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
