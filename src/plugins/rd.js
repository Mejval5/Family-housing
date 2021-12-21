// Automatically loads and bootstraps files
// in the "./src/components/octo" folder.

// Imports
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('@/components/rd', true, /\.vue$/)

for (const file of requireComponent.keys()) {
  const componentConfig = requireComponent(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(`Rd${componentName}`, componentConfig.default || componentConfig)
}
