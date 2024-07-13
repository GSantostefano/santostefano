import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`
  },
  assetsInclude: ["**/*.jpg", "**/*.JPG"], // Asegura que los archivos .jpg y .JPG sean tratados como recursos estáticos
})
