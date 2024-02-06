import  webpack from "webpack"
import { BuildPaths } from "../build/types/config"
import path from "path"

export default ({config}: {config: webpack.Configuration}) => {
    const paths: Pick<BuildPaths, 'tsConfig'> = {
        tsConfig: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.tsConfig)
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}