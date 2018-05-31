'use strict'

//Enum Translate
//回调翻译
/*
exports.is_callback_translate = {
    "ModCallbacks": {
        name:"Mod回调",
        dict:{
            "MC_NPC_UPDATE":"NPC更新",
            "MC_POST_UPDATE":"投递更新",
            "MC_POST_RENDER":"投递渲染",
            "MC_USE_ITEM":"使用物品"
        }
    },
}
*/
const {EnumTranslateText} = require('./EnumsTranslate')
exports.is_callback_translate = EnumTranslateText

//回调描述
exports.is_callback_desc = {

    "ModCallbacks.MC_POST_UPDATE":
`当游戏状态更新之后，执行这个回调`,

    "ModCallbacks.MC_USE_ITEM":
`返回"真"表示播放使用道具的动画。当一个自定义
主动被使用、失去充能之后被调用。随机数值发生
器能够使得道具特性与种子相关`,

/*
    "ModCallbacks.回调名字":
`回调描述
FdFDSFDF`,
*/
}

//回调参数(不可缺少)
exports.is_callback_args = {
    "MC_EXAMPLE":[
        {name:"[枚举]示例",type:"Number"}
    ],
    "ModCallbacks.MC_NPC_UPDATE":[
        {name:"[NPC实体]参数 NPC",type:"EntityNPC"}
    ],
    "ModCallbacks.MC_USE_ITEM":[
        {name:"[枚举(可收集物)]参数 可收集物类型",type:"Number"},//这是第一个
        {name:"[RNG]参数 随机数发生器",type:"RNG"}//这是第二个
    ],
    "ModCallbacks.MC_POST_PEFFECT_UPDATE":[
        {name:"[Player实体]参数 玩家",type:"EntityPlayer"}
    ],
    "ModCallbacks.MC_USE_CARD":[
        {name:"[枚举]参数 卡片ID",type:"Number"}
    ],
    "ModCallbacks.MC_FAMILIAR_UPDATE":[
        {name:"[Familiar实体]参数 跟班",type:"EntityFamiliar"}
    ],
    "ModCallbacks.MC_FAMILIAR_INIT":[
        {name:"[Familiar实体]参数 跟班",type:"EntityFamiliar"}
    ],
    "ModCallbacks.MC_EVALUATE_CACHE":[
        {name:"[Player实体]参数 玩家实体",type:"EntityPlayer"},
        {name:"[数值|标记]参数 缓存标记",type:"Number"}
    ],
    "ModCallbacks.MC_POST_PLAYER_INIT":[
        {name:"[Player实体]参数 玩家",type:"EntityPlayer"}
    ],
    "ModCallbacks.MC_USE_PILL":[
        {name:"[枚举]参数 药丸效果",type:"Number"}
    ],
    "ModCallbacks.MC_ENTITY_TAKE_DMG":[
        {name:"[实体]参数 伤员",type:"Entity"},
        {name:"[数值]参数 受伤量",type:"Number"},
        {name:"[数值|标记]参数 伤害标记",type:"Number"},
        {name:"[实体引用]参数 伤害来源",type:"EntityRef"},
        {name:"[数值]参数 受伤减少帧数",type:"Number"}
    ],
    "ModCallbacks.MC_POST_CURSE_EVAL":[
        {name:"[数值]参数 诅咒",type:"Number"}
    ],
    "ModCallbacks.MC_INPUT_ACTION":[
        {name:"[实体|nil]参数 来源实体",type:"Entity"},
        {name:"[枚举]参数 按键钩子(InputHook)",type:"Number"},
        {name:"[枚举]参数 动作按键",type:"Number"}
    ],
    "ModCallbacks.MC_POST_GAME_STARTED":[
        {name:"[逻辑]参数 是从存档(savestate)启动的",type:"Boolean"}
    ],
    "ModCallbacks.MC_POST_GAME_END":[
        {name:"[逻辑]参数 游戏结束了",type:"Boolean"}
    ],
    "ModCallbacks.MC_PRE_GAME_EXIT":[
        {name:"[逻辑]参数 需要保存数据",type:"Boolean"}
    ],
    "ModCallbacks.MC_GET_CARD":[
        {name:"[RNG]参数 随机数值发生器",type:"RNG"},
        {name:"[数值]参数 当前卡片",type:"Number"},
        {name:"[逻辑]参数 游戏卡片",type:"Boolean"},
        {name:"[逻辑]参数 符文",type:"Boolean"},
        {name:"[逻辑]参数 只要符文",type:"Boolean"}
    ],
    "ModCallbacks.MC_GET_SHADER_PARAMS":[
        {name:"[文本]参数 Shader名字",type:"String"}
    ],
    "ModCallbacks.MC_EXECUTE_CMD":[
        {name:"[文本]参数 指令",type:"String"},
        {name:"[文本]参数 参数",type:"String"}
    ],
    "ModCallbacks.MC_PRE_USE_ITEM":[
        {name:"[枚举]参数 道具ID",type:"Number"},
        {name:"[RNG]参数 道具关联随机数发生器",type:"RNG"}
    ],
    "ModCallbacks.MC_PRE_ENTITY_SPAWN":[
        {name:"[枚举]参数 类型",type:"Number"},
        {name:"[枚举]参数 变体",type:"Number"},
        {name:"[枚举]参数 子类型",type:"Number"},
        {name:"[向量]参数 位置",type:"Vector"},
        {name:"[向量]参数 速度",type:"Vector"},
        {name:"[实体]参数 生产者",type:"Entity"},
        {name:"[数值]参数 种子",type:"Number"},
    ],
    "ModCallbacks.MC_POST_FAMILIAR_RENDER":[
        {name:"[Familiar实体]参数 跟班",type:"EntityFamiliar"},
        {name:"[向量]参数 位置偏移",type:"Vector"}
    ],
    "ModCallbacks.MC_PRE_FAMILIAR_COLLISION":[
        {name:"[Familiar实体]参数 跟班",type:"EntityFamiliar"},
        {name:"[实体]参数 碰撞者",type:"Entity"},
        {name:"[逻辑]参数 低的",type:"Boolean"}
    ],
    "ModCallbacks.MC_POST_NPC_INIT":[
        {name:"[NPC实体]参数 NPC",type:"EntityNPC"}
    ],
    "ModCallbacks.MC_POST_NPC_RENDER":[
        {name:"[NPC实体]参数 NPC",type:"EntityNPC"},
        {name:"[向量]参数 偏移",type:"Vector"}
    ],
    "ModCallbacks.MC_POST_NPC_DEATH":[
        {name:"[NPC实体]参数 NPC",type:"EntityNPC"}
    ],
    "ModCallbacks.MC_PRE_NPC_COLLISION":[
        {name:"[NPC实体]参数 NPC",type:"EntityNPC"},
        {name:"[实体]参数 碰撞者",type:"Entity"},
        {name:"[逻辑]参数 低的",type:"Boolean"}
    ],/* 从这里开始是自动生成的，需要校对类型等 */
    "ModCallbacks.MC_POST_PLAYER_UPDATE":[
        { name:"[Player实体]参数 玩家", type:"EntityPlayer" },
    ],
     "ModCallbacks.MC_POST_PLAYER_RENDER":[
        { name:"[Player实体]参数 玩家", type:"EntityPlayer" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_PLAYER_COLLISION":[
        { name:"[Player实体]参数 玩家", type:"EntityPlayer" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_PICKUP_INIT":[
        { name:"[可拾取物实体]参数 可拾取物", type:"EntityPickup" },
    ],
     "ModCallbacks.MC_POST_PICKUP_UPDATE":[
        { name:"[可拾取物实体]参数 可拾取物", type:"EntityPickup" },
    ],
     "ModCallbacks.MC_POST_PICKUP_RENDER":[
        { name:"[可拾取物实体]参数 可拾取物", type:"EntityPickup" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_POST_PICKUP_SELECTION":[
        { name:"[可拾取物实体]参数 可拾取物", type:"EntityPickup" },
        { name:"[枚举]参数 变体", type:"Number" },
        { name:"[枚举]参数 子类", type:"Number" },
    ],
     "ModCallbacks.MC_PRE_PICKUP_COLLISION":[
        { name:"[可拾取物实体]参数 Pickup", type:"EntityPickup" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_TEAR_INIT":[
        { name:"[眼泪实体]参数 拾取物", type:"EntityTear" },
    ],
     "ModCallbacks.MC_POST_TEAR_UPDATE":[
        { name:"[眼泪实体]参数 拾取物", type:"EntityTear" },
    ],
     "ModCallbacks.MC_POST_TEAR_RENDER":[
        { name:"[眼泪实体]参数 拾取物", type:"EntityTear" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_TEAR_COLLISION":[
        { name:"[眼泪实体]参数 眼泪", type:"EntityTear" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_PROJECTILE_INIT":[
        { name:"[子弹实体]参数 子弹", type:"EntityProjectile" },
    ],
     "ModCallbacks.MC_POST_PROJECTILE_UPDATE":[
        { name:"[子弹实体]参数 子弹", type:"EntityProjectile" },
    ],
     "ModCallbacks.MC_POST_PROJECTILE_RENDER":[
        { name:"[子弹实体]参数 子弹", type:"EntityProjectile" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_PROJECTILE_COLLISION":[
        { name:"[子弹实体]参数 子弹", type:"EntityProjectile" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_LASER_INIT":[
        { name:"[激光实体]参数 激光", type:"EntityLaser" },
    ],
     "ModCallbacks.MC_POST_LASER_UPDATE":[
        { name:"[激光实体]参数 激光", type:"EntityLaser" },
    ],
     "ModCallbacks.MC_POST_LASER_RENDER":[
        { name:"[激光实体]参数 激光", type:"EntityLaser" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_POST_KNIFE_INIT":[
        { name:"[妈刀实体]参数 妈刀", type:"EntityKnife" },
    ],
     "ModCallbacks.MC_POST_KNIFE_UPDATE":[
        { name:"[妈刀实体]参数 妈刀", type:"EntityKnife" },
    ],
     "ModCallbacks.MC_POST_KNIFE_RENDER":[
        { name:"[妈刀实体]参数 妈刀", type:"EntityKnife" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_KNIFE_COLLISION":[
        { name:"[妈刀实体]参数 妈刀", type:"EntityKnife" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_EFFECT_INIT":[
        { name:"[效果实体]参数 效果", type:"EntityEffect" },
    ],
     "ModCallbacks.MC_POST_EFFECT_UPDATE":[
        { name:"[效果实体]参数 效果", type:"EntityEffect" },
    ],
     "ModCallbacks.MC_POST_EFFECT_RENDER":[
        { name:"[效果实体]参数 效果", type:"EntityEffect" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_POST_BOMB_INIT":[
        { name:"[炸弹实体]参数 炸弹", type:"EntityBomb" },
    ],
     "ModCallbacks.MC_POST_BOMB_UPDATE":[
        { name:"[炸弹实体]参数 炸弹", type:"EntityBomb" },
    ],
     "ModCallbacks.MC_POST_BOMB_RENDER":[
        { name:"[炸弹实体]参数 炸弹", type:"EntityBomb" },
        { name:"[向量]参数 偏移", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_BOMB_COLLISION":[
        { name:"[炸弹实体]参数 炸弹", type:"EntityBomb" },
        { name:"[实体]参数 碰撞者", type:"Entity" },
        { name:"[逻辑]参数 低的", type:"Boolean" },
    ],
     "ModCallbacks.MC_POST_FIRE_TEAR":[
        { name:"[眼泪实体]参数 眼泪", type:"EntityTear" },
    ],
     "ModCallbacks.MC_PRE_GET_COLLECTIBLE":[
        { name:"[整数]参数 道具池类型", type:"Number" },/* 是否枚举? */
        { name:"[逻辑]参数 逆序取用", type:"Boolean" },
        { name:"[整数]参数 种子", type:"Number" },
    ],
     "ModCallbacks.MC_POST_GET_COLLECTIBLE":[
        { name:"[枚举(可收集物类型)]参数 选中的可收集物", type:"Number" },
        { name:"[整数]参数 道具池类型", type:"Number" },
        { name:"[逻辑]参数 逆序取用", type:"Boolean" },
        { name:"[整数]参数 种子", type:"Number" },
    ],
     "ModCallbacks.MC_GET_PILL_COLOR":[
        { name:"[枚举(药丸颜色)]参数 被选中的药丸", type:"Number" },
        { name:"[整数]参数 种子", type:"Number" },
    ],
     "ModCallbacks.MC_GET_PILL_EFFECT":[
        { name:"[枚举(药丸效果)]参数 选中的药丸效果", type:"Number" },
        { name:"[枚举(药丸颜色)]参数 药丸颜色", type:"Number" },
    ],
     "ModCallbacks.MC_GET_TRINKET":[
        { name:"[饰品类型]参数 被选择的饰品", type:"TrinketType" },
        { name:"[RNG]参数 饰品随机数发生器", type:"RNG" },
    ],
     "ModCallbacks.MC_POST_ENTITY_REMOVE":[
        { name:"[实体]参数 实体", type:"Entity" },
    ],
     "ModCallbacks.MC_POST_ENTITY_KILL":[
        { name:"[实体]参数 实体", type:"Entity" },
    ],
     "ModCallbacks.MC_PRE_NPC_UPDATE":[
        { name:"[NPC实体]参数 NPC", type:"EntityNPC" },
    ],
     "ModCallbacks.MC_PRE_SPAWN_CLEAN_AWARD":[
        { name:"[RNG&]参数 Rng", type:"RNG&" },
        { name:"[向量]参数 SpawnPos", type:"Vector" },
    ],
     "ModCallbacks.MC_PRE_ROOM_ENTITY_SPAWN":[
        { name:"[枚举(实体类型)]参数 实体类型", type:"Number" },
        { name:"[枚举]参数 变体", type:"Number" },
        { name:"[枚举]参数 子类型", type:"Number" },
        { name:"[枚举]参数 网格索引", type:"Number" },
        { name:"[整数]参数 种子", type:"Number" },
    ],
}

exports.type_translate = {
    "Game":"游戏",
    "EntityType":"枚举(实体类型)",
    "integer":"整数",
    "Vector":"向量",
    "Entity":"实体",
    "float":"实数",
    "boolean":"逻辑",
    "Direction":"枚举(方向)",
    "StateFlag":"枚举(状态标志位)",
    "LevelStage":"枚举(关卡层)",
    "Challenge":"枚举(挑战)",
    "Difficulty":"枚举(难度)",
    "EntityPlayer":"Player实体",
    "EntityNPC":"NPC实体",
    "Level":"关卡",
    "Room":"房间",
    "History":"历史",
    "ItemPool":"道具池",
}