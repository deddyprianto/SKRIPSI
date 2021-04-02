import { useEffect, useState } from "react";

function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowsize, setWindowsize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowsize({ width: window.innerWidth, height: window.innerHeight });
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowsize({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);
  return windowsize;
}

export default useWindowSize;
