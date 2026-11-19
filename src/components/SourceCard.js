import React from 'react';
import { ExternalLink } from 'lucide-react';
import './SourceCard.css';

export default function SourceCard({ title, description, sourceUrl, buttonLabel, icon }) {
  return (
    <div className="source-card">
      <div className="source-card__body">
        {icon && <div className="source-card__icon">{icon}</div>}
        <h4 className="source-card__title">{title}</h4>
        <p className="source-card__desc">{description}</p>
        <a 
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="source-card__link"
        >
          {buttonLabel || 'View Source'} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
