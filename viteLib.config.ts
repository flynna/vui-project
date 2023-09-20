import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'lib',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vui',
      // the proper extensions will be added
      fileName: 'vui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        format: 'umd', // 输出格式为 UMD
        name: 'Vui', // UMD 全局变量名称 --- 未指定则使用 lib.name
        // globals 配置用于指定模块依赖项与全局变量之间的映射关系，以确保在浏览器环境中可以正确访问库的功能
        globals: {
          vue: 'Vue', // key: 库中的模块依赖项的名称, value: 在浏览器中访问这个模块依赖项时应该使用的全局变量的名称
        },
      },
    },
  },
});
