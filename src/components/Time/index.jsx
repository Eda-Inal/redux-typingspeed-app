import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementTimer, startTimer, toggleCardVisibility } from '../../redux/typingSlice';

function Time() {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.typing.timer);
  const isTimerRunning = useSelector((state) => state.typing.isTimerRunning);

  useEffect(() => {
    const handleKeyPress = () => {
      if (!isTimerRunning) {
        dispatch(startTimer());
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isTimerRunning, dispatch]);

  useEffect(() => {
    if (isTimerRunning) {
      const intervalId = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isTimerRunning, dispatch]);

  useEffect(() => {
    if (timer === 0) {
      dispatch(toggleCardVisibility());
    }
  }, [timer, dispatch]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <Box as='button' borderRadius='3xl' bg='pink.300' color='black' px={2} h='40px'>
        {formatTime(timer)}
      </Box>
    </div>
  );
}

export default Time;

