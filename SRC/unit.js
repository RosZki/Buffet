unit = function(x,y, name, status){
	this.name = name;
	this.x = x;
	this.y = y;
	
	this.current = status;
	this.current_frame = 0;
	this.tick = 0;
	this.delay = 6;
	this.status = new Array();
	
	for(var key in unit_stats[this.name]){
		if(unit_stats[this.name].hasOwnProperty(key)){
			this[key] = unit_stats[this.name][key];
		}
	}
	
	this.reset_stats = function(){
		for(var key in unit_stats[this.name]){
			if(unit_stats[this.name].hasOwnProperty(key)){
				if(key != "health"){
					this[key] = unit_stats[this.name][key];
				}
			}
		}
	}
	
	this.set_current_sprite = function(status){
		this.current_frame = 0;
		this.current = status;
	}
	
	this.get_current = function(status){
		return this.current;
	}
	
	this.get_current_frame = function(){
		return this.current_frame;
	}
	
	this.get_current_sprite = function(){
		return array_sprites[this.name][this.current][this.current_frame];
	}
	
	this.get_name = function(){
		return this.name;
	}
	
	this.get_x = function(){
		return sprite_data[this.name][this.current].x[this.current_frame];
	}
	
	this.get_y = function(){
		return sprite_data[this.name][this.current].y[this.current_frame];
	}
	
	this.get_x_offset = function(){
		return sprite_data[this.name][this.current].xOffset[this.current_frame];
	}
	
	this.get_y_offset = function(){
		return sprite_data[this.name][this.current].yOffset[this.current_frame];
	}
	
	this.next = function(){
		if(this.tick < this.delay){
			this.tick++;
		}
		else{
			this.tick = 0;
			this.next_frame();
		}
	}
	
	this.next_frame = function(){
		if(this.current_frame == array_sprites[this.name][this.current].length-1){
			this.current_frame = 0;
		}
		else
			this.current_frame++;
	}
	
}