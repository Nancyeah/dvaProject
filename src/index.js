import dva from 'dva';           // 引入依赖
// import styles from './index.css';

// 1. Initialize
// 这个方法里面可以配置router的路由模式，比如hash或者H5 history
const app = dva();              // 初始化Dva应用

// 2. Plugins
// app.use({});                 // 使用中间件

// 3. Model
// app.model(require('./models/example').default);  // 加载Model层

// 4. Router
app.router(require('./router').default);            // 引入router

// 5. Start
app.start('#root');                                 // 挂载Dva应用