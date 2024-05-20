import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules']{
    const isDev = options.mode === 'development';

    const cssLoader = {
        test: /\.css$/i,
        use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
        "css-loader"],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        cssLoader,
        tsLoader
    ]
}