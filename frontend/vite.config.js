import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://food-del1-t73r.onrender.com',
        changeOrigin: true,
        secure: true, // Set to false if your backend uses self-signed certificates
      },
    },
  },
})

