module.exports = {
    entry: [
        "./src/index.js"
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", "jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        port: 3000,
        historyApiFallback: true
    }

}
