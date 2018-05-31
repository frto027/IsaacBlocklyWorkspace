const alert_hold_time = 3000;
let mouse_is_in = false;
let alert_queue = []
let alert_remove_this = false;
function showalert(text){
    alert_queue.push(text)
}
let tipcontainer = document.getElementById('tipcontainer')
let tiptext = document.getElementById('tipalert')
function alert_hide(cb){
    tipcontainer.classList.remove('tipshow')
    tipcontainer.classList.add('tiphide')
    if(cb)
        setTimeout(cb,200)
}
function alert_show(cb){
    tipcontainer.classList.remove('tiphide')
    tipcontainer.classList.add('tipshow')
    if(cb)
        setTimeout(cb,200)
}
let alert_keep_time = 0;
function alert_shownext(){
    tiptext.innerText = alert_queue.shift()
    alert_show(()=>{
        alert_remove_this = false
        alert_keep_time = alert_hold_time
        alert_busy_loop()
    })
}
function alert_idle_loop(){
    if(alert_queue.length == 0){
        setTimeout(alert_idle_loop,100)
    }else{
        alert_shownext()
    }
}

function alert_busy_loop(){
    const busy_loop_time = 200
    if(mouse_is_in){
        alert_keep_time = alert_hold_time
    }else{
        alert_keep_time -= busy_loop_time
    }
    if(alert_remove_this || alert_keep_time <= 0){
        alert_hide(()=>{
            alert_idle_loop();
        })
    }else{
        setTimeout(alert_busy_loop,busy_loop_time)
    }
}

btntipclose.addEventListener('click',()=>{
    alert_remove_this = true;
})

tipcontainer.addEventListener('mouseover',()=>{
    mouse_is_in = true
})
tipcontainer.addEventListener('mouseout',()=>{
    mouse_is_in = false
})

alert_idle_loop()

exports.showalert = showalert