import { defineConfig } from 'cypress'
import webpackConfig from './webpack.config.dev'

export default defineConfig({
  component: {
    specPattern: 'src/**/*.cy.ts',
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
      webpackConfig,
    },
  },
})
