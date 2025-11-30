import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top when pathname changes.
 * Default smooth behavior; pass behavior: 'auto' if you want instant jump.
 */
export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);

  return null;
}
