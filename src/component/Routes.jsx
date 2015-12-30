import React from 'react';
import { Router} from 'react-router'
import MenusAndRouts from './sildebarMenus'
import App from '../component/App'
import Dashboard from '../component/dashboard/Dashboard'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const browserHistory = createBrowserHistory();
/*
 * 监听地址栏改变
 * 可以用来处理左侧菜单状态 怎么作?
 * */
browserHistory.listen(function (data) {
    var pathname = data.pathname;
    console.log('history listen', data);
});
const routes = {
    path: '/',
    component: App,
    indexRoute: {component: Dashboard},
    childRoutes: MenusAndRouts.getRouts().map(function (route) {
        route.onEnter = function (nextState, replaceState) {
            console.log('route.onEnter', nextState);
            console.log('route.onEnter', replaceState);
        };
        route.onLeave = function () {
            console.log('route.onLeave');
        };
        return route;
    })
};
/*其他路由在下面加入*/
/*

 routes.childRoutes.push(
 {path: 'about', component: About},
 {path: 'inbox', component: Inbox}
 );
 */


export default React.createClass({
    render() {
        return (
            <Router routes={routes} history={browserHistory}/>
        );
    }
});