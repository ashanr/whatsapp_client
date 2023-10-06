const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // Add TypeScript loader configuration
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.IgnorePlugin({
        checkResource: (resource) => {
          return /lib-cov/.test(resource);
        },
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          // other env variables
        },
      }),
    ],
    entry: './src/main.ts',
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      mainFields: ['browser', 'module', 'main'],
      alias: {
        '.*': false,
      },
      fallback: {
        process: require.resolve('process/browser'),
        path: require.resolve('path-browserify'),
        os: false,
        stream: false,
        path: false,
        zlib: false,
        fs: false,
        crypto: false,
        url: false,
        assert: false,
        http: false,
        https: false,
        tls: false,
        net: false,
        readline: false,
        child_process: false,
        constants: false,
        util: false,
      },
    },
    stats: {
      warnings: false,
      errors: false,
    },
  },
});
