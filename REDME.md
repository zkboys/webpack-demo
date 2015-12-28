#webpack示例项目
*基于ant.design*

```
sudo npm install webpack -g
sudo npm install webpack-dev-server -g
```
##dev
```
webpack-dev-server --progress --colors

http://localhost:8088/webpack-dev-server/index.html
```

##build
```
webpack
```


##报错
```
webpack.config.js中使用argv报错：
Option '-d' not supported. Trigger 'webpack -h' for more details.
目前自己写了个循环处理传入的参数
```