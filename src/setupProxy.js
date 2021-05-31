const createProxyMiddleware = require('http-proxy-middleware');

let url1 = 'http://localhost:4000' // 测试地址
let url2 = '' // 线上地址

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { 
    target: url1, //转发到的域名或者ip地址
    pathRewrite: {
      '^/api': '', //接口地址里没有"/api",将其重写置空
    },
    changeOrigin: true, //必须设置为true
    secure: false //是否验证https的安全证书，如果域名是https需要配置此项
  }));
};
