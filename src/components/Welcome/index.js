// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button type="button" className="button" onClick={this.buttonText}>
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" className="button" onClick={this.buttonText}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="message">ThankYou! Happy Learning</p>
        {this.getButtonText()}
      </div>
    )
  }
}

export default Welcome
