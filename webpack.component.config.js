const path = require('path');
const webpackConfig = require(`./webpack.config`);

module.exports = {
    entry: { website: './src/loader.js' },
    output: {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
    },
};
