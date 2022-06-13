# GitHub Pages

由 GitHub 提供的免費網站代管服務

可在 [GitHub Pages 官方網站](https://pages.github.com/) 閱讀使用方法

免費方案的帳號只有公開的儲存庫可以產生網站，如果有用付費方案則公開與私人儲存庫皆可產生網站

每個使用者或組織的網站數量為一個，專案的網站數量則無限

以下描述中的 username 是自己的使用者或組織的名稱，repository 是專案的名稱

## 使用者或組織的網站

### 新增儲存庫

1. 在 GitHub 網站當中新增一個儲存庫
2. 儲存庫的名稱設為 username.github.io
3. 儲存庫的觀看權限設為公開

接下來的設定可使用終端機或者 GitHub Desktop

### 用終端機設定

前往要用來當作本地儲存庫的資料夾，再複製遠端儲存庫

```text
> git clone https://github.com/username/username.github.io
```

前往本地儲存庫的資料夾，新增 index.html 檔案

```text
> cd username.github.io
> echo "Hello World" > index.html
```

加入索引、提交、推送

```text
> git add .
> git commit -m "Initial commit"
> git push -u origin main
```

### 用 GitHub Desktop 設定

1. 在 GitHub 網站的 username.github.io 頁面中，按下 Set up in Desktop 按鈕
2. 瀏覽器會產生一個對話框，按下 開啟「GitHubDesktop.exe」 按鈕
3. 如果應用程式沒有自動開啟，就自己開啟應用程式，然後複製 (clone) 遠端儲存庫
4. 用任何文字編輯器開啟本地儲存庫的資料夾，路徑可能是 C:\Users\Admin\Documents\GitHub\username.github.io
5. 新增 index.html 檔案，內容隨意
6. 在 GitHub Desktop 當中開啟儲存庫，提交更新，再按下 Publish Branch 按鈕

### 檢視使用者或組織的網站

利用任何瀏覽器開啟 [https://username.github.io](https://username.github.io) 就可以看到網站了

## 專案的網站

1. 在 GitHub 網站中的開啟專案的儲存庫，點擊 Setting 頁籤
2. 在左邊的選單中點擊 Pages 按鈕
3. 接下來可以選從零開始或選擇主題

### 從零開始

1. 點擊 Source 區塊的 None 按鈕，選擇 main 分支，再按 Save 按鈕
2. 在 main 分支點擊 Add file 按鈕，再按 Create new file
3. 檔名設為 index.html，內容隨意
4. 提交更新

### 選擇主題

1. 點擊 Theme Chooser 區塊的 Choose a theme 按鈕
2. 瀏覽要用的主題，按右邊的 Select theme 按鈕選擇主題
3. 編輯 README.md 檔案，撰寫專案的說明
4. 提交更新

### 檢視專案的網站

利用任何瀏覽器開啟 [https://username.github.io/repository](https://username.github.io/repository) 就可以看到網站了
