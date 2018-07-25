# cordova+科大讯飞语音SDK使用教程

> 使用本教程，默认你的电脑设备已经支持Java环境、支持Android开发（Android SDK Manage）、支持cordova开发的环境下，即能创建一个可运行并打包的cordova项目或者原生安卓项目的前提下，且项目目录路径没有中文字符情况下
## SDK依赖+插件配置
### 获取cordova-plugin-IFlyspeech-master.zip

`这个插件是由cordova结合科大讯飞语音SDK编写的插件，由官方提供，非本人原创`
> 原创插件地址：[原创地址](https://github.com/Edc-zhang/cordova-plugin-IFlyspeech)
>> 下载界面链接： [cordova-plugin-IFlyspeech-master.zip](https://github.com/victor-fa/cordova-plugin-IFlyspeech-master)
>>> 这个链接下文件包含了package.json文件，是本人做过了处理的，原始官方文件不包含，所以下载下来后可以选择性删除，如果不删除下面的<a href="#jump" target="_self">步骤创建package.json文件步骤</a>请忽略
解压后的目录如下：
```
|--src
|--www
|--plugin.xml
|--package.json
|--README.md
```
### 注册创建自己的讯飞应用
[讯飞官网](https://console.xfyun.cn)
进入官网后进行站好注册，注册完成进入控制台
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/01.jpg)
创建应用，选择Android类型的项目，添加服务
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/02.jpg)
下载SDK
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/03.jpg)
下载后的SDK压缩包是长这个样子的
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/04.jpg)
解压后的目录如下
```
|-- assets
|--libs
|--res
|-sample
|--readme.txt
|--release.txt
```
### 直接下载作者亲测可用的讯飞安卓应用的libs
也可以直接通过作者事先下载好的讯飞SDK（亲测可用）
[下载地址](https://github.com/victor-fa/XunFeiSDKForAndroid)
下载后的目录如下（下载后的内容即官网下载的SDK解压后的libs文件内容）
```
|-- arm64-v8a
|-- armeabi-v7a
|-- armeabi
|-- Msc.jar
|-- Sunflower.jar
```
进入libs目录，将libs目录内的所有文件覆盖到cordova-plugin-IFlyspeech-master\src\android\libs下
### APPID的配置
进入cordova-plugin-IFlyspeech-master，打开cordova-plugin-IFlyspeech-master/plugin.xml文件
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/05.jpg)
去科大讯飞的后台自己刚刚创建的应用复制APPID，如下
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/06.jpg)
替换plugin.xml下的相应APPID为自己应用的APPID
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/07.jpg)
进入cordova-plugin-IFlyspeech-master，打开cordova-plugin-IFlyspeech-master/src/android/res/values/string.xml文件
替换string.xml下的相应APPID为自己应用的APPID
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/08.jpg)
## 创建工程
#### 创建cordova项目
```
cordova create kdxf com.example.kdxf Hellokdxf
cd kdxf
```
### <div id="jump">为cordova-plugin-IFlyspeech-master创建package.json配置文件</div>
安装plugma
```
npm install -g plugman
```
创建package.json文件
`打开命令行CD到cordova-plugin-IFlyspeech-maste文件夹下执行如下命令执行如下命令`
```
Plugman createpackagejson F:\CordovaWorkspace\CordovaXunFeiCollect\cordova-plugin-IFlyspeech-master // 注意：对应绝对路径
```
执行成功后，当前文件夹会多出一个package.json
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/09.jpg)
```
注意：如果是从作者提供的插件链接下载，而非官网下载的，则不需要通过这步操作创建配置文件了
```
### 为创建的工程添加插件
进入到工程文件夹下，输入命令
```
cordova plugin add F:\CordovaWorkspace\CordovaXunFeiCollect\cordova-plugin-IFlyspeech-master // 注意：对应绝对路径
```
### 添加安卓平台
```
cordova platfrom add android@6.4.0 // 请务必安装6.4.0版本
```
## 代码测试
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/10.jpg)

## 运行效果
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/11.jpg)
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/12.jpg)
![Github](https://raw.githubusercontent.com/victor-fa/Stored-Picture/master/xunfei/13.jpg)

`如有疑问，针对本教程，欢迎提问交流`
