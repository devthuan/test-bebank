import { useState, useEffect } from "react";

const useDelayRender = (delay) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), delay);
    return () => clearTimeout(timer); // Cleanup khi unmount
  }, [delay]);

  return isReady;
};

export default useDelayRender;
