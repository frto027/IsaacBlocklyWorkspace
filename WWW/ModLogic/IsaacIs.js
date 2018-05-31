'use strict'

//isaac名词空间有时候会简称IS
const { is_callback_desc,is_callback_args } = require('./Translate')
const { getArrayByLists } = require('./tools')

//AddCallback参数的一些配置
let isaac_is_ns_callback_varconf = {
    count:10,//最多有几个参数？
    prefix:"bkly_v_",
    lastBlock:undefined,
    validtypes:['isaac_is_addcallback']//这些类型的块有getArgInfo(int)方法,返回值包括{name:"",luaname:""}
}

var isaacns_block = [];

var isaacns_block_inner = {}
/*
   isaacns_block_inner = {//哪些块里面有哪些内容
    "isaac_is_addcallback":""
}
*/
/***************ConsoleOutput******************************/
isaacns_block.push({
    "type": "isaac_is_consoleoutput",
    "message0": "控制台输出 [文本]%1",
    "args0": [
        {
            "type": "input_value",
            "name": "text",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
})
Blockly.Lua['isaac_is_consoleoutput'] = function(block) {
    var value_text = Blockly.Lua.valueToCode(block, 'text', Blockly.Lua.ORDER_NONE);
    // TODO: Assemble Lua into code variable.
    var code = 'Isaac.ConsoleOutput('+  value_text +')\n';
    return code;
};
isaacns_block_inner["isaac_is_consoleoutput"]='<value name="text">'+
    '<shadow type="text"><field name="TEXT">hello, world</field></shadow>\n' +
    '</value>'
/******************AddCallBack**************************/
isaacns_block.push({
    "type": "isaac_is_addcallback",
    "message0": "设置回调 %1 Mod对象[Mod] %2 回调ID[枚举] %3 %4",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "ModObj",
            "check": "ModObject",
            "align": "RIGHT"
        },
        {
            "type": "input_value",
            "name": "callbackId",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "input_statement",
            "name": "Body"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": Blockly.Msg.PROCEDURES_HUE,
    "tooltip": "",
    "helpUrl": "",
})
Blockly.defineBlocksWithJsonArray(isaacns_block)
//================END OF DEFINE=========
//========CONF OF AddCallBack===========
Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('isaac_is_addcallback');
isaacns_block_inner["isaac_is_addcallback"]=
    '<value name="callbackId">'+
        '<block type="enum_ModCallbacks" deletable="false" movable="false"></block>\n' +
    '</value>'
Blockly.Lua['isaac_is_addcallback'] = function(block) {
    var value_modobj = Blockly.Lua.valueToCode(block, 'ModObj', Blockly.Lua.ORDER_NONE);
    var value_callbackid = Blockly.Lua.valueToCode(block, 'callbackId', Blockly.Lua.ORDER_NONE);
    var statements_body = Blockly.Lua.statementToCode(block, 'Body');
    // TODO: Assemble Lua into code variable.
    //参数列表
    let argtxt = ""
    let argcount = 0
    {
        let argarr = is_callback_args[block.getInputTargetBlock('callbackId').getFieldValue('Item')]
        if(argarr)
            argcount = argarr.length
    }
    for(let i = 1;i<=argcount;i++){
        argtxt += ",bkly_v_"+i
    }
    var code = value_modobj + ":" + "AddCallback("+value_callbackid+",function(_"+argtxt+")\n"+statements_body+"end)\n"//'...\n';
    return code;
};
let is_addcallback_block = Blockly.Blocks['isaac_is_addcallback']
is_addcallback_block.onchange = function(event){

    let tip_trans = is_callback_desc[this.getInputTargetBlock('callbackId').getFieldValue('Item')]

    if(tip_trans == undefined)
        tip_trans = "暂无说明"

    this.tooltip = (tip_trans)


	if( this.getInputTargetBlock('ModObj') == undefined){
		this.setWarningText('Mod对象不存在');
		if(!this.isInFlyout && !this.getInheritedDisabled())
			this.setDisabled(true);
		return;
	}
	
	this.setWarningText();
	this.setDisabled(false);
}

//i 从1开始
is_addcallback_block.getArgInfo = function (i) {
    let callbackName = this.getInputTargetBlock('callbackId').getFieldValue('Item')
    let argnames = is_callback_args[callbackName]

    if(argnames && argnames[i - 1]) {
        return {
            name: argnames[i - 1].name,
            luaname: "bkly_v_" + i,
            type: argnames.type
        }
    }
    return null
}

is_addcallback_block.getArgCount = function () {
    let callbackName = this.getInputTargetBlock('callbackId').getFieldValue('Item')
    let argnames = is_callback_args[callbackName]
    if(argnames)
        return argnames.length
    return 0
}

//=========END CONF===============


/* Update Last Select AddCallBack Block*/
function isaac_is_ns_callback_lastUpdateEvent(evt) {
    if((evt.type == Blockly.Events.MOVE || (evt.type == Blockly.Events.UI && evt.element == "click")) && evt.blockId){
        let blk = evt.getEventWorkspace_().getBlockById(evt.blockId)
        while(blk) {
            if (isaac_is_ns_callback_varconf.validtypes.indexOf(blk.type) != -1) {
                isaac_is_ns_callback_varconf.lastBlock = blk
                break
            }
            blk = blk.getSurroundParent()
        }
    }
    if(evt.type == Blockly.Events.DELETE){
        if(isaac_is_ns_callback_varconf.lastBlock) {
            if (isaac_is_ns_callback_varconf.lastBlock.id == evt.blockId) {
                isaac_is_ns_callback_varconf.lastBlock = undefined
            }
        }
    }
}
//========== define of AddCallBackArgument block
let addcallback_args_blocks = [];
for(let i = 1;i <= isaac_is_ns_callback_varconf.count;i++){
    addcallback_args_blocks.push({
        "type": "isaac_is_addcallback_var_"+i,
        "message0": "[类型]变量名字",
        "output": "Number",
        "colour": 60,
        "tooltip": "",
        "helpUrl": "",
    })
}

//callback var helper
Blockly.defineBlocksWithJsonArray(addcallback_args_blocks)

for(let i = 1;i <= isaac_is_ns_callback_varconf.count;i++){
    Blockly.Blocks['isaac_is_addcallback_var_'+i].onchange = function(){
        if(this.isInFlyout == false){
            let findingblk = this;
            do{
                if(isaac_is_ns_callback_varconf.validtypes.indexOf(findingblk.type) != -1){
                    break;
                }
                findingblk = findingblk.getSurroundParent()
            }while(findingblk)
            if(findingblk)
                this.usingBlock = findingblk
        }
        if(this.usingBlock == null){
            this.usingBlock = isaac_is_ns_callback_varconf.lastBlock
        }
        if(this.usingBlock && this.usingBlock.workspace == undefined)
            this.usingBlock = null

        //设置第i个变量块应该显示的东西
        let ArgInfo = undefined
        if(this.usingBlock){
            ArgInfo = this.usingBlock.getArgInfo(i)
        }
        if(ArgInfo){
            this.inputList[0].fieldRow[0].setText(ArgInfo.name)
            this.setOutput(true,ArgInfo.type)
        }else{
            //this.inputList[0].fieldRow[0].setText("[???]参数"+i)
            this.dispose(true,true);
        }
    }

    Blockly.Lua['isaac_is_addcallback_var_'+i] = function(block){
        let ArgInfo = undefined
        if(this.usingBlock)
            ArgInfo = this.usingBlock.getArgInfo(i)
        let code = "ERROR"
        if(ArgInfo)
            code = ArgInfo.luaname
        return [code, Blockly.Lua.ORDER_HIGH]
    }
}

//配置workspace
exports.Reg = function(workspace){
    let ret = getArrayByLists(isaacns_block,isaacns_block_inner)
    let arr = getArrayByLists(addcallback_args_blocks);

    let retWithArg = []
    for(let i=0;i<=arr.length;i++){
        retWithArg[i] = [];
        ret.forEach(e=>retWithArg[i].push(e))
        arr.slice(0,i).forEach(e=>retWithArg[i].push(e))
    }

    workspace.registerToolboxCategoryCallback(
        'ISAAC_IS_NS', function(ws){
            let argcount = 0

            if(isaac_is_ns_callback_varconf.lastBlock){
                argcount = isaac_is_ns_callback_varconf.lastBlock.getArgCount()
            }
            return retWithArg[argcount];
        });
    //这个函数记录最后点击的Callback等,以便于显示变量
    workspace.addChangeListener(isaac_is_ns_callback_lastUpdateEvent)
}