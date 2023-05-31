import { useState, useRef, useEffect } from "react";

const useStopWatch = () => {
  const [milliSecs, setMilliSecs] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [hours, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const timer = useRef(null);

  useEffect(() => {
    if (milliSecs === 100) {
      setMilliSecs(0);
      setSecs((prev) => prev + 1);
    }

    if (secs === 60) {
      setSecs(0);
      setMins((prev) => prev + 1);
    }

    if (mins === 60) {
      setMins(0);
      setHour((prev) => prev + 1);
    }
  }, [milliSecs, mins, secs]);

  useEffect(
    (timer) => {
      if (timerOn) {
        timer = setInterval(() => {
          setMilliSecs((prev) => prev + 1);
        }, 10);
      } else if (!timerOn) {
        clearInterval(timer);
      }

      return () => {
        clearInterval(timer);
      };
    },
    [timerOn, timer]
  );

  const startStopWatch = () => {
    setTimerOn(true);
  };

  const stopStopWatch = () => {
    setTimerOn(false);
  };

  const resetStopWatch = () => {
    setMilliSecs(0);
    setSecs(0);
    setMins(0);
    setHour(0);
    setTimerOn(false);
  };

  const addTrailingZero = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const stopWatchHour = addTrailingZero(hours);
  const stopWatchMin = addTrailingZero(mins);
  const stopWatchSec = addTrailingZero(secs);
  const stopWatchMilliSec = addTrailingZero(milliSecs);

  return {
    stopWatchHour,
    stopWatchMin,
    stopWatchSec,
    stopWatchMilliSec,
    startStopWatch,
    stopStopWatch,
    resetStopWatch,
  };
};

export default useStopWatch;
