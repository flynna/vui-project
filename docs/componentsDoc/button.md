# Button

Button 组件

## 介绍

按钮用于触发一个操作，如提交表单。

## 引入

通过以下方式来全局注册组件，更多方式请参考[组件注册](/config.html)

```ts
import { createApp } from 'vue';
import { Button } from 'vui-project';

const app = createApp();
app.use(Button);
```

# 代码演示

## 文本类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<VuiButton type="default">默认按钮</VuiButton>
<VuiButton type="primary">主要按钮</VuiButton>
<VuiButton type="success">成功按钮</VuiButton>
<VuiButton type="warning">警告按钮</VuiButton>
<VuiButton type="danger">危险按钮</VuiButton>
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
