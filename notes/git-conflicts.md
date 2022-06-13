# Git 衝突

如果兩個分支沒有改到同一行程式碼，合併的時候會開啟預設文字編輯器、顯示預設合併訊息，編輯合併訊息、儲存、關閉後就會合併

如果兩個分支有改到同一行程式碼，合併的時候會顯示衝突訊息

```text
❯ git merge 其它分支
Auto-merging 檔案名稱
CONFLICT (content): Merge conflict in 檔案名稱
...
```

檢視檔案狀態會看到以下訊息

```text
> git status
On branch 目前分支
...
Unmerged paths:
    both modified: 檔案名稱
```

需要處理掉衝突才能合併

## 解決衝突

以程式碼編輯器 (此範例為 Visual Studio Code) 打開有衝突的檔案，會看到程式碼當中有衝突的部分變成以下情況

```text
<<<<<<< HEAD
目前分支 的 HEAD 所在位置的程式碼
=======
其他分支的程式碼
>>>>>>> 其它分支
```

決定好要保留哪一邊的程式碼並修改好之後，把檔案加入索引 `git add 檔案名稱`

再次檢視檔案狀態，看到以下訊息就表示已修好所有衝突

```text
> git status
On branch 目前分支
All conflicts fixed but you are still merging.

Changes to be committed:
    modified: 檔案名稱
```

沒有衝突就可以提交 `git commit -m "提交訊息"`，此時會開啟預設文字編輯器、顯示預設合併訊息，編輯合併訊息、儲存、關閉後就會合併
