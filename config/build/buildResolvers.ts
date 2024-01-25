import webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { BuildPaths } from './types/config';

export const buildResolvers = ({ tsConfig }: any): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfig,
      }),
    ],
  };
};
