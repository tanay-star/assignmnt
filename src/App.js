import logo from './logo.svg'
import React from 'react'
import './App.css'
//importing components

import Button from './components/Button/Button'
import Element from './components/Element/Element'
import Text from './components/Text/Text'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: '#ff8585',
      text: '',
    }
  }

  handleClick = (e) => {
    this.setState({ bgColor: 'green' })
    this.setState({ text: 'Button clicked' })
  }

  render() {
    return (
      <div className="App">
        <Element bgColor={this.state.bgColor} />
        <Button handleClick={this.handleClick} />
        <Text text={this.state.text} />
      </div>
    )
  }
}

export default App
