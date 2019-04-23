module.exports = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    },
},
{
    test: /\.(jpe?g|png|gif|svg)$/,
    use: ['url-loader?limit=1000', 'img-loader'],
},
]
