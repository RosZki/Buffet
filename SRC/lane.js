lane = function(){
	
	this.lane_enemies = new Array();
	this.lane_allies = new Array();
	this.lane_projectiles = new Array();
	
	this.get_enemies = function(){
		return this.lane_enemies;
	}
	
	this.get_allies = function(){
		return this.lane_allies;
	}
	
	this.get_projectiles = function(){
		return this.lane_projectiles;
	}
	
}