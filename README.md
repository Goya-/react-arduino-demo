# A simple demo for react control arduino
通过socketio用react控制arduino

## 安装
1. 克隆到本地

`git clone https://github.com/Goya-/react-arduino-demo`

2. 安装npm依赖

`cd react-arduino-demo & npm i`

> 安装johny-five时出现编译错误,需要安装带build-essential的node,python2.7等控制arduino的[serialport](https://github.com/EmergingTechnologyAdvisors/node-serialport)的依赖,具体进serialport的链接查看

3. 运行后端带sockio的httpserver

`sudo node server`

4. 运行react前端

`npm start`
