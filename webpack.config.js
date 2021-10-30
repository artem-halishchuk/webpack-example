const path = require('path'); // подключили пути из ноды
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'src/app/index.ts'),
    output: { //куда все уйдет
        filename: 'bundle.js', //все собирется в этот файл
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
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve(__dirname, './src/index.html')
        })
    ]
}