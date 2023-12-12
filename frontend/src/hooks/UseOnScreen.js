import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, {
      threshold: 0.2
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect(); // Cleanup when the component unmounts
    };
  }, [ref]);

  return isOnScreen;
};
export default useOnScreen;