# Git 還原

## HEAD 指標

HEAD 指標所指向的提交紀錄就是現在看到的版本

HEAD 指標可指向任何分支或任何提交紀錄

移動 HEAD 指標就可移動到任意分支或任意提交紀錄

藉由移動 HEAD 指標前往指定的提交紀錄，對 HEAD 指標來說存在於未來的提交紀錄會無法用 `git log` 看到，這些看不到的提交紀錄不會消失

## 移動到分支或提交紀錄 checkout

在 GUI 軟體中，HEAD 指標會移動，線圖不會改變

```text
> git checkout 位置次數
```

位置可以是以下三種的其中一種：

* 提交紀錄的 SHA-1 值的前七個字元
* HEAD
* 目前所在的分支名稱

次數可用可不用，次數的符號可以是 ^ 或 ~，用符號的個數或在一個符號後面寫數字，代表要倒退幾次，回到幾個版本紀錄前，舉例來說以下兩行的意義相同：

```text
git checkout main^^^
git checkout main~3
```

### 取消修改檔案

使用時機是編輯檔案後，加入索引前

一個檔案

```text
git checkout -- 檔名
```

所有檔案

```text
git checkout .
```

取消修改檔案的狀態變化：

| 步驟 | 指令 | 原狀態 > 新狀態 |
| :- | :- | :- |
| 修改檔案 | 無 | 未修改 > 已修改 |
| 取消修改檔案 | git checkout -- 檔名 | 已修改 > 未修改 |

## 還原版本 reset

在 GUI 軟體中，HEAD 指標會移動，線圖會改變

```text
git reset 位置次數
```

位置可以是以下三種的其中一種：

* 提交紀錄的 SHA-1 值的前七個字元
* HEAD
* 目前所在的分支名稱

次數可用可不用，次數的符號可以是 ^ 或 ~，用符號的個數或在一個符號後面寫數字，代表要倒退幾次，回到幾個版本紀錄前，舉例來說以下兩行的意義相同：

```text
git reset HEAD^^^
git reset HEAD~3
```

## 查詢 HEAD 指標的移動紀錄 reflog

用 `git reset` 或 `git checkout 分支` 都會移動 HEAD 指標，並留下一筆紀錄，可用以下指令查詢

```text
git reflog
```

## 綜合應用

依序執行這七件事

* log 查詢提交紀錄
* checkout 移動到 main 分支
* reset 前往最新版本的前一個版本
* log 查詢提交紀錄
* reflog 查詢 HEAD 指標的移動紀錄
* reset 前往最新版本
* log 查詢提交紀錄

會出現下列執行結果

```text
> git log --oneline
1234567 (HEAD -> main) second commit
abcdefg Initial commit

> git checkout main
Already on 'main'

> git reset abcdefg
Unstaged changes after reset:
M       檔案名稱

> git log --oneline
abcdefg Initial commit

> git reflog
abcdefg (HEAD -> main) HEAD@{0}: reset: moving to abcdefg
1234567 HEAD@{1}: checkout: moving from main to main

> git reset 1234567

> git log --oneline
1234567 (HEAD -> main) second commit
abcdefg Initial commit
```
