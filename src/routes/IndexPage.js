import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Content from '../components/Content/Content'
import Nav from '../components/Nav'

// 在这个方法中，返回一个dom结构
function IndexPage() {
  return (
    <div className={styles.container}>
      <Nav />
      <Content />
    </div>
  );
}

IndexPage.propTypes = {
};

// 这里 connect方法就是redux的connect,后面的IndexPage表示绑定的高阶组件
// 在connect的第一个括号中，是可以拿到所有的model对象，这样就可以把对应的model对象绑定到我们的高阶组件上
export default connect()(IndexPage);
