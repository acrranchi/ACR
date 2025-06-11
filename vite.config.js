import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/ACR/', // Relative paths for GitHub Pages
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true, // Clean the directory before build
  }
})
