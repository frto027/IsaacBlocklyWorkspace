'use strict'
const { type_translate } = require('./Translate')
/**
 * 
 * @param {*} desc 描述类参数
 * @param {*} getcode 回调，(value_obj,arg_count,getarg(i):arg)
 */
function defineClassBlock(desc,getcode){
/*
    var desc = {
        blockname:"",
        funcname:"",
        translate:"",
        returntype:"",
        args: [
            {type:"",name:"",inxml:"",hide:'nil'},//hide表示隐藏这个变量，填入默认值
            // ...
        ],
        objValType: null, //是否需要引用某个对象，即是否需要比图 xxx.funcname()的xxx
        nsobj: "Isaac",//如果否objValType为null，表示不需要引用对象，如果有名词空间或者固定table，写到这里
        objName: null,
        objInner: "",//obj这里要写什么XML
        helptip: "",
        color: 230,
        refmode: true,//指定使用点还是冒号来引用self
        inputsInline:true
    }
*/
Blockly.Blocks[desc.blockname] = {
    init: function() {
        this.appendDummyInput()
            .appendField(desc.translate || desc.funcname || desc.blockname);
        if(desc.objValType){
            this.appendValueInput("Obj")
            .setCheck(desc.objValType).setAlign(Blockly.ALIGN_RIGHT).appendField(desc.objName);
        }
        for(let i=0;desc.args && i<desc.args.length;i++){
            if(!desc.args[i].hide)
                this.appendValueInput(`ARG_${i}`).setCheck(desc.args[i].type).setAlign(Blockly.ALIGN_RIGHT).appendField(desc.args[i].name)
        }
        if(desc.returntype){
            this.setOutput(true,desc.returntype)
        }else{
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
        }
        if(desc.inputsInline){
            this.setInputsInline(true)
        }
        this.setColour(desc.color || 230);
        this.setTooltip(desc.helptip);
        this.setHelpUrl("");
    }
};

Blockly.Lua[desc.blockname] = function(block) {
    var value_obj = undefined
    if(desc.objValType){
        value_obj = Blockly.Lua.valueToCode(block, 'Obj', Blockly.Lua.ORDER_NONE);
    }else if(desc.nsobj){
        value_obj = nsobj
    }
    var arg_count = desc.args ?  desc.args.length : 0
    var getarg = (i) => {
        let targ = (desc.args && desc.args[i].hide) || Blockly.Lua.valueToCode(block, `ARG_${i}`, Blockly.Lua.ORDER_NONE) 
        targ = targ || ''
        if(targ == '')
            targ = 'nil'
        return targ
    }
    
    // TODO: Assemble Lua into code variable.
    var code = getcode(value_obj,arg_count,getarg)
    
    // TODO: Change ORDER_NONE to the correct strength.
    if(desc.returntype)
        return [code, Blockly.Lua.ORDER_HIGH]
    else
        return code + '\n'
};

let valuexml = ''
if(desc.objInner){
    valuexml += `<value name='Obj'>${desc.objInner}</value>`
}
for(let i=0;desc.args && i<desc.args.length;i++){
    if(desc.args[i].inxml){
        valuexml += `<value name='ARG_${i}'>${desc.args[i].inxml}</value>`
    }
}
return `<block type="${desc.blockname}">${valuexml}</block>`
}

/**
 *  从JSON数组生成Block数组
 * @param defarr 定义模块的JSON数组
 * @param innerxml 一个字典，每个block下面的XML应该对应的文件
 */
exports.getArrayByLists = function (defarr, innerxml) {
    let lst = []
    defarr.forEach((e)=>lst.push(e["type"]))
    let r = "<xml>"
    for(let i=0;i<lst.length;i++) {
        let inner = null
        if(typeof(innerxml) != "undefined"){
            inner = innerxml[lst[i]]
        }
        r += '<block type="' + lst[i] + '">'
        if(typeof(inner) != "undefined")
            r += inner
        r += '</block>'
    }
    r += "</xml>"
    let retblk = Blockly.Xml.textToDom(r).childNodes;
    let ret = [];
    for(let i=0;i<retblk.length;i++){
        ret.push(retblk[i]);
    }
    return ret
}

exports.getArrayByListWithIndexInnerXML = function (defarr, innerxml) {
    let lst = []
    defarr.forEach((e)=>lst.push(e["type"]))
    let r = "<xml>"
    for(let i=0;i<lst.length;i++) {
        let inner = null
        if(typeof(innerxml) != "undefined"){
            inner = innerxml[i]
        }
        r += '<block type="' + lst[i] + '">'
        if(typeof(inner) != "undefined")
            r += inner
        r += '</block>'
    }
    r += "</xml>"
    let retblk = Blockly.Xml.textToDom(r).childNodes;
    let ret = [];
    for(let i=0;i<retblk.length;i++){
        ret.push(retblk[i]);
    }
    return ret
}

exports.CodeTools = {
    getCode:function(){
        return Blockly.Lua.workspaceToCode(codeSpace);
    },
    getXml:function (nopretty) {
        let dom = Blockly.Xml.workspaceToDom(codeSpace)
        if(nopretty){
            return Blockly.Xml.domToText(dom)
        }
        return Blockly.Xml.domToPrettyText(dom)
    },
    setXml:function (xml,overrite) {
        let dom = Blockly.Xml.textToDom(xml)
        if(overrite)
            Blockly.Xml.domToWorkspace(dom,codeSpace)
        else
            Blockly.Xml.appendDomToWorkspace(dom,codeSpace)
    }
}

exports.defineFunctionBlock = function(desc){
    return defineClassBlock(desc,(value_obj,arg_count,getarg)=>{
        var code = '';
        if(value_obj){
            code += value_obj
            code += desc.refmode ? ':' : '.'
        }

        code += desc.funcname

        code += '('
        for(let i=0;i<arg_count;i++){
            if(i != 0)
                code += ','
            code += desc.args[i].hide || getarg(i)
        }
        code += ')'
        return code
    })
}
exports.defineVarBlock = function(desc){
    /*
desc = {
    blockname:"",
    varname:"",
    translate:"",
    vartype:"",
    varconst:true,
    objValType:null,//needobj
    nsobj:"",
    tip:"",
    objInner:"<xml></xml>",
    color:350
}
    */
    let x = defineClassBlock({
        blockname:`VAR_GET_${desc.blockname}`,
        //funcname:`IS_VAR_${desc.varname}_get`,
        translate:"变量 " + desc.translate,
        returntype:desc.vartype,
        objValType:desc.objValType,
        nsobj:desc.nsobj,
        objInner:desc.objInner,
        objName:`类引用[${type_translate[desc.objValType] || desc.objValType}]`,
        helptip:`获取变量${desc.varname}:${desc.tip}`,
        color:120//desc.color,
    },(value_obj,arg_count,getarg)=>{
        return (value_obj ? value_obj + '.' : '') + desc.varname
    })
    if(!desc.varconst){
        x += defineClassBlock({
            blockname:`VAR_SET_${desc.blockname}`,
            //funcname:`IS_VAR_${desc.varname}_set`,
            translate:"变量 " + desc.translate,
            objValType:desc.objValType,
            nsobj:desc.nsobj,
            objInner:desc.objInner,
            objName:`类引用[${type_translate[desc.objValType] || desc.objValType}]`,
            helptip:`设置变量${desc.varname}:${desc.tip}`,
            color:180,//desc.color,
            args:[
                {type:desc.vartype,name:"设置新的值"}
            ],
            inputsInline:true
        },(value_obj,arg_count,getarg)=>{
            if(arg_count == 0)
                return ""
            return `${(value_obj ? value_obj + '.' : '') + desc.varname} = ${getarg(0)}`
        })
    }
    return x
}

exports.FunctionBlocksToArray = (blocks)=>{
    let r = '<xml>'
    blocks.forEach(element => {
        r += element
    });
    r += '</xml>'
    let retblk = Blockly.Xml.textToDom(r).childNodes;
    let ret = [];
    for(let i=0;i<retblk.length;i++){
        ret.push(retblk[i]);
    }
    return ret
}