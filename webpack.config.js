var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.tsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: ['node_modules', 'src']
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
                test: /\.tsx$/,
                loader: ['babel-loader', 'awesome-typescript-loader'],
                include: __dirname
            }
        ], // other loader configuration goes in the array
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]
}