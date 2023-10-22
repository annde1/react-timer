import "./styles.css";
import { Fragment, useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}
const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        // Update seconds, minutes, and hours
        setSeconds((seconds) => (seconds + 1) % 60);
        setMinutes(
          (minutes) => (minutes + Math.floor((seconds + 1) / 60)) % 60
        );
        setHours((hours) => hours + Math.floor((minutes + 1) / 60));
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  return (
    <>
      <h1 style={{ fontFamily: "Sometype Mono" }}>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
      <Button
        styles={{ marginRight: "5px", fontFamily: "Sometype Mono" }}
        onClick={startTimer}
      >
        Start
      </Button>
      <Button
        styles={{ marginRight: "5px", fontFamily: "Sometype Mono" }}
        onClick={stopTimer}
      >
        Stop
      </Button>
      <Button onClick={resetTimer} styles={{ fontFamily: "Sometype Mono" }}>
        Reset
      </Button>
    </>
  );
};
const Button = ({ children, styles, onClick }) => {
  return (
    <button className="btn btn-outline-light" style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
