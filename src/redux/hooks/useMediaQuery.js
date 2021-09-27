import { useState, useEffect } from 'react';
import { breakpoints } from 'consts';

const useMediaQuery = (direction, min, max) => {
  const query = max ? breakpoints[direction](min, max) : breakpoints[direction](min);
  const [matches, setMatches] = useState(window?.matchMedia(query).matches);
  useEffect(() => {
    const media = window?.matchMedia(query);
    const listener = () => {
      setMatches(media.matches);
    };

    if (media.matches !== matches) setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.addEventListener('change', listener);
  }, [matches, query]);

  return { matches };
};

export default useMediaQuery;
