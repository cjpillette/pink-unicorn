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
          <div style={{ margin: 'auto', maxWidth: '600px', marginTop: '60px'}}>
            <Graph1 />
            <Graph2 />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
