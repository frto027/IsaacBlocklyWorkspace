let x = `MC_POST_PLAYER_UPDATE
EntityPlayer Player
MC_POST_PLAYER_RENDER
EntityPlayer Player, Vector Offset
MC_PRE_PLAYER_COLLISION
EntityPlayer Player, Entity Collider, boolean Low
MC_POST_PICKUP_INIT
EntityPickup Pickup
MC_POST_PICKUP_UPDATE
EntityPickup Pickup
MC_POST_PICKUP_RENDER
EntityPickup Pickup, Vector Offset
MC_POST_PICKUP_SELECTION
EntityPickup Pickup, integer Variant, integer Subtype
MC_PRE_PICKUP_COLLISION
EntityPickup Pickup, Entity Collider, boolean Low
MC_POST_TEAR_INIT
EntityTear Pickup
MC_POST_TEAR_UPDATE
EntityTear Pickup
MC_POST_TEAR_RENDER
EntityTear Pickup, Vector Offset
MC_PRE_TEAR_COLLISION
EntityTear Tear, Entity Collider, boolean Low
MC_POST_PROJECTILE_INIT
EntityProjectile Projectile
MC_POST_PROJECTILE_UPDATE
EntityProjectile Projectile
MC_POST_PROJECTILE_RENDER
EntityProjectile Projectile, Vector Offset
MC_PRE_PROJECTILE_COLLISION
EntityProjectile Projectile, Entity Collider, boolean Low
MC_POST_LASER_INIT
EntityLaser Laser
MC_POST_LASER_UPDATE
EntityLaser Laser
MC_POST_LASER_RENDER
EntityLaser Laser, Vector Offset
MC_POST_KNIFE_INIT
EntityKnife Knife
MC_POST_KNIFE_UPDATE
EntityKnife Knife
MC_POST_KNIFE_RENDER
EntityKnife Knife, Vector Offset
MC_PRE_KNIFE_COLLISION
EntityKnife Knife, Entity Collider, boolean Low
MC_POST_EFFECT_INIT
EntityEffect Effect
MC_POST_EFFECT_UPDATE
EntityEffect Effect
MC_POST_EFFECT_RENDER
EntityEffect Effect, Vector Offset
MC_POST_BOMB_INIT
EntityBomb Bomb
MC_POST_BOMB_UPDATE
EntityBomb Bomb
MC_POST_BOMB_RENDER
EntityBomb Bomb, Vector Offset
MC_PRE_BOMB_COLLISION
EntityBomb Bomb, Entity Collider, boolean Low
MC_POST_FIRE_TEAR
EntityTear Tear
MC_PRE_GET_COLLECTIBLE
integer PoolType, boolean Decrease, integer Seed
MC_POST_GET_COLLECTIBLE
CollectibleType SelectedCollectible, integer PoolType, boolean Decrease, integer Seed
MC_GET_PILL_COLOR
PillColor SelectedPill, integer Seed
MC_GET_PILL_EFFECT
PillEffect SelectedPillEffect, PillColor PillColor
MC_GET_TRINKET
TrinketType SelectedTrinket, RNG& TrinketRNG
MC_POST_ENTITY_REMOVE
Entity Ent
MC_POST_ENTITY_KILL
Entity Ent
MC_PRE_NPC_UPDATE
EntityNPC NPC
MC_PRE_SPAWN_CLEAN_AWARD
RNG& Rng, Vector SpawnPos
MC_PRE_ROOM_ENTITY_SPAWN
EntityType Type, integer Variant, integer SubType, integer GridIndex, integer Seed`

x = x.split('\n')
y = ``
for(let i = 0;i<x.length;i+=2){
    let cbname = x[i]
    let cblist = x[i+1].split(',')
    let listtext = ""
    cblist.forEach(arg => {
        let tparr = arg.trim().split(' ')
        let tp = tparr[0].trim()
        let name = tparr[1].trim()
        listtext += `       { name:"[${tp}]参数 ${name}", type:"${tp}" },\n`
    });
    y += 
`    "ModCallbacks.${cbname}":[
${listtext}   ],\n`
}
const fs = require('fs')
fs.writeFile('./cbtrans.txt',y)