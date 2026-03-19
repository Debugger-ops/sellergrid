import React from 'react';
import './SentimentRing.css';

const RADIUS = 54;
const CIRC   = 2 * Math.PI * RADIUS;

interface Segment {
  label: string;
  pct: number;
  color: string;
}

const segments: Segment[] = [
  { label: 'Positive', pct: 68, color: '#00e5a0' },
  { label: 'Neutral',  pct: 20, color: '#5c9fff' },
  { label: 'Negative', pct: 12, color: '#ff5c5c' },
];

const SentimentRing: React.FC = () => {
  let offset = 0;

  return (
    <div className="sentiment-ring">
      <div className="card__header">
        <div>
          <div className="card__title">Sentiment Breakdown</div>
          <div className="card__sub">AI-classified, this month</div>
        </div>
      </div>

      <div className="sentiment-ring__body">
        <div className="sentiment-ring__container">
          <svg width="140" height="140" viewBox="0 0 140 140">
            {/* background track */}
            <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#1f2430" strokeWidth="14" />

            {segments.map((seg) => {
              const dash    = (seg.pct / 100) * CIRC;
              const gap     = CIRC - dash;
              const dashoff = -offset;
              offset += dash;

              return (
                <circle
                  key={seg.label}
                  cx="70" cy="70" r={RADIUS}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="14"
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={dashoff}
                  strokeLinecap="round"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '70px 70px' }}
                />
              );
            })}
          </svg>

          <div className="sentiment-ring__center">
            <div className="sentiment-ring__pct">68%</div>
            <div className="sentiment-ring__label">POSITIVE</div>
          </div>
        </div>

        <div className="sentiment-ring__legend">
          {segments.map((seg) => (
            <div key={seg.label} className="sentiment-ring__legend-item">
              <div className="sentiment-ring__dot" style={{ background: seg.color }} />
              <span>{seg.label} {seg.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SentimentRing;