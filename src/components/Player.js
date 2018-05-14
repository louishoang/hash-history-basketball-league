import React, { Component } from 'react'
// import Sidebar from './Sidebar'
import { getPlayers } from '../api'
import Sidebar from './Sidebar';
import { Route, Link } from 'react-router-dom'
import { parse } from 'query-string'
import slug from 'slug'

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
    getPlayers(teamId)
      .then((players) => this.setState({ players, loading: false }))
  }

  render() {
    const { players, loading } = this.state
    const { match, location } = this.props

    return (
      <div className="container two-column">
        <Sidebar
          title="Players"
          list={players.map((player) => player.name)}
          loading={loading}
          {...this.props} />

        {loading === false && location.pathname === '/players'
          ? <div className="sidebar-instruction">Select a player</div>
          : null
        }

        <Route path={`${match.url}/:playerId`} render={({ match }) => {
          if (loading === true) return null

          const player = players.find((player) => slug(player.name) === match.params.playerId)
          const {
            name, position, teamId, number, avatar, apg, ppg, rpg, spg
          } = player

          return (
            <div className="panel">
              <img className="avatar" src={`${avatar}`} alt={`${name}'s avatar`} />
              <h1 className="medium-header">{name}</h1>

              <h3 className="header">{number}</h3>

              <div className="row">
                <ul className="info-list" style={{ marginRight: 80 }}>
                  <li> Team
                      <div>
                      <Link style={{ color: "#68809a" }} to={`/${teamId}`}>
                        {teamId[0].toUpperCase() + teamId.slice(1)}
                      </Link>
                    </div>
                  </li>
                  <li>Position<div>{position}</div></li>
                </ul>
              </div>
            </div>
          )
        }} />
      </div>
    )
  }
}

export default Player
