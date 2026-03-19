import React from 'react';
import './App.css';

import Sidebar       from './components/Sidebar';
import KpiStrip      from './components/KpiStrip';
import TrendChart    from './components/TrendChart';
import SentimentRing from './components/SentimentRing';
import PlatformStats from './components/PlatformStats';
import StarRatings   from './components/StarRatings';
import TopicsCloud   from './components/TopicsCloud';

import {
  kpiData,
  platformStats,
  topics,
  starRatings,
  trendData,
  negativeData,
  trendLabels,
} from './data/mockData';

const App: React.FC = () => {
  return (
    <div className="app">

      {/* ── Fixed left sidebar ── */}
      <Sidebar />

      {/* ── Scrollable main area ── */}
      <div className="app__main">

        {/* Sticky top-bar */}
        <header className="app__topbar">
          <div className="app__topbar-left">
            <h1 className="app__page-title">Review Intelligence Hub</h1>
          </div>
          <div className="app__topbar-right">
            <span className="app__ai-badge">✦ AI Active</span>
            <select className="app__period-select" defaultValue="30">
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">This year</option>
            </select>
            <button className="app__btn app__btn--ghost">Export</button>
            <button className="app__btn app__btn--primary">+ Add Platform</button>
          </div>
        </header>

        {/* ── Page content ── */}
        <div className="app__content">

          {/* Alert */}
          <div className="app__alert">
            <span className="app__alert-dot" />
            <p className="app__alert-text">
              <strong>12 critical reviews</strong> require immediate attention — 3 on Amazon,
              5 on Flipkart, 4 on Meesho. Average rating dropped 0.2 pts this week.
            </p>
            <button className="app__btn app__btn--ghost app__btn--sm">View All</button>
          </div>

          {/* Row 1 — KPI cards */}
          <KpiStrip items={kpiData} />

          {/* Row 2 — Trend chart + Sentiment ring */}
          <div className="app__row app__row--2col">
            <TrendChart
              totalData={trendData}
              negativeData={negativeData}
              labels={trendLabels.filter(Boolean)}
            />
            <SentimentRing />
          </div>

          {/* Row 3 — Platform breakdown + Star ratings + Topics */}
          <div className="app__row app__row--3col">
            <PlatformStats stats={platformStats} />
            <StarRatings   ratings={starRatings} />
            <TopicsCloud   topics={topics} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;