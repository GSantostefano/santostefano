// src/hooks/useSound.js
import { useEffect, useRef } from 'react';

const useSound = (url) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(url);
  }, [url]);

  const play = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return play;
};

export default useSound;
