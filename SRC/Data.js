var projectileList = {
	
	"icytreat": { name:"icytreat", attack: 4, speed: 15,
		listImage:["IMG/EFFECTS/icytreat_shot_1.png","IMG/EFFECTS/icytreat_shot_2.png","IMG/EFFECTS/icytreat_shot_3.png"],
		listX:[20,20,20],
		listY:[20,20,20],
		listXDiff:[30,30,30],
		listYDiff:[30,30,30],
		hitEffect:"icytreat"
	}
}

var enemyList = {

	1: { name:"Chumpy", health: 125, gold: 20, range: 1, attack: 2, speed: 3, 
	listMove:["IMG/ENEMIES/chumpy_move_1.png","IMG/ENEMIES/chumpy_move_2.png","IMG/ENEMIES/chumpy_move_3.png","IMG/ENEMIES/chumpy_move_4.png","IMG/ENEMIES/chumpy_move_5.png","IMG/ENEMIES/chumpy_move_6.png"], 
	listMoveX:[80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80], 
	listMoveXDiff:[5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/chumpy_attack_1.png","IMG/ENEMIES/chumpy_attack_2.png","IMG/ENEMIES/chumpy_attack_3.png","IMG/ENEMIES/chumpy_attack_4.png","IMG/ENEMIES/chumpy_attack_5.png","IMG/ENEMIES/chumpy_attack_6.png","IMG/ENEMIES/chumpy_attack_7.png","IMG/ENEMIES/chumpy_attack_8.png","IMG/ENEMIES/chumpy_attack_9.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160,160],
	listAttackY:[80,80,80,80,80,80,80,80,80,80], 
	listAttackXDiff:[5,5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5,5], 
	listDefeat:["IMG/ENEMIES/chumpy_defeat_1.png","IMG/ENEMIES/chumpy_defeat_2.png","IMG/ENEMIES/chumpy_defeat_3.png","IMG/ENEMIES/chumpy_defeat_4.png","IMG/ENEMIES/chumpy_defeat_5.png","IMG/ENEMIES/chumpy_defeat_6.png","IMG/ENEMIES/chumpy_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5],	
	frameHit:[6,7],
	hitEffect: "chumpy"},
	
	4: { name:"Chumpro", health: 225, gold: 40, range: 1, attack: 8, speed: 7, 
	listMove:["IMG/ENEMIES/chumpro_move_1.png","IMG/ENEMIES/chumpro_move_2.png","IMG/ENEMIES/chumpro_move_3.png","IMG/ENEMIES/chumpro_move_4.png"], 
	listMoveX:[80,80,80,80], 
	listMoveY:[80,80,80,80], 
	listMoveXDiff:[5,5,5,5], 
	listMoveYDiff:[5,5,5,5], 
	listAttack:["IMG/ENEMIES/chumpro_attack_1.png","IMG/ENEMIES/chumpro_attack_2.png","IMG/ENEMIES/chumpro_attack_3.png","IMG/ENEMIES/chumpro_attack_4.png","IMG/ENEMIES/chumpro_attack_5.png","IMG/ENEMIES/chumpro_attack_6.png","IMG/ENEMIES/chumpro_attack_7.png","IMG/ENEMIES/chumpro_attack_8.png","IMG/ENEMIES/chumpro_attack_9.png"], 
	listAttackX:[80,80,80,80,80,80,80,80,80],
	listAttackY:[80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ENEMIES/chumpro_defeat_1.png","IMG/ENEMIES/chumpro_defeat_2.png","IMG/ENEMIES/chumpro_defeat_3.png","IMG/ENEMIES/chumpro_defeat_4.png","IMG/ENEMIES/chumpro_defeat_5.png","IMG/ENEMIES/chumpro_defeat_6.png","IMG/ENEMIES/chumpro_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],
	frameHit:[6,7],
	hitEffect: null},
	
	2: { name:"Armon", health: 500, gold: 100, range: 3, attack: 6, speed: 2, 
	listMove:["IMG/ENEMIES/armon_move_1.png","IMG/ENEMIES/armon_move_2.png","IMG/ENEMIES/armon_move_3.png","IMG/ENEMIES/armon_move_4.png","IMG/ENEMIES/armon_move_5.png","IMG/ENEMIES/armon_move_6.png"], 
	listMoveX:[80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80],  
	listMoveXDiff:[5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/armon_attack_1.png","IMG/ENEMIES/armon_attack_2.png","IMG/ENEMIES/armon_attack_3.png","IMG/ENEMIES/armon_attack_4.png","IMG/ENEMIES/armon_attack_5.png","IMG/ENEMIES/armon_attack_6.png","IMG/ENEMIES/armon_attack_7.png","IMG/ENEMIES/armon_attack_8.png","IMG/ENEMIES/armon_attack_9.png","IMG/ENEMIES/armon_attack_10.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160,160],
	listAttackY:[240,240,240,240,240,240,240,240,240,240],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[-75,-75,-75,-75,-75,-75,-75,-75,-75,-75],
	listDefeat:["IMG/ENEMIES/armon_defeat_1.png","IMG/ENEMIES/armon_defeat_2.png","IMG/ENEMIES/armon_defeat_3.png","IMG/ENEMIES/armon_defeat_4.png","IMG/ENEMIES/armon_defeat_5.png","IMG/ENEMIES/armon_defeat_6.png","IMG/ENEMIES/armon_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5],
	frameHit:[6,7,8],
	hitEffect: "armon"},
	
	3: { name:"Quicky", health: 50, gold: 30, range: 1, attack: 4, speed: 8, 
	listMove:["IMG/ENEMIES/quicky_move_1.png","IMG/ENEMIES/quicky_move_2.png","IMG/ENEMIES/quicky_move_3.png","IMG/ENEMIES/quicky_move_4.png","IMG/ENEMIES/quicky_move_5.png","IMG/ENEMIES/quicky_move_6.png"], 
	listMoveX:[80,80,80,80,80,80], 
	listMoveY:[80,80,80,80,80,80],  
	listMoveXDiff:[5,5,5,5,5,5], 
	listMoveYDiff:[5,5,5,5,5,5], 
	listAttack:["IMG/ENEMIES/quicky_attack_1.png","IMG/ENEMIES/quicky_attack_2.png","IMG/ENEMIES/quicky_attack_3.png","IMG/ENEMIES/quicky_attack_4.png","IMG/ENEMIES/quicky_attack_5.png","IMG/ENEMIES/quicky_attack_6.png","IMG/ENEMIES/quicky_attack_7.png","IMG/ENEMIES/quicky_attack_8.png","IMG/ENEMIES/quicky_attack_9.png","IMG/ENEMIES/quicky_attack_10.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160,160],
	listAttackY:[80,80,80,80,80,80,80,80,80,80],  
	listAttackXDiff:[5,5,5,5,5,5,5,5,5,5],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ENEMIES/quicky_defeat_1.png","IMG/ENEMIES/quicky_defeat_2.png","IMG/ENEMIES/quicky_defeat_3.png","IMG/ENEMIES/quicky_defeat_4.png","IMG/ENEMIES/quicky_defeat_5.png","IMG/ENEMIES/quicky_defeat_6.png","IMG/ENEMIES/quicky_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5],
	frameHit:[3,4,5,6],
	hitEffect: "quicky"},
	
}

var allyList = {

	1: {name:"Cubice", health: 200, range: 1, attack: 10, type: 1,
	icon: "IMG/ALLIES/cubice_stand_1.png",
	listStand:["IMG/ALLIES/cubice_stand_1.png","IMG/ALLIES/cubice_stand_2.png","IMG/ALLIES/cubice_stand_3.png","IMG/ALLIES/cubice_stand_4.png","IMG/ALLIES/cubice_stand_5.png","IMG/ALLIES/cubice_stand_6.png"], 
	listStandX:[80,80,80,80,80,80,80], 
	listStandY:[80,80,80,80,80,80,80],
	listStandXDiff:[5,5,5,5,5,5],  
	listStandYDiff:[5,5,5,5,5,5],  
	listAttack:["IMG/ALLIES/cubice_attack_1.png","IMG/ALLIES/cubice_attack_2.png","IMG/ALLIES/cubice_attack_3.png","IMG/ALLIES/cubice_attack_4.png","IMG/ALLIES/cubice_attack_5.png","IMG/ALLIES/cubice_attack_6.png","IMG/ALLIES/cubice_attack_7.png","IMG/ALLIES/cubice_attack_8.png","IMG/ALLIES/cubice_attack_9.png","IMG/ALLIES/cubice_attack_10.png"], 
	listAttackX:[160,160,160,160,160,160,160,160,160,160],
	listAttackY:[80,80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[-85,-85,-85,-85,-85,-85,-85,-85,-85,-85],
	listAttackYDiff:[5,5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ALLIES/cubice_defeat_1.png","IMG/ALLIES/cubice_defeat_2.png","IMG/ALLIES/cubice_defeat_3.png","IMG/ALLIES/cubice_defeat_4.png","IMG/ALLIES/cubice_defeat_5.png","IMG/ALLIES/cubice_defeat_6.png","IMG/ALLIES/cubice_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5,5,5],
	frameHit:[7,8],
	requires:["Fridge"],
	targetScreens:["IMG/ALLIES/cubice_healthy.png","IMG/ALLIES/cubice_halved.png","IMG/ALLIES/cubice_critical.png"],
	hitEffect:"cubice"
	},
	
	2: {name:"IcyTreat", health: 150, type: 2,
	icon: "IMG/ALLIES/icytreat_stand_1.png",
	listStand:["IMG/ALLIES/icytreat_stand_1.png","IMG/ALLIES/icytreat_stand_2.png","IMG/ALLIES/icytreat_stand_3.png","IMG/ALLIES/icytreat_stand_4.png","IMG/ALLIES/icytreat_stand_5.png","IMG/ALLIES/icytreat_stand_6.png"], 
	listStandX:[80,80,80,80,80,80,80],
	listStandY:[80,80,80,80,80,80,80], 
	listStandXDiff:[5,5,5,5,5,5], 
	listStandYDiff:[5,5,5,5,5,5],
	listAttack:["IMG/ALLIES/icytreat_attack_1.png","IMG/ALLIES/icytreat_attack_2.png","IMG/ALLIES/icytreat_attack_3.png","IMG/ALLIES/icytreat_attack_4.png","IMG/ALLIES/icytreat_attack_5.png","IMG/ALLIES/icytreat_attack_6.png","IMG/ALLIES/icytreat_attack_7.png","IMG/ALLIES/icytreat_attack_8.png","IMG/ALLIES/icytreat_attack_9.png","IMG/ALLIES/icytreat_attack_10.png"],
	listAttackX:[80,80,80,80,80,80,80,80,80,80],
	listAttackY:[80,80,80,80,80,80,80,80,80,80],
	listAttackXDiff:[5,5,5,5,5,5,5,5,5,5], 
	listAttackYDiff:[5,5,5,5,5,5,5,5,5,5],
	listDefeat:["IMG/ALLIES/icytreat_defeat_1.png","IMG/ALLIES/icytreat_defeat_2.png","IMG/ALLIES/icytreat_defeat_3.png","IMG/ALLIES/icytreat_defeat_4.png","IMG/ALLIES/icytreat_defeat_5.png","IMG/ALLIES/icytreat_defeat_6.png","IMG/ALLIES/icytreat_defeat_7.png"],
	listDefeatX:[80,80,80,80,80,80,80],
	listDefeatY:[80,80,80,80,80,80,80],
	listDefeatXDiff:[5,5,5,5,5,5,5],
	listDefeatYDiff:[5,5,5,5,5,5,5],
	projectile: "icytreat",
	release:[7,8,9],
	targetScreens:["IMG/ALLIES/icytreat_healthy.png","IMG/ALLIES/icytreat_halved.png","IMG/ALLIES/icytreat_critical.png"],
	requires:["Fridge"]
	},
	
	3: {name:"Eggy", health: 350, type: 3,
	icon: "IMG/ALLIES/eggy_stand_1.png",
	listStand:["IMG/ALLIES/eggy_stand_1.png","IMG/ALLIES/eggy_stand_2.png","IMG/ALLIES/eggy_stand_3.png","IMG/ALLIES/eggy_stand_4.png","IMG/ALLIES/eggy_stand_5.png","IMG/ALLIES/eggy_stand_6.png"], 
	listStandX:[80,80,80,80,80,80,80],
	listStandY:[80,80,80,80,80,80,80], 
	listStandXDiff:[5,5,5,5,5,5], 
	listStandYDiff:[5,5,5,5,5,5],
	listDefeat:["IMG/ALLIES/eggy_defeat_1.png","IMG/ALLIES/eggy_defeat_2.png","IMG/ALLIES/eggy_defeat_3.png","IMG/ALLIES/eggy_defeat_4.png","IMG/ALLIES/eggy_defeat_5.png","IMG/ALLIES/eggy_defeat_6.png","IMG/ALLIES/eggy_defeat_7.png","IMG/ALLIES/eggy_defeat_8.png"],
	listDefeatX:[240,240,240,240,240,240,240],
	listDefeatY:[240,240,240,240,240,240,240],
	listDefeatXDiff:[-75,-75,-75,-75,-75,-75,-75],
	listDefeatYDiff:[-75,-75,-75,-75,-75,-75,-75],
	field: "eggy",
	targetScreens:["IMG/ALLIES/eggy_healthy.png","IMG/ALLIES/eggy_halved.png","IMG/ALLIES/eggy_critical.png"],
	requires:["Fridge"]
	}
	
	
}

var fieldList = {
	"eggy":{
	image:["IMG/FIELDS/eggy_field.png"],
	x:240,
	y:240,
	xDiff:-75,
	yDiff:-75,
	duration: 180,
	effect:"slow"
	}
}

var effectList = {

	1:	["IMG/EFFECTS/hit1_1.png", "IMG/EFFECTS/hit1_2.png"],
	2:	["IMG/EFFECTS/hit2_1.png", "IMG/EFFECTS/hit2_2.png"],
	3:	["IMG/EFFECTS/hit3_1.png", "IMG/EFFECTS/hit3_2.png"],
	"icytreat":	["IMG/EFFECTS/icytreat_hit_1.png", "IMG/EFFECTS/icytreat_hit_2.png"],
	"armon": ["IMG/EFFECTS/armon_hit_1.png", "IMG/EFFECTS/armon_hit_2.png", "IMG/EFFECTS/armon_hit_3.png"],
	"quicky":["IMG/EFFECTS/quicky_hit_1.png", "IMG/EFFECTS/quicky_hit_2.png"],
	"chumpy":["IMG/EFFECTS/chumpy_hit_1.png", "IMG/EFFECTS/chumpy_hit_2.png"],
	"cubice":["IMG/EFFECTS/cubice_hit_1.png", "IMG/EFFECTS/cubice_hit_2.png"]
}

var factoryList = {

	1:{	name:"Fridge", health: 50, cooldown: 250,
		icon: "IMG/FACTORIES/fridge_stand_1.png",
		listStand:["IMG/FACTORIES/fridge_stand_1.png","IMG/FACTORIES/fridge_stand_2.png","IMG/FACTORIES/fridge_stand_3.png","IMG/FACTORIES/fridge_stand_4.png","IMG/FACTORIES/fridge_stand_5.png","IMG/FACTORIES/fridge_stand_6.png","IMG/FACTORIES/fridge_stand_7.png","IMG/FACTORIES/fridge_stand_8.png"],
		listStandX:[80,80,80,80,80,80,80,80],
		listStandY:[80,80,80,80,80,80,80,80],
		listStandXDiff:[5,5,5,5,5,5,5,5,5],
		listStandYDiff:[5,5,5,5,5,5,5,5,5],
		listDefeat:[],
		listDefeatX:[],
		listDefeatY:[],
		listDefeatXDiff:[],
		listDefeatYDiff:[],
		targetScreens:["IMG/FACTORIES/fridge_healthy.png","IMG/FACTORIES/fridge_halved.png","IMG/FACTORIES/fridge_critical.png"]
	}
}

var stuffList = {
	"coin":{ listImage:["IMG/STUFF/gold_move_1.png","IMG/STUFF/gold_move_2.png","IMG/STUFF/gold_move_3.png","IMG/STUFF/gold_move_4.png","IMG/STUFF/gold_move_5.png","IMG/STUFF/gold_move_6.png","IMG/STUFF/gold_move_7.png","IMG/STUFF/gold_move_8.png"],
	listX:[30,30,30,30,30,30,30,30],
	listY:[30,30,30,30,30,30,30,30],
	listXDiff:[30,30,30,30,30,30,30,30],
	listYDiff:[55,55,55,55,55,55,55,55]
	},
	"heart":{ listImage:["IMG/STUFF/heart_1.png","IMG/STUFF/heart_2.png","IMG/STUFF/heart_3.png","IMG/STUFF/heart_4.png"],
	listX:[30,30,30,30,30,30,30,30],
	listY:[30,30,30,30,30,30,30,30],
	listXDiff:[30,30,30,30,30,30,30,30],
	listYDiff:[55,55,55,55,55,55,55,55]
	},
	"indicator":{listImage:["IMG/STUFF/indicator_1.png","IMG/STUFF/indicator_2.png","IMG/STUFF/indicator_3.png"],
	listX:[20,20,20],
	listY:[24,24,24],
	listXDiff:[35,35,35],
	listYDiff:[-19,-19,-19]
	}
}

var itemStats = {
	"Cubice":{available:0, total:0},
	"IcyTreat":{available:0, total:0},
	"Eggy":{available:0, total:0}
}

var buildStats = {
	"Fridge":{cost:300, storage: 2}
}

var gameStats = {
	"spawntime": 100,
	"spawncounter": 0,
	"gold": 300,
	"life": 2000,
	"timeleft": 100,
	"screen": 1,
	"maxgold": 999999
}

var shortcutList = {
	"build": {1: "Z",
	2: "X",
	3: "C",
	4: "V",
	5: "B"
	},
	"item": {1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "Q",
	6: "W",
	7: "E",
	8: "R",
	9: "A",
	10: "S",
	11: "D",
	12: "F"
	},
	"delete":{
	1:"Ctrl+1",
	2:"Ctrl+2"
	}
}