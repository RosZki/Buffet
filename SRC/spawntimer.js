spawntimer = function(){

	this.array_spawn = new Array();
	
	this.add_spawn = function(name, time){
		this.array_spawn.push(new spawn(name, time));
	}

	this.tick = function(){
		for(z=0;z<this.array_spawn.length;z++){
			if(this.array_spawn[z].get_time() <= 0){
				var tempLane = random(0,4);
				array_units[tempLane].get_enemies().push(new unit(-90,50 + (tempLane*90),this.array_spawn[z].get_name(),"move"));
				this.array_spawn.splice(z,1);
			}else{
				this.array_spawn[z].tick();
			}
		}
	}
	
	this.get_spawn = function(){
		return this.array_spawn;
	}

}