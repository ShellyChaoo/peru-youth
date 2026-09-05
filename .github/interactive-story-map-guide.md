# 用互動故事地圖分享旅程

這份指南說明如何使用本專案的架構，建立一個以地圖、照片、影片與文字故事分享所見所聞的互動網站。它適合旅行紀錄、田野調查、地方創生、文化保存、海外見習與社會實踐等內容。

本專案採用 Vite + React + Leaflet。內容資料與畫面元件分離，新增一個旅程節點時，通常只需要更新資料檔，不需要把整個頁面改成一大段 HTML。

## 1. 架構總覽

```text
src/
├── App.jsx                         # 管理目前選取的旅程節點
├── components/
│   ├── MapView.jsx                 # Leaflet 地圖、marker、地圖／照片切換
│   ├── JourneyNavigation.jsx       # 旅程節點按鈕
│   ├── StoryPanel.jsx              # 右側故事內容
│   └── InteractiveModules.jsx      # 節點專屬互動模組
├── data/
│   └── journeyNodes.js             # 地點、故事、照片與影片資料
├── assets/images/                  # 本地照片與影片
└── styles.css                      # 共用版面與響應式樣式
```

資料流如下：

```text
journeyNodes.js
  ├── locations        -> MapView markers
  ├── journeyNodes     -> 導航按鈕與 StoryPanel
  └── gallery          -> 故事欄與地圖欄的照片模式
```

每個節點的 `key` 必須同時存在於 `locations` 與 `journeyNodes`。這是 marker 點擊、導航按鈕與故事內容同步的核心規則。

## 2. 開始前準備資料

每個旅程節點先準備以下資料：

- 穩定且不重複的 `key`，例如 `homeTown`、`fieldVisit`、`museum`。
- 導航列顯示用的 `navLabel`。
- 地點名稱、緯度、經度與適合的地圖縮放層級。
- 一個節點標題與一個副標題。
- 一至三段故事文字。
- 照片或影片，以及每個媒體的替代文字 `alt`。
- 如果需要，準備 `callout`、`quote`、`projects` 或互動模組資料。

建議先用表格整理：

| 欄位 | 範例 | 說明 |
| --- | --- | --- |
| `key` | `fieldVisit` | 英文、不可重複，不要使用空白 |
| `navLabel` | `2. 山城田野` | 導航按鈕文字 |
| `title` | `在山城理解地方生活` | 故事標題 |
| `subtitle` | `FIELD VISIT ─ 傾聽地方` | 故事副標題 |
| `coords` | `[24.1477, 120.6736]` | 順序是 `[緯度, 經度]` |
| `zoom` | `14` | 地圖縮放層級 |
| `alt` | `山城街道與市場` | 描述照片內容，不要只寫「照片」 |

## 3. 放置照片與影片

將本地媒體放在：

```text
src/assets/images/
```

檔名建議使用小寫英文、數字與連字號，例如：

```text
field-visit-market.jpg
field-visit-interview.mp4
```

在 `journeyNodes.js` 頂端 import：

```js
import fieldMarket from '../assets/images/field-visit-market.jpg';
import fieldInterview from '../assets/images/field-visit-interview.mp4';
```

再放入節點的 `gallery`：

```js
gallery: [
  { src: fieldMarket, alt: '山城市場的街道與攤販' },
  { src: fieldInterview, alt: '地方工作者接受訪談的影片' },
],
```

目前元件會依副檔名將 `.mp4` 渲染成可控制播放的 `<video>`，其他圖片格式則使用 `<img>`。正式部署建議優先使用 H.264 MP4，並壓縮大型圖片與影片。

不要把圖片轉成 base64，也不要把長篇故事直接寫進 JSX 的 `innerHTML`。保持媒體與文字在資料檔中，畫面元件只負責渲染。

## 4. 新增一個旅程節點

### 4.1 新增地圖位置

在 `src/data/journeyNodes.js` 的 `locations` 中新增：

```js
fieldVisit: {
  coords: [24.1477, 120.6736],
  zoom: 14,
  title: '山城田野現場',
},
```

確認座標順序是緯度在前、經度在後。若只有 Google Maps 連結，先確認連結指向的實際地點，再填入座標，不要猜測。

### 4.2 新增故事資料

在同一檔案的 `journeyNodes` 陣列加入：

```js
{
  key: 'fieldVisit',
  navLabel: '2. 山城田野',
  title: '在山城理解地方生活',
  subtitle: 'FIELD VISIT ─ 傾聽地方',
  gallery: [
    { src: fieldMarket, alt: '山城市場的街道與攤販' },
    { src: fieldInterview, alt: '地方工作者接受訪談的影片' },
  ],
  paragraphs: [
    '第一段描述我在哪裡、看見了什麼，以及這個地方對旅程的意義。',
    '第二段描述我的觀察、疑問或與當地人的交流。',
  ],
},
```

`key: 'fieldVisit'` 必須與 `locations.fieldVisit` 完全一致。新增後，導航按鈕、地圖 marker、故事面板與照片模式會自動取得這個節點。

### 4.3 更新導航順序

`navLabel` 的編號由內容作者維護。新增或刪除節點後，請檢查所有標籤的順序。標籤在窄螢幕會自動換行，不需要用很長的單行文字硬塞進按鈕。

## 5. 新增節點專屬互動

只有當互動真的能幫助理解故事時才新增。互動元件應放在 `src/components/InteractiveModules.jsx`，並以節點 `key` 判斷：

```jsx
if (node.key === 'fieldVisit') {
  return <FieldVisitModule />;
}
```

每個模組應該：

- 擁有自己的 React state。
- 不直接修改其他節點的 state。
- 不依賴 `document.querySelector` 操作全域 DOM。
- 有清楚的鍵盤操作與按鈕文字。
- 在手機寬度仍能使用。

不要為了顯示一段文字而新增互動模組；普通文字應留在 `paragraphs`。

## 6. Copilot 建議工作流程

可以把以下內容貼給 Copilot：

```text
請閱讀 .github/interactive-story-map-guide.md，協助我新增一個旅程節點。
請先只詢問我需要提供的資料，不要立即修改檔案。
等我確認資料後，再更新 locations、journeyNodes 與必要的媒體 import。
完成後檢查 key 是否一致、照片路徑是否存在，並執行 npm run build。
```

Copilot 應依序處理：

1. 盤點目前節點與專案架構。
2. 詢問地點名稱、Google Maps 連結或座標、故事標題、描述與媒體。
3. 確認使用者同意新增的內容。
4. 將照片或影片放入 `src/assets/images/`，並更新 import。
5. 同時更新 `locations` 與 `journeyNodes`。
6. 確認沒有重複的 `key`，且每個節點都有對應 marker。
7. 執行 `npm run build` 與 `git diff --check`。
8. 回報修改的檔案與尚未完成的資料。

如果使用者只想修改文字或照片，不要重構整個專案。除非使用者明確要求，Copilot 不應移除既有節點、覆蓋使用者的未提交修改，或改變 Leaflet tile provider。

## 7. 完成前檢查清單

### 資料

- [ ] 每個 `locations` key 都有一個 `journeyNodes` 節點。
- [ ] 每個 `journeyNodes` key 都有一個 `locations` 地點。
- [ ] `key` 沒有重複。
- [ ] 座標順序是 `[緯度, 經度]`。
- [ ] `navLabel` 編號與旅程順序一致。

### 媒體

- [ ] import 路徑與實際檔名大小寫完全一致。
- [ ] 圖片有描述性的 `alt`。
- [ ] 影片使用 MP4，且有 `controls` 與 `playsInline`。
- [ ] 媒體檔案不過大，並已考慮行動網路載入速度。

### 使用體驗

- [ ] 點擊導航按鈕會同步更新地圖與故事。
- [ ] 點擊 marker 會同步更新故事。
- [ ] 地圖／照片切換會顯示目前節點的 gallery。
- [ ] 桌面與手機寬度都能閱讀故事。
- [ ] 地圖仍保留 OpenStreetMap 與 CARTO attribution。

### 驗證

```bash
npm run build
git diff --check
```

## 8. 常見問題

### 新增節點後 marker 沒有出現

通常是 `locations` 與 `journeyNodes` 的 `key` 不一致，或節點沒有放在正確的 export 陣列中。

### 圖片顯示不出來

檢查 import 的副檔名、大小寫與實際檔名。Vite 專案的本地圖片應從 `src/assets/` import，而不是任意寫一個作業系統路徑。

### MOV 無法播放

建議轉成 H.264 MP4。瀏覽器對 MOV 內部編碼的支援不一致；MP4 比較適合網站部署。

### 文字沒有套用粗體

`paragraphs` 是純文字，不會解析 Markdown 語法。若需要強調文字，應新增結構化資料或 React 元件，不要重新引入 `innerHTML`。

### 想加入 CMS 或多人編輯

目前架構適合小型靜態故事地圖。若未來需要登入、多人共同編輯、後台管理或大量內容，再考慮將資料移到 CMS 或 API；不要在這個階段把所有內容塞回單一 HTML 檔案。
