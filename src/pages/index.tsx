import React from 'react';
import styles from './index.less';
import { WOW } from 'wowjs'
import photo from '../assets/home/aver.jpg'
import { DownOutlined, CopyOutlined,   AliwangwangOutlined,  DotChartOutlined,  OrderedListOutlined,   FormOutlined, IeOutlined,   QqOutlined,  BgColorsOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { articleInfo } from '../lib/article'

export default class extends React.PureComponent {
    componentDidMount(){
        new WOW().init();
    }
    goNext(){
        // const app = document.getElementById('app') as HTMLElement
        window.scrollTo({
            top: document.body.clientHeight,
            behavior: "smooth"
        });
    }
    render(){
        return (
            <div className={styles.normal}>
                <div className={styles.banner}>
                    <div  className={styles.header}>
                        <img className={styles.photo + ' wow pulse'} src={photo} alt=""/>
                        <p className="wow zoomIn">yaning wang</p>
                        <p className="wow zoomIn">剑气纵横三万里,一剑光寒十九洲</p>
                    </div>
                    <a className={styles.next + ' wow fadeInUp'} onClick={this.goNext}>
                        <DownOutlined />
                    </a>
                </div>
                <div className={styles.netTick}>
                    <div className={styles.article + ' wow fadeInDown'}>
                        <div className={styles.iner}>
                            <h1>热门文章</h1>
                            <p>很想给你写封信,告诉你这里的天气.昨夜的那场电影,还有我的心情.</p>
                        </div>
                    </div>
                    <div className={styles.list}>
                        {
                            articleInfo.map( item => {
                                return (
                                    <div className={styles.listItem + ' wow fadeInUp'} data-wow-delay={item.delay} key={item.id}>
                                        <div className={styles.listhead}>
                                            <img src={item.imgUrl} alt=""/>
                                        </div>
                                        <div className={styles.listcontent}>
                                            <h4>{item.title}</h4>
                                            <div className={styles.date}>{item.time}</div>
                                            <p>{item.content}</p>
                                            <span>阅读更多</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.link}>
                    <div className={styles.warp}>
                        <div className={styles.warpItem + ' wow fadeInLeft ' + styles.warpLeftItem}><a>Vue</a></div>
                        <div className={styles.warpItem + ' wow fadeInRight ' + styles.warpRightItem}><a>React</a></div>
                    </div>
                </div>
                <div className={styles.introduce}>
                    <h1 className='wow fadeInLeft'>快乐的肥宅</h1>
                    <p className='wow fadeInRight'>爱好游戏，闲来无事喜欢在一些不健康的场所虚度光阴，撸起代码就会废寝忘食。</p>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerTop + ' wow fadeInUp'}>
                        <div className={styles.footerItem}>
                            <h2>yaning wang</h2>
                            <p>你要悄悄拔尖, 然后惊艳所有人 !</p>
                            <Button>About Me</Button>
                        </div>
                        <div className={styles.footerItem}>
                            <h2>相关链接</h2>
                            <ul>
                                <li><CopyOutlined />博文</li>
                                <li><AliwangwangOutlined />留言</li>
                                <li><DotChartOutlined />资源</li>
                                <li><OrderedListOutlined />日记</li>
                                <li><FormOutlined />归档</li>
                            </ul>
                        </div>
                        <div className={styles.footerItem}>
                            <h2>联系我</h2>
                            <ul className={styles.ulItem}>
                                <li><BgColorsOutlined />github: https://github.com/Armadesn</li>
                                <li><QqOutlined />QQ: 932413373</li>
                                <li><IeOutlined />邮箱: 932413373@qq.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>Copyright © 2020-2020 wangyaning All Rights Reserved V.1.0.0 备案号:<a href='http://www.beian.miit.gov.cn/'>正在申请...</a></div>
                </div>
            </div>
        )
    }
}
