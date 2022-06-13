# 命令行

資料來源：

[介紹命令行(command-line)介面](https://carolhsu.gitbooks.io/django-girls-tutorial-traditional-chiness/content/intro_to_command_line/README.html)

[SS64 Command line reference](https://ss64.com/)

## 介面

介面是人類和電腦溝通的方式。

圖形化介面（GUI, Graphical User Interface）讓人類看到各種圖形、按鈕或區塊等等，藉由點擊、連續點擊、按住、拖曳等方式給予電腦指示。

命令行介面（CLI, Command Line Interface）讓人類看到文字，藉由輸入文字的方式給予電腦指示。

## 應用程式

檔案總管就是採用圖形化介面的應用程式。

Windows 命令提示字元（cmd.exe）則是採用命令行介面的應用程式，可在開始功能表中找到並開啟。

## 命令行 Command Line

命令行是在命令行介面中給予電腦指示的一串文字，由**目前路徑、提示字元和指令**所組成。打完整行命令行之後按 Enter 執行。

### 目前路徑

目前所在位置，路徑也可稱為目錄或資料夾。

### 提示字元

在 Windows 當中是 `>`（大於符號）

在 Mac 或 Linux 當中是 `$`（錢幣記號）

### 指令

以下是常見的指令、功能與範例。

W 代表 Windows ，M 代表 Mac OS，L 代表 Linux。

範例皆為 Windows 命令提示字元的操作結果，包括目前路徑、提示字元、指令和執行結果。

| 指令 (W) | 指令 (M, L) | 功能 |
| :- | :- | :- |
| dir | ls | 列出所有檔案和資料夾 |

範例：

```text
C:\Users\Admin>dir

C:\Users\Admin 的目錄

2021/06/20  下午 11:11  \<DIR\>  .android
2020/04/04  下午 04:58  24       .bash_history
...
```

| 指令 (W) | 指令 (M, L) | 功能 |
| :- | :- | :- |
| cd | pwd | 顯示目前路徑 |
| cd .. | cd .. | 前往上層路徑 |
| cd 路徑 | cd 路徑 | 前往下層路徑 |

範例：

```text
C:\Users\Admin>cd
C:\Users\Admin>

C:\Users\Admin>cd ..
C:\Users>

C:\Users>cd Admin
C:\Users\Admin>
```

| 指令 (W) | 指令 (M, L) | 功能 |
| :- | :- | :- |
| md 資料夾 | mkdir 資料夾 | 新增資料夾 |
| rd 資料夾 | rmdir 資料夾 | 刪除資料夾 |

範例：

```text
C:\Users\Admin>md folder
C:\Users\Admin>

C:\Users\Admin>cd folder
C:\Users\Admin\folder>

C:\Users\Admin\folder>cd ..
C:\Users\Admin>

C:\Users\Admin>rd folder
C:\Users\Admin>

C:\Users\Admin>cd folder
系統找不到指定的路徑。

// rd 資料夾 只會刪除空的子資料夾
```

| 指令 (W) | 指令 (M, L) | 功能 |
| :- | :- | :- |
| copy NUL 檔案 | touch 檔案 | 新增空檔案 |
| copy 舊檔案 新檔案 | cp 舊檔案 新檔案 | 複製檔案 |
| move 舊檔案 新檔案 | mv 舊檔案 新檔案 | 覆蓋檔案 |
| del 檔案 | rm 檔案 | 刪除檔案 |

```text
C:\Users\Admin>copy NUL source.txt
複製了         1 個檔案。

C:\Users\Admin>copy source.txt new.txt
複製了         1 個檔案。

C:\Users\Admin>move source.txt new.txt
您要覆寫 C:\Users\Admin\new.txt 嗎? (Yes/No/All): y
移動         1 個檔案。

// 舊檔案會消失，新檔案的內容被替換成舊檔案的內容

C:\Users\Admin>del new.txt
C:\Users\Admin>

// 檔案被刪除後不會移到資源回收桶，而是直接消失
```

| 指令 (W, M, L) | 功能 |
| :- | :- |
| whoami | 顯示使用者名稱 |
| exit | 離開命令提示字元 |

範例：

```text
C:\Users\Admin>whoami
admin

C:\Users\Admin>exit
```
