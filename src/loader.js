(async () => {
    __webpack_public_path__ = requirejs.toUrl('website') + '/';

    let {
        default: platformComponent,
    } = await import(/* webpackChunkName: "website" */ './website');
    new platformComponent();
})();
