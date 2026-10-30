import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { vercel } from 'vite-plugin-vercel/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), vercel()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
  },
});
