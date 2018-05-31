'use strict'

exports.Interp = class{
    constructor(initval,buffnum,inter){
        this.arr =[];
        this.inter = [];
        if(!buffnum)
            buffnum = 4;
        for(let i=0;i<buffnum;i++){
            this.arr.push(initval)
            if(inter){
                this.inter.push(inter[i]?inter[i]:inter)
            }else{
                this.inter.push(0.94)
            }
        }
    }
    setAll(v){
        for(let i=0;i<this.arr.length;i++)
            this.arr[i] = v
    }
    set(v) {
        this.arr[0]=v;
    }
    update(){
        for(let i=1;i<this.arr.length;i++){
            this.arr[i] = (this.arr[i] - this.arr[i-1])*this.inter[i] + this.arr[i-1]
        }
    }
    get(){
        return this.arr[this.arr.length - 1]
    }
    ok(){
        return Math.abs(this.get() - this.arr[0]) < 0.02
    }
}