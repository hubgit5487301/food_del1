import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When the React app calls /api, proxy the request to the backend
      '/api': 'http://localhost:4000',
      // You can add additional proxies for other API routes here
      // '/another-api': 'http://localhost:4001',
    }
  }
});

