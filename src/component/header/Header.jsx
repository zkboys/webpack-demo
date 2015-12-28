import './style.css';
import React from 'react';
import {Icon, Badge, Tooltip} from 'antd';
import FAIcon from '../faicon/FAIcon';

const Header = React.createClass({
    render() {
        return (
            <header className="admin-header">
                <div className="admin-logo"><a href="/">美餐云管理台框架</a></div>
                <Tooltip placement="right" title="切换菜单状态">
                    <a className="admin-sidebar-toggle"><FAIcon type="fa-bars" /></a>
                </Tooltip>
                <ul className="admin-header-menu">
                    <li className="admin-header-menu-item">
                        <Tooltip placement="bottom" title="我的邮件">
                            <a href="javascript:;">
                                <Badge dot>
                                    <FAIcon type="fa-envelope-o"/>
                                </Badge>
                            </a>
                        </Tooltip>
                    </li>
                    <li className="admin-header-menu-item">
                        <Tooltip placement="bottom" title="我的提醒">
                            <a href="javascript:;">
                                <Badge dot>
                                    <FAIcon type="fa-bell-o"/>
                                </Badge>
                            </a>
                        </Tooltip>
                    </li>
                    <li className="admin-header-menu-item">
                        <a href="javascript:;"><img src="https://avatars2.githubusercontent.com/u/1450667?v=3&s=40" className="admin-user-avatar" alt="陈颖"/>陈颖</a>
                    </li>
                    <li className="admin-header-menu-item">
                        <Tooltip placement="bottomRight" title="退出系统">
                            <a href="javascript:;">
                                <FAIcon type="fa-sign-out"/>
                            </a>
                        </Tooltip>
                    </li>
                </ul>
            </header>
        );
    }
});

export default Header;
