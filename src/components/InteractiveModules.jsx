import React, { useState } from 'react';

function MisminayModule() {
  const [poured, setPoured] = useState(false);
  return (
    <section className="interactive-card chicha-card">
      <h3>🍷 安地斯傳統祈福互動體驗</h3>
      <p>滑鼠點擊下方陶杯，向山神與大地母親敬獻一杯玉米啤酒（Chicha）</p>
      <div className="chicha-actions">
        <button
          type="button"
          className={`chicha-cup ${poured ? 'pouring' : ''}`}
          onClick={() => {
            setPoured(true);
            window.setTimeout(() => setPoured(false), 800);
          }}
          aria-label="向大地母親敬獻 Chicha"
        >
          🏺
        </button>
        <span className="earth-emoji" aria-hidden="true">{poured ? '🌾' : '🌱'}</span>
      </div>
      <p className={`chicha-result ${poured ? 'visible' : ''}`}>
        🌾 大地母親已獲得滋養，山神賜予祝福：Añay（謝謝）！
      </p>
    </section>
  );
}

function CbcModule() {
  const [bugs, setBugs] = useState({ stonefly: 0, snail: 0 });
  const changeBug = (type, change) => {
    setBugs((current) => ({ ...current, [type]: Math.max(0, current[type] + change) }));
  };
  const total = bugs.stonefly * 10 - bugs.snail * 3;
  let quality = { label: '尚未觀測', className: 'not-observed' };
  if (bugs.stonefly || bugs.snail) {
    quality = total > 15
      ? { label: '✨ 優秀 (高地潟湖原始健康水質)', className: 'excellent' }
      : total >= 5
        ? { label: '🌱 良好 (水生昆蟲生態平衡)', className: 'good' }
        : { label: '⚠️ 輕度受損 (需進一步環境監測)', className: 'needs-care' };
  }

  return (
    <section className="interactive-card water-card">
      <h3>🔬 Puray 潟湖水質觀測計算器</h3>
      <p>模仿 CBC 高原學童，在石頭下辨識「水中大型無脊椎動物」的數量來計算水質：</p>
      <div className="bug-grid">
        {[
          ['stonefly', '🦟 石蠅幼蟲 (敏感型)'],
          ['snail', '🐌 螺類 (耐受型)'],
        ].map(([type, label]) => (
          <div className="bug-row" key={type}>
            <span>{label}</span>
            <div className="counter">
              <button type="button" onClick={() => changeBug(type, -1)} aria-label={`${label} 減少`}>−</button>
              <strong>{bugs[type]}</strong>
              <button type="button" onClick={() => changeBug(type, 1)} aria-label={`${label} 增加`}>＋</button>
            </div>
          </div>
        ))}
      </div>
      <div className="quality-result">
        <strong>水質健康度：</strong>
        <span className={quality.className}>{quality.label}</span>
      </div>
    </section>
  );
}

function QosqoModule() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="interactive-card podcast-card">
      <h3>🎙️ 街頭青年的數位發聲收音機</h3>
      <p>點擊播放孩子們每兩個月自主規劃錄製的 Spotify 播客專輯：</p>
      <div className="podcast-player">
        <button
          type="button"
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-label={isPlaying ? '暫停播客' : '播放播客'}
        >
          {isPlaying ? 'Ⅱ' : '▶'}
        </button>
        <div>
          <p className="podcast-title">Ep.12 庫斯科太陽祭與流浪動物</p>
          <small>Asociación Qosqo Maki</small>
        </div>
        <div className={`wave-container ${isPlaying ? 'playing' : ''}`} aria-hidden="true">
          {[1, 3, 2, 4, 1].map((height, index) => <span key={index} style={{ height: `${height * 4}px` }} />)}
        </div>
      </div>
    </section>
  );
}

function ChirapaqModule() {
  const [selected, setSelected] = useState(null);
  const quinoa = {
    red: ['紅色藜麥', '86%', '豐富花青素與抗氧化活性', '#dc2626'],
    black: ['黑色藜麥', '92%', '高膳食纖維與複合不飽和脂肪酸', '#111827'],
    pink: ['粉紅藜麥', '89%', '人體必需 8 種氨基酸分子結構', '#f472b6'],
    yellow: ['黃色藜麥', '94%', '超高密度植物性蛋白質複合體', '#eab308'],
  };
  const result = selected ? quinoa[selected] : null;

  return (
    <section className="interactive-card quinoa-card">
      <h3>🧬 安地斯藜麥分子光譜儀</h3>
      <p>點擊不同顏色的藜麥，查看現代分子生物學分析之蛋白質重新評估數據：</p>
      <div className="quinoa-options">
        {Object.keys(quinoa).map((color) => (
          <button
            type="button"
            key={color}
            className={`quinoa-dot ${color}`}
            onClick={() => setSelected(color)}
            aria-label={`分析${quinoa[color][0]}`}
          />
        ))}
      </div>
      <div className="quinoa-result">
        {result ? (
          <>
            <p><span className="quinoa-swatch" style={{ backgroundColor: result[3] }} />{result[0]} 分子結構分析：</p>
            <div><strong>蛋白質密度：{result[1]}</strong><span>{result[2]}</span></div>
          </>
        ) : <p className="empty-result">（請點選上方藜麥按鈕啟動光譜分析）</p>}
      </div>
    </section>
  );
}

function InteractiveModules({ node }) {
  if (node.key === 'misminay') return <MisminayModule />;
  if (node.key === 'cbc') return <CbcModule />;
  if (node.key === 'qosqo') return <QosqoModule />;
  if (node.key === 'chirapaq') return <ChirapaqModule />;
  return null;
}

export default InteractiveModules;
