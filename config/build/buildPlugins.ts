import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const builldPlugins = (pathHtml: string): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: pathHtml }),
    new webpack.ProgressPlugin((percentage, message) => {
      console.log(`${(percentage * 100).toFixed()}% ${message}`);
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
};
