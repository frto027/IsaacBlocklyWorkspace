//Type of Block Toolbox:"ISAAC_CLASSFUNC_Game"
const tools = require('./tools')
funcs = []

const { defInner } = require('./DefaultBlocks')

funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Update",
    funcname:"Update",
    translate:"更新",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Render",
    funcname:"Render",
    translate:"渲染",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_IsPaused",
    funcname:"IsPaused",
    translate:"[逻辑]游戏已经暂停?",
    returntype:"Boolean",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Spawn",
    funcname:"Spawn",
    translate:"[实体]生产",
    returntype:"Entity",
    args: [
        {type:"Number",name:`类型[枚举(实体类型)]`,inxml:`<shadow type='enum_EntityType'></shadow>`},
        {type:"Number",name:`变体[整数]`},
        {type:"Vector",name:`位置[向量]`,inxml:defInner.vector()},
        {type:"Vector",name:`速度[向量]`,inxml:defInner.vector()},
        {type:"Entity",name:`生产者[实体|可空]`},
        {type:"Number",name:`子类型[整数]`},
        {type:"Number",name:`种子[整数]`,inxml:defInner.number()},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SpawnEntityDesc",
    funcname:"SpawnEntityDesc",
    translate:"[NPC实体]生产Desc实体",
    returntype:"EntityNPC",
    args: [
        {type:"Entity::EntityDesc",name:`desc[Entity::EntityDesc]`},
        {type:"Vector",name:`位置[向量]`},
        {type:"Entity",name:`生产者[实体]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_BombDamage",
    funcname:"BombDamage",
    translate:"炸弹伤害",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
        {type:"Number",name:`伤害[实数]`},
        {type:"Number",name:`半径[实数]`},
        {type:"Boolean",name:`线性检查[逻辑]`},/* LineCheck */
        {type:"Entity",name:`来源[实体]`},
        {type:"Number",name:`眼泪标志位[枚举]`},
        {type:"Number",name:`伤害标志位[整数]`},
        {type:"Boolean",name:`伤害来源[逻辑]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_BombExplosionEffects",
    funcname:"BombExplosionEffects",
    translate:"炸弹爆炸效果",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`,inxml:defInner.vector()},
        {type:"Number",name:`伤害[实数]`,inxml:defInner.number(1)},
        {type:"Number",name:`眼泪标志位[枚举]`,inxml:defInner.number(0)},
        {type:"KColor",name:`颜色[K颜色]`,inxml:defInner.color()},
        {type:"Entity",name:`来源[实体|可空]`},
        {type:"Number",name:`半径因子[实数]`,inxml:defInner.number(1)},
        {type:"Boolean",name:`线性检查[逻辑]`,inxml:defInner.boolean_()},/* LineCheck */
        {type:"Boolean",name:`伤害来源[逻辑]`,inxml:defInner.boolean_()},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_BombTearflagEffects",
    funcname:"BombTearflagEffects",
    translate:"炸弹眼泪标志位效果",
    //returntype:"undefined",
    args: [
        {type:"KAGE::Math::Vector",name:`位置[KAGE::Math::Vector]`},
        {type:"Number",name:`半径[实数]`},
        {type:"Number",name:`眼泪标志位[枚举]`},
        {type:"Entity",name:`来源[实体]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Fart",
    funcname:"Fart",
    translate:"放毒气",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
        {type:"Number",name:`半径[实数]`},
        {type:"Entity",name:`来源[实体]`},
        {type:"Number",name:`毒气缩放[实数]`},
        {type:"Number",name:`毒气子类型[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_CharmFart",
    funcname:"CharmFart",
    translate:"魅惑毒气",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
        {type:"Number",name:`半径[实数]`},
        {type:"Entity",name:`来源[实体]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ButterBeanFart",
    funcname:"ButterBeanFart",
    translate:"TRANS_ButterBeanFart",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
        {type:"Number",name:`半径[实数]`},
        {type:"Entity",name:`来源[实体]`},
        {type:"Boolean",name:`展示特效[逻辑]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_RerollEnemy",
    funcname:"RerollEnemy",
    translate:"[逻辑]重新Roll敌人",
    returntype:"Boolean",
    args: [
        {type:"Entity",name:`实体[实体]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SpawnParticles",
    funcname:"SpawnParticles",
    translate:"TRANS_SpawnParticles",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
        {type:"EntityEffect::Variant",name:`ParticleType[EntityEffect::Variant]`},
        {type:"Number",name:`NumParticles[整数]`},
        {type:"Number",name:`Speed[实数]`},
        {type:"KColor",name:`颜色[K颜色]`},
        {type:"Number",name:`Height[实数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetFont",
    funcname:"GetFont",
    translate:"[KAGE::Graphics::Font]获取字体",
    returntype:"KAGE::Graphics::Font",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetLevel",
    funcname:"GetLevel",
    translate:"[关卡]获取关卡",
    returntype:"Level",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetRoom",
    funcname:"GetRoom",
    translate:"[房间]获取房间",
    returntype:"Room",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetPlayer",
    funcname:"GetPlayer",
    translate:"[Player实体]获取Player",
    returntype:"EntityPlayer",
    args: [
        {type:"Number",name:`索引[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetNearestPlayer",
    funcname:"GetNearestPlayer",
    translate:"[Player实体]获取最近玩家",
    returntype:"EntityPlayer",
    args: [
        {type:"Vector",name:`位置[向量]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetRandomPlayer",
    funcname:"GetRandomPlayer",
    translate:"[Player实体]获取随机玩家",
    returntype:"EntityPlayer",
    args: [
        {type:"Vector",name:`Pos[向量]`},
        {type:"Number",name:`半径[实数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetNumPlayers",
    funcname:"GetNumPlayers",
    translate:"[整数]获取玩家数量",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetItemHistory",
    funcname:"GetItemHistory",
    translate:"[历史]获取道具历史",
    returntype:"History",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetItemPool",
    funcname:"GetItemPool",
    translate:"[道具池]获取道具池",
    returntype:"ItemPool",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetItemOverlay",
    funcname:"GetItemOverlay",
    translate:"[ItemOverlay]TRANS_GetItemOverlay",
    returntype:"ItemOverlay",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetSeeds",
    funcname:"GetSeeds",
    translate:"[Seeds]获取种子",
    returntype:"Seeds",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetStartSeed",
    funcname:"GetStartSeed",
    translate:"获取起始种子",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_End",
    funcname:"End",
    translate:"TRANS_End",
    //returntype:"undefined",
    args: [
        {type:"Ending",name:`Ending[Ending]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ShowFortune",
    funcname:"ShowFortune",
    translate:"TRANS_ShowFortune",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ShowRule",
    funcname:"ShowRule",
    translate:"TRANS_ShowRule",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_StartRoomTransition",
    funcname:"StartRoomTransition",
    translate:"开始房间传送",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`房间索引[整数]`},
        {type:"Direction",name:`方向[枚举(方向)]`},
        {type:"RoomTransition::Animation",name:`动画[RoomTransition::Animation]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ChangeRoom",
    funcname:"ChangeRoom",
    translate:"改变房间",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`房间索引[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_StartStageTransition",
    funcname:"StartStageTransition",
    translate:"开始层传送",
    //returntype:"undefined",
    args: [
        {type:"Boolean",name:`SameStage[逻辑]`},
        {type:"StageTransition::Animation",name:`Animation[StageTransition::Animation]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_MoveToRandomRoom",
    funcname:"MoveToRandomRoom",
    translate:"移动到随机房间",
    //returntype:"undefined",
    args: [
        {type:"Boolean",name:`包括错误房[逻辑]`},
        {type:"Number",name:`种子[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetFrameCount",
    funcname:"GetFrameCount",
    translate:"[整数]获取帧计数",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetStateFlag",
    funcname:"GetStateFlag",
    translate:"[逻辑]获取状态标志位(验证是否拥有)",
    returntype:"Boolean",
    args: [
        {type:"StateFlag",name:`状态标志位[枚举(状态标志位)]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SetStateFlag",
    funcname:"SetStateFlag",
    translate:"置状态标志位",
    //returntype:"undefined",
    args: [
        {type:"StateFlag",name:`状态标志位[枚举(状态标志位)]`},
        {type:"Boolean",name:`新值[逻辑]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SetLastDevilRoomStage",
    funcname:"SetLastDevilRoomStage",
    translate:"设置上次恶魔房开启层",
    //returntype:"undefined",
    args: [
        {type:"LevelStage",name:`层[枚举(关卡层)]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetLastDevilRoomStage",
    funcname:"GetLastDevilRoomStage",
    translate:"[枚举(关卡层)]获取上次恶魔房开启层",
    returntype:"LevelStage",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddTreasureRoomsVisited",
    funcname:"AddTreasureRoomsVisited",
    translate:"TRANS_AddTreasureRoomsVisited",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetTreasureRoomVisitCount",
    funcname:"GetTreasureRoomVisitCount",
    translate:"[整数]TRANS_GetTreasureRoomVisitCount",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddStageWithoutHeartsPicked",
    funcname:"AddStageWithoutHeartsPicked",
    translate:"TRANS_AddStageWithoutHeartsPicked",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ClearStagesWithoutHeartsPicked",
    funcname:"ClearStagesWithoutHeartsPicked",
    translate:"TRANS_ClearStagesWithoutHeartsPicked",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetStagesWithoutHeartsPicked",
    funcname:"GetStagesWithoutHeartsPicked",
    translate:"[整数]TRANS_GetStagesWithoutHeartsPicked",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddStageWithoutDamage",
    funcname:"AddStageWithoutDamage",
    translate:"TRANS_AddStageWithoutDamage",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ClearStagesWithoutDamage",
    funcname:"ClearStagesWithoutDamage",
    translate:"TRANS_ClearStagesWithoutDamage",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetStagesWithoutDamage",
    funcname:"GetStagesWithoutDamage",
    translate:"[整数]TRANS_GetStagesWithoutDamage",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddDevilRoomDeal",
    funcname:"AddDevilRoomDeal",
    translate:"TRANS_AddDevilRoomDeal",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_DonateGreed",
    funcname:"DonateGreed",
    translate:"TRANS_DonateGreed",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`Donate[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_DonateAngel",
    funcname:"DonateAngel",
    translate:"TRANS_DonateAngel",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`Donate[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetDevilRoomDeals",
    funcname:"GetDevilRoomDeals",
    translate:"[整数]TRANS_GetDevilRoomDeals",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetDonationModGreed",
    funcname:"GetDonationModGreed",
    translate:"[整数]TRANS_GetDonationModGreed",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetDonationModAngel",
    funcname:"GetDonationModAngel",
    translate:"[整数]TRANS_GetDonationModAngel",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ClearDonationModGreed",
    funcname:"ClearDonationModGreed",
    translate:"TRANS_ClearDonationModGreed",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ClearDonationModAngel",
    funcname:"ClearDonationModAngel",
    translate:"TRANS_ClearDonationModAngel",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SetLastLevelWithDamage",
    funcname:"SetLastLevelWithDamage",
    translate:"TRANS_SetLastLevelWithDamage",
    //returntype:"undefined",
    args: [
        {type:"LevelStage",name:`Stage[枚举(关卡层)]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetLastLevelWithDamage",
    funcname:"GetLastLevelWithDamage",
    translate:"[枚举(关卡层)]TRANS_GetLastLevelWithDamage",
    returntype:"LevelStage",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddEncounteredBoss",
    funcname:"AddEncounteredBoss",
    translate:"TRANS_AddEncounteredBoss",
    //returntype:"undefined",
    args: [
        {type:"EntityType",name:`Boss[枚举(实体类型)]`},
        {type:"Number",name:`Variant[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetNumEncounteredBosses",
    funcname:"GetNumEncounteredBosses",
    translate:"[整数]TRANS_GetNumEncounteredBosses",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_HasEncounteredBoss",
    funcname:"HasEncounteredBoss",
    translate:"[逻辑]TRANS_HasEncounteredBoss",
    returntype:"Boolean",
    args: [
        {type:"EntityType",name:`Boss[枚举(实体类型)]`},
        {type:"Number",name:`Variant[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetGreedWavesNum",
    funcname:"GetGreedWavesNum",
    translate:"[整数]获取贪婪轮数",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetGreedBossWaveNum",
    funcname:"GetGreedBossWaveNum",
    translate:"[整数]获取贪婪Boss轮数",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_SetLastLevelWithoutHalfHp",
    funcname:"SetLastLevelWithoutHalfHp",
    translate:"TRANS_SetLastLevelWithoutHalfHp",
    //returntype:"undefined",
    args: [
        {type:"LevelStage",name:`Stage[枚举(关卡层)]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetLastLevelWithoutHalfHp",
    funcname:"GetLastLevelWithoutHalfHp",
    translate:"[枚举(关卡层)]TRANS_GetLastLevelWithoutHalfHp",
    returntype:"LevelStage",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ShakeScreen",
    funcname:"ShakeScreen",
    translate:"晃动屏幕",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`时间[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetBossId",
    funcname:"GetBossId",
    translate:"[eBossId]获取Boss ID",
    returntype:"eBossId",
    args: [
        {type:"EntityType",name:`类型[枚举(实体类型)]`},
        {type:"枚举",name:`变体[枚举]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetScreenShakeCountdown",
    funcname:"GetScreenShakeCountdown",
    translate:"TRANS_GetScreenShakeCountdown",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Darken",
    funcname:"Darken",
    translate:"变黑暗",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`黑度[实数]`},
        {type:"Number",name:`时间[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetDarknessModifier",
    funcname:"GetDarknessModifier",
    translate:"[实数]TRANS_GetDarknessModifier",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetTargetDarkness",
    funcname:"GetTargetDarkness",
    translate:"[实数]TRANS_GetTargetDarkness",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetVictoryLap",
    funcname:"GetVictoryLap",
    translate:"[整数]获取胜利跑圈数",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_NextVictoryLap",
    funcname:"NextVictoryLap",
    translate:"开始下一轮跑圈",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_IsGreedMode",
    funcname:"IsGreedMode",
    translate:"[逻辑]是否贪婪模式?",
    returntype:"Boolean",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_RerollLevelCollectibles",
    funcname:"RerollLevelCollectibles",
    translate:"重新Roll关卡可收集物",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_RerollLevelPickups",
    funcname:"RerollLevelPickups",
    translate:"重新Roll关卡可拾取物",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`Seed[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_FinishChallenge",
    funcname:"FinishChallenge",
    translate:"完成挑战",
    //returntype:"undefined",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_AddPixelation",
    funcname:"AddPixelation",
    translate:"TRANS_AddPixelation",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`Duration[整数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_ShowHallucination",
    funcname:"ShowHallucination",
    translate:"TRANS_ShowHallucination",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`FrameCount[整数]`},
        {type:"Backdrop::Backdrop",name:`HallucinationBackdrop[Backdrop::Backdrop]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_HasHallucination",
    funcname:"HasHallucination",
    translate:"[整数]TRANS_HasHallucination",
    returntype:"Number",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_UpdateStrangeAttractor",
    funcname:"UpdateStrangeAttractor",
    translate:"TRANS_UpdateStrangeAttractor",
    //returntype:"undefined",
    args: [
        {type:"Vector",name:`位置[向量]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_GetAmbush",
    funcname:"GetAmbush",
    translate:"[Ambush]TRANS_GetAmbush",
    returntype:"Ambush",
    args: [
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Fadein",
    funcname:"Fadein",
    translate:"淡入",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`速度[实数]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
funcs.push(tools.defineFunctionBlock({
    blockname:"Game_Fadeout",
    funcname:"Fadeout",
    translate:"淡出",
    //returntype:"undefined",
    args: [
        {type:"Number",name:`速度[实数]`},
        {type:"FadeoutTarget",name:`目标[FadeoutTarget]`},
    ],
    objValType:"Game",//needobj
    objName: '游戏对象[游戏]',
    objInner:`<shadow type='isaac_game'></shadow>`,
    helptip: "提示",refmode: true,
    color: 230,
}))
//=======Begin of Vars
funcs.push(tools.defineVarBlock({
    blockname:"Game_BossRushParTime",
    varname:"BossRushParTime",
    translate:"BossRush时间[整数]",
    vartype:"Number",
    //varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
funcs.push(tools.defineVarBlock({
    blockname:"Game_BlueWombParTime",
    varname:"BlueWombParTime",
    translate:"蓝子宫时间[整数]",
    vartype:"Number",
    //varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
funcs.push(tools.defineVarBlock({
    blockname:"Game_ScreenShakeOffset",
    varname:"ScreenShakeOffset",
    translate:"屏幕震动偏移[向量]",
    vartype:"Vector",
    varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
funcs.push(tools.defineVarBlock({
    blockname:"Game_Challenge",
    varname:"Challenge",
    translate:"挑战[枚举(挑战)]",
    vartype:"Challenge",
    //varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
funcs.push(tools.defineVarBlock({
    blockname:"Game_Difficulty",
    varname:"Difficulty",
    translate:"难度[枚举(难度)]",
    vartype:"Difficulty",
    varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))
funcs.push(tools.defineVarBlock({
    blockname:"Game_TimeCounter",
    varname:"TimeCounter",
    translate:"计时器[整数]",
    vartype:"Number",
    //varconst:true,
    objValType:"Game",//needobj
    //nsobj:"",
    tip:"",
    objInner:"<shadow type='isaac_game'></shadow>",
}))

exports.Reg = function(workspace){
    let ret = tools.FunctionBlocksToArray(funcs)
	
	workspace.registerToolboxCategoryCallback(
  `ISAAC_CLASSFUNC_Game`, function(ws){
	  return ret;
  });
}
