import React from 'react'
import style from './style.less'

class ArticleList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //     console.log(this.props.arr)
  // }
  render() {
    const { arr } = this.props;
    return (
      <ul className={style.noteList}>
        {
          arr.map((item, index) => (
            <li key={index}>
              <a className={style.wrapImg} href=''><img src={item.imgInfo.src} alt={item.imgInfo.name} /></a>
              <div className={style.noteContainer}>
                <a className={style.title} href=''><h4>{item.title}</h4></a>
                <p className={style.abstract}>{item.abstract}</p>
                <div className={style.meta}>
                  <span className={style.diamondBox}>
                    <span className="iconfont icon-diamond">
                      <span className={style.diamond}>关注</span>
                    </span>
                    <span className={style.diamond}>{item.metaInfo.diamondCount}</span>
                  </span>
                  <a className={style.author} href=''><span>{item.metaInfo.author}</span></a>
                  <a className={style.command} href=''>
                    <span className="iconfont icon-comment" />
                    <span>{item.metaInfo.command}</span>
                  </a>
                  <span className="iconfont icon-heart" />
                  <span>{item.metaInfo.likeCount}</span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ArticleList;