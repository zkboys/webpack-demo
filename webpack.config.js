var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var configs = {// 基于不同模式，区分配置
    "development": {
        "path": './public',
        "publicPath": '/s/'
    },
    "test": {
        "path": './public',
        "publicPath": '/s/'
    },
    "production": {
        "path": './public',
        "publicPath": '/s/'
    }
};
var cfg = configs.development;
/*
 * 获取自定义参数
 * 自定义参数约定：webpack --cfg.path=./public --cfg.runmod=dev
 * */
var arguments = process.argv.splice(2);
if (arguments) {
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        var keyWordInex = arg.indexOf('--cfg.');
        if (keyWordInex == 0) {
            arg = arg.substr(6, arg.length);
        }
        var cfgs = arg.split('=');
        if (cfgs[0] == 'runmod' && configs[cfgs[1]]) {
            cfg = configs[cfgs[1]];
        }
    }
}
//构建之前，先清除之前构建的内容
var child_process = require('child_process');
child_process.exec('rm -rf ' + join(__dirname, cfg.path),
    function (error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

var babelQuery = {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports', 'typecheck']
};

module.exports = {
    resolve: {//加入这个，import js或者jsx文件时，可以忽略后缀名
        modulesDirectories: ['node_modules', (0, join)(__dirname, '../node_modules')],
        extensions: ['', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules', (0, join)(__dirname, '../node_modules')]
    },
    entry: {
        //"index": ["./src/home/home.jsx", "./src/home/home-content.jsx"],
        "index": './src/entry/index.jsx'
    },
    output: {
        path: join(__dirname, cfg.path),
        publicPath: cfg.publicPath,
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: babelQuery
            }, {
                test: /\.jsx$/,
                loader: 'babel',
                query: babelQuery
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'autoprefixer-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!' + 'autoprefixer-loader!' + 'less?{"sourceMap":true,"modifyVars":{}}')
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url?limit=10000'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            }, {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new ExtractTextPlugin("[name].css", {// css单独打包成一个css文件，比如entry.js引入了多个less，最终会都打到一个home.css中。
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
