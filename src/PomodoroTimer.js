import React, {useState, useEffect} from "react";
import './PomodoroTimer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false);
            if (isBreak) {
              // If break finished, start work session
              setMinutes(25);
              setIsBreak(false);
            } else {
              // If work session finished, start break
              setMinutes(5);
              setIsBreak(true);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  }

  const handleStop = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0)
  }

  const handlePause = () => {
    setIsPaused(true);
    setIsActive(null);
  }

  const handlePlay = () => {
    setIsPaused(false);
    setIsActive(true);
  }

  return (
    <div className="pomodoro-container">
        <div className="animate-timer">
            <div className="timer"> {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} </div>
        </div>
        <div className="controls">
            { isActive === false ? <FontAwesomeIcon icon={faPlay} onClick={handleStart}/> : (<div className="active">
              { !isPaused ? <FontAwesomeIcon icon={faPause} onClick={handlePause} /> : <FontAwesomeIcon icon={faPlay} onClick={handlePlay}/>}
              <FontAwesomeIcon icon={faStop} onClick={handleStop}/>
            </div>)}
        </div>
    </div>
  )
}

export default PomodoroTimer;