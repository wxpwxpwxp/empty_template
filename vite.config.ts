import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    port: 5001,
    hmr: {
      protocol: 'ws',
      host: '127.0.0.1',
      port: 5001,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 添加全局变量名
        // additionalData: '@import "./src/assets/scss/variables.scss";',
      },
    },
  },
  plugins: [vue()]
});
