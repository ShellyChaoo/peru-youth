# 互動故事地圖

這是一個以 Vite、React 與 Leaflet 製作的互動故事地圖。使用者可以透過地圖 marker、旅程導航、照片、影片與文字，分享旅行、田野調查、文化保存或社會實踐經驗。

## 快速開始

需求：Node.js 與 npm。

```bash
npm install
npm run dev
```

開啟終端機顯示的本機網址即可預覽網站。

建立 production 版本：

```bash
npm run build
npm run preview
```

## 專案結構

```text
src/
├── App.jsx
├── components/
│   ├── MapView.jsx
│   ├── JourneyNavigation.jsx
│   ├── StoryPanel.jsx
│   └── InteractiveModules.jsx
├── data/
│   └── journeyNodes.js
├── assets/images/
└── styles.css
```

主要內容集中在 [src/data/journeyNodes.js](src/data/journeyNodes.js)，畫面與互動則分散在 `src/components/`，避免所有內容集中在單一 HTML 或元件中。

## 新增自己的故事

完整步驟請閱讀 [互動故事地圖指南](.github/interactive-story-map-guide.md)。基本流程如下：

1. 將照片或 MP4 影片放入 `src/assets/images/`。
2. 在 `src/data/journeyNodes.js` import 媒體檔案。
3. 在 `locations` 新增地點、座標、縮放層級與標題。
4. 在 `journeyNodes` 新增相同 `key` 的故事節點。
5. 在 `gallery` 放入照片或影片及描述性的 `alt` 文字。
6. 執行 `npm run build` 確認網站可以正常打包。

每個節點的 `key` 必須同時存在於 `locations` 與 `journeyNodes`，例如：

```js
// locations
fieldVisit: {
  coords: [24.1477, 120.6736],
  zoom: 14,
  title: '山城田野現場',
},

// journeyNodes
{
  key: 'fieldVisit',
  navLabel: '山城田野',
  title: '在山城理解地方生活',
  subtitle: 'FIELD VISIT ─ 傾聽地方',
  gallery: [
    { src: fieldMarket, alt: '山城市場的街道與攤販' },
    { src: fieldInterview, alt: '地方工作者接受訪談的影片' },
  ],
  paragraphs: [
    '在這裡放入你的故事描述。',
  ],
},
```

圖片使用 `<img>` 顯示，MP4 使用 `<video controls>` 播放。影片建議使用 H.264 MP4，避免瀏覽器對 MOV 編碼支援不一致。

## 使用 Copilot 協助建立

本專案提供可重複使用的 Copilot 工作流程。請在 VS Code 的 Copilot Chat 輸入：

```text
/建立互動故事地圖
```

Copilot 會依序詢問地點、座標、故事內容與照片／影片，確認資料後再修改專案檔案。

也可以直接輸入：

```text
請依照 .github/interactive-story-map-guide.md，
幫我新增一個旅程節點。
```

相關文件：

- [互動故事地圖指南](.github/interactive-story-map-guide.md)
- [建立互動故事地圖 Prompt](.github/prompts/create-interactive-story-map.prompt.md)
- [Copilot 專案指示](.github/copilot-instructions.md)

## 驗證

修改完成後執行：

```bash
npm run build
git diff --check
```

確認以下功能：

- 點擊導航按鈕會更新地圖與故事。
- 點擊 marker 會同步切換故事節點。
- 地圖／照片切換會顯示目前節點的 gallery。
- 手機寬度下導航、地圖與故事仍可使用。
