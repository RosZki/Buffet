var ui_elements = {

	screen:{ main: "IMG/UI/SCREEN/game_main.png",
	main_grid:"IMG/UI/SCREEN/game_main_grid.png",
	frame:["IMG/UI/SCREEN/frame_healthy.png", "IMG/UI/SCREEN/frame_halved.png", "IMG/UI/SCREEN/frame_critical.png"],
	background: "IMG/UI/SCREEN/stage_table.png",
	unit_selected: "IMG/UI/SCREEN/unit_selected.png"
	}
}

var sprites = {
	"armon":{ "move":["IMG/ENEMIES/ARMON/MOVE/01.png","IMG/ENEMIES/ARMON/MOVE/02.png","IMG/ENEMIES/ARMON/MOVE/03.png","IMG/ENEMIES/ARMON/MOVE/04.png","IMG/ENEMIES/ARMON/MOVE/05.png","IMG/ENEMIES/ARMON/MOVE/06.png"],
	"attack": ["IMG/ENEMIES/ARMON/ATTACK/01.png","IMG/ENEMIES/ARMON/ATTACK/02.png","IMG/ENEMIES/ARMON/ATTACK/03.png","IMG/ENEMIES/ARMON/ATTACK/04.png","IMG/ENEMIES/ARMON/ATTACK/05.png","IMG/ENEMIES/ARMON/ATTACK/06.png","IMG/ENEMIES/ARMON/ATTACK/07.png","IMG/ENEMIES/ARMON/ATTACK/08.png","IMG/ENEMIES/ARMON/ATTACK/09.png","IMG/ENEMIES/ARMON/ATTACK/10.png"],
	"defeat": ["IMG/ENEMIES/ARMON/DEFEAT/01.png","IMG/ENEMIES/ARMON/DEFEAT/02.png","IMG/ENEMIES/ARMON/DEFEAT/03.png","IMG/ENEMIES/ARMON/DEFEAT/04.png","IMG/ENEMIES/ARMON/DEFEAT/05.png","IMG/ENEMIES/ARMON/DEFEAT/06.png","IMG/ENEMIES/ARMON/DEFEAT/07.png"],
	"hiteffect":["IMG/ENEMIES/ARMON/HITEFFECT/01.png","IMG/ENEMIES/ARMON/HITEFFECT/02.png","IMG/ENEMIES/ARMON/HITEFFECT/03.png"]
	},
	"armpro":{ "move":["IMG/ENEMIES/ARMPRO/MOVE/01.png","IMG/ENEMIES/ARMPRO/MOVE/02.png","IMG/ENEMIES/ARMPRO/MOVE/03.png","IMG/ENEMIES/ARMPRO/MOVE/04.png","IMG/ENEMIES/ARMPRO/MOVE/05.png","IMG/ENEMIES/ARMPRO/MOVE/06.png"],
	"attack": ["IMG/ENEMIES/ARMPRO/ATTACK/01.png","IMG/ENEMIES/ARMPRO/ATTACK/02.png","IMG/ENEMIES/ARMPRO/ATTACK/03.png","IMG/ENEMIES/ARMPRO/ATTACK/04.png","IMG/ENEMIES/ARMPRO/ATTACK/05.png","IMG/ENEMIES/ARMPRO/ATTACK/06.png","IMG/ENEMIES/ARMPRO/ATTACK/07.png","IMG/ENEMIES/ARMPRO/ATTACK/08.png","IMG/ENEMIES/ARMPRO/ATTACK/09.png","IMG/ENEMIES/ARMPRO/ATTACK/10.png","IMG/ENEMIES/ARMPRO/ATTACK/11.png","IMG/ENEMIES/ARMPRO/ATTACK/12.png", "IMG/ENEMIES/ARMPRO/ATTACK/13.png","IMG/ENEMIES/ARMPRO/ATTACK/14.png","IMG/ENEMIES/ARMPRO/ATTACK/15.png","IMG/ENEMIES/ARMPRO/ATTACK/16.png","IMG/ENEMIES/ARMPRO/ATTACK/17.png","IMG/ENEMIES/ARMPRO/ATTACK/18.png","IMG/ENEMIES/ARMPRO/ATTACK/19.png","IMG/ENEMIES/ARMPRO/ATTACK/20.png","IMG/ENEMIES/ARMPRO/ATTACK/21.png","IMG/ENEMIES/ARMPRO/ATTACK/22.png","IMG/ENEMIES/ARMPRO/ATTACK/23.png","IMG/ENEMIES/ARMPRO/ATTACK/24.png"],
	"defeat": ["IMG/ENEMIES/ARMPRO/DEFEAT/01.png","IMG/ENEMIES/ARMPRO/DEFEAT/02.png","IMG/ENEMIES/ARMPRO/DEFEAT/03.png","IMG/ENEMIES/ARMPRO/DEFEAT/04.png","IMG/ENEMIES/ARMPRO/DEFEAT/05.png","IMG/ENEMIES/ARMPRO/DEFEAT/06.png","IMG/ENEMIES/ARMPRO/DEFEAT/07.png"],
	"hiteffect":[]
	},
	"chumpy":{ "move":["IMG/ENEMIES/CHUMPY/MOVE/01.png","IMG/ENEMIES/CHUMPY/MOVE/02.png","IMG/ENEMIES/CHUMPY/MOVE/03.png","IMG/ENEMIES/CHUMPY/MOVE/04.png","IMG/ENEMIES/CHUMPY/MOVE/05.png","IMG/ENEMIES/CHUMPY/MOVE/06.png"],
	"attack": ["IMG/ENEMIES/CHUMPY/ATTACK/01.png","IMG/ENEMIES/CHUMPY/ATTACK/02.png","IMG/ENEMIES/CHUMPY/ATTACK/03.png","IMG/ENEMIES/CHUMPY/ATTACK/04.png","IMG/ENEMIES/CHUMPY/ATTACK/05.png","IMG/ENEMIES/CHUMPY/ATTACK/06.png","IMG/ENEMIES/CHUMPY/ATTACK/07.png","IMG/ENEMIES/CHUMPY/ATTACK/08.png","IMG/ENEMIES/CHUMPY/ATTACK/09.png","IMG/ENEMIES/CHUMPY/ATTACK/10.png"],
	"defeat": ["IMG/ENEMIES/CHUMPY/DEFEAT/01.png","IMG/ENEMIES/CHUMPY/DEFEAT/02.png","IMG/ENEMIES/CHUMPY/DEFEAT/03.png","IMG/ENEMIES/CHUMPY/DEFEAT/04.png","IMG/ENEMIES/CHUMPY/DEFEAT/05.png","IMG/ENEMIES/CHUMPY/DEFEAT/06.png","IMG/ENEMIES/CHUMPY/DEFEAT/07.png"],
	"hiteffect":["IMG/ENEMIES/CHUMPY/HITEFFECT/01.png","IMG/ENEMIES/CHUMPY/HITEFFECT/02.png"]
	},
	"q":{  "move":["IMG/ENEMIES/Q/MOVE/01.png","IMG/ENEMIES/Q/MOVE/02.png","IMG/ENEMIES/Q/MOVE/03.png","IMG/ENEMIES/Q/MOVE/04.png","IMG/ENEMIES/Q/MOVE/05.png","IMG/ENEMIES/Q/MOVE/06.png"],
	"attack": ["IMG/ENEMIES/Q/ATTACK/01.png","IMG/ENEMIES/Q/ATTACK/02.png","IMG/ENEMIES/Q/ATTACK/03.png","IMG/ENEMIES/Q/ATTACK/04.png","IMG/ENEMIES/Q/ATTACK/05.png","IMG/ENEMIES/Q/ATTACK/06.png","IMG/ENEMIES/Q/ATTACK/07.png","IMG/ENEMIES/Q/ATTACK/08.png","IMG/ENEMIES/Q/ATTACK/09.png","IMG/ENEMIES/Q/ATTACK/10.png"],
	"defeat": ["IMG/ENEMIES/Q/DEFEAT/01.png","IMG/ENEMIES/Q/DEFEAT/02.png","IMG/ENEMIES/Q/DEFEAT/03.png","IMG/ENEMIES/Q/DEFEAT/04.png","IMG/ENEMIES/Q/DEFEAT/05.png","IMG/ENEMIES/Q/DEFEAT/06.png","IMG/ENEMIES/Q/DEFEAT/07.png"],
	"hiteffect":["IMG/ENEMIES/Q/HITEFFECT/01.png","IMG/ENEMIES/Q/HITEFFECT/02.png"]
	},
	
	"fridge":{ "stand":["IMG/ALLIES/FRIDGE/STAND/01.png","IMG/ALLIES/FRIDGE/STAND/02.png","IMG/ALLIES/FRIDGE/STAND/03.png","IMG/ALLIES/FRIDGE/STAND/04.png","IMG/ALLIES/FRIDGE/STAND/05.png","IMG/ALLIES/FRIDGE/STAND/06.png", "IMG/ALLIES/FRIDGE/STAND/07.png", "IMG/ALLIES/FRIDGE/STAND/08.png"],
	"defeat": ["IMG/ALLIES/FRIDGE/DEFEAT/01.png","IMG/ALLIES/FRIDGE/DEFEAT/02.png","IMG/ALLIES/FRIDGE/DEFEAT/03.png","IMG/ALLIES/FRIDGE/DEFEAT/04.png","IMG/ALLIES/FRIDGE/DEFEAT/05.png","IMG/ALLIES/FRIDGE/DEFEAT/06.png","IMG/ALLIES/FRIDGE/DEFEAT/07.png", "IMG/ALLIES/FRIDGE/DEFEAT/08.png"]
	},
	"cubice":{ "stand":["IMG/ALLIES/CUBICE/STAND/01.png","IMG/ALLIES/CUBICE/STAND/02.png","IMG/ALLIES/CUBICE/STAND/03.png","IMG/ALLIES/CUBICE/STAND/04.png","IMG/ALLIES/CUBICE/STAND/05.png","IMG/ALLIES/CUBICE/STAND/06.png"],
	"attack": ["IMG/ALLIES/CUBICE/ATTACK/01.png","IMG/ALLIES/CUBICE/ATTACK/02.png","IMG/ALLIES/CUBICE/ATTACK/03.png","IMG/ALLIES/CUBICE/ATTACK/04.png","IMG/ALLIES/CUBICE/ATTACK/05.png","IMG/ALLIES/CUBICE/ATTACK/06.png","IMG/ALLIES/CUBICE/ATTACK/07.png","IMG/ALLIES/CUBICE/ATTACK/08.png","IMG/ALLIES/CUBICE/ATTACK/09.png","IMG/ALLIES/CUBICE/ATTACK/10.png"],
	"defeat": ["IMG/ALLIES/CUBICE/DEFEAT/01.png","IMG/ALLIES/CUBICE/DEFEAT/02.png","IMG/ALLIES/CUBICE/DEFEAT/03.png","IMG/ALLIES/CUBICE/DEFEAT/04.png","IMG/ALLIES/CUBICE/DEFEAT/05.png","IMG/ALLIES/CUBICE/DEFEAT/06.png","IMG/ALLIES/CUBICE/DEFEAT/07.png"],
	"hiteffect":["IMG/ALLIES/CUBICE/HITEFFECT/01.png","IMG/ALLIES/CUBICE/HITEFFECT/02.png"]
	},
	"icytreat":{ "stand":["IMG/ALLIES/ICYTREAT/STAND/01.png","IMG/ALLIES/ICYTREAT/STAND/02.png","IMG/ALLIES/ICYTREAT/STAND/03.png","IMG/ALLIES/ICYTREAT/STAND/04.png","IMG/ALLIES/ICYTREAT/STAND/05.png","IMG/ALLIES/ICYTREAT/STAND/06.png"],
	"attack": ["IMG/ALLIES/ICYTREAT/ATTACK/01.png","IMG/ALLIES/ICYTREAT/ATTACK/02.png","IMG/ALLIES/ICYTREAT/ATTACK/03.png","IMG/ALLIES/ICYTREAT/ATTACK/04.png","IMG/ALLIES/ICYTREAT/ATTACK/05.png","IMG/ALLIES/ICYTREAT/ATTACK/06.png","IMG/ALLIES/ICYTREAT/ATTACK/07.png","IMG/ALLIES/ICYTREAT/ATTACK/08.png","IMG/ALLIES/ICYTREAT/ATTACK/09.png","IMG/ALLIES/ICYTREAT/ATTACK/10.png"],
	"defeat": ["IMG/ALLIES/ICYTREAT/DEFEAT/01.png","IMG/ALLIES/ICYTREAT/DEFEAT/02.png","IMG/ALLIES/ICYTREAT/DEFEAT/03.png","IMG/ALLIES/ICYTREAT/DEFEAT/04.png","IMG/ALLIES/ICYTREAT/DEFEAT/05.png","IMG/ALLIES/ICYTREAT/DEFEAT/06.png","IMG/ALLIES/ICYTREAT/DEFEAT/07.png"],
	"hiteffect":["IMG/ALLIES/ICYTREAT/HITEFFECT/01.png","IMG/ALLIES/ICYTREAT/HITEFFECT/02.png"],
	"projectile":["IMG/ALLIES/ICYTREAT/PROJECTILE/01.png","IMG/ALLIES/ICYTREAT/PROJECTILE/02.png", "IMG/ALLIES/ICYTREAT/PROJECTILE/03.png"]
	},
	"eggy":{ "stand":["IMG/ALLIES/EGGY/STAND/01.png","IMG/ALLIES/EGGY/STAND/02.png","IMG/ALLIES/EGGY/STAND/03.png","IMG/ALLIES/EGGY/STAND/04.png","IMG/ALLIES/EGGY/STAND/05.png","IMG/ALLIES/EGGY/STAND/06.png"],
	"defeat": ["IMG/ALLIES/EGGY/DEFEAT/01.png","IMG/ALLIES/EGGY/DEFEAT/02.png","IMG/ALLIES/EGGY/DEFEAT/03.png","IMG/ALLIES/EGGY/DEFEAT/04.png","IMG/ALLIES/EGGY/DEFEAT/05.png","IMG/ALLIES/EGGY/DEFEAT/06.png","IMG/ALLIES/EGGY/DEFEAT/07.png", "IMG/ALLIES/EGGY/DEFEAT/08.png"]
	},
	
	"oven":{ "stand":["IMG/ALLIES/OVEN/STAND/01.png","IMG/ALLIES/OVEN/STAND/02.png","IMG/ALLIES/OVEN/STAND/03.png","IMG/ALLIES/OVEN/STAND/04.png","IMG/ALLIES/OVEN/STAND/05.png"],
	"defeat": ["IMG/ALLIES/OVEN/DEFEAT/01.png","IMG/ALLIES/OVEN/DEFEAT/02.png","IMG/ALLIES/OVEN/DEFEAT/03.png","IMG/ALLIES/OVEN/DEFEAT/04.png","IMG/ALLIES/OVEN/DEFEAT/05.png","IMG/ALLIES/OVEN/DEFEAT/06.png","IMG/ALLIES/OVEN/DEFEAT/07.png", "IMG/ALLIES/OVEN/DEFEAT/08.png"]
	},
	
	"candystand":{ "stand":["IMG/ALLIES/CANDYSTAND/STAND/01.png","IMG/ALLIES/CANDYSTAND/STAND/02.png","IMG/ALLIES/CANDYSTAND/STAND/03.png","IMG/ALLIES/CANDYSTAND/STAND/04.png","IMG/ALLIES/CANDYSTAND/STAND/05.png"],
	"defeat": ["IMG/ALLIES/CANDYSTAND/DEFEAT/01.png","IMG/ALLIES/CANDYSTAND/DEFEAT/02.png","IMG/ALLIES/CANDYSTAND/DEFEAT/03.png","IMG/ALLIES/CANDYSTAND/DEFEAT/04.png","IMG/ALLIES/CANDYSTAND/DEFEAT/05.png","IMG/ALLIES/CANDYSTAND/DEFEAT/06.png","IMG/ALLIES/CANDYSTAND/DEFEAT/07.png", "IMG/ALLIES/CANDYSTAND/DEFEAT/08.png"]
	},
	"lolipop":{ "stand":["IMG/ALLIES/LOLIPOP/STAND/01.png","IMG/ALLIES/LOLIPOP/STAND/02.png","IMG/ALLIES/LOLIPOP/STAND/03.png","IMG/ALLIES/LOLIPOP/STAND/04.png","IMG/ALLIES/LOLIPOP/STAND/05.png","IMG/ALLIES/LOLIPOP/STAND/06.png"],
	"attack": ["IMG/ALLIES/LOLIPOP/ATTACK/01.png","IMG/ALLIES/LOLIPOP/ATTACK/02.png","IMG/ALLIES/LOLIPOP/ATTACK/03.png","IMG/ALLIES/LOLIPOP/ATTACK/04.png","IMG/ALLIES/LOLIPOP/ATTACK/05.png","IMG/ALLIES/LOLIPOP/ATTACK/06.png","IMG/ALLIES/LOLIPOP/ATTACK/07.png","IMG/ALLIES/LOLIPOP/ATTACK/08.png","IMG/ALLIES/LOLIPOP/ATTACK/09.png","IMG/ALLIES/LOLIPOP/ATTACK/10.png","IMG/ALLIES/LOLIPOP/ATTACK/11.png"],
	"defeat": ["IMG/ALLIES/LOLIPOP/DEFEAT/01.png","IMG/ALLIES/LOLIPOP/DEFEAT/02.png","IMG/ALLIES/LOLIPOP/DEFEAT/03.png","IMG/ALLIES/LOLIPOP/DEFEAT/04.png","IMG/ALLIES/LOLIPOP/DEFEAT/05.png","IMG/ALLIES/LOLIPOP/DEFEAT/06.png","IMG/ALLIES/LOLIPOP/DEFEAT/07.png"],
	"hiteffect":["IMG/ALLIES/LOLIPOP/HITEFFECT/01.png","IMG/ALLIES/LOLIPOP/HITEFFECT/02.png"]
	},
	"chocobunny":{ "stand":["IMG/ALLIES/CHOCOBUNNY/STAND/01.png","IMG/ALLIES/CHOCOBUNNY/STAND/02.png","IMG/ALLIES/CHOCOBUNNY/STAND/03.png","IMG/ALLIES/CHOCOBUNNY/STAND/04.png"],
	"defeat": ["IMG/ALLIES/CHOCOBUNNY/DEFEAT/01.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/02.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/03.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/04.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/05.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/06.png","IMG/ALLIES/CHOCOBUNNY/DEFEAT/07.png"]
	},
	
	"vendingmachine":{ "stand":["IMG/ALLIES/VENDINGMACHINE/STAND/01.png","IMG/ALLIES/VENDINGMACHINE/STAND/02.png","IMG/ALLIES/VENDINGMACHINE/STAND/03.png","IMG/ALLIES/VENDINGMACHINE/STAND/04.png","IMG/ALLIES/VENDINGMACHINE/STAND/05.png"],
	"defeat": ["IMG/ALLIES/VENDINGMACHINE/DEFEAT/01.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/02.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/03.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/04.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/05.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/06.png","IMG/ALLIES/VENDINGMACHINE/DEFEAT/07.png", "IMG/ALLIES/VENDINGMACHINE/DEFEAT/08.png"]
	},
	
	/*"fastfood":{
	},*/
	"pizzaslica":{ "stand":["IMG/ALLIES/PIZZASLICA/STAND/01.png","IMG/ALLIES/PIZZASLICA/STAND/02.png","IMG/ALLIES/PIZZASLICA/STAND/03.png","IMG/ALLIES/PIZZASLICA/STAND/04.png","IMG/ALLIES/PIZZASLICA/STAND/05.png","IMG/ALLIES/PIZZASLICA/STAND/06.png"],
	"attack": ["IMG/ALLIES/PIZZASLICA/ATTACK/01.png","IMG/ALLIES/PIZZASLICA/ATTACK/02.png","IMG/ALLIES/PIZZASLICA/ATTACK/03.png","IMG/ALLIES/PIZZASLICA/ATTACK/04.png","IMG/ALLIES/PIZZASLICA/ATTACK/05.png","IMG/ALLIES/PIZZASLICA/ATTACK/06.png","IMG/ALLIES/PIZZASLICA/ATTACK/07.png","IMG/ALLIES/PIZZASLICA/ATTACK/08.png","IMG/ALLIES/PIZZASLICA/ATTACK/09.png","IMG/ALLIES/PIZZASLICA/ATTACK/10.png"],
	"defeat": ["IMG/ALLIES/PIZZASLICA/DEFEAT/01.png","IMG/ALLIES/PIZZASLICA/DEFEAT/02.png","IMG/ALLIES/PIZZASLICA/DEFEAT/03.png","IMG/ALLIES/PIZZASLICA/DEFEAT/04.png","IMG/ALLIES/PIZZASLICA/DEFEAT/05.png","IMG/ALLIES/PIZZASLICA/DEFEAT/06.png","IMG/ALLIES/PIZZASLICA/DEFEAT/07.png"],
	"hiteffect":["IMG/ALLIES/PIZZASLICA/HITEFFECT/01.png","IMG/ALLIES/PIZZASLICA/HITEFFECT/02.png"],
	"projectile":["IMG/ALLIES/PIZZASLICA/PROJECTILE/01.png"]
	},
	
	/*"fruitbasket":{
	}*/
	
	"effects":{ "slow": ["IMG/MISC/SLOW/01.png","IMG/MISC/SLOW/02.png","IMG/MISC/SLOW/03.png","IMG/MISC/SLOW/04.png","IMG/MISC/SLOW/05.png","IMG/MISC/SLOW/06.png"],
	"boost": ["IMG/MISC/BOOST/01.png","IMG/MISC/BOOST/02.png","IMG/MISC/BOOST/03.png"]
	}
}

var sprite_data = {
	"armon":{ "move":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80],
			xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
		},
		"attack":{ x:[160,160,160,160,160,160,160,160,160,160], y:[240,240,240,240,240,240,240,240,240,240], 
			xOffset:[5,5,5,5,5,5,5,5,5,5], yOffset:[-75,-75,-75,-75,-75,-75,-75,-75,-75,-75]
		},
		"defeat":{ x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80], 
			xOffset:[5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5]
		}
	},
	"armpro":{ "move":{ x:[100,100,100,100,100,100], y:[100,100,100,100,100,100],
			xOffset:[5,5,5,5,5,5], yOffset:[-10,-10,-10,-10,-10,-10]
		},
		"attack":{ x:[300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300], y:[300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300], 
			xOffset:[-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85], yOffset:[-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110,-110]
		},
		"defeat":{ x:[100,100,100,100,100,100,100], y:[100,100,100,100,100,100,100],
			xOffset:[5,5,5,5,5,5,5], yOffset:[-10,-10,-10,-10,-10,-10,-10]
		}
	},
	"chumpy":{ "move":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80],
			xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
		},
		"attack":{ x:[160,160,160,160,160,160,160,160,160,160], y:[80,80,80,80,80,80,80,80,80,80], 
			xOffset:[5,5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5,5]
		},
		"defeat":{ x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80],
			xOffset:[5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5]
		}
	},
	"q":{ "move":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80],
			xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
		},
		"attack":{ x:[160,160,160,160,160,160,160,160,160,160], y:[80,80,80,80,80,80,80,80,80,80], 
			xOffset:[5,5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5,5]
		},
		"defeat":{ x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80],
			xOffset:[5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5]
		}
	},
	
	"fridge":{ "stand":{ x:[80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			}
	},
	"cubice":{ "stand":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
			},
			"attack": { x:[160,160,160,160,160,160,160,160,160,160], y:[80,80,80,80,80,80,80,80,80,80], 
				xOffset:[-85,-85,-85,-85,-85,-85,-85,-85,-85,-85], yOffset:[5,5,5,5,5,5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			}
	},
	"icytreat":{ "stand":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
			},
			"attack": { x:[80,80,80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80],
				xOffset:[5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5]
			},
			"projectile": { x:[20,20,20], y:[20,20,20], 
				xOffset:[25,25,25], yOffset:[25,25,25]
			},
			"hiteffect":{ x:[20,20], y:[20,20], 
				xOffset:[25,25], yOffset:[25,25]
			}
	},
	"eggy":{ "stand":{ x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
			},
			"defeat": { x:[240,240,240,240,240,240,240], y:[240,240,240,240,240,240,240], 
				xOffset:[-75,-75,-75,-75,-75,-75,-75], yOffset:[-75,-75,-75,-75,-75,-75,-75]
			}
	},
	
	"oven":{ "stand":{ x:[80,80,80,80,80], y:[80,80,80,80,80], 
				xOffset:[5,5,5,5,5], yOffset:[5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			}
	},
	
	"candystand":{ "stand":{ x:[80,80,80,80,80], y:[80,80,80,80,80], 
				xOffset:[5,5,5,5,5], yOffset:[5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			}
	},
	"lolipop":{ "stand":{ x:[80,80,80,80,80,80], y:[90,90,90,90,90,90], 
				xOffset:[5,5,5,5,5,5], yOffset:[0,0,0,0,0,0]
			},
			"attack": { x:[160,160,160,160,160,160,160,160,160,160,160], y:[150,150,150,150,150,150,150,150,150,150,150], 
				xOffset:[-85,-85,-85,-85,-85,-85,-85,-85,-85,-85,-85], yOffset:[-65,-65,-65,-65,-65,-65,-65,-65,-65,-65,-65]
			},
			"defeat": { x:[80,80,80,80,80,80,80], y:[90,90,90,90,90,90,90],
				xOffset:[5,5,5,5,5,5,5], yOffset:[0,0,0,0,0,0,0]
			}
	},
	"chocobunny":{ "stand":{ x:[80,80,80,80], y:[80,80,80,80], 
				xOffset:[5,5,5,5], yOffset:[5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5]
			}
	},
	
	"vendingmachine":{ "stand":{ x:[80,80,80,80,80], y:[80,80,80,80,80], 
				xOffset:[5,5,5,5,5], yOffset:[5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5]
			}
	},
	
	/*"fastfood":{
	},*/
	"pizzaslica":{ "stand":{ x:[80,80,80,80,80,80], y:[80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5], yOffset:[5,5,5,5,5,5]
			},
			"attack": { x:[80,80,80,80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80,80,80,80], 
				xOffset:[5,5,5,5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5,5,5,5]
			},
			"defeat": { x:[80,80,80,80,80,80,80], y:[80,80,80,80,80,80,80],
				xOffset:[5,5,5,5,5,5,5], yOffset:[5,5,5,5,5,5,5]
			},
			"projectile": { x:[20,20,20], y:[20,20,20], 
				xOffset:[25,25,25], yOffset:[50,50,50]
			},
			"hiteffect":{ x:[20,20], y:[20,20], 
				xOffset:[25,25], yOffset:[50,50]
			}
	},
	
	/*"fruitbasket":{
	},*/
}

var fields = {
	"eggy":"IMG/FIELDS/eggy_field.png"
}

var field_data = {
	"eggy": { x:240, y:240, xOffset:-75, yOffset:-75, duration: 560, effect:"slow"}
}

var enemy_icons = {
	"armon": "IMG/ENEMIES/ARMON/icon.png",
	"armpro": "IMG/ENEMIES/ARMPRO/icon.png",
	"chumpy": "IMG/ENEMIES/CHUMPY/icon.png",
	"q": "IMG/ENEMIES/Q/icon.png"
}

var icon_data = {
	"armon": {x:20, y:20,
			xOffset:0, yOffset:0},
	"armpro": {x:30, y:30,
			xOffset:-5, yOffset:-5},
	"chumpy": {x:20, y:20,
			xOffset:0, yOffset:0},
	"q": {x:20, y:20,
			xOffset:0, yOffset:0}
}

var ally_statusboxes = {
	"fridge": "IMG/ALLIES/FRIDGE/stats.png",
	"cubice": "IMG/ALLIES/CUBICE/stats.png",
	"icytreat": "IMG/ALLIES/ICYTREAT/stats.png",
	"eggy": "IMG/ALLIES/EGGY/stats.png"
}

var unit_stats = {

	"armon":{ health: 500, gold: 100, range: 3, attack: 6, speed: 1, frameHit: [6,7,8]
	},
	"armpro":{ health: 1200, gold: 500, range: 3, attack: 12, speed: 0.5, frameHit: [9,10,11,12,13,14,15,16,17,18]
	},
	"chumpy":{ health: 125, gold: 20, range: 1, attack: 5, speed: 1.5, frameHit: [6,7]
	},
	"q":{ health: 50, gold: 30, range: 1, attack: 4, speed: 4, frameHit:[3,4,5,6]
	},
	
	"fridge":{ health:50, type:0, timer: 0,cooldown: 250, builds:["cubice","icytreat","eggy"], storage: 2
	},
	"cubice":{ health: 200, range: 1, attack: 10, type: 1, frameHit:[7,8]
	}, 
	"icytreat":{ health: 150, type: 2, attack: 4 , projectile_speed: 5, release:[7,8,9]
	},
	"eggy":{ health: 250, type: 3, spawns:"eggy"
	},
	
	"oven": { health:50, type:0, timer: 0,cooldown: 250, builds:[], storage: 2
	},
	
	"candystand": { health:50, type:0, timer: 0,cooldown: 250, builds:["lolipop","chocobunny"], storage: 2
	},
	"lolipop":{ health: 200, range: 1, attack: 10, type: 1, frameHit:[7,8]
	},
	"chocobunny":{ health: 250, type: 4, aura:"boost"
	},

	"vendingmachine": { health:50, type:0, timer: 0,cooldown: 250, builds:[], storage: 2
	},
	
	"fastfood": { health:50, type:0, timer: 0,cooldown: 250, builds:["pizzaslica"], storage: 2
	},
	"pizzaslica":{ health: 150, type: 2, attack: 3, projectile_speed: 12, release:[4,6,8,10]
	},
	
	"fruitbasket": { health:50, type:0, timer: 0,cooldown: 250, builds:[], storage: 2
	}
}

var build_stats = {
}

var screen_offset = {x:-8, y:-8}

var game_stats = { gold: 300, 
	spawn_time: 70,
	spawn_counter: 0,
	current_life: 2000,
	max_life: 2000,
	time_left: 200,
	screen: 1,
	status: 0,
	max_gold: 999999
}