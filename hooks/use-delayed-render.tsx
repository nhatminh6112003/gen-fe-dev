import { useEffect, useState } from 'react';

interface Options {
  enterDelay?: number;
  exitDelay?: number;
  onUnmount?: () => void;
}

const useDelayedRender = (active: boolean, options?: Options) => {
  const [mounted, setMounted] = useState(false);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (active) {
      setMounted(true);
      setTimeout(() => setRendered(true), options?.enterDelay || 0);
    } else {
      setRendered(false);
      setTimeout(() => {
        setMounted(false);
        options?.onUnmount && options.onUnmount();
      }, options?.exitDelay || 0);
    }
  }, [active, options]);

  return { mounted, rendered };
};

export default useDelayedRender;
