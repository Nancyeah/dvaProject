import React from 'react';
import Carousel from '../Carousel'
import BackTop from '../BackTop'
import Article from '../Article'
import pic1 from '../../assets/doc_pic.png'
import pic2 from '../../assets/pic.jpg'
import pic3 from '../../assets/doc_pic.jpg'
import style from './style.less'

class Content extends React.Component {
  render() {
    return (
      <div className={style.indexContainer}>
        <div className={style.row}>
          <div className={style.leftPart}>
            <div className={style.splitLine}></div>
            <div className={style.listContainer}>
              <Article />
            </div>
          </div>
          <div className={style.rightPart}>
            <Carousel />
            <br />
            <div className={style.recommand}>
              <div className={style.title}>
                <span>推荐作者</span>
                <a className={style.pageChange}>
                  <span className="iconfont icon-huanyipi" />
                  换一批
                </a>
              </div>
              <ul>
                <li>
                  <a href='' className={style.avatar}>
                    <img src={pic1} alt='' />
                  </a>
                  <a href='' className={style.follow}><span className="iconfont icon-jia">关注</span></a>
                  <a href='' className={style.name}>简书大学堂</a>
                  <p>写了1506.3k字 · 34k喜欢</p>
                </li>
                <li>
                  <a href='' className={style.avatar}><img src={pic1} alt='' /></a>
                  <a href='' className={style.follow}><span className="iconfont icon-jia">关注</span></a>
                  <a href='' className={style.name}>徐林Grace</a>
                  <p>写了675.2k字 · 6.2k喜欢</p>
                </li>
                <li>
                  <a href='' className={style.avatar}>
                    <img src={pic2} alt='' />
                  </a>
                  <a href='' className={style.follow}><span className="iconfont icon-jia">关注</span></a>
                  <a href='' className={style.name}>无限猴子</a>
                  <p>写了383.1k字 · 2k喜欢</p>
                </li>
                <li>
                  <a href='' className={style.avatar}>
                    <img src={pic3} alt='' />
                  </a>
                  <a href='' className={style.follow}><span className="iconfont icon-jia">关注</span></a>
                  <a href='' className={style.name}>梅拾樱</a>
                  <p>写了273.6k字 · 25.3k喜欢</p>
                </li>
                <li>
                  <a href='' className={style.avatar}><img src={pic1} alt='' /></a>
                  <a href='' className={style.follow}><span className="iconfont icon-jia">关注</span></a>
                  <a href='' className={style.name}>写写心情的溜溜妈</a>
                  <p>写了672k字 · 28.9k喜欢</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BackTop />
      </div>
    )
  }
}

export default Content;