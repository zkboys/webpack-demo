#webpack示例项目
*基于ant.design*
##evn
```
node 4.x

```
##dev
```
sudo npm install webpack -g
sudo npm install webpack-dev-server -g

npm install
npm run start
```

##build
```
npm run build-dev  //build-test  build-pro
```
##待解决问题
- 执行构建有些慢
- 根据地址定位左侧菜单
- 根据左侧菜单修改右上角对应的面包屑
- 组件之间的通信
    - 父级->子级
    - 子级->父级
    - 没有级联关系组件之间


##报错
```
webpack.config.js中使用argv报错：
Option '-d' not supported. Trigger 'webpack -h' for more details.
目前自己写了个循环处理传入的参数
```