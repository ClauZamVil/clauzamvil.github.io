import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Esto es lo que permite que el navegador encuentre los archivos en la subcarpeta
  base: '/Clauzamvil/' 
})
