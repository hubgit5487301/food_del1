import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const url = process.env.origin
console.log(url)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // When the React app calls /api, proxy the request to the backend
      '/api': 'https://food-del1-t73r.onrender.com',
      // You can add additional proxies for other API routes here
      // '/another-api': 'http://localhost:4001',
    }
  }
});

