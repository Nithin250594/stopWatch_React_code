// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  timeRunning: false,
  mins: 0,
  secs: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount = () => {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  incrementTime = () => {
    const {secs} = this.state

    if (secs >= 0 && secs < 59) {
      this.setState(prev => ({secs: prev.secs + 1}))
    } else {
      this.setState(prev => ({mins: prev.mins + 1, secs: 0}))
    }
  }

  startTimer = () => {
    const {timeRunning} = this.state

    if (timeRunning === false) {
      this.intervalId = setInterval(this.incrementTime, 1000)
      this.setState({timeRunning: true})
    }
  }

  stopTimer = () => {
    this.clearTimeInterval()
    this.setState({timeRunning: false})
  }

  resetTimer = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  render() {
    const {mins, secs} = this.state
    const stringifiedMins = mins < 10 ? `0${mins}` : mins
    const stringifiedSecs = secs < 10 ? `0${secs}` : secs

    return (
      <div className="white-bg">
        <div className="stopwatch-bg">
          <div className="stopwatch-container">
            <h1 className="stopWatch-title">Stopwatch</h1>
            <div className="timer-container">
              <div className="timer-title-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="stopwatch-image"
                />
                <p className="timer-title">Timer</p>
              </div>
              <h1 className="timer">
                {stringifiedMins}:{stringifiedSecs}
              </h1>
              <div className="buttons-container">
                <button
                  type="button"
                  className="button-style start-btn"
                  onClick={this.startTimer}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="button-style stop-btn"
                  onClick={this.stopTimer}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="button-style reset-btn"
                  onClick={this.resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
