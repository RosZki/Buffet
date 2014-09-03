effects = function(field){

	this.name = field.get_effect();
	this.current_frame = 0;
	this.tick = 0;
	this.delay = 6;
	this.field = field;
	
	this.get_name = function(){
		return this.name;
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
		if(this.current_frame == array_sprites["effects"][this.name].length-1){
			this.current_frame = 0;
		}
		else
			this.current_frame++;
	}
	
	this.get_current_sprite = function(){
		return array_sprites["effects"][this.name][this.current_frame];
	}
	
	this.get_field = function(){
		return this.field;
	}
}