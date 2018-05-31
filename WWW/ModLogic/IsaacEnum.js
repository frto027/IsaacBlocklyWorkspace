'use strict'

const {is_callback_translate} = require('./Translate')

let isaac_enum = require('./EnumFromGame').enums
isaac_enum.sort((a,b)=>a.name > b.name);

var enum_block_jsonArray = [];
var enum_block_typeArray = [];

for(let i=0;i<isaac_enum.length;i++){
    let name = isaac_enum[i].name;
    let typename = "enum_"+name;
    let translate = is_callback_translate[isaac_enum[i].name];
    let msgprefix = "[枚举]";//第一部分
    //第二部分
    if(typeof (translate) == "undefined")
        msgprefix += name
    else
        msgprefix += translate.name

    let argsarr = [];

    let argstrarr = isaac_enum[i].value;

    for(let j=0;j<argstrarr.length;j++){
        let text = argstrarr[j];
        let trans = null;
        if(typeof(translate) != "undefined" )
            trans = translate.dict[text];
        argsarr.push([
            trans != null ? trans : text , name+"."+text
        ])
    }

    enum_block_typeArray.push(typename);
    enum_block_jsonArray.push({
        "type":typename,
        "message0":msgprefix + " %1 ",//这里拼接第三部分
        "args0": [{
                "type": "field_dropdown", "name": "Item", "options": argsarr
        }], "output":"Number" /*"integer"*/, "colour": 230, "tooltip": "枚举变量", "helpUrl": ""
    })
}

Blockly.defineBlocksWithJsonArray(enum_block_jsonArray)

enum_block_typeArray.forEach((typename)=>{
    Blockly.Lua[typename] = function (block) {
        return [block.getFieldValue('Item'), Blockly.Lua.ORDER_ATOMIC];
    };
})

exports.Reg = function (workspace) {
    let lst = enum_block_typeArray
    let r = "<xml>"
    for (let i = 0; i < lst.length; i++)
        r += '<block type="' + lst[i] + '"></block>'
    r += "</xml>"
    let retblk = Blockly.Xml.textToDom(r).childNodes;
    let ret = [];

    for (let i = 0; i < retblk.length; i++) {
        ret.push(retblk[i]);
    }
    workspace.registerToolboxCategoryCallback(
        'ISAAC_ENUM', function (ws) {
            return ret;
        });
}