# GitHub 協作

## 拉取請求 pull request

也稱為合併請求 merge request，開發者請主要開發者拉取修改內容，如果拉取請求通過審核就會合併到遠端儲存庫當中

## 持續整合 continuous integration

將所有開發者的修改內容持續整合到遠端儲存庫

## 複製別人的專案 Fork

如果在 GitHub 上面找到有趣的專案，想要修改一些內容再向該專案作者提出拉取請求，或是作為新專案的起點，可以複製一份到自己手上

此時該專案稱為原作，常用的單字是 upstream，但是意義和 `git push -u` 的 -u 不同

### 取得別人的專案

1. 在 GitHub 網站中開啟原作
2. 點擊右上角的 Fork 按鈕就會把原作複製到自己的帳號中
3. 產生本地儲存庫：`git clone 網址`

### 提出修改建議

1. 用任何文字編輯器修改內容
2. 推送到自己的遠端儲存庫：`git push 遠端 分支`
3. 在 GitHub 上開啟自己的遠端儲存庫的頁面
4. 新增拉取請求
5. 如果原作的作者覺得可以，就合併拉取請求

### 取得原作的更新內容

1. 連結原作：`git remote add 原作 網址`
2. 抓取原作的更新內容：`git fetch 原作`
3. 合併本地的遠端分支和本地分支：`git merge 原作/分支`
4. 推送到自己的遠端儲存庫：`git push 遠端 分支`

### 檢視遠端儲存庫列表

如果有連結自己的遠端儲存庫和原作，可執行 `git remote -v` 以檢視遠端儲存庫列表，執行結果範例：

```text
origin    https://github.com/user1/repo.git (fetch)
origin    https://github.com/user1/repo.git (push)
upstream  https://github.com/user2/repo.git (fetch)
upstream  https://github.com/user2/repo.git (push)
```

## GitHub Flow

GitHub Flow 是 GitHub 推薦的以分支為基礎的工作流程，步驟依序為：

1. 新增分支，例如 feature、bugfix
2. 修改檔案，新增功能，修補錯誤
3. 新增拉取請求
4. 檢視與討論程式碼的內容，寫下評論
5. 合併拉取請求
6. 刪除不再需要的分支
