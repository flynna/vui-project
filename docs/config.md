# Config

全局配置

## 组件注册

支持多种组件注册方式，请根据实际业务需要进行选择。

## 全局注册

全局注册后，你可以在 `app` 下的任意子组件中使用注册的 `Vui` 组件。

```ts
import { Button } from 'vui-project';
import { createApp } from 'vue';

const app = createApp();

// 方式一. 通过 app.use 注册
// 注册完成后，在模板中通过 <vui-button> 或 <VuiButton> 标签来使用按钮组件
app.use(Button);

// 方式二. 通过 app.component 注册
// 注册完成后，在模板中通过 <vui-button> 标签来使用按钮组件
app.component(Button.name, Button);
```

## 局部注册

局部注册后，你可以在当前组件中使用注册的 `Vui` 组件。

```ts
import { Button } from 'vui-project';

export default {
  components: {
    [Button.name]: Button,
  },
};
```

## \<script setup\>：

在 \<script setup\> 中可以直接使用 `vui-project` 组件，不需要进行组件注册。

```html
<script setup>
  import { Button } from 'vui-project';
</script>

<template>
  <Button />
</template>
```
