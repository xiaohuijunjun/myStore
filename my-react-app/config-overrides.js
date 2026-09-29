const { override, setWebpackPublicPath } = require('customize-cra');
const { name } = require('./package.json');

module.exports = {
  webpack: override((config) => {
    config.output.library = name;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name.replace(/-/g, '_')}`;
    config.output.crossOriginLoading = 'anonymous';
    return config;
  }),
  devServer: (config) => {
    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.liveReload = false;
    config.hot = false;
    return config;
  },
};