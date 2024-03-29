export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  tsConfig: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface EnvVariables {
  mode: BuildMode;
  port: number;
}
