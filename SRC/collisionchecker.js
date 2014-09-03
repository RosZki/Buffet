collisionchecker = function(){
		
	this.enemy_check = function(enemy, list_allies){
		for(y=0;y<list_allies.length;y++){
			if(is_within(enemy.x+enemy.get_x_offset()+enemy.get_x()/2.8,enemy.y+enemy.get_y_offset(),enemy.get_x()/2,enemy.get_y(),list_allies[y].x + list_allies[y].get_x_offset(),list_allies[y].y + list_allies[y].get_y_offset(),list_allies[y].get_x(),list_allies[y].get_y()) && list_allies[y].get_current() != "defeat"){
				return true;
			}
		}
		return false;
	}
	
	this.enemy_damage_check = function(enemy, list_units, lane){
		if(enemy.get_current() == "attack"){
			switch(enemy.range){
				case 3: if(lane-1 != -1){
							for(y=0;y<list_units[lane-1].get_allies().length;y++){
								if(is_within(enemy.x+enemy.get_x_offset()+enemy.get_x()/2.8,enemy.y+enemy.get_y_offset(),enemy.get_x()/2,enemy.get_y(),list_units[lane-1].get_allies()[y].x + list_units[lane-1].get_allies()[y].get_x_offset(),list_units[lane-1].get_allies()[y].y + list_units[lane-1].get_allies()[y].get_y_offset(),list_units[lane-1].get_allies()[y].get_x(),list_units[lane-1].get_allies()[y].get_y())){
									for(x=0;x<enemy.frameHit.length;x++){
										if(enemy.get_current_frame() == enemy.frameHit[x] && enemy.tick == 0){
											list_units[lane-1].get_allies()[y].health = list_units[lane-1].get_allies()[y].health - enemy.attack;
										}
									}
								}
							}
						}
						if(lane+1 != 5){
							for(y=0;y<list_units[lane+1].get_allies().length;y++){
								if(is_within(enemy.x+enemy.get_x_offset()+enemy.get_x()/2.8,enemy.y+enemy.get_y_offset(),enemy.get_x()/2,enemy.get_y(),list_units[lane+1].get_allies()[y].x + list_units[lane+1].get_allies()[y].get_x_offset(),list_units[lane+1].get_allies()[y].y + list_units[lane+1].get_allies()[y].get_y_offset(),list_units[lane+1].get_allies()[y].get_x(),list_units[lane+1].get_allies()[y].get_y())){
									for(x=0;x<enemy.frameHit.length;x++){
										if(enemy.get_current_frame() == enemy.frameHit[x] && enemy.tick == 0){
											list_units[lane+1].get_allies()[y].health = list_units[lane+1].get_allies()[y].health - enemy.attack;
										}
									}
								}
							}
						}
				case 1: 	
				case 2: for(y=0;y<list_units[lane].get_allies().length;y++){
							if(is_within(enemy.x+enemy.get_x_offset()+enemy.get_x()/2.8,enemy.y+enemy.get_y_offset(),enemy.get_x()/2,enemy.get_y(),list_units[lane].get_allies()[y].x + list_units[lane].get_allies()[y].get_x_offset(),list_units[lane].get_allies()[y].y + list_units[lane].get_allies()[y].get_y_offset(),list_units[lane].get_allies()[y].get_x(),list_units[lane].get_allies()[y].get_y())){
								for(x=0;x<enemy.frameHit.length;x++){
									if(enemy.get_current_frame() == enemy.frameHit[x] && enemy.tick == 0){
										list_units[lane].get_allies()[y].health = list_units[lane].get_allies()[y].health - enemy.attack;
									}
								}
							}
						} break;
			}
		}
	}
	
	this.ally_check = function(ally, list_units, lane){
		switch(ally.type){
			case 1: switch(ally.range){
				case 1: for(y=0;y<list_units[lane].get_enemies().length;y++){
							if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(),list_units[lane].get_enemies()[y].x + list_units[lane].get_enemies()[y].get_x_offset(),list_units[lane].get_enemies()[y].y + list_units[lane].get_enemies()[y].get_y_offset(),list_units[lane].get_enemies()[y].get_x(),list_units[lane].get_enemies()[y].get_y()) && list_units[lane].get_enemies()[y].get_current() != "defeat"){
								return true;
							}
						}
						return false;
			} break;
			case 2:{ for(y=0;y<list_units[lane].get_enemies().length;y++){
						if(list_units[lane].get_enemies()[y].x + list_units[lane].get_enemies()[y].get_x_offset() + list_units[lane].get_enemies()[y].get_x() >= 0 && list_units[lane].get_enemies()[y].get_current() != "defeat"){
							return true;
						}
					}
					return false;
			} break;
		}
	}
	
	this.ally_damage_check = function(ally, list_units, lane){
		if(ally.get_current() == "attack"){
			switch(ally.type){
				case 1: switch(ally.range){
					case 3:	if(lane-1 != -1){
								for(y=0;y<list_units[lane-1].get_enemies().length;y++){
									if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(),list_units[lane-1].get_enemies()[y].x + list_units[lane-1].get_enemies()[y].get_x_offset(),list_units[lane-1].get_enemies()[y].y + list_units[lane-1].get_enemies()[y].get_y_offset(),list_units[lane-1].get_enemies()[y].get_x(),list_units[lane-1].get_enemies()[y].get_y())){
										for(x=0;x<ally.frameHit.length;x++){
											if(ally.get_current_frame() == ally.frameHit[x] && ally.tick == 0){
												list_units[lane-1].get_enemies()[y].health = list_units[lane-1].get_enemies()[y].health - ally.attack;
											}
										}
									}
								} 
							}
							if(lane+1 != 5){
								for(y=0;y<list_units[lane+1].get_enemies().length;y++){
									if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(),list_units[lane+1].get_enemies()[y].x + list_units[lane+1].get_enemies()[y].get_x_offset(),list_units[lane+1].get_enemies()[y].y + list_units[lane+1].get_enemies()[y].get_y_offset(),list_units[lane+1].get_enemies()[y].get_x(),list_units[lane+1].get_enemies()[y].get_y())){
										for(x=0;x<ally.frameHit.length;x++){
											if(ally.get_current_frame() == ally.frameHit[x] && ally.tick == 0){
												list_units[lane+1].get_enemies()[y].health = list_units[lane+1].get_enemies()[y].health - ally.attack;
											}
										}
									}
								}
							}
					case 1: 	
					case 2: for(y=0;y<list_units[lane].get_enemies().length;y++){
								if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(),list_units[lane].get_enemies()[y].x + list_units[lane].get_enemies()[y].get_x_offset(),list_units[lane].get_enemies()[y].y + list_units[lane].get_enemies()[y].get_y_offset(),list_units[lane].get_enemies()[y].get_x(),list_units[lane].get_enemies()[y].get_y())){
									for(x=0;x<ally.frameHit.length;x++){
										if(ally.get_current_frame() == ally.frameHit[x] && ally.tick == 0){
											list_units[lane].get_enemies()[y].health = list_units[lane].get_enemies()[y].health - ally.attack;
										}
									}
								}
							} break;
				} break;
				case 2: for(y=0;y<ally.release.length;y++){
							if(ally.get_current_frame() == ally.release[y] && ally.tick == 0){
								list_units[lane].get_projectiles().push(new unit(ally.x-45, ally.y,ally.get_name(), "projectile"));
							}
						}
						 for(y=0;y<list_units[lane].get_enemies().length;y++){
								if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(),list_units[lane].get_enemies()[y].x + list_units[lane].get_enemies()[y].get_x_offset(),list_units[lane].get_enemies()[y].y + list_units[lane].get_enemies()[y].get_y_offset(),list_units[lane].get_enemies()[y].get_x(),list_units[lane].get_enemies()[y].get_y())){
									for(x=0;x<ally.release.length;x++){
										if(ally.get_current_frame() == ally.release[x] && ally.tick == 0){
											list_units[lane].get_enemies()[y].health = list_units[lane].get_enemies()[y].health - ally.attack;
										}
									}
								}
							} break;
						
			}
		}
	}
	
	this.projectile_damage_check = function(projectile, list_enemies){
		if(projectile.get_current() != "hiteffect"){
			for(y=0;y<list_enemies.length;y++){
				if(is_within(projectile.x+projectile.get_x_offset(),projectile.y+projectile.get_y_offset(),projectile.get_x(),projectile.get_y(),list_enemies[y].x + list_enemies[y].get_x_offset(),list_enemies[y].y + list_enemies[y].get_y_offset(),list_enemies[y].get_x(),list_enemies[y].get_y()) && list_enemies[y].get_current() != "defeat"){
					projectile.set_current_sprite("hiteffect");
					list_enemies[y].health-=projectile.attack;
				}
			}
		}
	}
	
	this.ally_build_check = function(ally, list_units, lane){
		for(y=0;y<list_units[lane].get_allies().length;y++){
			if(is_within(ally.x+ally.get_x_offset(),ally.y+ally.get_y_offset(),ally.get_x(),ally.get_y(), list_units[lane].get_allies()[y].x+list_units[lane].get_allies()[y].get_x_offset(),list_units[lane].get_allies()[y].y+list_units[lane].get_allies()[y].get_y_offset(),list_units[lane].get_allies()[y].get_x(),list_units[lane].get_allies()[y].get_y()))
				return true;
		}
		return false;
	}
	
}