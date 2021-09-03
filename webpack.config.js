const path = require("path");

let mode = "development";

mode = process.env.NODE_ENV === "production" ? "production": "development";

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    devtool: "source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
};