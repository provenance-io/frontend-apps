import { useEffect } from 'react';

/** Hook for changing title */
const usePageTitle = title => {
  useEffect(() => {
    document.title = `Provenance dApplications - ${title}`
    // Scroll to the top of the page whenever the page changes
    window.scrollTo(0, 0);
  }, [title]);
};

export default usePageTitle;
