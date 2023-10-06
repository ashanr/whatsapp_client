import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router', 'vuex', 'whatsapp-web.js'],
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
