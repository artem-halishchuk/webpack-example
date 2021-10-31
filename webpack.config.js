const path = require('path'); // подключили пути из ноды
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/app/index.ts'), //основной файл для сборщика точка входа
        test: path.resolve(__dirname, 'src/assets/test_script.js'), //доболнительные файлы для сборки
    },
    output: { //куда все уйдет
        filename: '[name].[contenthash].js', //все собирется в этот файл, [contenthash] - переименовует согласно хеша
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    mode: 'development',
    //mode: 'production',
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve(__dirname, './src/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}