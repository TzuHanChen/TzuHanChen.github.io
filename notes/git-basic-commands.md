# Git 基本指令

## 新增本地儲存庫 init

先利用 `cd` 指令前往要當作本地儲存庫的資料夾，再執行以下指令以新增本地儲存庫：

```text
> git init
```

如果出現以下執行結果，就表示新增成功：

```text
Initialized empty Git repository in 資料夾/.git/
```

如執行結果所述，Git 在資料夾中新增了一個 .git 資料夾，日後所有版本紀錄都會存放在這個 .git 資料夾當中

## 查看狀態 status

查看儲存庫的狀態：

```text
> git status
```

此指令的執行結果如下，Git 會列出狀態訊息，包括當前所在分支、提交紀錄、尚未追蹤的檔案、等待提交的修改等等：

```text
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

## 加入索引 add

將尚未追蹤的檔案加入索引，開始追蹤：

```text
> git add 檔案名稱
```

舉例：將index.html 加入索引

```text
> git add index.html
```

將所有檔案加入索引：

```text
> git add .
```

## 提交版本 commit

提交版本：將目前暫存區中的檔案提交成一個版本紀錄。

版本資訊是一段描述，用來記錄此版本的內容，例如新增什麼功能、修正什麼錯誤

```text
> git commit -m "版本資訊"
```

提交版本後出現以下執行結果，就表示已成功建立版本：

```text
[master (root-commit) cf6a0c9] new index
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
```

## 查詢提交紀錄 log

利用以下指令可檢視所有的版本紀錄：

```text
> git log
```

執行指令後會看到如下的執行結果：

```text
commit SHA-1值 (HEAD -> 分支)
Author: 我的名字 <我的電子信箱>
Date:   星期幾 月份 日期 時:分:秒 年 時區

    版本資訊
```

如果希望每個提交紀錄只有一行，就是只顯示 SHA-1 值的前七個字元和提交訊息

```text
git log --oneline
```

執行指令後會看到如下的執行結果：

```text
七個字元 (HEAD -> 分支) 提交訊息
```

按 q 就可以退出

## 檔案狀態

![file status flow](https://w3c.hexschool.com/img/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96_2019-11-16_22.03.067qvx7.png)

以下表格列出檔案的狀態變化：

| 步驟 | 指令 | 原狀態 > 新狀態 |
| :- | :- | :- |
| 新增檔案 | copy NUL 檔名 | 無 > 未追蹤 |
| 加入索引 | git add 檔名 | 未追蹤 > 加入索引 |
| 編輯 | 無 | 未修改 > 已修改 |
| 加入索引 | git add 檔名 | 已修改 > 加入索引 |
| 提交 | git commit -m "版本資訊" | 加入索引 > 未修改 |
