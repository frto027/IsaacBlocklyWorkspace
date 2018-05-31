let enum_from_game = require('fs').readFileSync('./WWW/ModLogic/EnumFromGame.txt').toString()
//统一换行，去除制表符，多个空格统一为一个
enum_from_game = enum_from_game.replace(' ',' ').replace(/\r/g,'').replace(/\t/g,' ').replace(/ +/g,' ').replace(/^ */gm,'').replace(/ *$/g,'').replace(/{/g,'{\n');
let regexA = /(\w+) *(=)?[^\n]*?\n?([,}])/g
let regexB = /enum (\w+) *\{(.*?)\}/gm
//正则替换，去除换行
enum_from_game = enum_from_game.replace(regexA,`"$1"$3`).replace(/\n/g,'').replace(regexB,`{name:"$1",value:[$2]},`)

exports.enums = eval(`[ ${enum_from_game} ]`)