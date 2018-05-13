import React, { Component } from 'react'
// import Sidebar from './Sidebar'
import { getPlayers } from '../api'
import Sidebar from './Sidebar';
import { Route, Link } from 'react-router-dom'
import { parse } from 'query-string'
import { slug } from 'slug'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      players: [],
      loading: true
    }
  }

  componentDidMount() {
    const { location } = this.props
    location.search
      ? this.fetchPlayers(parse(location.search).teamId)
      : this.fetchPlayers()
  }

  fetchPlayers = (teamId) => {
    getPlayers()
      .then((players) => this.setState({players, loading: false}))
  }

  render(){
    const { players, loading } = this.state

    return (
      <div className="container two-column">
        <Sidebar 
          title="Players" 
          list={players.map((player) => player.name)} 
          loading={loading}
          {...this.props}/>
      </div>
    )
  }
}

export default Player
