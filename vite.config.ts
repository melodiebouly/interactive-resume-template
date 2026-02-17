import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { resumeSeoPlugin } from './vite-plugin-resume-seo'

export default defineConfig({
  base: '/interactive-resume-template/',
  plugins: [react(), tailwindcss(), resumeSeoPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
