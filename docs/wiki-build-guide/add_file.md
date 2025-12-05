---
sidebar_position: 5
---

# 新增文件指南【站点管理】

## 站点布局

本站遵循docusaurus的默认布局。但对导航有较为清晰的约束。
本站大部分内容在`docs`目录下。
部分非文档相关的东西在`src/pages`下。
写日志可以在`blog`下。


不同分类的内容，请放在docs的子文件夹下面。
docs下的每一个子文件夹都需要在[docs.ts](https://github.com/BeatSaberChineseWikiGroup/wiki/edit/master/docs.ts)文件中追加记录。

其中displayInNav表示在网页上方显示大分类导航，而noSidebar则表示是否在正文建立左侧边栏。

## 新增文档大类

在docs下新建一个子文件夹，并在docs.ts中补充信息。

## 新增小文件

在docs下的某个子文件夹里新建`name.md`，或者新建`name`文件夹并编写`name/index.md`，此时可以放置图片。