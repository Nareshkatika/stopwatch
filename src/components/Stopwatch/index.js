// Write your code here
import {useState, useEffect} from 'react'

import './index.css'

const Stopwatch = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0)

  useEffect(() => {
    let timeInterval
    if (isTimerRunning) {
      timeInterval = setInterval(() => {
        setTimeElapsedInSeconds(prevTime => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(timeInterval)
  }, [isTimerRunning])

  const onStartTimer = () => {
    setIsTimerRunning(true)
  }

  const onStopTimer = () => {
    setIsTimerRunning(false)
  }

  const onResetTimer = () => {
    setIsTimerRunning(false)
    setTimeElapsedInSeconds(0)
  }

  const renderSeconds = () => {
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    return seconds < 10 ? `0${seconds}` : seconds
  }

  const renderMinutes = () => {
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    return minutes < 10 ? `0${minutes}` : minutes
  }

  const time = `${renderMinutes()}:${renderSeconds()}`

  return (
    <div className="BgimgEl">
      <h1 className="headingEl">Stopwatch</h1>
      <div className="witepage">
        <div className="rowArrangeEl1">
          <img
            className="logoEl"
            alt="stopwatch"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          />
          <h1>{time}</h1>
        </div>
        <div className="rowArrangeEl3">
          <button onClick={onStartTimer} type="button">
            Start
          </button>
          <button onClick={onStopTimer} type="button">
            Stop
          </button>
          <button onClick={onResetTimer} type="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
