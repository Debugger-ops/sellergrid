import React from 'react';
import './TrendChart.css';

interface TrendChartProps {
  totalData: number[];
  negativeData: number[];
  labels: string[];
}

const W = 520;
const H = 140;



function toPolyPath(data: number[]): string {
  const pts = data.map((y, i) => `${(i / (data.length - 1)) * W},${y}`);
  return `M${pts[0]} C${pts.slice(1).map((p, i) => {
    const prev = pts[i];
    const [px] = prev.split(',').map(Number);
    const [cx] = p.split(',').map(Number);
    const mx = (px + cx) / 2;
    return `${mx},${prev.split(',')[1]} ${mx},${p.split(',')[1]} ${p}`;
  }).join(' ')}`;
}

const TrendChart: React.FC<TrendChartProps> = ({ totalData, negativeData, labels }) => {
  const totalPath  = toPolyPath(totalData);
  const negPath    = toPolyPath(negativeData);
  const totalArea  = `${totalPath} L${W},${H} L0,${H} Z`;
  const negArea    = `${negPath} L${W},${H} L0,${H} Z`;

  const visibleLabels = labels.filter(Boolean);

  return (
    <div className="trend-chart">
      <div className="card__header">
        <div>
          <div className="card__title">Review Volume Trend</div>
          <div className="card__sub">Daily inflow across all platforms</div>
        </div>
        <div className="trend-chart__legend">
          <span className="trend-chart__legend-item trend-chart__legend-item--total">● Total</span>
          <span className="trend-chart__legend-item trend-chart__legend-item--negative">● Negative</span>
        </div>
      </div>

      <div className="trend-chart__body">
        <svg
          width="100%"
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="trend-chart__svg"
        >
          <defs>
            <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00e5a0" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00e5a0" stopOpacity="0"   />
            </linearGradient>
            <linearGradient id="gradNeg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#ff5c5c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ff5c5c" stopOpacity="0"    />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[35, 70, 105].map((y) => (
            <line key={y} x1={0} y1={y} x2={W} y2={y} stroke="#1f2430" strokeWidth="1" />
          ))}

          {/* Area fills */}
          <path d={totalArea} fill="url(#gradTotal)" />
          <path d={negArea}   fill="url(#gradNeg)"   />

          {/* Lines */}
          <path d={totalPath} fill="none" stroke="#00e5a0" strokeWidth="2"   strokeLinejoin="round" />
          <path d={negPath}   fill="none" stroke="#ff5c5c" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="4,3" />

          {/* Peak dot */}
          <circle
            cx={(9 / (totalData.length - 1)) * W}
            cy={totalData[9]}
            r="4"
            fill="#00e5a0"
          />
        </svg>

        <div className="trend-chart__labels">
          {visibleLabels.map((lbl) => (
            <span key={lbl}>{lbl}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendChart;
