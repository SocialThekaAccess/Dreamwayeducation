import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy WP REST API calls to avoid CORS issues in development
      '/wp-json': {
        target: 'https://dreamwayeducation.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
