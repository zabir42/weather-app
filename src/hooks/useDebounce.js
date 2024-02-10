import { useEffect, useRef } from "react";

const useDebounce = (cb, delay) => {
  const timeOutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeOutRef.current);
  }, []);
  const debounceCB = (...args) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };

  return debounceCB;
};

export default useDebounce;
