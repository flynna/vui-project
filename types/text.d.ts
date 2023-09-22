import { VuiComponent } from './component';

interface VuiTextProps {
  // component props...
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  // ...
}

export declare const VuiText: VuiComponent<VuiTextProps>;
