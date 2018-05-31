const {app, BrowserWindow,Menu,ipcMain,dialog,clipboard} = require('electron')
const fs = require('fs')
const url = require('url')
const path = require('path')
const zlib = require('zlib')
const process = require('process')

//HTML页面定义
const wwwRoot = 'WWW'
const wwwModLogic = path.join(wwwRoot,'ModLogic','logic.html')
//游戏逻辑编程窗口
var LogicWindow

app.on('ready',function(){
    Menu.setApplicationMenu(null)

    LogicWindow = new BrowserWindow({show:false})
    
    LogicWindow.loadFile(wwwModLogic)

    LogicWindow.once('ready-to-show',()=>{
        LogicWindow.show()
    })

    require('./node_logic').SetupEvent(LogicWindow)

    if(process.argv.indexOf("--dev-tool") != -1)
        LogicWindow.webContents.openDevTools()
})