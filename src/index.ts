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

// 直接给浏览器或 AMD loader 使用 --- Vue3 需要向全局暴露 __VUE__ (自定义的)
const contentWindow = globalThis as unknown as Window;

if (contentWindow?.Vue || contentWindow?.__VUE__) {
  // vue3 umd window.Vue 上不存在 use、component 方法
  // FIX: 开发者在实例创建完成后手动绑定 window.__VUE__ 属性，传入再进行注册，详细见 ../docs/vue3Demo.html
  const vueApp = contentWindow.Vue.use ? contentWindow.Vue : contentWindow.__VUE__;

  install(vueApp);
}

export default {
  install, // 用于ES modules，import Vue 后直接使用 Vue.use()
  VuiButton, // 解构赋值导出单个组件
  // ...other component
};
