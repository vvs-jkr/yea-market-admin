import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"

export function buildPlugins({ mode, paths }: BuildOptions): Configuration["plugins"] {
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: paths.html }),
    ]

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin()
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        )
        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }
    return plugins
}