// @ts-check

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootWebpackConfig = require('../../webpack.config');

/** @type import('webpack').Configuration */
module.exports = {
  ...rootWebpackConfig,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  entry: {
    main: require.resolve('./src/client-main.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist/umd'),
    libraryTarget: 'umd',
  },
  plugins: [...rootWebpackConfig.plugins, new HtmlWebpackPlugin({ title: 'Sample Monorepo App' })],
};
