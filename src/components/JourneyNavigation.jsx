import React from 'react';

function JourneyNavigation({ nodes, activeKey, onSelect }) {
  return (
    <nav className="journey-navigation" aria-label="旅程節點">
      {nodes.map((node) => (
        <button
          type="button"
          key={node.key}
          className={`nav-button ${activeKey === node.key ? 'active' : ''}`}
          onClick={() => onSelect(node.key)}
        >
          <span>{node.navLabel}</span>
        </button>
      ))}
    </nav>
  );
}

export default JourneyNavigation;
