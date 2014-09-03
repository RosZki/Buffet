var preloader = new preloader();
var spawntimer = new spawntimer();
var statsmodifier = new statsmodifier();
var collisionchecker = new collisionchecker();
var id;

//UI VARIABLES
var screen_space;
var screen_context;
var main;
var background;
var array_frames;
var unit_selected;

//UNIT DATA VARIABLES
var array_sprites;
var array_fields;
var array_icons;
var array_statusboxes;

//UNIT DATA
var array_units;
var array_units_fields;

var array_factory_selection = ["fridge"];
var array_unit_selection = { "fridge":["cubice","icytreat","eggy"], };

//INTERACTION VARIABLES
var selected_factory;
var selected_unit;
var is_selected_again;
var dragged_factory;
var dragged_unit;
var x_grid, y_grid;
var in_screen;

var initialize_data = function(){
	array_units = new Array();
	x_grid = -1;
	y_grid = -1;
	in_screen = false;
	array_units_fields = new Array();
	for(i=0;i<5;i++){
		array_units.push(new lane());
	}
	
	for(i=0;i<array_factory_selection.length;i++){
		for(j=0; j<array_unit_selection[array_factory_selection[i]].length; j++){
			build_stats[array_unit_selection[array_factory_selection[i]][j]] = new Object();
			build_stats[array_unit_selection[array_factory_selection[i]][j]]["available"] = 0;
			build_stats[array_unit_selection[array_factory_selection[i]][j]]["total"] = 0;
		}
	}
}

var initialize_ui_elements = function(){
	screen_space = document.getElementById("Screen");
	screen_context = screen_space.getContext("2d");
	document.onmousedown = on_mousedown;
	document.onmousemove = on_mousemove;
	document.onmouseup = on_mouseup;
	
	main = preloader.load_image(ui_elements['screen'].main);
	background = preloader.load_image(ui_elements['screen'].background);
	array_frames = preloader.load_array_images(ui_elements['screen'].frame);
	unit_selected = preloader.load_image(ui_elements['screen'].unit_selected);
}

var initialize_sprites = function(){
	array_sprites = new Object();
	for(var key in sprites){
		if(sprites.hasOwnProperty(key)){
			array_sprites[key] = new Object();
			for(var key2 in sprites[key]){
				if(sprites[key].hasOwnProperty(key2)){
					array_sprites[key][key2] = preloader.load_array_images(sprites[key][key2]);
				}
			}
		}
	}
}

var initialize_fields = function(){
	array_fields = new Object();
	for(var key in fields){
		if(fields.hasOwnProperty(key)){
			array_fields[key] = preloader.load_image(fields[key]);
		}
	}
}

var initialize_icons = function(){
	array_icons = new Object();
	for(var key in enemy_icons){
		if(enemy_icons.hasOwnProperty(key)){
			array_icons[key] = preloader.load_image(enemy_icons[key]);
		}
	}
}

var initialize_status_boxes = function(){
	array_statusboxes = new Object();
	for(var key in ally_statusboxes){
		if(ally_statusboxes.hasOwnProperty(key)){
			array_statusboxes[key] = preloader.load_image(ally_statusboxes[key]);
		}
	}
}

var init = function(){
	initialize_data();
	initialize_ui_elements();
	initialize_sprites();
	initialize_fields();
	initialize_icons();
	initialize_status_boxes();
	/*array_units[0].get_enemies().push(new unit(0,45, "armon", "attack"));
	array_units[1].get_enemies().push(new unit(0,90, "armon", "attack"));
	array_units[2].get_enemies().push(new unit(0,135, "armon", "attack"));
	array_units[3].get_enemies().push(new unit(0,180, "armon", "attack"));
	array_units[4].get_enemies().push(new unit(0,225, "armon", "attack"));
	array_units[5].get_enemies().push(new unit(0,270, "armon", "attack"));
	array_units[6].get_enemies().push(new unit(0,315, "armon", "attack"));
	array_units[7].get_enemies().push(new unit(0,360, "armon", "attack"));
	array_units[8].get_enemies().push(new unit(0,405, "armon", "attack"));*/
	
	/*spawntimer.add_spawn("armon", 700);
	spawntimer.add_spawn("armon", 710);
	spawntimer.add_spawn("armon", 720);
	spawntimer.add_spawn("q", 690);
	spawntimer.add_spawn("q", 610);
	spawntimer.add_spawn("q", 640);
	spawntimer.add_spawn("q", 680);
	spawntimer.add_spawn("chumpy", 540);
	spawntimer.add_spawn("chumpy", 560);
	spawntimer.add_spawn("chumpy", 555);
	spawntimer.add_spawn("chumpy", 530);
	
	spawntimer.add_spawn("armpro", 600);
	spawntimer.add_spawn("armpro", 650);
	spawntimer.add_spawn("armpro", 700);
	spawntimer.add_spawn("armpro", 750);
	spawntimer.add_spawn("armpro", 550);
	spawntimer.add_spawn("armpro", 500);*/
	
	/*array_units[0].get_allies().push(new unit(330,50,"eggy","stand"));
	array_units[0].get_allies().push(new unit(420,50,"eggy","stand"));
	array_units[0].get_allies().push(new unit(510,50,"eggy","stand"));
	array_units[0].get_allies().push(new unit(600,50,"eggy","stand"));
	array_units[0].get_allies().push(new unit(690,50,"eggy","stand"));
	
	array_units[1].get_allies().push(new unit(330,140,"eggy","stand"));
	array_units[1].get_allies().push(new unit(420,140,"eggy","stand"));
	array_units[1].get_allies().push(new unit(510,140,"eggy","stand"));
	array_units[1].get_allies().push(new unit(600,140,"eggy","stand"));
	array_units[1].get_allies().push(new unit(690,140,"eggy","stand"));
	
	array_units[2].get_allies().push(new unit(330,230,"eggy","stand"));
	array_units[2].get_allies().push(new unit(420,230,"eggy","stand"));
	array_units[2].get_allies().push(new unit(510,230,"eggy","stand"));
	array_units[2].get_allies().push(new unit(600,230,"eggy","stand"));
	array_units[2].get_allies().push(new unit(690,230,"eggy","stand"));
	
	array_units[3].get_allies().push(new unit(330,320,"eggy","stand"));
	array_units[3].get_allies().push(new unit(420,320,"eggy","stand"));
	array_units[3].get_allies().push(new unit(510,320,"eggy","stand"));
	array_units[3].get_allies().push(new unit(600,320,"eggy","stand"));
	array_units[3].get_allies().push(new unit(690,320,"eggy","stand"));
	
	array_units[4].get_allies().push(new unit(330,410,"eggy","stand"));
	array_units[4].get_allies().push(new unit(420,410,"eggy","stand"));
	array_units[4].get_allies().push(new unit(510,410,"eggy","stand"));
	array_units[4].get_allies().push(new unit(600,410,"eggy","stand"));
	array_units[4].get_allies().push(new unit(690,410,"eggy","stand"));*/
	
	/*array_units[0].get_allies().push(new unit(690,50,"pizzaslica","stand"));
	array_units[1].get_allies().push(new unit(690,140,"pizzaslica","stand"));
	array_units[2].get_allies().push(new unit(690,230,"pizzaslica","stand"));
	array_units[3].get_allies().push(new unit(690,320,"pizzaslica","stand"));
	array_units[4].get_allies().push(new unit(690,410,"pizzaslica","stand"));
	array_units[0].get_allies().push(new unit(780,50,"pizzaslica","stand"));
	array_units[1].get_allies().push(new unit(780,140,"pizzaslica","stand"));
	array_units[2].get_allies().push(new unit(780,230,"pizzaslica","stand"));
	array_units[3].get_allies().push(new unit(780,320,"pizzaslica","stand"));
	array_units[4].get_allies().push(new unit(780,410,"pizzaslica","stand"));
	array_units[0].get_allies().push(new unit(870,50,"pizzaslica","stand"));
	array_units[1].get_allies().push(new unit(870,140,"pizzaslica","stand"));
	array_units[2].get_allies().push(new unit(870,230,"pizzaslica","stand"));
	array_units[3].get_allies().push(new unit(870,320,"pizzaslica","stand"));
	array_units[4].get_allies().push(new unit(870,410,"pizzaslica","stand"));*/

	array_units[0].get_allies().push(new unit(690,50,"icytreat","stand"));
	array_units[1].get_allies().push(new unit(690,140,"icytreat","stand"));
	array_units[2].get_allies().push(new unit(690,230,"icytreat","stand"));
	array_units[3].get_allies().push(new unit(690,320,"icytreat","stand"));
	array_units[4].get_allies().push(new unit(690,410,"icytreat","stand"));
	array_units[0].get_allies().push(new unit(780,50,"icytreat","stand"));
	array_units[1].get_allies().push(new unit(780,140,"icytreat","stand"));
	array_units[2].get_allies().push(new unit(780,230,"icytreat","stand"));
	array_units[3].get_allies().push(new unit(780,320,"icytreat","stand"));
	array_units[4].get_allies().push(new unit(780,410,"icytreat","stand"));
	array_units[0].get_allies().push(new unit(870,50,"icytreat","stand"));
	array_units[1].get_allies().push(new unit(870,140,"icytreat","stand"));
	array_units[2].get_allies().push(new unit(870,230,"icytreat","stand"));
	array_units[3].get_allies().push(new unit(870,320,"icytreat","stand"));
	array_units[4].get_allies().push(new unit(870,410,"icytreat","stand"));
	
	//array_units[4].get_allies().push(new unit(600,410,"eggy","stand"));
	
	/*for(i=0;i<10;i++){
		spawntimer.add_spawn("q", 100+(i*10));
	}*/
	
	id = setInterval(loop, 1000/60);
}

var on_mousedown = function(e){
	var temp_x = e.pageX + screen_offset.x;
	var temp_y = e.pageY + screen_offset.y;
	
	//screen_context.fillRect(53+(126*i), 633, 100, 100);
	//screen_context.fillRect(619+(126*i), 633, 100, 100);
	//x, y, w, h, gX, gY){
	if(selected_factory != null){
		if(is_inside(53, 633, 100, 100, temp_x, temp_y)){
			if(selected_unit == 0)
				is_selected_again = true;
				
			else
				selected_unit = 0;
			dragged_unit = 0;
		}
		else if(is_inside((53+126), 633, 100, 100, temp_x, temp_y)){
			if(selected_unit == 1)
				is_selected_again = true;
			else
				selected_unit = 1;	
			dragged_unit = 1;
		}
		else if(is_inside((53+126*2), 633, 100, 100, temp_x, temp_y)){
			if(selected_unit == 2)
				is_selected_again = true;
			else
				selected_unit = 2;
			dragged_unit = 2;
		}
	}
	
	if(is_inside((619+126*0), 633, 100, 100, temp_x, temp_y)){
		if(selected_factory == 0)
			is_selected_again = true;
		else
			selected_factory = 0;
		dragged_factory = 0;
		selected_unit = null;
	}
	/*else if(is_inside((619+126*1), 633, 100, 100, temp_x, temp_y)){
		if(selected_factory == 1)
			is_selected_again = true;
		else
			selected_factory = 1;
		dragged_factory = 1;
		selected_unit = null;
	}
	else if(is_inside((619+126*2), 633, 100, 100, temp_x, temp_y)){
		if(selected_factory == 2)
			is_selected_again = true;
		else
			selected_factory = 2;
		dragged_factory = 2;
		selected_unit = null;
	}*/	
}

var on_mousemove = function(e){
	var temp_x = e.pageX + screen_offset.x;
	var temp_y = e.pageY + screen_offset.y;
	x_grid = get_x_grid(temp_x);
	y_grid = get_y_grid(temp_y);
	in_screen = is_in_screen(temp_x, temp_y);
}

var on_mouseup = function(e){
	var temp_x = e.pageX + screen_offset.x;
	var temp_y = e.pageY + screen_offset.y;
	
	if(dragged_unit != null || dragged_factory != null){
		if(in_screen){
			if(dragged_unit != null){
				place_ally(array_unit_selection[array_factory_selection[selected_factory]][dragged_unit], x_grid, y_grid);
			}
			else{
				place_ally(array_factory_selection[dragged_factory], x_grid, y_grid);
			}
		}
	}
	
	if(selected_factory != null){
		if(is_inside(53, 633, 100, 100, temp_x, temp_y) && is_selected_again){
			selected_unit = null;
			is_selected_again = false;
		}
		else if(is_inside((53+126), 633, 100, 100, temp_x, temp_y) && is_selected_again){
			selected_unit = null;
			is_selected_again = false;
		}
		else if(is_inside((53+126*2), 633, 100, 100, temp_x, temp_y) && is_selected_again){
			selected_unit = null;
			is_selected_again = false;
		}
	}
	
	if(is_inside((619+126*0), 633, 100, 100, temp_x, temp_y) && is_selected_again){
		selected_factory = null;
		selected_unit = null;
		is_selected_again = false;
	}
	/*else if(is_inside((619+126*1), 633, 100, 100, temp_x, temp_y) && is_selected_again){
		selected_factory = null;
		selected_unit = null;
		is_selected_again = false;
	}
	else if(is_inside((619+126*2), 633, 100, 100, temp_x, temp_y) && is_selected_again){
		selected_factory = null;
		selected_unit = null;
		is_selected_again = false;
	}*/	
	
	dragged_unit = null;
	dragged_factory = null;
}

var on_mousedown_click = function(e){
	
}

var on_mouseup_click = function(e){
}

var place_ally = function(name, x, y){
	if(x < 0)
		x = 0;
	else if (x > 8)
		x = 8;
	if(y < 0)
		y = 0;
	else if (y > 4)
		y = 4;
	var temp_new_unit = new unit(get_x_pos(x), get_y_pos(y), name, "stand");
	if(!collisionchecker.ally_build_check(temp_new_unit, array_units, y)){
		if(unit_stats[name].builds != null){
			for (l=0;l<unit_stats[name].builds.length;l++){
				build_stats[unit_stats[name].builds[l]]["total"]+=unit_stats[name].storage;
				build_stats[unit_stats[name].builds[l]]["total"]["available"] = 1;
			}
		}
		array_units[y].get_allies().push(temp_new_unit);
	}
}

var update_units = function(){
	for(i=0;i<array_units.length;i++){
		update_enemies(array_units[i].get_enemies(),array_units[i].get_allies(), i);
		update_allies(array_units[i].get_allies(), array_units[i].get_enemies(), i);
		update_projectiles(array_units[i].get_projectiles(), array_units[i].get_enemies());
	}
}

var update_fields = function(){
	for(i=0;i<array_units_fields.length;i++){
		if(array_units_fields[i].duration <= 0){
			array_units_fields.splice(i,1);
			continue;
		}
		else
			array_units_fields[i].duration--;
	}
}

var update_enemies = function(list_enemies, list_allies, lane){
	for(z=0;z<list_enemies.length;z++){
		if(list_enemies[z].health <= 0){
			if(list_enemies[z].get_current() != "defeat")
				list_enemies[z].set_current_sprite("defeat");
			else{
				if(list_enemies[z].get_current_frame() == array_sprites[list_enemies[z].get_name()][list_enemies[z].get_current()].length-1){
					list_enemies.splice(z,1);
					continue;
				}
			}
		}
		else if(list_enemies[z].x > 1024){
			list_enemies.splice(z,1);
			continue;
		}
		else{
			statsmodifier.modify_stats(list_enemies[z]);
			var isCollide = collisionchecker.enemy_check(list_enemies[z], list_allies);
			if(isCollide){
				if(list_enemies[z].get_current() != "attack")
					list_enemies[z].set_current_sprite("attack");
				collisionchecker.enemy_damage_check(list_enemies[z], array_units, lane);
			}
			else{
				if(list_enemies[z].get_current() != "move")
					list_enemies[z].set_current_sprite("move");
				list_enemies[z].x += list_enemies[z].speed;
			}
			for(y=0;y<array_units_fields.length;y++){
				if(array_units_fields[y].in_range(list_enemies[z])){
					if(!array_units_fields[y].is_affected(list_enemies[z])){
						array_units_fields[y].list_affected.push(list_enemies[z]);
						list_enemies[z].status.push(new effects(array_units_fields[y]));
					}
				}
			}
		}
		for(y=0;y<list_enemies[z].status.length;y++){
			if(!list_enemies[z].status[y].get_field().in_range(list_enemies[z]) || list_enemies[z].status[y].get_field().duration <= 0){
				list_enemies[z].status.splice(y,1);
				continue;
			}
			list_enemies[z].status[y].next();
		}
		list_enemies[z].next();
	}
}

var update_allies = function(list_allies, list_enemies, lane){
	for(z=0;z<list_allies.length;z++){
		if(list_allies[z].health <= 0){
			if(list_allies[z].get_current() != "defeat")
				list_allies[z].set_current_sprite("defeat");
			else{
				if(list_allies[z].get_current_frame() == array_sprites[list_allies[z].get_name()][list_allies[z].get_current()].length-1){
					list_allies.splice(z,1);
					continue;
				}
				if(list_allies[z].get_current_frame() == array_sprites[list_allies[z].get_name()][list_allies[z].get_current()].length-2 && list_allies[z].spawns != null && list_allies[z].tick == 0){
					array_units_fields.push(new field(list_allies[z].x, list_allies[z].y, list_allies[z].spawns));
				}
			}
		}
		else{
			if(list_allies[z].type != 0){
				statsmodifier.modify_stats(list_allies[z]);
				var isin_range = collisionchecker.ally_check(list_allies[z], array_units, lane);
				if(isin_range){
					if(list_allies[z].get_current() != "attack")
						list_allies[z].set_current_sprite("attack");
					collisionchecker.ally_damage_check(list_allies[z], array_units, lane);
				}
				else{
					if(list_allies[z].get_current() != "stand")
						list_allies[z].set_current_sprite("stand");
				}
			}else{
				if(list_allies[z].timer==list_allies[z].cooldown){
					for(y=0;y<list_allies[z].builds.length;y++){
						build_stats[list_allies[z].builds[y]]["available"]++;
						if(build_stats[list_allies[z].builds[y]]["available"] >= build_stats[list_allies[z].builds[y]]["total"]){
							build_stats[list_allies[z].builds[y]]["available"] = build_stats[list_allies[z].builds[y]]["total"];
						}
					}
					list_allies[z].timer=0;
				}
				else
					list_allies[z].timer++;
			}
		}
		list_allies[z].next();
	}																																																																																																																																																																																																																																															
}

var update_projectiles = function(list_projectiles, list_enemies){
	for(z=0;z<list_projectiles.length;z++){
		if(list_projectiles[z].x <= 0){
			list_projectiles.splice(z,1);
			continue;
		}
		else if(list_projectiles[z].get_current() == "hiteffect"){
			if(list_projectiles[z].get_current_frame() == array_sprites[list_projectiles[z].get_name()][list_projectiles[z].get_current()].length-1){
				list_projectiles.splice(z,1);
				continue;
			}
		}
		else{
			collisionchecker.projectile_damage_check(list_projectiles[z],list_enemies);
		}
		list_projectiles[z].next();
		list_projectiles[z].x -= list_projectiles[z].projectile_speed;
	}
}

var update = function(){
	update_units();
	update_fields();
	spawntimer.tick();
}

var draw_ui = function(){
	screen_context.drawImage(main,0,0,1024,768);
	screen_context.drawImage(array_frames[game_stats.status],0,0,1024,768);

	if(selected_factory != null){
		//screen_context.drawImage(array_statusboxes[array_factory_selection[selected_factory]],673,555,299,71);
		screen_context.drawImage(unit_selected, 614+(126*selected_factory), 628, 110, 110);
		if(selected_unit != null){
		//screen_context.drawImage(array_statusboxes[array_unit_selection[array_factory_selection[selected_factory]][selected_unit]],107,555,299,71);
		screen_context.drawImage(unit_selected, 48+(126*selected_unit), 628, 110, 110);
	}
		for(i=0;i<array_unit_selection[array_factory_selection[selected_factory]].length;i++){
			//screen_context.fillRect(53+(126*i), 633, 100, 100);
			screen_context.drawImage(array_sprites[array_unit_selection[array_factory_selection[selected_factory]][i]]["stand"][0], 
			53+(126*i) + sprite_data[array_unit_selection[array_factory_selection[selected_factory]][i]]["stand"].xOffset[0]*2, 
			633 + sprite_data[array_unit_selection[array_factory_selection[selected_factory]][i]]["stand"].yOffset[0]*2, 
			sprite_data[array_unit_selection[array_factory_selection[selected_factory]][i]]["stand"].x[0],
			sprite_data[array_unit_selection[array_factory_selection[selected_factory]][i]]["stand"].y[0]);
		}
	}
	
	for(i=0;i<array_factory_selection.length;i++){
		//screen_context.fillRect(619+(126*i), 633, 100, 100);
		screen_context.drawImage(array_sprites[array_factory_selection[i]]["stand"][0], 
			619+(126*i) + sprite_data[array_factory_selection[i]]["stand"].xOffset[0]*2, 
			633 + sprite_data[array_factory_selection[i]]["stand"].yOffset[0]*2, 
			sprite_data[array_factory_selection[i]]["stand"].x[0],
			sprite_data[array_factory_selection[i]]["stand"].y[0]);
	}
	
	screen_context.font = "20px Impact";
	screen_context.fillStyle = "white";
	screen_context.fillText("999999", 500, 576.5);
	
	/*for(i=0;i<9;i++){
		for(j=0;j<5;j++){
			screen_context.fillRect(i*101 + screen_offset.x + 63, j*92 + screen_offset.y + 58, 90, 90);
		}
	}*/
	
}

var draw_sprites = function(){
	for(i=0;i<array_units.length;i++){
		for(j=0;j<array_units[i].get_allies().length;j++){
			screen_context.drawImage(array_units[i].get_allies()[j].get_current_sprite(), 
			array_units[i].get_allies()[j].x + array_units[i].get_allies()[j].get_x_offset(),
			array_units[i].get_allies()[j].y + array_units[i].get_allies()[j].get_y_offset(),
			array_units[i].get_allies()[j].get_x(), array_units[i].get_allies()[j].get_y());
		}
		for(j=0;j<array_units[i].get_enemies().length;j++){
			screen_context.drawImage(array_units[i].get_enemies()[j].get_current_sprite(), 
			array_units[i].get_enemies()[j].x + array_units[i].get_enemies()[j].get_x_offset(),
			array_units[i].get_enemies()[j].y + array_units[i].get_enemies()[j].get_y_offset(),
			array_units[i].get_enemies()[j].get_x(), array_units[i].get_enemies()[j].get_y());
		}
		for(j=0;j<array_units[i].get_projectiles().length;j++){
			screen_context.drawImage(array_units[i].get_projectiles()[j].get_current_sprite(), 
			array_units[i].get_projectiles()[j].x + array_units[i].get_projectiles()[j].get_x_offset(),
			array_units[i].get_projectiles()[j].y + array_units[i].get_projectiles()[j].get_y_offset(),
			array_units[i].get_projectiles()[j].get_x(), array_units[i].get_projectiles()[j].get_y());
		}
	}
	
	var temp_x = x_grid;
	var temp_y = y_grid;
	
	if(temp_x < 0)
		temp_x = 0;
	else if (temp_x > 8)
		temp_x = 8;
	if(temp_y < 0)
		temp_y = 0;
	else if (temp_y > 4)
		temp_y = 4;
	
	if(dragged_unit != null && in_screen){
		screen_context.drawImage(array_sprites[array_unit_selection[array_factory_selection[selected_factory]][dragged_unit]]["stand"][0],
		get_x_pos(temp_x) + sprite_data[array_unit_selection[array_factory_selection[selected_factory]][dragged_unit]]["stand"].xOffset[0],
		get_y_pos(temp_y) + sprite_data[array_unit_selection[array_factory_selection[selected_factory]][dragged_unit]]["stand"].yOffset[0],
		sprite_data[array_unit_selection[array_factory_selection[selected_factory]][dragged_unit]]["stand"].x[0],
		sprite_data[array_unit_selection[array_factory_selection[selected_factory]][dragged_unit]]["stand"].y[0]);
	}
	
	if(dragged_factory != null && in_screen){
		screen_context.drawImage(array_sprites[array_factory_selection[dragged_factory]]["stand"][0],
		get_x_pos(temp_x) + sprite_data[array_factory_selection[dragged_factory]]["stand"].xOffset[0],
		get_y_pos(temp_y) + sprite_data[array_factory_selection[dragged_factory]]["stand"].yOffset[0],
		sprite_data[array_factory_selection[dragged_factory]]["stand"].x[0],
		sprite_data[array_factory_selection[dragged_factory]]["stand"].y[0]);
	}
}

var draw_effects = function(){
	for(i=0;i<array_units.length;i++){
		for(j=0;j<array_units[i].get_enemies().length;j++){
			for(k=0;k<array_units[i].get_enemies()[j].status.length;k++){
				screen_context.drawImage(array_units[i].get_enemies()[j].status[k].get_current_sprite(), 
				array_units[i].get_enemies()[j].x + sprite_data[array_units[i].get_enemies()[j].get_name()]["move"].xOffset[0],
				array_units[i].get_enemies()[j].y + sprite_data[array_units[i].get_enemies()[j].get_name()]["move"].yOffset[0],
				sprite_data[array_units[i].get_enemies()[j].get_name()]["move"].x[0], sprite_data[array_units[i].get_enemies()[j].get_name()]["move"].y[0]);
			}
		}
		for(j=0;j<array_units[i].get_allies().length;j++){
			for(k=0;k<array_units[i].get_allies()[j].status.length;k++){
				screen_context.drawImage(array_units[i].get_enemies()[j].status[k].get_current_sprite(), 
				array_units[i].get_allies()[j].x + sprite_data[array_units[i].get_allies()[j].get_name()]["move"].xOffset[0],
				array_units[i].get_allies()[j].y + sprite_data[array_units[i].get_allies()[j].get_name()]["move"].yOffset[0],
				sprite_data[array_units[i].get_allies()[j].get_name()]["move"].x[0], sprite_data[array_units[i].get_allies()[j].get_name()]["move"].y[0]);
			}
		}
	}
}

var draw_hit_effects = function(){
}

var draw_fields = function(){
	for(i=0;i<array_units_fields.length;i++){
		screen_context.drawImage(array_units_fields[i].get_image(),
		array_units_fields[i].x + array_units_fields[i].get_x_offset(),
		array_units_fields[i].y + array_units_fields[i].get_y_offset(),
		array_units_fields[i].get_x(), array_units_fields[i].get_y())
	}
}

var draw_spawn_icons = function(){
	for(i=0;i<spawntimer.get_spawn().length;i++){
		screen_context.drawImage(array_icons[spawntimer.get_spawn()[i].get_name()],
		58+(927*((spawntimer.get_spawn()[i].get_total_time()-spawntimer.get_spawn()[i].get_time())/spawntimer.get_spawn()[i].get_total_time()))-20 + icon_data[spawntimer.get_spawn()[i].get_name()].xOffset,
		9 + icon_data[spawntimer.get_spawn()[i].get_name()].yOffset, icon_data[spawntimer.get_spawn()[i].get_name()].x, icon_data[spawntimer.get_spawn()[i].get_name()].y);
	}
}

var draw = function(){
	screen_context.drawImage(background,0,38,1024,488);
	draw_fields();
	draw_sprites();
	draw_effects();
	draw_ui();
	draw_spawn_icons();
}

var loop = function(){
	update();
	draw();
}