#webpack示例项目
*基于ant.design*

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
##问题
执行构建有些慢

##报错
```
webpack.config.js中使用argv报错：
Option '-d' not supported. Trigger 'webpack -h' for more details.
目前自己写了个循环处理传入的参数
```