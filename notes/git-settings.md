# Git 初始化設定

以下指令和執行結果都是在命令提示字元中輸入和顯示

指令的前方會有 `>` 大於符號，執行結果則沒有

## 確認 Git 的版本編號 version

```text
> git version
```

## 環境設定 config

### 姓名和電子信箱

會出現在日後發布的版本紀錄中

```text
> git config --global user.name "我的姓名"
> git config --global user.email 我的電子信箱
```

檢視目前的設定

```text
> git config --global user.name
> git config --global user.email
```

### 預設編輯器

預設的程式碼編輯器，當 Git 需要使用者輸入訊息時會用到

```text
> git config --global core.editor "編輯器名稱或路徑"
```

檢視目前的設定

```text
> git config --global core.editor
```

### 預設分支名稱

```text
> git config --global init.defaultBranch 分支名稱

```

### 檢視所有設定值

```text
> git config --list
```

按 q 就可以退出
