import React from 'react';
import styles from './index.less';
import E from 'wangeditor'
import { Button } from 'antd';
import phone from '../../assets/home/aver.jpg'
export default class extends React.PureComponent {
    componentDidMount(){
        console.log(E)
        var editor = new E('#editor')
        editor.customConfig.menus = [
            'emoticon'
        ]
        editor.create()
    }
    render(){
        return (
            <div className={styles.leave}>
                <div className={styles.banner}>
                    <h1>留言板</h1>
                </div>
                <div className={styles.content}>
                    <div><h2>Comments</h2></div>
                    <div className={styles.leaverList}>
                        <div className={styles.leaverListItem}>
                            <div className={styles.phone}><img src={phone} alt="phone"/></div>
                            <div className={styles.leaverContent}>
                                <h4>亚宁</h4>
                                <p>2020-01-11 14:44 - Reply</p>
                                <div>勤洗手，戴口罩，少出门，勤消毒，多运动，少聚集。</div>
                            </div>
                        </div>
                    </div>
                    <div><h3>Leave a Reply</h3></div>
                    <div className={styles.editor}>
                        <div id='editor' className={styles.editorContent}></div>
                    </div>
                    <Button  className={styles.button}>Post Comment</Button>
                </div>
            </div>
        )
    }
}
