import React from 'react';
import type { Topic } from '../types';

interface TopicsCloudProps {
  topics: Topic[];
}

const TopicsCloud: React.FC<TopicsCloudProps> = ({ topics }) => (
  <div className="topics-cloud">
    <div className="card__header">
      <div>
        <div className="card__title">Top Mentioned Topics</div>
        <div className="card__sub">AI-extracted from review text</div>
      </div>
      <div className="ai-badge">✦ AI</div>
    </div>
    <div className="topics-cloud__body">
      <div className="topics-cloud__grid">
        {topics.map((topic) => (
          <div
            key={topic.label}
            className={`topics-cloud__chip${topic.hot ? ' topics-cloud__chip--hot' : ''}`}
          >
            {topic.label}
            <span className="topics-cloud__count">{topic.count}</span>
          </div>
        ))}
      </div>
      <div className="topics-cloud__note">
        🔴 Hot topics = issues trending upward this week
      </div>
    </div>
  </div>
);

export default TopicsCloud;