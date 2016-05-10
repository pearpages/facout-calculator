module.exports = {
    entry: "./js/facout-calculator/app.js",
    output: {
        filename: "facout-calculator.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw-loader"
            }
        ]
    }
}