import React,  {Component} from 'react'
import PropTypes from 'prop-types'

class Loading extends Component{
  constructor(props){
    super()
    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    const stopper = this.props.text + '...'
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState({text: this.props.text})
        : this.setState(({text}) => ({text: text + '.'}))
    })
  }

  componentWillUnmount(){
    window.clearInterval(this.interval)
  }

  render(){
    return(
      <div className="container">
        <p className="text-center">
          {this.state.text}
        </p>
      </div>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading'
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loading