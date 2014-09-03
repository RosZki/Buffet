statsmodifier = function(){

	this.modify_stats = function(unit){
		unit.reset_stats();
		for(x=0;x<unit.status.length;x++){
			switch(unit.status[x].get_name()){
				case "slow": unit.speed = unit_stats[unit.get_name()].speed * 0.25;
					break;
				case "boost": unit.attack = unit_stats[unit.get_name()].attack * 2;
					break;
			}
		}
	}
}