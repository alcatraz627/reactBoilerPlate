import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import paths from './paths'
import rules from './rules'

module.exports = {
    entry: paths.entryPath,
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.scss', '.css'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
}
