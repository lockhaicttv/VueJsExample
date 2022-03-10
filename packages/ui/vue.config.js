module.exports = {
  devServer: {
    proxy: "http://localhost:4000",
    host: "localhost",
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(1500000).maxAssetSize(1500000);
  },
};
