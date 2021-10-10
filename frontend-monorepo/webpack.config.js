// @ts-check

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type import('webpack').Configuration */
module.exports = {
  devtool: 'source-map',
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
            plugins: [
              ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'lodash'],
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          projectReferences: true,
          configFile: require.resolve('./tsconfig.json'),
          compilerOptions: {
            // build still catches these. avoid them during bunding time for a nicer dev experience.
            noUnusedLocals: false,
            noUnusedParameters: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
