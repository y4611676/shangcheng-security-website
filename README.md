# 上誠通訊監視公司官網

一個現代化、響應式的公司形象網站，專為「上誠通訊監視公司」打造。採用 Next.js 14 + Tailwind CSS 構建，支援靜態導出並可部署至 GitHub Pages。

![上誠通訊監視公司](https://shangchengsecurity.com/)

## 🎯 專案特色

- ✨ **現代化設計**：採用深藍色調與漸層效果，展現專業與科技感
- 📱 **完全響應式**：完美支援桌機、平板、手機等各種裝置
- 🚀 **高效能**：使用 Next.js 14 App Router，靜態導出優化載入速度
- 🎨 **Tailwind CSS**：原子化 CSS 框架，易於維護與客製化
- 🔍 **SEO 優化**：完整的 Meta 標籤、Open Graph 與 robots.txt
- 💫 **流暢動畫**：柔和的 hover 效果與過場動畫
- 📞 **浮動聯絡按鈕**：固定底部浮動按鈕，提升轉換率

## 🎨 設計系統

### 配色方案
- **主色 (Primary)**：`#1E2A5E` - 深藍色，代表專業與信任
- **副色 (Secondary)**：`#EEF1F7` - 淺藍灰，提供柔和背景
- **強調色 (Accent)**：`#A7B5FF` - 淡紫色，突顯重要元素

### 字體
- Noto Sans TC（繁體中文）
- Inter（英文與數字）

## 📄 頁面架構

1. **首頁 Hero 區塊**
   - 公司標語與服務簡介
   - 行動呼籲按鈕
   - 信任指標展示

2. **三大核心優勢**
   - AI 智慧偵測
   - 高畫質夜視
   - 雲端儲存方案

3. **施工項目**
   - 8 大服務項目卡片展示
   - 網路工程、廣播系統、保全系統等

4. **聯絡我們**
   - 公司資訊與營業時間
   - 電話、LINE、Email、地址
   - 快速聯絡按鈕

5. **浮動元件**
   - 固定諮詢按鈕
   - 回到頂部按鈕
   - 手機版快速撥號與 LINE

## 🛠️ 技術架構

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS 3.3
- **部署**：靜態導出 (Static Export)

## 📦 安裝與使用

### 環境需求
- Node.js 18.0 或更高版本
- npm 或 yarn 套件管理工具

### 安裝步驟

1. **Clone 專案**
```bash
git clone https://github.com/your-username/shangcheng-security-website.git
cd shangcheng-security-website
```

2. **安裝依賴套件**
```bash
npm install
# 或使用 yarn
yarn install
```

3. **啟動開發伺服器**
```bash
npm run dev
# 或使用 yarn
yarn dev
```

4. **開啟瀏覽器**
前往 [http://localhost:3000](http://localhost:3000) 查看網站

## 📤 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推薦）

1. **建立 GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

2. **建立 GitHub Actions 工作流程**

在專案根目錄建立 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

3. **設定 GitHub Pages**
   - 前往 Repository > Settings > Pages
   - Source 選擇「GitHub Actions」
   - 推送程式碼後會自動部署

### 方法二：手動部署

1. **修改 `next.config.js`**

如果您的 GitHub Pages URL 不是在根目錄（例如：`username.github.io/repo-name`），需要設定 basePath：

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/repo-name', // 改成您的 repository 名稱
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

2. **建置與部署**
```bash
# 建置靜態網站
npm run build

# 部署到 gh-pages 分支（需先安裝 gh-pages）
npm install -g gh-pages
gh-pages -d out
```

3. **設定 GitHub Pages**
   - 前往 Repository > Settings > Pages
   - Source 選擇 `gh-pages` 分支
   - 點擊 Save

### 方法三：使用 npm 腳本

1. **安裝 gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **在 `package.json` 加入部署腳本**
```json
{
  "scripts": {
    "deploy": "next build && gh-pages -d out"
  }
}
```

3. **執行部署**
```bash
npm run deploy
```

## 🔧 客製化設定

### 修改顏色主題
編輯 `tailwind.config.js`：
```javascript
colors: {
  primary: '#1E2A5E',    // 主色
  secondary: '#EEF1F7',  // 副色
  accent: '#A7B5FF',     // 強調色
}
```

### 修改公司資訊
編輯 `components/Contact.tsx` 中的 `contactInfo` 陣列。

### 修改服務項目
編輯 `components/Services.tsx` 中的 `services` 陣列。

### 修改 SEO 資訊
編輯 `app/layout.tsx` 中的 `metadata` 物件。

## 📝 專案結構

```
shangcheng-security-website/
├── app/
│   ├── globals.css          # 全局樣式
│   ├── layout.tsx           # 根佈局與 SEO 設定
│   └── page.tsx             # 首頁
├── components/
│   ├── Navbar.tsx           # 導覽列
│   ├── Hero.tsx             # Hero 區塊
│   ├── Advantages.tsx       # 三大核心優勢
│   ├── Services.tsx         # 施工項目
│   ├── Contact.tsx          # 聯絡我們
│   └── FloatingButton.tsx   # 浮動按鈕
├── public/
│   ├── robots.txt           # SEO robots 設定
│   ├── sitemap.xml          # 網站地圖
│   └── .nojekyll            # GitHub Pages 設定
├── next.config.js           # Next.js 設定
├── tailwind.config.js       # Tailwind CSS 設定
├── tsconfig.json            # TypeScript 設定
└── package.json             # 專案依賴
```

## 🌐 瀏覽器支援

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）
- iOS Safari 12+
- Android Chrome

## 📞 聯絡資訊

- **公司名稱**：上誠通訊監視公司
- **電話**：03-4611676
- **LINE**：@081kqduw
- **Email**：shangchengsecurit@gmail.com
- **地址**：桃園市中壢區中華路一段533號
- **營業時間**：
  - 週一至週五：09:00-18:00
  - 週六：公休
  - 週日：公休

## 📄 授權

© 2025 上誠通訊監視公司 版權所有

---

**Built with ❤️ using Next.js & Tailwind CSS**

