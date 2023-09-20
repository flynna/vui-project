import VuiButton from '../packages/button';
// ...other component

type InstallFunction = {
  (Vue: any, options?: { size?: 'small' | 'middle' | 'large'; theme?: 'dark' | 'light' }): void;
  installed?: boolean;
};

interface Window extends globalThis.Window {
  [k: string]: any;
}

// 所有自定义的组件
const vuiComponents = [VuiButton];

// 支持 use.use 全局注册所有组件
const install: InstallFunction = function (Vue, options = {}) {
  // 因为组件内部实现了 install 方法，所以可以直接 Vue.use
  vuiComponents.forEach((component) => Vue.use(component));

  // 如果没有实现，则如下：
  // vuiComponents.forEach(component => Vue.component(component.name || component.__name, component))

  // -------------------------------------------------------

  // vue3 使用 app.config.globalProperties 替代 prototype
  if (Vue.config.globalProperties) {
    Vue.config.globalProperties.$vui = {
      ...options,
      size: options.size || 'middle',
      theme: options.theme || 'light',
    };
    // 组件内部 使用以下方式读取：
    // import { getCurrentInstance } from 'vue';

    // const app = getCurrentInstance();
    // const vuiConfig = app?.appContext.config.globalProperties.$vui
  }

  // vue2 版本的全局配置
  // Vue.prototype.$vui = {
  //   ...options,
  //   size: options.size || 'middle',
  //   theme: options.theme || 'light',
  // };
};

// tips: 下面逻辑主要是为 vue2 提供，直接给浏览器或 AMD loader 使用，引入 script 即可完成注册
{
  const contentWindow = globalThis as unknown as Window;

  if (contentWindow?.Vue?.use) {
    install(contentWindow.Vue);
  }
}

//! 当在 Vue3 项目中作为 script 引入时：
{
  // 方案一: 推荐 --- 先引入 vue3 和 vui 的 script，然后通过 `app.use(window.Vui)` 来手动注册

  // 方案二：将实例化后的 app 作为属性挂载到 window 上，例如 window.__VUE__，详见 ../docs/vue3Demo.html
  const contentWindow = globalThis as unknown as Window;

  if (contentWindow && !contentWindow.Vue?.use && contentWindow.__VUE__?.use) {
    install(contentWindow.__VUE__);
  }
}

export default {
  install, // 用于ES modules，import Vue 后直接使用 Vue.use()
  VuiButton, // 解构赋值导出单个组件
  // ...other component
};
