## IsaacBlocklyWorkspace是什么?

这是一个使用`Blockly`来编写适用于游戏`以撒的结合:胎衣+`的小软件，目前是做中文版本，类似于Demo，试做。
由于`Blockly`使用js开发，界面使用`electron`编写。

## Blockly

[Blockly](https://developers.google.com/blockly/)是Google的一个开源图形化编程语言，使用`Javascript`编写，
已经有一个`Lua`语言的生成器了，我使用了这些源码，加入了一些自己的函数等，使得这一套系统能够生成游戏
支持的Lua脚本。项目中的Blockly相关js除`zh-hans.js`外都是使用没有修改过的Blockly源码直接编译的，相关的hack全部在`divblockly.js`中。

## 一些东西

* DevUtils里面有一些js脚本，一般可以直接运行，是我写来生成代码用的，运行可能会覆盖一些已经写好的代码。
* 控制台里面执行npm start启动软件 npm test可以启动软件并打开开发人员工具

## 进展

目前个人时间不多，也只是挖坑而已，不定期填坑(时间不多的话可能会很久不更新)。由于经验有限，也不一定能把框架搭完善，只是一些尝试。
目前乱七八糟的进展如下：

* ModLogic负责Lua逻辑部分的编写，之后考虑能不能把道具描述之类的XML也用Blockly表示。
* 略微修改Blockly的一些自带函数翻译，这部分还会继续改动`WWW/zh-hans.js`
* 枚举变量翻译完成`WWW/ModLogic/EnumsTranslate.js`
* 一些直接能调用的普通函数`WWW/ModLogic/IsaacRootFunc.js`
* Isaac名字空间的部分函数`WWW/ModLogic/IsaacIs.js`
* Game类的函数没有翻译`WWW/ModLogic/IsGame.js`
* 各种回调函数已经翻译了`WWW/ModLogic/Translate.js`
* 写了一个快速定义类函数、普通函数、table变量的工具函数在`WWW/ModLogic/tools.js`
* 定义一些可以生成ShadowBlock用于Toolbox中的工具函数`WWW/ModLogic/DefaultBlocks.js`
