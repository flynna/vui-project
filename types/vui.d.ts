import { App } from 'vue';
import { VuiButton } from './button';
import { VuiComponent, VuiComponentSize, VuiComponentTheme } from './component';
import { VuiText } from './text';

export type Component = VuiComponent<{}>;

export type ComponentSize = VuiComponentSize;

export type ComponentTheme = VuiComponentTheme;

export interface InstallFunctionOptions {
  size?: VuiComponentSize;
  theme?: VuiComponentTheme;
}

export function install(vue: App, options?: InstallFunctionOptions): void;

// 通过 const 定义组件 type 定义组件别名
export const Button: typeof VuiButton;
export const Text: typeof VuiText;

// ...other component
