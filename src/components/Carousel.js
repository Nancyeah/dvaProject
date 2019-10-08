import React from 'react';
import pic1 from '../assets/doc_pic.png'
import pic2 from '../assets/pic.jpg'
import pic3 from '../assets/doc_pic.jpg'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listImg: [
        pic1,
        pic2,
        pic3
      ],
      index: 0
    };
  }

  //计时器执行
  indexChange(){
    if(this.state.index === this.state.listImg.length - 1){
      this.setState({
        index: 0
      })
    }else{
      this.setState({
        index:this.state.index + 1
      })
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.indexChange()
    }, 2000)
  }

  setIndex(index) {
    if (index > 2) {
      index = 0
    } else if (index < 0) {
      index = 2
    }
    this.setState({
      index
    })
  }

  render() {
    let { listImg, index } = this.state;
    let imgList = listImg.map(( item, imgIndex ) => {
      return <img src={item} alt='' key={imgIndex} style={{'display': index === imgIndex ? 'block' : 'none', width: 400, height: 400 }} />
    })
    let liList = listImg.map(( ite, indexImg ) => {
      return <li key={indexImg} style={{'listStyleType': index === indexImg ? 'initial' :'circle', float: 'left', width: '5%'}}></li>
    })
    const buttonStyle = {
      position: 'absolute',
      top: '40%',
      bottom: '40%',
      width: '10%',
      background: 'rgba(0,0,0,0.2)',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      fontSize: '20px',
    };
    const leftButtonStyle = {
      ...buttonStyle,
      left: 0,
    };

    const rightButtonStyle = {
      ...buttonStyle,
      right: 0,
    };
    const frameStyle = {
      width: 400,
      height: 400,
      whiteSpace: 'nowrap',
      position: 'relative',
    };
    return (
      <div style={frameStyle}>
        <button
          onClick={() => this.setIndex(index - 1)}
          style={leftButtonStyle}
          className="iconfont icon-arrowLeft-fill"
        />
        {imgList}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {liList}
        </div>
        <button
          onClick={() => this.setIndex(index + 1)}
          style={rightButtonStyle}
          className="iconfont icon-arrowRight-fill"
        />
      </div>
    );
  }
}
