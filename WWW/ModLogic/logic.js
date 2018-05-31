const { codeSpace,codeSpaceDiv } = require('./divblockly')
const { Interp } = require('./interp')
const { CodeTools } = require('./tools')

const { ipcRenderer } = require('electron')

const {logic_prompt } = require("./prompt")
var lgp = logic_prompt
let splitv = document.getElementById('splitv')
let btnswitch = document.getElementById('btnswitch')
let btnnew = document.getElementById('btnnew')
let btnsave = document.getElementById('btnsave')
let btnsaveother = document.getElementById('btnsaveother')
let btnload = document.getElementById('btnload')
let btnimport = document.getElementById('btnimport')
let btndev = document.getElementById('btndev')
let btncompile = document.getElementById('btncompile')
let btntipclose = document.getElementById('tipclose')

function flushWindowSize(){
  //调整UI大小
  codeSpaceDiv.tabresize()
}

let opened_file = null
let last_file_xml = null
function change_open_file(path){
    opened_file = path
    last_file_xml = CodeTools.getXml()
}

//分割条需要被拖拽
let splitv_drag = {//修改这个改变初始状态
    draging:false,
    subvalue:0,
    onwidth:100,
    isOn : false,
}
/**
 * 设置/获取左侧边栏的宽度值
 * @param {number} val 新值，可空，单位px
 */
function leftViewSize(val){
    if(val){
        document.documentElement.style.setProperty('--leftview-size',`${val}px`)
    }else{
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--leftview-size'))
    }
}

splitv.addEventListener('mousedown',(e)=>{
    if(!splitv_drag.isOn)
        return;
    splitv_drag.draging = true;
    
    let oripx = leftViewSize()
    splitv_drag.subvalue = oripx - e.pageX
})

document.body.addEventListener('mousemove',(e)=>{
    if(splitv_drag.draging){
        let nl = e.pageX + splitv_drag.subvalue;
        if(nl < 0)
            nl = 0;
        leftViewSize(nl)

        flushWindowSize()
      
    }
})

document.body.addEventListener('mouseup',()=>{
    if(splitv_drag.draging){
        splitv_drag.onwidth = leftViewSize()
        LeftViewSwitcher.smoothbuffer.setAll(leftViewSize())
        splitv_drag.draging = false;
    }
})
{
    let toolbtns = document.getElementsByClassName('toolbtn')
    let toolbtn_icons = document.getElementsByClassName('toolbtn_icon')
    for(let i = 0;i < toolbtns.length;i++){
        let btn = toolbtns.item(i)
        let icon = toolbtn_icons.item(i)
        btn.addEventListener('mouseover',()=>{
            icon.classList.remove('imaskoff')
            icon.classList.add('imaskon')
        })
        btn.addEventListener('mouseout',()=>{
            icon.classList.remove('imaskon')
            icon.classList.add('imaskoff')
        })
    }
}
var LeftViewSwitcher = {
    timer:null,
    aim:leftViewSize(),
    smoothbuffer:new Interp(splitv_drag.isOn ? splitv_drag.onwidth : 0),
    starttimer:function(){
        if(this.timer)
            return;
        function tick(v){
            v.smoothbuffer.update()
            leftViewSize(v.smoothbuffer.get())
            if(!v.smoothbuffer.ok())
                v.timer = setTimeout(()=>tick(v),1 / 60)
            else
                v.timer = null
            flushWindowSize()
        }
        tick(this);
    },
    on:function(){
        this.smoothbuffer.set(splitv_drag.onwidth)
        splitv.hidden = false
        this.starttimer()
    },
    off:function(){
        this.smoothbuffer.set(0)
        splitv.hidden = true
        this.starttimer()
    }
}
if(splitv_drag.isOn)
    LeftViewSwitcher.on()
else
    LeftViewSwitcher.off()

btnswitch.addEventListener('click',()=>{
    if(splitv_drag.isOn)
        LeftViewSwitcher.off()
    else
        LeftViewSwitcher.on()
        splitv_drag.isOn = !splitv_drag.isOn
})

btnsave.addEventListener('click',()=>{
    savefile()
})
btnsaveother.addEventListener('click',()=>{
    saveotherfile()
})
btnnew.addEventListener('click',()=>{
    if(!ensure_close())
        return
    codeSpace.clear()
    change_open_file(null)
})
btnload.addEventListener('click',()=>{
    ipcRenderer.send('open-logic-from-file')
})
btnimport.addEventListener('click',()=>{
    if(!ensure_close())
        return
    ipcRenderer.send('open-logic-from-file',true)
})
btndev.addEventListener('click',()=>{
    ipcRenderer.send('logic-devtool')
})
btncompile.addEventListener('click',()=>{
    //alert(`编译输出：\n${CodeTools.getCode()}`)
    ipcRenderer.send('logic-compile-out',CodeTools.getCode())
})

ipcRenderer.on('open-logic-from-file-result',(event,xmlCode,is_import,path)=>{
    if(!is_import)
        codeSpace.clear()
    CodeTools.setXml(xmlCode)
    if(!is_import)
        change_open_file(path)
})
function savefile(){
    let nf = ipcRenderer.sendSync('save-logic-to-file',CodeTools.getXml(), opened_file)
    if(nf)
        change_open_file(nf)
}
function saveotherfile(){
    let nf = ipcRenderer.sendSync('save-logic-to-file',CodeTools.getXml())
    if(nf)
        change_open_file(nf)
}
/**
 * 返回true表示可以继续处理，false表示用户取消操作
 */
function ensure_close(){
    if(CodeTools.getXml() != last_file_xml){
        let r = ipcRenderer.sendSync('logic-query-saveornot',!!opened_file)
        switch(r){
            case 0://save
            ipcRenderer.sendSync('save-logic-to-file',CodeTools.getXml(),opened_file)
            return true;
            
            case 1://save other
            return !!ipcRenderer.sendSync('save-logic-to-file',CodeTools.getXml())
            case 2:
            return true;

            case 3://cancel
            return false
        }
        return false//impossible here
    }
    return true;
}
change_open_file(null)

/* tipalert */
const { showalert } = require('./logic_alert')

ipcRenderer.on('logic-show-alert',(event,msg)=>{
    showalert(msg)
})