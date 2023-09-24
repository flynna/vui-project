# Text

Text 组件

## 介绍

根据场景描述一段信息

## 引入

通过以下方式来全局注册组件，更多方式请参考[组件注册](/config.html)

```ts
import { createApp } from 'vue';
import { Text } from 'vui-project';

const app = createApp();
app.use(Text);
```

# 代码演示

## 文本类型

按钮支持 `default`、`primary`、`success`、`info`、`warning`、`danger` 六种类型，默认为 `default`。

```html
<VuiText type="default">默认信息</VuiText>
<VuiText type="primary">主要信息</VuiText>
<VuiText type="success">成功信息</VuiText>
<VuiText type="info">提示信息</VuiText>
<VuiText type="warning">警告信息</VuiText>
<VuiText type="danger">危险信息</VuiText>
```

<!-- 其他的 props 用法介绍... -->

# API

## Props

| 参数 | 说明     | 类型     | 默认值    |
| ---- | -------- | -------- | --------- |
| type | 文本类型 | `string` | `default` |

## Events

| 事件名 | 说明     | 回调参数       |
| ------ | -------- | -------------- |
| click  | 点击事件 | `event: Event` |
