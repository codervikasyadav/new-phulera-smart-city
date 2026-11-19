import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InfoCard.css';

export default function InfoCard({ icon, number, title, description, link, linkText, variant = 'default', image }) {
  return (
    <div className={`info-card info-card--${variant}`}>
      {image && <div className="info-card__image" style={{ backgroundImage: `url(${image})` }} />}
      <div className="info-card__body">
        {icon && <div className="info-card__icon">{icon}</div>}
        {number && <div className="info-card__number">{number}</div>}
        <h4 className="info-card__title">{title}</h4>
        <p className="info-card__desc">{description}</p>
        {link && (
          <Link to={link} className="info-card__link">
            {linkText || 'Learn More'} <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
