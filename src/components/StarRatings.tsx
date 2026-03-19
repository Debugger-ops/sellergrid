import React from 'react';
import type { StarRating } from '../types';

interface StarRatingsProps {
  ratings: StarRating[];
}

const StarRatings: React.FC<StarRatingsProps> = ({ ratings }) => (
  <div className="star-ratings">
    <div className="card__header">
      <div>
        <div className="card__title">Rating Distribution</div>
        <div className="card__sub">All platforms combined</div>
      </div>
    </div>
    <div className="star-ratings__body">
      {ratings.map((r) => (
        <div key={r.stars} className="star-ratings__row">
          <div className="star-ratings__label">{r.stars}★</div>
          <div className="star-ratings__track">
            <div
              className="star-ratings__fill"
              style={{
                width: `${r.percentage}%`,
                background: r.stars >= 4 ? 'var(--accent)' : r.stars === 3 ? 'var(--accent3)' : 'var(--accent2)',
              }}
            />
          </div>
          <div className="star-ratings__count">{r.count.toLocaleString()}</div>
        </div>
      ))}
    </div>
    <div className="star-ratings__footer">
      <span className="star-ratings__footer-label">Weighted average</span>
      <span className="star-ratings__footer-value">4.2 ★</span>
    </div>
  </div>
);

export default StarRatings;