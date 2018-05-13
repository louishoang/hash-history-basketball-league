import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Player from './Player'
import Team from './Team'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/players" component={Player}/>
          <Route path="/teams" component={Team}/>
        </div>
      </Router>
    )
  }
}

export default App;
