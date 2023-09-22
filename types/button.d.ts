import { VuiComponent } from './component';

interface VuiButtonProps {
  // component props...
  type: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
  // ...
}

export declare const VuiButton: VuiComponent<VuiButtonProps>;
