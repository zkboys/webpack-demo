import './style.css';
import React from 'react';
import {Icon, Badge, Tooltip} from 'antd';
import FAIcon from '../faicon/FAIcon';
import avatar from './86.jpg';
const Header = React.createClass({
    getInitialState() {
        var logoMaxWidth = 240
            , logoMinWidth = 60
            , logoMax = "后台管理系统"
            , logoMin = "后台"
            ;
        return {
            logoMaxWidth: logoMaxWidth,
            logoMiniWidth: logoMinWidth,
            logoWidth: logoMaxWidth,
            logoMax: logoMax,
            logoMin: logoMin,
            logo: logoMax
        };
    },
    handelClick(){
        var logoWidth = this.state.logoMaxWidth;
        var logo = this.state.logoMax;
        if (this.state.logoWidth == this.state.logoMaxWidth) {
            logoWidth = this.state.logoMiniWidth;
            logo = this.state.logoMin;
        }
        this.setState({
            logoWidth: logoWidth,
            logo: logo
        });
    },
    render() {
        return (
            <header className="admin-header">
                <div className="admin-logo" style={{width:this.state.logoWidth}}><a href="/">{this.state.logo}</a></div>
                <Tooltip placement="right" title="切换菜单状态">
                    <a className="admin-sidebar-toggle" onClick={this.handelClick}><FAIcon type="fa-bars"/></a>
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
                        <Tooltip placement="bottom" title="个人设置">
                            <a href="javascript:;">
                                <img src={avatar} className="admin-user-avatar" alt="王树彬"/>
                                王树彬
                            </a>
                        </Tooltip>
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
