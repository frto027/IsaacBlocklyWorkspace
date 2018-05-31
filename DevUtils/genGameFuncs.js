//TODO IsGame.js等Isaac函数类的函数信息需要用这个脚本来快速生成
let FilePrefix = "Game"

let outputfile = './WWW/ModLogic/IsGame.js'
let defaultObjValType = 'Game'
let defaultObjInner = `<shadow type='isaac_game'></shadow>`
let defaultObjName = `游戏对象[游戏]`
let funcs = `Update ()
Render ()
boolean IsPaused ()
Entity Spawn (EntityType Type, integer Variant, Vector Position, Vector Velocity, Entity Spawner, integer SubType, integer Seed)
EntityNPC SpawnEntityDesc (Entity::EntityDesc desc, Vector Position, Entity Spawner)
BombDamage (Vector Position, float Damage, float Radius, boolean LineCheck, Entity Source, integer TearFlags, integer DamageFlags, boolean DamageSource)
BombExplosionEffects (Vector Position, float Damage, integer TearFlags, KColor KColor, Entity Source, float RadiusMult, boolean LineCheck, boolean DamageSource)
BombTearflagEffects (KAGE::Math::Vector Position, float Radius, integer TearFlags, Entity Source)
Fart (Vector Position, float Radius, Entity Source, float FartScale, integer FartSubType)
CharmFart (Vector Position, float Radius, Entity Source)
ButterBeanFart (Vector Position, float Radius, Entity Source, boolean ShowEffect)
boolean RerollEnemy (Entity e)
SpawnParticles (Vector Pos, EntityEffect::Variant ParticleType, integer NumParticles, float Speed, KColor KColor, float Height)
KAGE::Graphics::Font GetFont ()
Level GetLevel ()
Room GetRoom ()
EntityPlayer GetPlayer (integer Index)
EntityPlayer GetNearestPlayer (Vector Pos)
EntityPlayer GetRandomPlayer (Vector Pos, float Radius)
integer GetNumPlayers ()
History GetItemHistory ()
ItemPool GetItemPool ()
ItemOverlay GetItemOverlay ()
Seeds GetSeeds ()
const std::string GetStartSeed() { return m_StartSeed; }
End (Ending Ending)
ShowFortune ()
ShowRule ()
StartRoomTransition (integer RoomIndex, Direction Direction, RoomTransition::Animation Animation)
ChangeRoom (integer RoomIndex)
StartStageTransition (boolean SameStage, StageTransition::Animation Animation)
MoveToRandomRoom (boolean IAmErrorRoom, integer Seed)
integer GetFrameCount ()
boolean GetStateFlag (StateFlag StateFlag)
SetStateFlag (StateFlag StateFlag, boolean Val)
SetLastDevilRoomStage (LevelStage Stage)
LevelStage GetLastDevilRoomStage ()
AddTreasureRoomsVisited ()
integer GetTreasureRoomVisitCount ()
AddStageWithoutHeartsPicked ()
ClearStagesWithoutHeartsPicked ()
integer GetStagesWithoutHeartsPicked ()
AddStageWithoutDamage ()
ClearStagesWithoutDamage ()
integer GetStagesWithoutDamage ()
AddDevilRoomDeal ()
DonateGreed (integer Donate)
DonateAngel (integer Donate)
integer GetDevilRoomDeals ()
integer GetDonationModGreed ()
integer GetDonationModAngel ()
ClearDonationModGreed ()
ClearDonationModAngel ()
SetLastLevelWithDamage (LevelStage Stage)
LevelStage GetLastLevelWithDamage ()
AddEncounteredBoss (EntityType Boss, integer Variant)
integer GetNumEncounteredBosses ()
boolean HasEncounteredBoss (EntityType Boss, integer Variant)
integer GetGreedWavesNum ()
integer GetGreedBossWaveNum ()
SetLastLevelWithoutHalfHp (LevelStage Stage)
LevelStage GetLastLevelWithoutHalfHp ()
ShakeScreen (integer Timeout)
eBossId GetBossId(EntityType Type, 枚举 Variant); More...
const integer GetScreenShakeCountdown ()
Darken (float Darkness, integer Timeout)
float GetDarknessModifier ()
float GetTargetDarkness ()
integer GetVictoryLap ()
NextVictoryLap ()
boolean IsGreedMode ()
RerollLevelCollectibles ()
RerollLevelPickups (integer Seed)
FinishChallenge ()
AddPixelation (integer Duration)
ShowHallucination (integer FrameCount, Backdrop::Backdrop HallucinationBackdrop)
integer HasHallucination ()
UpdateStrangeAttractor (Vector Position)
Ambush GetAmbush ()
Fadein (float Speed)
Fadeout (float Speed, FadeoutTarget Target)`

let vars = 
`integer BossRushParTime
integer BlueWombParTime
constVector ScreenShakeOffset
Challenge Challenge
constDifficulty Difficulty
integer TimeCounter`

//================BEGIN GEN SCRIPT

const { type_translate } = require('../WWW/ModLogic/Translate')
let x = funcs.split('\n')
let y = `//Type of Block Toolbox:"ISAAC_CLASSFUNC_${FilePrefix}"
const tools = require('./tools')
funcs = []
`
x.forEach(line => {
    //console.log(line)
    let pt = /(.*)\((.*)\)/
    let ret = line.match(pt)
    let decl = ret[1].trim().split(' ')
//TODO rettype没有加进去
    let rettype = decl.length == 2 ? decl[0] : undefined
    let funcname = decl[decl.length - 1]

    let argswhole = ret[2].trim()
    let args = argswhole.length > 0 ? argswhole.split(','):[]

    let argdesc = ""

    args.forEach(a =>{
        let varr = a.trim().split(' ')
        let atype = varr[0].trim();
        let aname = varr[1].trim();
        if(!type_translate[atype])
            console.log(`no translate:${atype}`)
        argdesc += `        {type:"${atype}",name:\`${aname}[${type_translate[atype] || atype}]\`},\n`
    })

    if(rettype && !type_translate[rettype]){
        console.log(`no translate:${rettype}`)
    }

    y +=
`funcs.push(tools.defineFunctionBlock({
    blockname:"${FilePrefix}_${funcname}",
    funcname:"${funcname}",
    translate:"${rettype ?'[' + (type_translate[rettype] || rettype) + ']' : ''}TRANS_${funcname}",
    ${rettype?'':'//'}returntype:"${rettype}",
    args: [
${argdesc}    ],
    ${defaultObjValType?'':'//'}objValType:"${defaultObjValType}",//needobj
    objName: '${defaultObjName}',
    ${defaultObjInner ? 'objInner:`'+defaultObjInner+'`,':''}
    helptip: "提示",
    color: 230,
}))
`
});
y += `//=======Begin of Vars\n`


vars.split('\n').forEach(vardecl => {
    let vsp = vardecl.trim(' ').split(' ')
    let vtype = vsp[0].trim()
    let vname = vsp[1].trim()
    let vconst = vtype.startsWith('const')
    if(vconst){
        vtype = vtype.substr(5)
    }
    if(!type_translate[vtype]){
        console.log(`no translate:${vtype}`)
    }
    y +=
`funcs.push(tools.defineVarBlock({
    blockname:"${FilePrefix}_${vname}",
    varname:"${vname}",
    translate:"翻译这里${vname}[${type_translate[vtype]||vtype}]",
    vartype:"${vtype}",
    ${vconst?'':'//'}varconst:true,
    ${defaultObjValType?'':'//'}objValType:"${defaultObjValType}",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
`
});
y += `
exports.Reg = function(workspace){
    let ret = tools.FunctionBlocksToArray(funcs)
	
	workspace.registerToolboxCategoryCallback(
  \`ISAAC_CLASSFUNC_${FilePrefix}\`, function(ws){
	  return ret;
  });
}
`
const fs = require('fs')
fs.writeFileSync(outputfile,y)