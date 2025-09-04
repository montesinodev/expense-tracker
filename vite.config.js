// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // REMOVE the base property for Vercel
  // base: '/expense-tracker/' 
})