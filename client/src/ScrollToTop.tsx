import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Forcefully resets the scroll position to (0,0) whenever the route changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Primary scroll reset for most browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use 'instant' to avoid seeing the scrolling motion during transition
    });

    // 2. Backup reset for layouts where the root element handles overflow
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    // 3. Last resort for legacy/mobile browser behaviors
    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;