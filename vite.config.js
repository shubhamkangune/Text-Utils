// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/textutils', // 👈 this is important!
  plugins: [react()],
})
