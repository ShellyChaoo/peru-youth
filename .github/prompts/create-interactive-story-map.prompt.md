---
description: "依照互動故事地圖指南，逐步建立或擴充地圖、照片、影片與旅程節點"
name: "建立互動故事地圖"
argument-hint: "描述你的旅程主題、地點、照片與想分享的故事"
agent: "agent"
---

請先閱讀 [.github/interactive-story-map-guide.md](../interactive-story-map-guide.md) 與 [.github/copilot-instructions.md](../copilot-instructions.md)。

你要協助使用者建立一個以地圖、照片、影片與故事文字分享所見所聞的互動網站。請遵守以下流程：

## 工作原則

- 先理解現有專案，再提出問題；不要一開始就改檔案。
- 使用繁體中文與使用者溝通。
- 保留使用者尚未提交的修改，不要使用破壞性 git 指令。
- 內容放在 `src/data/journeyNodes.js`，畫面行為放在 components，避免建立 monolith HTML。
- 新增節點時，必須同時更新 `locations` 與 `journeyNodes`。
- 不要猜測座標。若使用者只提供 Google Maps 連結，先解析或請使用者確認地點。
- 只在使用者確認資料後才進行檔案編輯。

## 第一階段：盤點

先檢查：

- `src/data/journeyNodes.js`
- `src/components/MapView.jsx`
- `src/components/StoryPanel.jsx`
- `src/components/JourneyNavigation.jsx`
- `src/App.jsx`
- `src/styles.css`
- `src/assets/images/`

向使用者簡短回報目前節點數量、媒體格式與可沿用的架構。不要在這一階段修改檔案。

## 第二階段：逐一收集資料

一次詢問一組資料，避免一次丟出過長表單。至少收集：

1. 旅程節點名稱與希望顯示的導航標籤。
2. 地點名稱、Google Maps 連結或 `[緯度, 經度]`，以及是否需要新增 marker。
3. 故事標題、副標題與一至三段描述。
4. 照片或影片檔名、每個媒體的 `alt` 文字與排列順序。
5. 是否需要 callout、quote 或節點專屬互動。

若資訊不足，明確列出缺少的欄位。不要用虛構文字或猜測照片內容補齊。

## 第三階段：確認變更

將準備修改的內容整理成簡短清單，包含：

- 新增或修改的 `locations`。
- 新增或修改的 `journeyNodes`。
- 要 import 的媒體檔案。
- 是否需要修改元件或 CSS。

請使用者確認後才繼續編輯。若使用者明確說「直接做」或已完整提供資料，可視為確認。

## 第四階段：實作

依序完成：

1. 確認媒體檔案位於 `src/assets/images/`；找不到時先回報，不要建立假路徑。
2. 在 `journeyNodes.js` 加入 import。
3. 在 `locations` 加入正確座標、zoom 與 title。
4. 在 `journeyNodes` 加入相同 `key` 的內容。
5. 檢查導航編號與節點順序。
6. 只有真的需要時才修改元件；優先沿用現有 gallery、地圖／照片切換與 StoryPanel。
7. 若新增互動，將它放在 `InteractiveModules.jsx`，並保持該模組獨立。

## 第五階段：驗證

完成後執行：

```bash
npm run build
git diff --check
```

並檢查：

- `locations` 和 `journeyNodes` 的 key 是否完全配對。
- 是否有重複 key。
- import 路徑大小寫是否正確。
- 圖片使用 `<img>`，MP4 使用 `<video>`。
- marker、導航按鈕、StoryPanel 與照片模式是否共享同一個 active node。

最後用繁體中文回報：修改檔案、完成的功能、驗證結果，以及仍需要使用者補充的資料。