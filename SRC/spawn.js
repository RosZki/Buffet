spawn = function(name, time){

	this.name = name;
	this.time = time;
	this.total_time = time;
	
	this.get_name = function(){
		return this.name;
	}
	
	this.get_time = function(){
		return this.time;
	}
	
	this.get_total_time = function(){
		return this.total_time;
	}
	
	this.tick = function(){
		this.time--;
	}

}