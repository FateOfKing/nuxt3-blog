import httpProxy from 'http-proxy';

const testProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
  changeOrigin: true,
  headers: { 'item': process.env.Whatever },
  ssl: false,
  secure: false,
  ws: false,
});

export default function (req, res, next) {
  if (req.url.startsWith('/__test')) {
    const extraOptions = {};
    try {
        testProxy.web(req, res, extraOptions);
    } catch (err) {
      // error handling
    }
  } else {
    next();
  }
}