---
sidebar_position: 220
---

# 模组Json数据编辑指南

是指在模组信息卡片上的编辑按钮跳转到的json文件。

<提示 内容="这些文件会在每次构建时与英文数据进行自动同步。所以有些内容无法修改。"/>


可修改项 | 描述
---|---
modPage | 留空表示维基上没有页面，直接填写页面名称。例如BeatLeader直接填写BeatLeader。这些页面只能放在mod-info文件夹里。
desc_zh | 不会被自动覆盖，请填写html文本。
name_zh | 中文名，请填写纯文本。

跑`npm run build`就会更新本地文件。