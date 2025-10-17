import { useEffect, useRef, useState } from 'react';

/**
 * useElementSize
 * A React hook that observes and returns the size (width and height)
 * of a referenced DOM element.
 *
 * @returns [ref, size] — ref to attach to element, and { width, height } object
 */
export function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ elWidth: 0, elHeight: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Initialize with current size
    setSize({
      elWidth: element.offsetWidth,
      elHeight: element.offsetHeight,
    });

    // Observe size changes
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ elWidth : width, elHeight : height });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, size] as const;
}