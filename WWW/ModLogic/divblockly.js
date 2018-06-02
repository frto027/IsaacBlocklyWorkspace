'use strict'

const fs = require('fs')
let blocklyDiv = document.getElementById('blocklyDiv')

//Reg here
const regList = ['./IsaacEnum','./IsaacRootFunc','./IsaacIs','./IsGame','./IsVector','./IsKColor']

var codeSpaceDiv = {}

var codeSpace = Blockly.inject('blocklyDiv',
    {
        media: '../media/',
        toolbox: Blockly.Xml.textToDom(fs.readFileSync("./WWW/ModLogic/toolbox.xml").toString())
    }
);

regList.forEach(regname => {
    require(regname).Reg(codeSpace)
});

//内容包裹的全局Block
Blockly.defineBlocksWithJsonArray([{
    "type": "retwrapper",
    "message0": "%1",
    "args0": [
      {
        "type": "input_value",
        "name": "INP"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "包裹返回的内容",
    "helpUrl": ""
}]);
//TODO 函数包裹
Blockly.Lua['retwrapper'] = function(block) {
    var value_inp = Blockly.Lua.valueToCode(block, 'INP', Blockly.Lua.ORDER_NONE);
    // TODO: Assemble Lua into code variable.
    var code = value_inp + '\n';
    return code;
};

//修正大小
codeSpaceDiv.tabresize = function () {
    Blockly.svgResize(codeSpace)
}
window.addEventListener('resize',codeSpaceDiv.tabresize,false);
codeSpaceDiv.tabresize()

const { ipcRenderer } = require('electron')
//注入Blockly，点击帮助时，不打开新的网页
Blockly.BlockSvg.prototype.showHelp_ = function(){
    let url = this.helpUrl
    //console.log(`Just a help url like ${url}`)
    ipcRenderer.send('logic-blockly-show-url-help',url)
}
/* prompt */
const {logic_prompt} = require('./prompt')
Blockly.prompt = function(message,defaultVal,callback){
    logic_prompt(message,defaultVal,callback)
}

exports.codeSpace = codeSpace
exports.codeSpaceDiv = codeSpaceDiv