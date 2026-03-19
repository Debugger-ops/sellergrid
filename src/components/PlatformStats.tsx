import React from 'react';
import type { PlatformStat } from '../types';

interface PlatformStatsProps {
  stats: PlatformStat[];
}

const PlatformStats: React.FC<PlatformStatsProps> = ({ stats }) => (
  <div className="platform-stats">
    <div className="card__header">
      <div>
        <div className="card__title">By Platform</div>
        <div className="card__sub">Review share this month</div>
      </div>
    </div>
    <div className="platform-stats__body">
      {stats.map((stat) => (
        <div key={stat.name} className="platform-stats__row">
          <div className="platform-stats__meta">
            <div className="platform-stats__name">
              <div className="platform-stats__dot" style={{ background: stat.color }} />
              {stat.name}
            </div>
            <div className="platform-stats__count">
              {stat.count.toLocaleString()} reviews
            </div>
          </div>
          <div className="platform-stats__track">
            <div
              className="platform-stats__fill"
              style={{ width: `${stat.percentage}%`, background: stat.color }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PlatformStats;