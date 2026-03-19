import React from 'react';
import type { KpiData } from '../types';
import './KpiStrip.css';

interface KpiCardProps {
  data: KpiData;
  index: number;
}

const KpiCard: React.FC<KpiCardProps> = ({ data, index }) => (
  <div
    className={`kpi-card kpi-card--${data.accent}`}
    style={{ animationDelay: `${index * 0.07}s` }}
  >
    <div className="kpi-card__label">{data.label}</div>
    <div className="kpi-card__value">{data.value}</div>
    <div className={`kpi-card__change kpi-card__change--${data.direction}`}>
      {data.change}
    </div>
  </div>
);

interface KpiStripProps {
  items: KpiData[];
}

const KpiStrip: React.FC<KpiStripProps> = ({ items }) => (
  <div className="kpi-strip">
    {items.map((item, i) => (
      <KpiCard key={item.label} data={item} index={i} />
    ))}
  </div>
);

export default KpiStrip;