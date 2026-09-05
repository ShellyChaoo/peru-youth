import React, { useCallback, useState } from 'react';
import MapView from './components/MapView';
import StoryPanel from './components/StoryPanel';
import JourneyNavigation from './components/JourneyNavigation';
import { journeyNodes, journeyNodeByKey } from './data/journeyNodes';

function App() {
  const [activeKey, setActiveKey] = useState('lima');
  const selectNode = useCallback((key) => setActiveKey(key), []);
  const activeNode = journeyNodeByKey[activeKey] ?? journeyNodes[0];

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">🏔️</span>
          <div>
            <h1>印加文明解鎖</h1>
            <p>青年百億圓夢計劃</p>
          </div>
        </div>
        <div className="header-meta">
          <a
            href="https://github.com/ShellyChaoo/peru-youth"
            target="_blank"
            rel="noreferrer"
            aria-label="開啟 GitHub 專案"
            title="開啟 GitHub 專案"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          {/* <span className="meta-divider">|</span> */}
          {/* <span>以人為本的設計實踐</span> */}
        </div>
      </header>

      <main className="main-layout">
        <div className="map-column">
          <MapView activeKey={activeKey} activeNode={activeNode} onSelect={selectNode} />
        </div>
        <section className="story-column" aria-label="旅程故事">
          <JourneyNavigation nodes={journeyNodes} activeKey={activeKey} onSelect={selectNode} />
          <StoryPanel node={activeNode} />
        </section>
      </main>
    </div>
  );
}

export default App;
