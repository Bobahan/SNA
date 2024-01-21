import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const builldPlugins = (pathHtml: string): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: pathHtml }),
    new webpack.ProgressPlugin((percentage, message) => {
      console.log(`${(percentage * 100).toFixed()}% ${message}`);
    }),
  ];
};
