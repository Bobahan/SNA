import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { builldPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = ({
  mode,
  paths,
  port,
  isDev,
}: BuildOptions): webpack.Configuration => {
  return {
    mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,

    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },

    plugins: builldPlugins(paths.html, isDev),

    module: {
      rules: buildLoaders(isDev),
    },

    resolve: buildResolvers(paths.tsConfig),
  };
};
