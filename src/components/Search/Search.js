import React from 'react';
import styles from './style.less';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mouseup', () => this.recoverStyle());
  }

  changeStyle() {
    this.setState({
      clicked: true,
    })
  }
  
  recoverStyle() {
    this.setState({
      clicked: false,
    })
  }

  componentWillUnmount () {
    window.removeEventListener('mouseup', this.recoverStyle());
  }

  render() {
    const { clicked } = this.state;
    return (
      <div className={styles.search}>
        <input className={clicked ? styles.searchInputClicked : styles.searchInput} placeholder="搜索" onClick={() => this.changeStyle()}></input>
        <a className={clicked ? styles.icSearchClicked : styles.icSearch}><span className="iconfont icon-iconset0157" /></a>
        <div className={clicked ? styles.searchTipsBoxClicked : styles.searchTipsBox}>
          <div className={styles.searchTips}>
            <div className={styles.searchHeader}>
              <span>热门搜索</span>
              <a>
                <span className="iconfont icon-huanyipi">&nbsp;</span>
                <span>换一批</span>
              </a>
            </div>
            <div className={styles.searchWrap}>
              <ul>
                <li><a href=''>区块链</a></li>
                <li><a href=''>小程序</a></li>
                <li><a href=''>vue</a></li>
                <li><a href=''>毕业</a></li>
                <li><a href=''>PHP</a></li>
                <li><a href=''>故事</a></li>
                <li><a href=''>flutter</a></li>
                <li><a href=''>理财</a></li>
                <li><a href=''>美食</a></li>
                <li><a href=''>投稿</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}