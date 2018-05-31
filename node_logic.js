'use strict'
const fs = require('fs')
const zlib = require('zlib')
const {BrowserWindow,Menu,ipcMain,dialog,clipboard} = require('electron')
exports.SetupEvent = function(LogicWindow){
    ipcMain.on('save-logic-to-file',function(event,xmlCode,file){
        let path = file
        if(!path)
        {
            path = dialog.showSaveDialog(LogicWindow,{
            filters:[
                {name:'Isaac Blockly Gzip File',extensions:['ibg']},
                {name:'Isaac Blockly Xml File',extensions:['ibx']}
            ]
            })
        }
        if(path){
            switch(path.substr(path.length - 3)){
                case 'ibg':
                fs.writeFileSync(path,zlib.gzipSync(xmlCode))
                break;
                case 'ibx':
                fs.writeFileSync(path,xmlCode)
                break;
            }
            event.sender.send('logic-show-alert',`保存到文件${path.match(/[^/\\]+$/)}`)
            //event.sender.send('open-logic-file-changed',path)
        }else{
            event.sender.send('logic-show-alert',`放弃保存`)
        }
        event.returnValue = path || null
    
    })
    ipcMain.on('open-logic-from-file',function(event,is_import){
        function SendXml(xml,path){
            event.sender.send('open-logic-from-file-result',xml,is_import,path)
        }
        dialog.showOpenDialog(LogicWindow,{
            filters:[
                {name:'Isaac Blockly Gzip File',extensions:['ibg']},
                {name:'Isaac Blockly Xml File',extensions:['ibx']}
            ]
        },function(path){
            if(path && path[0]){
                path = path[0]
                switch(path.substr(path.length - 3)){
                    case 'ibg':
                    SendXml(zlib.gunzipSync(fs.readFileSync(path)).toString(),path)
                    break;
                    case 'ibx':
                    SendXml(fs.readFileSync(path).toString().toString(),path)
                    break;
                }
            }
        })
    })
    ipcMain.on('logic-blockly-show-url-help',(event,url)=>{
        let ret = dialog.showMessageBox(LogicWindow,{title:"帮助",message:`请访问 ${url}`,buttons:["复制到剪辑版","关闭"],defaultId:1,cancelId:1})
        if(0 === ret){
            clipboard.writeText(url)
        }
    })
    ipcMain.on('logic-devtool',()=>{
        LogicWindow.webContents.openDevTools()
    })
    //返回值： 0 保存 1 另存为 2 不保存 3 取消
    ipcMain.on('logic-query-saveornot',(event,canSave)=>{
        let buttons = ["保存","另存为","不保存","取消"].slice(canSave?0:1)
        event.returnValue = dialog.showMessageBox(LogicWindow,{
            message:"当前文件未保存，您想?",
            title:"关闭当前文件",
            buttons:buttons,
            defaultId:buttons.length - 1,
            cancelId:buttons.length - 1
        }) + (canSave ? 0 : 1)
    })

    ipcMain.on('logic-compile-out',(event,compileout)=>{
        let path = dialog.showSaveDialog(LogicWindow,{
            filters:[
                {name:'Lua Script File',extensions:['lua']}
            ],
            defaultPath:'main'
        })
        if(path){
            fs.writeFileSync(path,compileout)
            event.sender.send('logic-show-alert','编译结束')
        }else{
            event.sender.send('logic-show-alert','已取消')
        }
    })
}
