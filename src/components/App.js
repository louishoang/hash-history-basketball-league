import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch
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

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/players" component={Player}/>
            <Route path="/teams" component={Team}/>
            <Route render={() => <h1 className="text-center">Page not found!</h1> } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
