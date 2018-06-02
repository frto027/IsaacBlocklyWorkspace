'use strict'

const tools = require('./tools')
const { defInner } = require('./DefaultBlocks')
let funcs = []

funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_registermod",
    funcname:"RegisterMod",
    translate:"[Mod]注册Mod",
    returntype:"ModObject",
    args: [
        {type:"String",name:"Mod名称",inxml:defInner.text('MyMod')},
        {type:"Number",name:"API版本",inxml:defInner.number() }
    ],
    helptip: "注册一个MOD，并取得MOD对象",
    color: 230,
}))

funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_random",
    funcname:"Random",
    translate:"[数值]取随机整数",
    returntype:"Number",
    args: [
    ],
    helptip: "取随机[0,2^32)随机整数",
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_game",
    funcname:"Game",
    translate:"[游戏]取游戏对象",
    returntype:"Game",
    args: [
    ],
    helptip: "取得游戏对象，游戏对象用于对游戏进行操作",
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_musigmanager",
    funcname:"MusicManager",
    translate:"[音乐管理器]取音乐管理对象",
    returntype:"MusicManager",
    args: [
    ],
    helptip: "",
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_sfxmanager",
    funcname:"SFXManager",
    translate:"[音效管理器]取音效管理对象",
    returntype:"SFXManager",
    args: [
    ],
    helptip: "",
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"isaac_randomvector",
    funcname:"RandomVector",
    translate:"[向量]取随机向量",
    returntype:"Vector",
    args: [
    ],
    helptip: "",
    color: 230,
}))
exports.Reg = function(workspace){
    let ret = tools.FunctionBlocksToArray(funcs)
	
	workspace.registerToolboxCategoryCallback(
  `ISAAC_ROOT_FUNC`, function(ws){
	  return ret;
  });
}