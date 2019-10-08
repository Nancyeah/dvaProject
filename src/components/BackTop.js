import React from 'react';
import styles from '../style.less';

let timer = null;
let isTop = true;

export default class BackTop extends React.Component {
  componentDidMount() {
    // 获取可视区域的高度
    const { clientHeight } = document.documentElement;
    const { slide_btn } = this.refs;
    window.onscroll = () => {
      // 获取滚动条的滚动高度
      const osTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (osTop >= clientHeight) {
        console.log(osTop, clientHeight)
        slide_btn.style.display = 'block';
      } else {
        slide_btn.style.display = 'none';
      }
      if (!isTop) {
        clearInterval(timer);
      }
      isTop = false;
    }
  }

  runTop() {
    // 设置一个定时器
    timer = setInterval(() => {
      const osTop = document.body.scrollTop || document.documentElement.scrollTop;
      const speed = Math.floor(-osTop / 6);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
      isTop = true;
      if (osTop === 0) {
        clearInterval(timer);
      }
    }, 30)
  }

  render() {
    return (
      <div className={styles.slideBtn} ref="slide_btn">
        <a className={styles.btn} onClick={() => this.runTop()} title="返回顶部">
          <span className="iconfont icon-xiangshang"></span>
        </a>
      </div>
    )
  }
}