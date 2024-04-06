const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig={
    mode: 'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/auth/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig)