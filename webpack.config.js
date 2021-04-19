const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`)
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: `./src/js/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `TITLE`,
      favicon: `src/images/favicon.png`,
      template: `src/index.html`, // template file
      filename: `index.html`, // output file
      inject: true,
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [`style-loader`, `css-loader`, `sass-loader`],
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
      {
        test: /\.(svg|gif|png|eot|woff(2)?|ttf)$/,
        use: [`url-loader`],
      },
    ],
  },
  // dev-specific content
  mode: `development`,
  devtool: `source-map`,
  devServer: { contentBase: `./dist` },
}
