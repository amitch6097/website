const port = process.env.PORT || 2026;
module.exports = {
    componentName: 'website',
    webpackDevServerPath: `http://localhost:${port}/`,
};
