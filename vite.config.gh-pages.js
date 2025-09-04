// vite.config.gh-pages.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/expense-tracker/' // GitHub Pages needs this
})