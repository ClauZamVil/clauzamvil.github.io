import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Al ser el repo principal, base debe ser '/'
  base: '/' 
})