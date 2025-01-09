import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // 1MB पर्यंत warning मर्यादा वाढवा
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Code splitting - वेगळ्या फाईल्स तयार करण्यासाठी
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
