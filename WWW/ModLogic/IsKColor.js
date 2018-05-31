const tools = require('./tools')
funcs = []
funcs.push(tools.defineFunctionBlock({
    blockname:"Color_Color",
    funcname:"Color",
    translate:"[颜色]创建颜色",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`红(0~1)[实数]`,inxml:`<shadow type='math_number'></shadow>`},
        {type:"Number",name:`绿(0~1)[实数]`,inxml:`<shadow type='math_number'></shadow>`},
        {type:"Number",name:`蓝(0~1)[实数]`,inxml:`<shadow type='math_number'></shadow>`},
        {type:"Number",name:`透明度(0~1)[实数]`,inxml:`<shadow type='math_number'><field name="NUM">1</field></shadow>`},
        {hide:'0'},
        {hide:'0'},
        {hide:'0'},
        {hide:'0'},
    ],
    //inputsInline:true,
    returntype:'KColor',
    helptip: "提示",
    color: 230,
}))

exports.Reg = function(workspace){
    let ret = tools.FunctionBlocksToArray(funcs)
	
	workspace.registerToolboxCategoryCallback(
  `ISAAC_CLASSFUNC_KColor`, function(ws){
	  return ret;
  });
}
