const path = require('path')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development', 
        entry: path.resolve(__dirname, 'src', 'app', 'index.js'), //вход, путь к главному файлу
        output: {
            path: path.resolve(__dirname, 'build'), 
            filename: '[name].[contenthash].js', 
            clean: true 
        },
    }
}