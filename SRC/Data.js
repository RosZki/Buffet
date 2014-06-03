var projectileList = {
	
	"icytreat": { name:"icytreat", attack: 5, speed: 5,
		listImage:["IMG/EFFECTS/icytreat_shot_1.png","IMG/EFFECTS/icytreat_shot_2.png","IMG/EFFECTS/icytreat_shot_3.png","IMG/EFFECTS/icytreat_shot_4.png"],
		listX:[80,80,80,80],
		listY:[80,80,80,80],
		listXDiff:[5,5,5,5],
		listYDiff:[5,5,5,5],
		hitEffect:"icytreat"
	}
	
}

var enemyList = {

	1: { name:"Chumpy", health: 50, gold: 20, range: 1, attack: 1, speed: 5, 
	listMove:["IMG/ENEMIES/chumpy_move_1.png","IMG/ENEMIES/chumpy_move_2.png","IMG/ENEMIES/chumpy_move_3.png","IMG/ENEMIES/chumpy_move_4.png"], 
	listMoveX:[80,80,80,80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80,80,80,80], 
	listMoveXDiff:[5,5,5,5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/chumpy_attack_1.png","IMG/ENEMIES/chumpy_attack_2.png","IMG/ENEMIES/chumpy_attack_3.png","IMG/ENEMIES/chumpy_attack_4.png","IMG/ENEMIES/chumpy_attack_5.png","IMG/ENEMIES/chumpy_attack_6.png","IMG/ENEMIES/chumpy_attack_7.png","IMG/ENEMIES/chumpy_attack_8.png","IMG/ENEMIES/chumpy_attack_9.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160],
	listAttackY:[160,160,160,160,160,160,160,160,160],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[-80,-80,-80,-80,-80,-80,-80,-80,-80],
	listDefeat:["IMG/ENEMIES/chumpy_defeat_1.png","IMG/ENEMIES/chumpy_defeat_2.png","IMG/ENEMIES/chumpy_defeat_3.png","IMG/ENEMIES/chumpy_defeat_4.png","IMG/ENEMIES/chumpy_defeat_5.png","IMG/ENEMIES/chumpy_defeat_6.png","IMG/ENEMIES/chumpy_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],	
	frameHit:[6,9] },
	
	2: { name:"Chumpro", health: 100, gold: 40, range: 1, attack: 5, speed: 7, 
	listMove:["IMG/ENEMIES/chumpro_move_1.png","IMG/ENEMIES/chumpro_move_2.png","IMG/ENEMIES/chumpro_move_3.png","IMG/ENEMIES/chumpro_move_4.png"], 
	listMoveX:[80,80,80,80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80,80,80,80], 
	listMoveXDiff:[5,5,5,5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/chumpro_attack_1.png","IMG/ENEMIES/chumpro_attack_2.png","IMG/ENEMIES/chumpro_attack_3.png","IMG/ENEMIES/chumpro_attack_4.png","IMG/ENEMIES/chumpro_attack_5.png","IMG/ENEMIES/chumpro_attack_6.png","IMG/ENEMIES/chumpro_attack_7.png","IMG/ENEMIES/chumpro_attack_8.png","IMG/ENEMIES/chumpro_attack_9.png"], 
	listAttackX:[80,80,80,80,80,80,80,80,80],
	listAttackY:[80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ENEMIES/chumpro_defeat_1.png","IMG/ENEMIES/chumpro_defeat_2.png","IMG/ENEMIES/chumpro_defeat_3.png","IMG/ENEMIES/chumpro_defeat_4.png","IMG/ENEMIES/chumpro_defeat_5.png","IMG/ENEMIES/chumpro_defeat_6.png","IMG/ENEMIES/chumpro_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],
	frameHit:[6,9] },
	
	3: { name:"Armon", health: 120, gold: 40, range: 3, attack: 7, speed: 2, 
	listMove:["IMG/ENEMIES/armon_move_1.png","IMG/ENEMIES/armon_move_2.png","IMG/ENEMIES/armon_move_3.png","IMG/ENEMIES/armon_move_4.png"], 
	listMoveX:[80,80,80,80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80,80,80,80], 
	listMoveXDiff:[5,5,5,5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/armon_attack_1.png","IMG/ENEMIES/armon_attack_2.png","IMG/ENEMIES/armon_attack_3.png","IMG/ENEMIES/armon_attack_4.png","IMG/ENEMIES/armon_attack_5.png","IMG/ENEMIES/armon_attack_6.png","IMG/ENEMIES/armon_attack_7.png","IMG/ENEMIES/armon_attack_8.png","IMG/ENEMIES/armon_attack_9.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160],
	listAttackY:[240,240,240,240,240,240,240,240,240],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[-80,-80,-80,-80,-80,-80,-80,-80,-80],
	listDefeat:["IMG/ENEMIES/armon_defeat_1.png","IMG/ENEMIES/armon_defeat_2.png","IMG/ENEMIES/armon_defeat_3.png","IMG/ENEMIES/armon_defeat_4.png","IMG/ENEMIES/armon_defeat_5.png","IMG/ENEMIES/armon_defeat_6.png","IMG/ENEMIES/armon_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],
	frameHit:[7,9]	}
	
}

var allyList = {
	
	1: {name:"Cubice", health: 100, range: 1, attack: 2,
	listStand:["IMG/ALLIES/cubice_stand_1.png","IMG/ALLIES/cubice_stand_2.png","IMG/ALLIES/cubice_stand_3.png","IMG/ALLIES/cubice_stand_4.png"], 
	listStandX:[80,80,80,80,80,80,80,80,80], 
	listStandY:[80,80,80,80,80,80,80,80,80], 
	listStandXDiff:[5,5,5,5,5,5,5,5,5], 
	listStandYDiff:[5,5,5,5,5,5,5,5,5], 
	listAttack:["IMG/ALLIES/cubice_attack_1.png","IMG/ALLIES/cubice_attack_2.png","IMG/ALLIES/cubice_attack_3.png","IMG/ALLIES/cubice_attack_4.png","IMG/ALLIES/cubice_attack_5.png","IMG/ALLIES/cubice_attack_6.png","IMG/ALLIES/cubice_attack_7.png","IMG/ALLIES/cubice_attack_8.png","IMG/ALLIES/cubice_attack_9.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,80],
	listAttackY:[80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[-85,-85,-85,-85,-85,-85,-85,-85,5],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ALLIES/cubice_defeat_1.png","IMG/ALLIES/cubice_defeat_2.png","IMG/ALLIES/cubice_defeat_3.png","IMG/ALLIES/cubice_defeat_4.png","IMG/ALLIES/cubice_defeat_5.png","IMG/ALLIES/cubice_defeat_6.png","IMG/ALLIES/cubice_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],
	frameHit:[1,5] }
}

var allyListP = {

	1: {name:"IcyTreat", health: 100,
	listStand:["IMG/ALLIES/icytreat_stand_1.png","IMG/ALLIES/icytreat_stand_2.png","IMG/ALLIES/icytreat_stand_3.png","IMG/ALLIES/icytreat_stand_4.png"], 
	listStandX:[80,80,80,80],
	listStandY:[80,80,80,80], 
	listStandXDiff:[5,5,5,5], 
	listStandYDiff:[5,5,5,5],
	listAttack:["IMG/ALLIES/icytreat_attack_1.png","IMG/ALLIES/icytreat_attack_2.png","IMG/ALLIES/icytreat_attack_3.png","IMG/ALLIES/icytreat_attack_4.png","IMG/ALLIES/icytreat_attack_5.png","IMG/ALLIES/icytreat_attack_6.png","IMG/ALLIES/icytreat_attack_7.png","IMG/ALLIES/icytreat_attack_8.png","IMG/ALLIES/icytreat_attack_9.png"],
	listAttackX:[80,80,80,80,80,80,80,80,80],
	listAttackY:[80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5], 
	listAttackYDiff:[5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ALLIES/icytreat_defeat_1.png","IMG/ALLIES/icytreat_defeat_2.png","IMG/ALLIES/icytreat_defeat_3.png","IMG/ALLIES/icytreat_defeat_4.png","IMG/ALLIES/icytreat_defeat_5.png","IMG/ALLIES/icytreat_defeat_6.png","IMG/ALLIES/icytreat_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5],
	projectile: "icytreat",
	release:[6]	}
}
	
var effectList = {

	1:	["IMG/EFFECTS/hit1_1.png", "IMG/EFFECTS/hit1_2.png"],
	2:	["IMG/EFFECTS/hit2_1.png", "IMG/EFFECTS/hit2_2.png"],
	3:	["IMG/EFFECTS/hit3_1.png", "IMG/EFFECTS/hit3_2.png"],
	"icytreat":	["IMG/EFFECTS/icytreat_hit_1.png", "IMG/EFFECTS/icytreat_hit_2.png"]
	
}