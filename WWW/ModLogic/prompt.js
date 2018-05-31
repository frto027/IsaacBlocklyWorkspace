let btn = document.getElementById('prompt-okbtn')
let mask = document.getElementById('prompt-mask')
let ptitle = document.getElementById('prompt-title')
let pmsg = document.getElementById('prompt-msg')
let pinput = document.getElementById('prompt-input')
function showmask(){
    mask.classList.remove('prompt-hide')
    mask.classList.add('prompt-show')
}
function hidemask(){
    mask.classList.remove('prompt-show')
    mask.classList.add('prompt-hide')
}
const animtime = 200
exports.logic_prompt = (msg,defval,callback)=>{
    ptitle.innerText = "询问?"
    pmsg.innerText = msg
    pinput.value = defval
    btn.onclick = ()=>{
        let ret = pinput.value;
        hidemask();
        setTimeout(() => {
            mask.style.display = 'none'
            callback(ret)
        }, animtime);
    }
    mask.style.display = 'flex'
    showmask();
}