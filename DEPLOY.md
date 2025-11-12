# GitHub 部署指南

本專案位置：`D:\bak\work\9-5\通訊行\shangcheng-security-website`

## 📋 前置準備

1. **確認已安裝 Git Bash**
   - 如果沒有，請從 [git-scm.com](https://git-scm.com/downloads) 下載安裝

2. **確認 GitHub 帳號**
   - 確保您已經有 GitHub 帳號
   - 如果還沒有遠端倉庫，需要先在 GitHub 建立一個

---

## 🚀 方法一：使用 Git Bash 上傳並自動部署（推薦）

這個方法會自動建置並部署您的網站，不需要手動上傳 `out` 資料夾。

### 步驟 1：開啟 Git Bash

**方式一：在專案資料夾中開啟**
- 在專案資料夾 `D:\bak\work\9-5\通訊行\shangcheng-security-website` 中
- 右鍵點擊空白處 → 選擇「Git Bash Here」

**方式二：手動開啟後切換目錄**
```bash
cd /d/bak/work/9-5/通訊行/shangcheng-security-website
```

### 步驟 2：檢查當前狀態

```bash
git status
```

這會顯示哪些檔案已修改、哪些檔案未追蹤。

### 步驟 3：添加所有更改

```bash
# 添加所有修改的檔案
git add .

# 或者只添加特定檔案
# git add components/Services.tsx
# git add .github/workflows/deploy.yml
```

### 步驟 4：提交更改

```bash
git commit -m "更新：刪除施工項目的了解更多按鈕並新增部署配置"
```

**提交訊息範例：**
- `"更新：刪除施工項目的了解更多按鈕"`
- `"新增：GitHub Actions 自動部署配置"`
- `"修復：聯絡資訊更新"`

### 步驟 5：上傳到 GitHub

**如果已經設定過遠端倉庫：**
```bash
git push
```

**如果是第一次上傳或需要設定遠端倉庫：**

1. **先在 GitHub 建立新倉庫**
   - 前往 [GitHub](https://github.com/new)
   - 建立一個新的倉庫（例如：`shangcheng-security-website`）
   - **不要**勾選「Initialize this repository with a README」

2. **在 Git Bash 中執行：**
```bash
# 如果還沒初始化 Git（通常已經初始化了）
git init

# 設定遠端倉庫（替換成您的 GitHub 使用者名稱和倉庫名稱）
git remote add origin https://github.com/您的使用者名稱/倉庫名稱.git

# 設定主分支為 main
git branch -M main

# 上傳到 GitHub
git push -u origin main
```

### 步驟 6：啟用 GitHub Pages 自動部署

1. 前往您的 GitHub 倉庫頁面
2. 點擊 **Settings** → **Pages**
3. 在 **Source** 選擇 **GitHub Actions**
4. 儲存設定

### 步驟 7：自動部署

現在每次您執行 `git push` 程式碼到 `main` 分支時，GitHub Actions 會自動：
- 安裝依賴
- 建置專案（生成 `out` 資料夾）
- 部署到 GitHub Pages

您的網站會自動發布在：`https://您的使用者名稱.github.io/倉庫名稱/`

**之後每次更新網站，只需要執行：**
```bash
git add .
git commit -m "您的更新訊息"
git push
```

---

## 📝 常用 Git Bash 命令

在專案資料夾中開啟 Git Bash 後，可以使用以下命令：

```bash
# 查看當前狀態
git status

# 查看更改內容
git diff

# 查看提交歷史
git log

# 撤銷未提交的更改（恢復單個檔案）
git restore 檔案名稱

# 查看遠端倉庫
git remote -v

# 拉取最新更改
git pull

# 查看分支
git branch

# 查看所有更改（包括未追蹤的檔案）
git status -u
```

---

## ❓ 常見問題

### Q: 如果上傳時要求輸入帳號密碼？

**A:** 使用 Personal Access Token（個人存取權杖）：
1. 前往 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 點擊「Generate new token (classic)」
3. 輸入名稱，勾選 `repo` 權限
4. 生成後複製 token（只會顯示一次）
5. 上傳時：
   - 使用者名稱：您的 GitHub 使用者名稱
   - 密碼：貼上剛才複製的 token

### Q: 如何更新已存在的檔案？

**A:** 使用相同的流程：
```bash
git add .
git commit -m "更新訊息"
git push
```

### Q: 上傳後沒有更新已更新的內容，怎麼辦？

**A:** 如果上傳後遠端沒有更新，可以使用強制推送：

```bash
# 方法 1：清除快取並重新添加
git rm -r --cached .
git add .
git commit -m "完全更新：清除快取並重新上傳"
git push -f origin main

# 方法 2：如果方法 1 不行，完全重置
rm -rf .git
git init
git add .
git commit -m "Initial commit - 完全重新上傳"
git remote add origin https://github.com/您的使用者名稱/倉庫名稱.git
git branch -M main
git push -f -u origin main
```

⚠️ **注意**：`git push -f` 會強制覆蓋遠端內容，請確認後再執行。

📖 **詳細說明**：查看 `RESET_AND_UPLOAD.md` 檔案了解完整步驟。

### Q: 如何查看上傳進度？

**A:** 
- 在 Git Bash 中會顯示上傳進度條
- 或前往 GitHub 倉庫頁面查看最新提交
- 在 GitHub 倉庫的「Actions」標籤頁查看部署進度

### Q: 如何確認遠端倉庫是否已設定？

**A:** 執行以下命令：
```bash
git remote -v
```

如果有顯示 URL，表示已設定。如果沒有，需要執行：
```bash
git remote add origin https://github.com/您的使用者名稱/倉庫名稱.git
```

### Q: 如果遇到「fatal: not a git repository」錯誤？

**A:** 表示當前目錄不是 Git 倉庫，執行：
```bash
git init
```

### Q: 如何切換到正確的目錄？

**A:** 在 Git Bash 中：
```bash
# Windows 路徑轉換（使用正斜線）
cd /d/bak/work/9-5/通訊行/shangcheng-security-website

# 或使用相對路徑
cd "D:\bak\work\9-5\通訊行\shangcheng-security-website"
```

---

## ✅ 檢查清單

完成以下步驟後，請打勾：

- [ ] Git Bash 已安裝
- [ ] GitHub 帳號已準備好
- [ ] 遠端倉庫已建立（或已存在）
- [ ] 已切換到正確的專案目錄
- [ ] 已執行 `git add .`
- [ ] 已執行 `git commit`
- [ ] 已執行 `git push`
- [ ] 在 GitHub 確認檔案已上傳
- [ ] 已設定 GitHub Pages（Source 選擇 GitHub Actions）
- [ ] 在 GitHub Actions 確認部署成功

---

## 重要說明

- ✅ **推薦使用方法一**：自動化、方便、不會把建置檔案混入原始碼
- ❌ `out` 資料夾已經在 `.gitignore` 中，這是正確的（建置檔案不應該上傳原始碼倉庫）
- 📦 GitHub Actions 會自動處理建置和部署，您只需要上傳原始碼即可
- 📍 **專案位置**：`D:\bak\work\9-5\通訊行\shangcheng-security-website`
- 🔄 **之後每次更新**：只需要執行 `git add .` → `git commit -m "訊息"` → `git push`

---

**需要更多幫助？** 查看 `GIT_UPLOAD_GUIDE.md` 檔案了解更多詳細說明。

