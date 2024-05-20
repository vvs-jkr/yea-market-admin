import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({mode, paths}:BuildOptions):Configuration["plugins"]{
    const isProd = mode === 'production';

    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        isProd && new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}