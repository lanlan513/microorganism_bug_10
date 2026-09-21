import app from './app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 微生物文明馆 API 服务已启动: http://localhost:${PORT}`);
});
