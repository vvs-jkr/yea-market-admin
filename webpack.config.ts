import * as path from "path"
import * as webpack from "webpack"


type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
}

export default (env:EnvVariables) => { 
    const config: webpack.Configuration = { 
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'app', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js', 
            clean: true
        },
        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }

    return config 
}