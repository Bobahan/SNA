import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, EnvVariables } from './config/build/types/config';

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    tsConfig: path.resolve(__dirname, '', 'tsconfig.json'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = 3000 || Number(env.port);

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
