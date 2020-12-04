const webpack = require('webpack');
const path = require('path');
const config = require('sapper/config/webpack.js');
const cssnano = require('cssnano');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = { svelte: path.resolve('node_modules', 'svelte') };
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

const loader = {
  sassLoader: {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              './theme',
              './src/theme',
              './node_modules',
            ],
          },
        },
      },
      // 'postcss-loader'
    ],
  },
};

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              hydratable: true,
              hotReload: true, // pending https://github.com/sveltejs/svelte/issues/2377
              onwarn(warning) {
                console.log(warning.code);
                return null;
              },
            },
          },
        },
        loader.sassLoader,
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[id].css',
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardCommets: {
              removeAll: true,
            },
          }],
        },
        canPrint: true,
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              generate: 'ssr',
              dev,
              onwarn(warning) {
                console.log(warning.code);
                return null;
              },
            },
          },
        },
        loader.sassLoader,
      ],
    },
    mode: process.env.NODE_ENV,
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[id].css',
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: ['default', {
            discardCommets: {
              removeAll: true,
            },
          }],
        },
        canPrint: true,
      }),
    ],
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  // serviceworker: {
  //   entry: config.serviceworker.entry(),
  //   output: config.serviceworker.output(),
  //   mode: process.env.NODE_ENV,
  // },
};
