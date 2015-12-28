import './style.css';
import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import FAIcon from '../faicon/FAIcon';

const Sidebar = React.createClass({
    getInitialState() {
        return {
            current: '1',
            openKeys: ['sub1']
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        });
    },
    onToggle(info){
        this.setState({
            openKeys: info.openKeys
        });
    },
    render() {
        return (
            <div className="admin-sidebar">
                <Menu onClick={this.handleClick}
                    openKeys={this.state.openKeys}
                    onOpen={this.onToggle}
                    onClose={this.onToggle}
                    selectedKeys={[this.state.current]}
                    style={{marginLeft:-8}}
                    mode="inline">
                    <SubMenu key="sub1" title={<span><FAIcon type="fa-th-list" />导航一</span>}>
                        <Menu.Item key="1"><FAIcon type="fa-arrow-right" />选项1</Menu.Item>
                        <Menu.Item key="2"><FAIcon type="fa-arrow-right" />选项2</Menu.Item>
                        <Menu.Item key="3"><FAIcon type="fa-arrow-right" />选项3</Menu.Item>
                        <Menu.Item key="4"><FAIcon type="fa-arrow-right" />选项4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><FAIcon type="fa-th-list" />导航二</span>}>
                        <Menu.Item key="5"><FAIcon type="fa-arrow-right" />选项5</Menu.Item>
                        <Menu.Item key="6"><FAIcon type="fa-arrow-right" />选项6</Menu.Item>
                        <Menu.Item key="7"><FAIcon type="fa-arrow-right" />选项7</Menu.Item>
                        <Menu.Item key="8"><FAIcon type="fa-arrow-right" />选项8</Menu.Item>
                        <SubMenu key="sub21" title={<span><FAIcon type="fa-th-list" />导航二</span>}>
                            <Menu.Item key="15"><FAIcon type="fa-arrow-right" />选项5</Menu.Item>
                            <Menu.Item key="16"><FAIcon type="fa-arrow-right" />选项6</Menu.Item>
                            <Menu.Item key="17"><FAIcon type="fa-arrow-right" />选项7</Menu.Item>
                            <Menu.Item key="18"><FAIcon type="fa-arrow-right" />选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><FAIcon type="fa-th-list" />导航三</span>}>
                        <Menu.Item key="9"><FAIcon type="fa-arrow-right" />选项9</Menu.Item>
                        <Menu.Item key="10"><FAIcon type="fa-arrow-right" />选项10</Menu.Item>
                        <Menu.Item key="11"><FAIcon type="fa-arrow-right" />选项11</Menu.Item>
                        <Menu.Item key="12"><FAIcon type="fa-arrow-right" />选项12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
});

export default Sidebar;
