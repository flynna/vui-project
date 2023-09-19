import VuiButton from './src/index.vue';

VuiButton.install = function (Vue: any) {
  Vue.component(VuiButton.name || VuiButton.__name, VuiButton);
};

export default VuiButton;
