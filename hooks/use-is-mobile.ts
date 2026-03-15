import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // LEARN: por que necesitamos poner un parametro aqui?
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(MOBILE_BREAKPOINT < window.innerHeight);
    };

    mql.addEventListener("change", onChange);

    onChange();

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
};
