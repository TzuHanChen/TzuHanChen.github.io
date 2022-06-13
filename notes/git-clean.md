# Git 清空工作目錄

在工作目錄中新增檔案之後，檔案會是未追蹤狀態，可用 clean 指令清空這些剛新增的檔案

清空檔案就是直接刪除檔案，不會把檔案移到資源回收桶

## 檢視要被清空的檔案 -n

也就是列出所有未追蹤的檔案

```text
git clean -n
```

## 選擇要被清空的檔案 -i

```text
git clean -i
```

執行上述指令會出現以下的訊息與選項

```text
Would remove the following items:
  (一開始是所有)未追蹤的檔案清單
*** Commands ***
    1: clean 清空未追蹤的檔案清單
    2: filter by pattern 用規則篩選
    3: select by numbers 用編號選取
    4: ask each 逐項詢問
    5: quit 退出
    6: help 幫助
What now>
```

以下是選 3 的情況

```text
What now> 3
    1: 檔案一     2: 檔案二
Select items to delete>> "編號"
  * 1: 檔案一     2: 檔案二
Select items to delete>>
Would remove the following item:
  檔案一
*** Commands ***
    1: clean
    2: filter by pattern
    3: select by numbers
    4: ask each
    5: quit
    6: help
What now> 1
Removing 檔案一
```

## 強制清空檔案 -f

就是刪除所有未追蹤的檔案

```text
git clean -f
```

## 清空檔案的狀態變化

| 步驟 | 指令 | 原狀態 > 新狀態 |
| :- | :- | :- |
| 新增檔案 | copy NUL 檔名 | 無 > 未追蹤 |
| 清空檔案 | git clean -i 或 -f | 未追蹤 > 無 |
