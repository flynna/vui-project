import type { App } from 'vue';
import VuiButton from './src/index.vue';

VuiButton.install = function (app: App) {
  app.component((VuiButton.name || VuiButton.__name)!, VuiButton);
};

type WithInstall<T> = T & { install(app: App): void };

export default VuiButton as WithInstall<typeof VuiButton>;
