import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found | New Phulera Smart City";
  }, []);

  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-card">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you are looking for does not exist, has been removed, or has had its name changed. Please use the navigation links or return to the homepage.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> RETURN TO HOME →
            </Link>
            <Link to="/enquiry" className="btn btn-outline">
              CONTACT SUPPORT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
