import React from 'react';
import { Router} from 'react-router'
import MenusAndRouts from './sildebarMenus'
import App from '../component/App'
import Dashboard from '../component/dashboard/Dashboard'
const routes = {
    path: '/',
    component: App,
    indexRoute: {component: Dashboard},
    childRoutes: MenusAndRouts.getRouts().routs.map(function (route) {
        route.onEnter = function (nextState, replaceState) {
            console.log(nextState);
            console.log(replaceState);
        }
        route.onLeave = function () {
            console.log('onLeave');
        }
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
            <Router routes={routes}/>
        );
    }
});