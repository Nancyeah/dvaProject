import React from 'react';
import Search from './Search/Search';
import pic1 from '../assets/logo.png';
import pic2 from '../assets/beta.png';
import styles from '../style.less'

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      display: 'none'
    }
  }
  componentDidMount() {
    document.addEventListener('mouseup', (e) => this.foldMenu(e));
  }

  unfoldMenu(e) {
    e.preventDefault();
    this.setState({
      display: 'block'
    })
  }

  foldMenu(e) {
    e.preventDefault();
    this.setState({
      display: 'none'
    })
  }

  nightMode = (e) => {
    e.preventDefault();
    console.log('hi')
    this.setState({
      active: true
    })
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.foldMenu());
  }

  render() {
    const { display } = this.state;
    return (
      <ul className={styles.navName}>
        <li><img className={styles.logo} src={pic1} alt="Nav logo" /></li>
        <ul className={styles.container}>
          <li><a href=''><span>首页</span></a></li>
          <li className={styles.downloadBtn}><a href=''><span>下载App</span></a></li>
          <li><Search></Search></li>
        </ul>
        <a className={styles.writes} href=''>写文章</a>
        <a className={styles.signUp} href=''>注册</a>
        <a className={styles.logIn} href=''>登录</a>
        <a className={styles.betaTab} href=''><img className={styles.beta} src={pic2} alt="Nav beta" /></a>
        <a className={styles.fontTab}>
          <span className="iconfont icon-zitifont5" onClick={(e) => this.unfoldMenu(e)} style={{ cursor: 'pointer', fontSize: 27 }} />
          <div className={styles.AaStyle} style={{display}}>
            <div className={styles.night}>
              <span className="iconfont icon-moonbyueliang" />
              <span>夜间模式</span>
              <div className={styles.night}>
                <a className={styles.switchGroupBtn}>开</a>
                <a className={`${styles.switchGroupBtn} ${styles.active}`}>关</a>
              </div>
            </div>
            <hr />
            <div className={styles.switchGroup}>
              <a className={`${styles.switchGroupBtn}  ${styles.active}`}>宋体</a>
              <a className={styles.switchGroupBtn}>黑体</a>
            </div>
            <div className={styles.switchGroup}>
              <a className={`${styles.switchGroupBtn}  ${styles.active}`}>简</a>
              <a className={styles.switchGroupBtn}>繁</a>
            </div>
          </div>
        </a>
      </ul>
    )
  }
}