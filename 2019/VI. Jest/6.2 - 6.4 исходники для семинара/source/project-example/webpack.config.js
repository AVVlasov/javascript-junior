const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const Copy = require('copy-webpack-plugin');

const outputDirectory = path.join(__dirname, 'dist');

function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}

module.exports = {
    mode: "development",
    entry: {
        app: ["./src/index.jsx"]
    },
    output: {
        path: outputDirectory,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true
                        }
                    }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new Copy([{ from: './stub/sw.js'}, {from: './stub/index.html'}, {from: './stub/manifest.webmanifest'}, {from: './stub/123.png'}]),
        // new HtmlWebpackPlugin({
        //     title: "My App",
        //     hash: true,
        //     template: "stub/index.html"
        // }),
        new CompressionPlugin({
            filename: '[path].gz[query]'
        }),
        new webpack.DefinePlugin({
          BACKEND_URL: `"${process.env.BACKEND_URL}"`
        })
    ],
    devServer: {
        contentBase: outputDirectory,
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};
