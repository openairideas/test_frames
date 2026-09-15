import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({ plugins: [vue()], base: process.env.APP_BASE ? process.env.APP_BASE + '/' : '/' });
