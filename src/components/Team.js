import { Component } from 'react'
import PropTypes from 'prop-types'
import { getTeam } from '../api'

class Team extends Component {
  constructor() {
    super()
    this.state = {
      team: null,
    }
  }

  componentDidMount() {
    this.fetchTeam(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchTeam(nextProps.id)
    }
  }

  fetchTeam = (id) => {
    this.setState({ team: null })
    getTeam(id)
      .then((team) => this.setState({team}))
  }

  render(){
    return this.props.children(this.state.team)
  }
}

Team.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default Team
