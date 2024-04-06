module.exports = {
    entry: './src/index.js',
    output: {
        filename:'[name].[contenthash].js',
    },
    resolve:{
      extensions:['.js', '.vue']
    },
 module:{
     rules:[
         {
             test: /\.m?js$/,
             exclude: /node_modules/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: [
                         '@babel/preset-env',
                         '@babel/preset-react'
                     ],
                     plugins: [
                         '@babel/plugin-transform-runtime'
                     ]
                 }
             }
         }
     ]
 }
}