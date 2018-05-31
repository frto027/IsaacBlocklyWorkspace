'use strict'

const {getArrayByLists} = require('./tools')

let rootfunc_block = [{
    "type": "isaac_registermod",
    "message0": "[Mod]注册Mod，名称: %1 版本: %2",
    "args0": [
        {
            "type": "input_value",
            "name": "modName",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "apiVersion",
            "check": "Number"
        }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
},
    {
        "type": "isaac_random",
        "message0": "[数值]取随机整数",
        "output": "Number",
        "colour": 230,
        "tooltip": "取[0,2^32)随机整数",
        "helpUrl": ""
    },
    {
        "type": "isaac_game",
        "message0": "[游戏]取游戏对象",
        "output": "Game",
        "colour": 90,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "isaac_musicmanager",
        "message0": "[音乐管理器]取音乐管理对象",
        "output": "MusicManager",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "isaac_sfxmanager",
        "message0": "[音效管理器]取音效管理对象",
        "output": "SFXManager",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "isaac_randomvector",
        "message0": "[向量]取随机向量",
        "output": "Vector",
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
    }]

let isaac_root_func_inner = {
  "isaac_registermod":'<value name="modName"><shadow type="text"><field name="TEXT">MyMod</field></shadow></value>' +
  '<value name="apiVersion"><shadow type="math_number"><field name="NUM">0</field></shadow></value>',
}

Blockly.defineBlocksWithJsonArray(rootfunc_block);

Blockly.Lua['isaac_registermod'] = function(block) {
  var value_modname = Blockly.Lua.valueToCode(block, 'modName', Blockly.Lua.ORDER_ATOMIC);
  var value_apiversion = Blockly.Lua.valueToCode(block, 'apiVersion', Blockly.Lua.ORDER_ATOMIC);

  var code = 'RegisterMod('+value_modname+','+value_apiversion+')';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['isaac_random'] = function(block) {
  var code = 'Random()';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['isaac_game'] = function(block) {
  var code = 'Game()';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['isaac_musicmanager'] = function(block) {
  var code = 'MusicManager()';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['isaac_sfxmanager'] = function(block) {
  var code = 'SFXManager()';
  return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua['isaac_randomvector'] = function(block) {
  var code = 'RandomVector()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_HIGH];
};

exports.Reg = function (workspace){
	let ret = getArrayByLists(rootfunc_block,isaac_root_func_inner)
	
	workspace.registerToolboxCategoryCallback(
  'ISAAC_ROOT_FUNC', function(ws){
	  return ret;
  });
}