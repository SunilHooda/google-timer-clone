import React, { useState } from "react";
import useStopWatch from "../../CustomHooks/useStopWatch";

const Stopwatch = ({ active }) => {
  const [stop, setStop] = useState(true);

  const {
    stopWatchHour,
    stopWatchMin,
    stopWatchSec,
    stopWatchMilliSec,
    startStopWatch,
    stopStopWatch,
    resetStopWatch,
  } = useStopWatch();

  const handleButtonToggle = () => {
    if (stop) {
      startStopWatch();
      setStop(false);
    } else {
      stopStopWatch();
      setStop(true);
    }
  };

  return (
    <div>
      {!active && (
        <div className="timerBox">
          <div className="wrapper">
            {stopWatchHour > 0 && (
              <p>
                <span>{stopWatchHour}</span>h :
              </p>
            )}

            {stopWatchMin > 0 && (
              <p>
                <span>{stopWatchMin}</span>m :
              </p>
            )}

            {stopWatchSec > 0 && (
              <p>
                <span>{stopWatchSec}</span>s :
              </p>
            )}

            <p>
              <span>{stopWatchMilliSec}</span>ms
            </p>
          </div>
          <div className="btnBox">
            <button onClick={handleButtonToggle}>
              {stop ? "Start" : "Stop"}
            </button>
            <button onClick={resetStopWatch}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
