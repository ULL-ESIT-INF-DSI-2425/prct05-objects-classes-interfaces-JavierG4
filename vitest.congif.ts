import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts'],  // Asegúrate de usar un patrón adecuado para tus pruebas
    coverage: {
      provider: 'v8',  // Usar el recolector de cobertura V8
      reporter: ['text', 'html', 'lcov'],  // Incluir 'lcov' para Coveralls
      include: ['src/**/*.ts'],  // Solo incluir archivos TS en src para la cobertura
      exclude: ['/**/*.spec.ts'],  // Excluir los archivos .spec.ts de la cobertura
    },
  },
})