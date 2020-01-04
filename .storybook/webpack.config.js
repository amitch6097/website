// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


const merge = require('webpack-merge');
const baseConfig = require(`../webpack.config`);
const componentConfig = require('../webpack.component.config');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

const storybookConfig = {
    plugins: [new TSDocgenPlugin()]

}
module.exports = merge(baseConfig, merge(componentConfig, storybookConfig))