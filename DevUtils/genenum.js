//生成游戏枚举变量翻译的模板到EnumsTranslateText.js 不要运行
throw "这个脚本会覆盖已有的文件，如果你知道你在做什么，就注释掉这句话吧"

const {enums} = require('./WWW/ModLogic/EnumFromGame')

//console.log(enums)
y = 'exports.EnumTranslateText = {\n'
enums.forEach(element => {
    let dict = ""
    element.value.forEach(x => {
        dict += `        "${x}":"",\n`
    });
    y +=
`    "${element.name}":{
    name:"",
    dict:{
${dict}        }
    },
`
});
y+='}'
const fs = require('fs')

fs.writeFile('./WWW/ModLogic/EnumsTranslate.js',y)