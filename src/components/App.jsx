import React from 'react'
import ServerResponse from './ServerResponse'
import UserInput from './UserInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: `Nothing has been sent yet!`,
      username: '',
      usermessage: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(eventtarget) {
    var name;
    var message;
    if (eventtarget.name === 'name') {
      name = eventtarget.value
      this.setState((props, state) => {
        return {
          username: name
        }
      })
    }
    if (eventtarget.name === 'message') {
      message = eventtarget.value
      this.setState((state, props) => {
        return {
          usermessage: message
        }
      })
    }

  }
  handleClick(event) {
    var obj = Object.assign(this.state);
    this.props.sendPost(obj, (data) => {
      console.log(data)
      this.setState((state, props) => {
        return {
          response: data
        }
      })
    })
  }
  render() {
    return (
      <div>
        <ServerResponse response={this.state.response} />
        <UserInput handleClick={this.handleClick} handleInputChange={this.handleInputChange} />
      </div>
    )
  }
}

export default App