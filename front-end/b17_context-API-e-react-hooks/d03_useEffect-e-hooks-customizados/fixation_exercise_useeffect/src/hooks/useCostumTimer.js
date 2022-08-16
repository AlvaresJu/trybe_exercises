import { useEffect, useState } from 'react';

const useCostumTimer = () => {
  const [timer, setTimer] = useState(0);
  const [number, setNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);

  const TIMER_INTERVAL = 1000;
  const NUMBER_TIMEOUT = 10000;
  const MESSAGE_TIMEOUT = 4000;
  const MIN_RANDOM = 1;
  const MAX_RANDOM = 100;

  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

  const handleNewNumber = () => {
    const newNumber = getRandomInteger(MIN_RANDOM, MAX_RANDOM);
    setNumber(newNumber);
    if (newNumber % 3 === 0 || newNumber % 5 === 0) {
      setIsMultiple(true);
      setTimeout(() => setIsMultiple(false), MESSAGE_TIMEOUT);
    }
    setTimer(0);
  }

  useEffect(() => {
    const updateNumber = setInterval(handleNewNumber, NUMBER_TIMEOUT);
    return () => clearInterval(updateNumber);
  },[]);

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, TIMER_INTERVAL);
    return () => clearInterval(updateTimer);
  },[]);

  return [number, isMultiple, timer];
}

export default useCostumTimer;
