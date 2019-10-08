import React from 'react';
import { Router, Route, Switch } from 'dva/router';   // 引入router，用的就是react-router
import IndexPage from './routes/IndexPage';           // 引入路由绑定的高阶组件

// 按照从上到下的顺序开始url规则，匹配到了就是展示对应的组件view
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
