# Git 遠端指令

## 複製遠端儲存庫 clone

複製遠端儲存庫到自己的電腦，產生本地儲存庫

```text
> git clone 網址
```

此指令會自動設定 `git push -u` 的上游

## 遠端儲存庫 remote

### 加入遠端儲存庫 add

建立本地儲存庫和遠端儲存庫的連結

1. 在自己的電腦新增本地儲存庫
2. 在儲存庫代管服務新增遠端儲存庫
3. 在本地儲存庫執行以下指令

```text
> git remote add 簡稱 網址
```

簡稱：遠端儲存庫的簡稱，可以自己決定，常用的單字是 origin

網址：遠端儲存庫的網址，以 GitHub 為例，在 GitHub 網站中開啟遠端儲存庫的頁面，按下 Code 按鈕會出現 Clone 區塊，此區塊的 HTTPS 頁籤提供的網址

假設目前在本地 main 分支，建立遠端連結後會新增一個本地 origin/main 分支，只有在遠端儲存庫更新後，origin/main 分支才會更新

### 加入多個遠端儲存庫

一個本地儲存庫可以加入多個遠端儲存庫，只要用不同的簡稱就可以

```text
> git remote add 簡稱一 網址一
> git remote add 簡稱二 網址二
```

實際工作時可以將測試主機設為簡稱一，將正式主機設為簡稱二，先把程式碼推送到測試主機，確定沒問題再推送到正式主機

### 檢視遠端儲存庫列表

```text
> git remote
```

檢視遠端儲存庫列表 (包含網址)

```text
> git remote -v
```

執行結果範例：

連結一個遠端儲存庫

```text
origin  https://github.com/user1/repo.git (fetch)
origin  https://github.com/user1/repo.git (push)
```

連結兩個遠端儲存庫

```text
origin  https://github.com/user1/repo.git (fetch)
origin  https://github.com/user1/repo.git (push)
origin2  https://github.com/user1/repo2.git (fetch)
origin2  https://github.com/user1/repo2.git (push)
```

## 推送 push

將本地分支的提交紀錄推送到遠端分支

```text
> git push 簡稱 分支
```

分支：本地儲存庫的目前所在分支

### 設定上游 -u

上游 (upstream) 是另一個分支的名字，每個分支可以設定一個上游，就是遠端分支的預設值。方法是加上 -u 參數，指令寫法為

```text
> git push -u 簡稱 分支
```

假設遠端儲存庫的簡稱為 origin，遠端和本地各有一個 main 分支，指令寫法為

```text
> git push -u origin main
```

此指令會把本地 main 分支的提交紀錄推送到 origin/main，並且將 origin/main 設為本地 main 分支的上游，下次只要輸入並執行

```text
> git push
```

就會把本地 main 分支的提交紀錄推送到遠端 main 分支

## 抓取 fetch

將遠端分支的提交紀錄抓取到本地分支

```text
> git fetch
```

假設遠端儲存庫的簡稱為 origin，遠端和本地各有一個 main 分支，上述指令只會讓本地 origin/main 分支新增提交紀錄

想要讓本地 main 分支也有提交紀錄，就需要執行 `git merge origin/main`

## 拉取 pull

將遠端分支的提交紀錄拉取到本地分支

```text
> git pull
```

其實拉取就等於抓取加合併

```text
git pull = git fetch + git merge
```

假設遠端儲存庫的簡稱為 origin，遠端和本地各有一個 main 分支，拉取會讓本地 origin/main 分支新增提交紀錄，再切換到本地 main 分支並執行 `git merge origin/main`
