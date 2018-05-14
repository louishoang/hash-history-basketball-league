import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Player from './Player'
import Teams from './Teams'
import Navbar from './Navbar'
import TeamPage from './TeamPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/players" component={Player}/>
            <Route path="/teams" component={Teams}/>
            <Route exact path="/:teamId" component={TeamPage}/>
            <Route render={() => <h1 className="text-center">Page not found!</h1> } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
