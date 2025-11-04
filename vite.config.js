const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/union-find.js'),
      name: '@manubb/union-find',
      fileName: (format) => `union-find.${format}.js`
    }
  }
});