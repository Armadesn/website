import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { SearchOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
// formatMessage, setLocale, getLocale, 
import { FormattedMessage, setLocale } from 'umi-plugin-react/locale'
const HeaderLayout: React.FC = () => {
    const [ isTop, setIsTop ] = useState(false)
    useEffect(()=>{
        window.onscroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setIsTop( scrollTop === 0 ? false : true )
        }
    })

    const onClick = ( val:any ) => {
        console.log(val)
        const locales:string[] = ['zh-CN','en-US']
        setLocale(locales[val.key])
    }

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="0">中文简体</Menu.Item>
            <Menu.Item key="1">English</Menu.Item>
        </Menu>
    )
    return (
        <div className={isTop ? styles.header + ' ' +  styles.isTop : styles.header}>
            <div className={styles['search-btn']}>
                <SearchOutlined />
            </div>
            <div className={styles.search}>
                <div className={styles['search-item']}><a href='/'><FormattedMessage id="layout.dashboard"></FormattedMessage></a></div>
                <div className={styles['search-item']}><a href='/leave'><FormattedMessage id="layout.leave"></FormattedMessage></a></div>
                <div className={styles['search-item']}><a><FormattedMessage id="layout.diary"></FormattedMessage></a></div>
                <div className={styles['search-item']}><a><FormattedMessage id="layout.resource"></FormattedMessage></a></div>
                <div className={styles['search-item']}><a><FormattedMessage id="layout.pigeonhole"></FormattedMessage></a></div>

                <div className={styles['search-item'] + ' English'}>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <i className="anticon" title="Language"><svg viewBox="0 0 24 24" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg></i>
                    </Dropdown>
                </div>
            </div>
            
        </div>
    );
};

export default HeaderLayout;
