import React from 'react';
import styles from './index.css';
import HeaderLayout from './header/index'
const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal} id='app'>
        {/* <div className={styles.header}>
            <div className={styles.search}>
                <div className={styles['search-item']}>首页</div>
            </div>
        </div> */}
        <HeaderLayout></HeaderLayout>
        {props.children}
    </div>
  );
};

export default BasicLayout;
