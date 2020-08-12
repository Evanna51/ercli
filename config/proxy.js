module.exports = {
  apiProxy: {
    dev: {
      api: "https://preview.pro.ant.design",
    },
    test: {
      api: "https://preview.pro.ant.design",
    },
    pre: {
      api: "https://preview.pro.ant.design",
    },
    pre: {
      prod: "https://preview.pro.ant.design",
    },
  },

  devServerProxy: {
    dev: {
      "/api/": {
        target: "https://preview.pro.ant.design",
        changeOrigin: true,
        pathRewrite: { "^": "" },
      },
    },
    test: {
      "/api/": {
        target: "https://preview.pro.ant.design",
        changeOrigin: true,
        pathRewrite: { "^": "" },
      },
    },
    pre: {
      "/api/": {
        target: "your pre url",
        changeOrigin: true,
        pathRewrite: { "^": "" },
      },
    },
    prod: {
      "/api/": {
        target: "your pre url",
        changeOrigin: true,
        pathRewrite: { "^": "" },
      },
    },
  },
};
