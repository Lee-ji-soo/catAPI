const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        catch: './src/catch.js',
        category: "./src/category.js",
        breed: './src/breed.js',
        vote: './src/vote.js',
        favorite: './src/favorite.js',
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
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        contentBase: "./dist",
        port: 8000,
        historyApiFallback: true,
    }

}
