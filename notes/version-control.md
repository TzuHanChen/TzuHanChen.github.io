# 版本控制

參考資料：

[版本控制 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

[分散式版本控制 - 維基百科，自由的百科全書](https://zh.wikipedia.org/wiki/%E5%88%86%E6%95%A3%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

[儲存庫 - 維基百科，自由的百科全書](https://zh.wikipedia.org/zh-tw/%E4%BB%93%E5%BA%93_(%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6))

[Git & GitHub 教學手冊](https://w3c.hexschool.com/git/cfdbd310)

[為你自己學 Git](https://gitbook.tw/)

[Get started with Sourcetree](https://confluence.atlassian.com/get-started-with-sourcetree)

## 版本與版本控制 Version & Version control

每一次修改檔案都稱為一個版本

版本控制可以：

* 只紀錄每個版本中哪些檔案的哪些部分有修改過
* 查詢每個版本的修改內容
* 為每個版本命名
* 切換到任何一個版本
* 確保多位開發者在編輯同一個檔案時看到相同的版本
* 建立多個版本，例如主要、除錯、新功能等等，開發完成之後再合併

## 中央式與分散式 Centralized and distributed

中央式：由中央權威管理檔案以及存取權限，一次只讓一個開發者工作

分散式：每個開發者都有拿到所有檔案，所有開發者都可以修改同一個檔案與合併版本紀錄

## 儲存庫 Repository

儲存檔案與版本紀錄的地方，也可稱為數據庫或版本庫

![repository flow](https://w3c.hexschool.com/img/72316309_2739111376108490_535994150261096448_n1fkzgd.jpg)

### 工作目錄 Working directory

位於開發者的電腦，開發者在此編輯檔案

### 索引 Staging Area

位於開發者的電腦，開發者把工作目錄中的修改內容傳送到這裡

### 本地儲存庫 Local repository

位於開發者的電腦，開發者把索引中的修改內容傳送到這裡

### 遠端儲存庫 Remote repository

位於伺服器，是整個專案的中心

開發者把本地儲存庫中的修改內容傳送到這裡，並且從這裡拿到其他開發者的修改內容
