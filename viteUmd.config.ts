import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    build: {
      outDir: path.join(__dirname, 'lib'),
      rollupOptions: {
        input: {
          index: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
        },
        output: {
          entryFileNames: '[name].js',
          chunkFileNames: '[name]-[hash].js',
          assetFileNames: '[name]-[hash][extname]',
        },
      },
    },
  }),
);
