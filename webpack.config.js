const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

mode = process.env.NODE_ENV === "production" ? "production": "development";
target = process.env.NODE_ENV === "production" ? "browserslist": "web";

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        hot: true
    },
};