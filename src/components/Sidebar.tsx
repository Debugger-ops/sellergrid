import React from 'react';
import './Sidebar.css';

interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
  badge?: number;
}

const navSections: { title: string; items: NavItem[] }[] = [
  {
    title: 'Overview',
    items: [
      { icon: '⬡', label: 'Dashboard', active: true },
      { icon: '📊', label: 'Analytics' },
    ],
  },
  {
    title: 'Reviews',
    items: [
      { icon: '📥', label: 'Inbox', badge: 47 },
      { icon: '✦', label: 'AI Responses' },
      { icon: '⚑', label: 'Flagged', badge: 12 },
    ],
  },
  {
    title: 'Insights',
    items: [
      { icon: '◎', label: 'Sentiment' },
      { icon: '⟁', label: 'Topics' },
      { icon: '◈', label: 'Competitors' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { icon: '⊙', label: 'Platforms' },
      { icon: '⚙', label: 'Automations' },
      { icon: '◻', label: 'Alerts' },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <div className="sidebar__logo-text">
          Seller<span>Grid</span>
        </div>
        <div className="sidebar__logo-badge">Review Intelligence</div>
      </div>

      <nav className="sidebar__nav">
        {navSections.map((section) => (
          <div key={section.title} className="sidebar__section">
            <div className="sidebar__section-label">{section.title}</div>
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`sidebar__nav-item${item.active ? ' sidebar__nav-item--active' : ''}`}
              >
                <span className="sidebar__nav-icon">{item.icon}</span>
                <span className="sidebar__nav-label">{item.label}</span>
                {item.badge !== undefined && (
                  <span className="sidebar__badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__avatar">RK</div>
          <div className="sidebar__user-info">
            <div className="sidebar__user-name">Rahul K.</div>
            <div className="sidebar__user-plan">Pro Plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;