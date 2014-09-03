field = function(x,y,name){

	this.name = name;
	this.x = x;
	this.y = y;
	this.duration = field_data[this.name].duration;
	this.effect = field_data[this.name].effect;
	this.list_affected = new Array();
	
	this.get_image = function(){
		return array_fields[this.name];
	}
	
	this.get_x = function(){
		return field_data[this.name].x;
	}
	
	this.get_y = function(){
		return field_data[this.name].y;
	}
	
	this.get_x_offset = function(){
		return field_data[this.name].xOffset;
	}
	
	this.get_y_offset = function(){
		return field_data[this.name].yOffset;
	}
	
	this.get_name = function(){
		return this.name;
	}
	
	this.get_affected = function(){
		return this.list_affected;
	}
	
	this.get_effect = function(){
		return this.effect;
	}
	
	this.in_range = function(enemy){
		if(is_within(enemy.x,enemy.y,enemy.get_x(),enemy.get_y(),
			this.x + this.get_x_offset(),this.y + this.get_y_offset(),this.get_x(),this.get_y())){
			return true;
		}
		else{
			if(this.is_affected(enemy))
				this.list_affected.splice(this.list_affected.indexOf(enemy), 1);
			return false;
		}
	}
	
	this.is_affected = function(enemy){
		if(this.list_affected.indexOf(enemy) == -1)
			return false;
		else
			return true;
	}
	
}