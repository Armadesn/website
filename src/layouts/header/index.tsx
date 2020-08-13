import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { SearchOutlined } from '@ant-design/icons';
const HeaderLayout: React.FC = () => {
    const [ isTop, setIsTop ] = useState(false)
    useEffect(()=>{
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsTop( scrollTop === 0 ? false : true )
        }
    })
    return (
        <div className={isTop ? styles.header + ' ' +  styles.isTop : styles.header}>
            <div className={styles['search-btn']}>
                <SearchOutlined />
            </div>
            <div className={styles.search}>
                <div className={styles['search-item']}><a>首页</a></div>
                <div className={styles['search-item']}><a>留言</a></div>
                <div className={styles['search-item']}><a>日记</a></div>
                <div className={styles['search-item']}><a>资源</a></div>
                <div className={styles['search-item']}><a>归档</a></div>
            </div>
            
        </div>
    );
};

export default HeaderLayout;
