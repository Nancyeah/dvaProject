import React from 'react'
import ArticleList from './ArticleList/ArticleList'
import pic from '../assets/doc_pic.png'

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{
        title: '别以为看字就是读书，深阅读，才能撬动你的灵魂！',
        abstract: '文/俊英子 一月，我从一个二手平台买了一些书，当翻到《深阅读》的一刹那我就停下了，第一次见到透明的，类似磨砂的书皮！从外观上来看是我见过最有艺术...',
        metaInfo: {
          diamondCount: '287.2',
          author: '俊英子',
          command: '86',
          likeCount: '561',
        },
        imgInfo: {
          src: pic,
          alt: '深阅读',
        },
      },
      {
        title: 'win10 深度美化，win也可以很酷',
        abstract: 'win系统的界面在不断更新中，UI也逐渐美化的很漂亮了，但对于一些人，总喜欢折腾，没错我就是。 我是从Ubuntu过来的，因为特殊要求，只能用w...',
        metaInfo: {
          diamondCount: '36.5',
          author: '弓长晓',
          command: '96',
          likeCount: '596',
        },
        imgInfo: {
          src: pic,
          alt: 'win10',
        },
      },
      {
        title: '咪蒙已死，但人性的弱点还在继续泛滥',
        abstract: '本文原创首发于我个人公众号 可可西里说 在咪蒙团队旗下公众号才华有限青年“精心炮制”的外表看似有些真实，实则为有意煽动大众情绪的虚假故事“一...',
        metaInfo: {
          diamondCount: '47.4',
          author: '可可西里之梦',
          command: '124',
          likeCount: '199',
        },
        imgInfo: {
          src: pic,
          alt: '咪蒙',
        },
      },
      {
        title: '四岁半小朋友告诉你，坚持的意义',
        abstract: '小外甥四岁半，正是活泼好动的年纪，每天都是打打闹闹，哭哭笑笑，大人实在是快崩溃。 这不寒假里，家长强行让这个小屁孩学写字，不算什么正真意义上的练...',
        metaInfo: {
          diamondCount: '13.1',
          author: '三页胡',
          command: '5',
          likeCount: '25',
        },
        imgInfo: {
          src: pic,
          alt: '小朋友',
        },
      },
      {
        title: '2019年，25岁从未有过的茫然与困惑',
        abstract: '很早之前，曾写过一篇文章，我的人生从20岁那年才开始。 2014年，20岁，我从一所专科师范院校毕业，那一年的目标是考进体制，当一名小学教师。我...',
        metaInfo: {
          diamondCount: '3.8',
          author: '风会记起一朵花的香',
          command: '36',
          likeCount: '21',
        },
        imgInfo: {
          src: pic,
          alt: '25岁',
        },
      },
      {
        title: '原来写作也能挣点零花钱',
        abstract: '我会经常在别人的文章中学习到很多有用的知识，比如遇到一个电脑操作问题，比如一个金句的出处，平台的便捷实现了知识的共享。 一直以来也喜欢把看到的、...',
        metaInfo: {
          diamondCount: '21.5',
          author: 'Sammi闻华_财迷妈妈',
          command: '5',
          likeCount: '129',
        },
        imgInfo: {
          src: pic,
          alt: '写作',
        },
      }],
    }
  }

  render() {
    const { arr } = this.state;
    return (
      <ArticleList arr={arr} />
    )
  }
}

export default Article;