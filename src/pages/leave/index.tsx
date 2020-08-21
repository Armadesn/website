import React from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { WOW } from 'wowjs'
import phone from '../../assets/home/aver.jpg'
import { FormattedMessage } from 'umi-plugin-react/locale'
import WangEditor from '../../components/editorComponents/index'
import Http from '../../lib/http'
interface list {
    name:string,
    time:string,
    content:string
}

interface state {
    list:list[]
}
interface currentValue {
    value :string,
    text: string
}
export default class extends React.PureComponent {

    myRef = React.createRef();

    state : state = {
        list : [
            {
                name:'亚宁',
                time:'2020-01-11 14:44',
                content:'勤洗手，戴口罩，少出门，勤消毒，多运动，少聚集。'
            }
        ]
    }

    componentDidMount(){
        this.wowInit()
    }
    wowInit(){
        new WOW().init();
    }
    getComment(){
        const current = this.myRef.current as currentValue
        const { list } = this.state
        this.setState({
            list:[ ...list, {
                name:'亚宁',
                time:'2020-01-11 14:44',
                content: current.text
            }]
        })
        Http({
            method:'get',
            url:'/string',
          })
            .then(function(response) {
                
          });
    }
    render(){
        console.log(this)
        const { list } = this.state
        return (
            <div className={styles.leave}>
                <div className={styles.banner}>
                    <h1 className='wow fadeInUp'><FormattedMessage id="leave.message"></FormattedMessage></h1>
                </div>
                <div className={styles.content}>
                    <div><h2><FormattedMessage id="leave.Comments"></FormattedMessage></h2></div>
                    <div className={styles.leaverList}>
                        {
                            list.map((item : list,index: number) => { 
                                return (
                                    <div className={styles.leaverListItem + ' wow fadeInUp'} key={index}>
                                        <div className={styles.phone}><img src={phone} alt="phone"/></div>
                                        <div className={styles.leaverContent}>
                                            <h4>{item.name}</h4>
                                            <p>{item.time} - Reply</p>
                                            <div>{item.content}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div><h3><FormattedMessage id="leave.LeaveReply"></FormattedMessage></h3></div>
                    <div className={styles.editor}>
                        <WangEditor ref={this.myRef}></WangEditor>
                    </div>
                    <Button  className={styles.button} onClick={this.getComment.bind(this)}>Post Comment</Button>
                </div>
            </div>
        )
    }
}
