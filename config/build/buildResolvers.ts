import webpack from 'webpack';
import { BuildPaths } from './types/config';
import path from 'path';

export const buildResolvers = ({ paths }: { paths: BuildPaths }): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  };
};
