import webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

export const buildResolvers = (tsConfig: string): webpack.ResolveOptions => {
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
