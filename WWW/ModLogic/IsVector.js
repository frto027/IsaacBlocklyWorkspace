const tools = require('./tools')
funcs = []
funcs.push(tools.defineFunctionBlock({
    blockname:"Vector_Vector",
    funcname:"Vector",
    translate:"[向量]创建向量",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`x[实数]`,inxml:`<shadow type='math_number'></shadow>`},
        {type:"Number",name:`y[实数]`,inxml:`<shadow type='math_number'></shadow>`},
    ],
    inputsInline:true,
    returntype:'Vector',//TODO RET
    helptip: "提示",
    color: 230,
}))

exports.Reg = function(workspace){
    let ret = tools.FunctionBlocksToArray(funcs)
	
	workspace.registerToolboxCategoryCallback(
  `ISAAC_CLASSFUNC_Vector`, function(ws){
	  return ret;
  });
}
