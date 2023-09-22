import { App, DefineComponent } from 'vue';

// Vue2
// export declare class VuiComponent extends Vue {
//   static install(app: App): void;
// }

// Vue3
type WithInstall<T> = T & { install(app: App): void };

// T is propsType
export declare type VuiComponent<T> = WithInstall<DefineComponent<T>>;

export type VuiComponentSize = 'small' | 'middle' | 'large';

export type VuiComponentTheme = 'dark' | 'light';
