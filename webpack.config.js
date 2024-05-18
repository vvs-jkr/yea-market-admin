const path = require('path')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development', 
        entry: path.resolve(__dirname, 'src', 'app', 'index.ts'), //вход, путь к главному файлу
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
}