import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Esta ruta es vital para repositorios que no son la raíz absoluta
  base: '/github.io/' 
})