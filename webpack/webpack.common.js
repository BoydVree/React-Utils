const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",
    entry: path.resolve(__dirname, '../src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "index.bundle.js"
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, '../src', 'index.html'),
            title: "Hello World"
        })
    ],
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
              test: /\.jsx?$/,
              // ignore transpiling JavaScript from node_modules as it should be that state
              exclude: /node_modules/,
              // use the babel-loader for transpiling JavaScript to a suitable format
              loader: 'babel-loader',
              options: {
                // attach the presets to the loader (most projects use .babelrc file instead)
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            },
        ]
    }
};