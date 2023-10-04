const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({
        checkResource: (resource) => {
          return /lib-cov/.test(resource);
        },
      }),
    ],
    entry: './src/main.ts',
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      mainFields: ['browser', 'module', 'main'],
      alias: {
        '.*': false
      },
      fallback: {
        path: require.resolve('path-browserify'),
        os: false,
        stream: false,
        path:false,
        zlib:false,
        fs:false,
        crypto:false,
        url:false,
        assert:false,
        http:false,
        https:false,
        tls:false,
        net:false,
        readline:false,
        child_process:false,
        constants:false,
        util:false,
      }
    },
    stats: {
      warnings: false,
      errors: false    
    },
  },
})
