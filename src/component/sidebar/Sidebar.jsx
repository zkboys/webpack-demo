import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu} from 'antd';
import MenusAndRouts from '../sildebarMenus'

const Sidebar = React.createClass({
    getInitialState() {
        return {
            current: MenusAndRouts.current,
            openKeys: MenusAndRouts.openKeys
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1) // 点击是会关闭其他菜单,如果不需要改变其他菜单状态,注释掉这里即可.
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
                    {MenusAndRouts.menus}
                </Menu>
            </div>
        );
    }
});
export default Sidebar;
