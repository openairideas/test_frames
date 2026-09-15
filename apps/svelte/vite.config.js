import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
export default defineConfig({ plugins: [svelte()], base: process.env.APP_BASE ? process.env.APP_BASE + '/' : '/' });
