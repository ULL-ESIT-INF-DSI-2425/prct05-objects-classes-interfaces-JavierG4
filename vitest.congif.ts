import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts'], // Buscar pruebas en la carpeta "tests/"
    coverage: {
      provider: 'v8', // Usa V8 para la cobertura
      reporter: ['text', 'html'], // Reportes en formato texto y HTML
      include: ['src/**/*.ts'], // Incluir archivos TypeScript dentro de "src"
      exclude: ['tests/**/*.spec.ts'], // Excluir archivos de prueba
    },
  },
})
