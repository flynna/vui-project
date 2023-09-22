import type { App } from 'vue';
import VuiText from './src/index.vue';

VuiText.install = function (app: App) {
  app.component((VuiText.name || VuiText.__name)!, VuiText);
};

type WithInstall<T> = T & { install(app: App): void };

export default VuiText as WithInstall<typeof VuiText>;
