import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CANONICAL_ORIGIN = 'https://newphulerasmartcity.in';

/**
 * CanonicalManager ensures that for every route in the SPA,
 * the document's canonical <link> and <meta property="og:url"> tags
 * point to the equivalent non-WWW HTTPS URL.
 */
export default function CanonicalManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    // Canonical format: root has trailing slash '/', inner routes do not have trailing slash
    const canonicalHref = `${CANONICAL_ORIGIN}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

    // 1. Update or create <link rel="canonical">
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalHref);

    // 2. Update or create <meta property="og:url">
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalHref);
  }, [location.pathname]);

  return null;
}
