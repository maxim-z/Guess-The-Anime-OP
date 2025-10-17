import { useEffect, useState } from "react";

interface UseIsMobileResult {
  isMobile: boolean;
  // width: number;
  // height: number;
}

export function useIsMobile(breakpoint: number = 768): UseIsMobileResult {
  // const getDimensions = () => ({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // const [dimensions, setDimensions] = useState(() => getDimensions());
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(`(max-width: ${breakpoint}px)`).matches);

  useEffect(() => {
    const handleResize = () => {
      // setDimensions(getDimensions());
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // MediaQuery listener (for consistency with your original)
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return {
    isMobile,
    // width: dimensions.width,
    // height: dimensions.height,
  };
}