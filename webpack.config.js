const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: "./src/index.js",
        vote: './src/vote.js',
    },
    output: {
        filename: "[name].js",
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]'
            //         }
            //     }],
            //     exclude: path.resolve(__dirname, './dist/index.html')
            // }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        contentBase: "./dist",
        port: 3000,
        historyApiFallback: true,
    }

}
