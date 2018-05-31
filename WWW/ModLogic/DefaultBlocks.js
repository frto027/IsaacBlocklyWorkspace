
let arg = (i,thing) => `<value name="ARG_${i}">${thing||''}</value>`
let args = (...ags)=>{
    let x = ''
    let i=0
    ags.forEach(element => {
        x += arg(i++,element)
    });
    return x
}
let field = (name,value) => `<field name="${name}">${value||''}</field>`
let shadow = (type,value) =>`<shadow type="${type}">${value||''}</shadow>`

let number = (x) => shadow("math_number",field("NUM",x||0))
let vector = (x,y) => shadow("Vector_Vector",args(number(x||200),number(y||200)))
let boolean_ = (x)=> shadow('logic_boolean',field("BOOL",x?"TRUE":"FALSE"))
let color = (r,g,b,a)=>shadow('Color_Color',args(
    number(r||0),
    number(g||0),
    number(b||0),
    number(a||1)
))

exports.defInner = {
    number:number,
    vector:vector,
    boolean_:boolean_,
    color:color
}

// exports.defInner = {
//     vector:(a,b)=>shadow("Vector_Vector",args(defInner.number(a||200),defInner.number(b||200))),
//     /*
//     `<shadow type='Vector_Vector'>
//     <value name="ARG_0">${defInner.number(a||200)}</value>
//     <value name="ARG_1">${defInner.number(b||200)}</value>
//     </shadow>`
//     */
//     boolean:(x)=>shadow('logic_boolean',field("BOOL",x?"TRUE":"FALSE")),//`<shadow type='logic_boolean'><field name="BOOL">${x?"TRUE":"FALSE"}</field></shadow>`,
//     number:(x)=>shadow("math_number",field("NUM",x||0)), //`<shadow type='math_number'><field name="NUM">${x||0}</field></shadow>`,
//     color:(r,g,b,a)=>shadow('Color_Color',args(
//         defInner.number(r||0),
//         defInner.number(g||0),
//         defInner.number(b||0),
//         defInner.number(a||1)
//     ))
// }