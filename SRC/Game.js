	var ScreenSpace;
	var ScreenContext;

	var imgItemMenu;
	var imgBuildMenu;
	var imgStatusMenu;
	var background;
	
	var listEnemies = new Array();
	var listProjectiles = new Array();
	var listAllies = new Array();
	var listFactories = new Array();
	var listStuff = new Array();
	var listImgItems = new Array();
	var listImgItemIcons = new Array();
	var listImgBuild = new Array();
	var listImgBuildIcons = new Array();
	var listFields = new Array();
	
	var indicator;
	var selectedDelete;
	var selectedItem;
	var selectedBuild;
	var selectedUnit;
	var currentItemPage = 0;
	var currentBuildPage = 0;
	
	var hasSpawned;
	var timetotal;
	var lifetotal;
	
	var currentX = -1;
	var currentY = -1;
	var id;
	var isGameOver = false;
	
	var counter = 0;
	
function init(){
	ScreenSpace = document.getElementById("Screen");
	ScreenContext = ScreenSpace.getContext("2d");
	
	imgItemMenu = document.getElementById("itemmenu");
	imgBuildMenu = document.getElementById("buildmenu");
	imgStatusMenu = document.getElementById("statusmenu");
	background = document.getElementById("background");
	
	timetotal = gameStats["timeleft"];
	lifetotal = gameStats["life"];
	hasSpawned = false;
	
	for(i=1;i<=Object.keys(allyList).length; i++){
		listImgItemIcons.push(new Image());
		listImgItemIcons[i-1].src = allyList[i].icon;
		listImgItems.push(new Image());
		listImgItems[i-1].src = allyList[i].listStand[0];
	}
	
	for(i=1;i<=Object.keys(factoryList).length; i++){
		listImgBuildIcons.push(new Image());
		listImgBuildIcons[i-1].src = factoryList[i].icon;
		listImgBuild.push(new Image());
		listImgBuild[i-1].src = factoryList[i].listStand[0];
	}
	indicator = new Stuff(stuffList["indicator"],0,0);
	ScreenSpace.onclick = onClick;
	ScreenSpace.onmousemove = onMove;
	id = setInterval(loop, 1000/30);
	addKeyboardShortcuts();
}

function addKeyboardShortcuts(){
	shortcut.add(shortcutList["item"][1], function(){selectItem(1);});
	shortcut.add(shortcutList["item"][2], function(){selectItem(2);});
	shortcut.add(shortcutList["item"][3], function(){selectItem(3);});
	shortcut.add(shortcutList["item"][4], function(){selectItem(4);});
	shortcut.add(shortcutList["item"][5], function(){selectItem(5);});
	shortcut.add(shortcutList["item"][6], function(){selectItem(6);});
	shortcut.add(shortcutList["item"][7], function(){selectItem(7);});
	shortcut.add(shortcutList["item"][8], function(){selectItem(8);});
	shortcut.add(shortcutList["item"][9], function(){selectItem(9);});
	shortcut.add(shortcutList["item"][10], function(){selectItem(10);});
	shortcut.add(shortcutList["item"][11], function(){selectItem(11);});
	shortcut.add(shortcutList["item"][12], function(){selectItem(12);});
	shortcut.add(shortcutList["build"][1], function(){selectBuild(1);});
	shortcut.add(shortcutList["build"][2], function(){selectBuild(2);});
	shortcut.add(shortcutList["build"][3], function(){selectBuild(3);});
	shortcut.add(shortcutList["build"][4], function(){selectBuild(4);});
	shortcut.add(shortcutList["build"][5], function(){selectBuild(5);});
	shortcut.add(shortcutList["delete"][1], function(){selectDelete(1);});
	shortcut.add(shortcutList["delete"][2], function(){selectDelete(2);});
	
}

function selectItem(x){
	if(selectedItem != x){
		selectedItem = x + (currentItemPage * 15);
		selectedBuild = null;
		selectedDelete = null;
	}
	else
		selectedItem = null;
}

function selectBuild(x){
	if(selectedBuild != x){
			selectedBuild = x + (currentBuildPage * 15);
			selectedItem = null;
			selectedDelete = null;
	}
	else
		selectedBuild = null;
}

function selectUnit(x,y){
	for(i=0;i<listAllies.length;i++){
		if(isInside(listAllies[i].x, listAllies[i].y+45, 90, 90, x, y)){
			selectedUnit = listAllies[i];
			indicator.x = listAllies[i].x;
			indicator.y = listAllies[i].y;
		}
	}
	for(i=0;i<listFactories.length;i++){
		if(isInside(listFactories[i].x, listFactories[i].y+45, 90, 90, x, y)){
			selectedUnit = listFactories[i];
			indicator.x = listFactories[i].x;
			indicator.y = listFactories[i].y;
		}
	}
}

function selectDelete(x){
	if(selectedDelete != x){
			selectedDelete = x;
			selectedItem = null;
			selectedBuild = null;
	}
	else
		selectedDelete = null;
}

function getGrid(x){
	return Math.floor(x/90);
}

function onClick(e){
	console.log(e.pageX + " , " + e.pageY);
	if(isInside(1465,150, 90, 90, e.pageX, e.pageY)){
		selectBuild(1);
	}
	else if(isInside(190,700, 90, 90, e.pageX, e.pageY)){
		selectItem(1);
	}
	else if(isInside(280,700, 90, 90, e.pageX, e.pageY)){
		selectItem(2);
	}
	else if(isInside(0,45,1440,630,e.pageX,e.pageY)){
		selectUnit(e.pageX, e.pageY);
		if(selectedDelete != null)
			remove();
		else if(selectedItem != null || selectedBuild != null)
			build();
	}
	else if(isInside(1425, 680, 123, 52, e.pageX, e.pageY)){
		selectDelete(1);
	}
	else if(isInside(1425, 738, 123, 52, e.pageX, e.pageY)){
		selectDelete(2);
	}
}

function onMove(e){
	if(isInside(0,45,1440,630,e.pageX,e.pageY)){
		currentX = getGrid(e.pageX-10)*90;
		currentY = getGrid(e.pageY-45)*90;
	}
	else{
		currentX = -1;
		currentY = -1;
	}
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isCollide(x1,y1,w1,h1,x2,y2,w2,h2){
	maxX1 = x1+w1;
	maxY1 = y1+h1;
	maxX2 = x2+w2;
	maxY2 = y2+h2;
	
	return !((maxX1 <= x2)||(x1 >= maxX2)||(y1>=maxY2)||(maxY1<=y2));

}

/*this.newWave = function(){
	for(j=0;j<100;j++){
		temp = this.random(1,7);
		temp2 = this.random(1,3);
		this.listEnemies.push(new Enemy(enemyList["chumpy" + temp2], temp));
	}
}*/

function isInside(x, y, w, h, gX, gY){
	tempX = x+w;
	tempY = y+h;
	if((gX >= x && gX <= tempX) && (gY >= y && gY <= tempY))
		return true;
	else
		return false;
}	

function randomSpawn(){
	var lane = random(1,7);
	var monster = random(1,3);
	var effect = random(1,3);
	if(enemyList[monster].hitEffect == null)
		spawn(monster, lane, effect);
	else
		spawn(monster, lane, enemyList[monster].hitEffect)
}

function spawn(monster, lane, effect){
	listEnemies.push(new Enemy(enemyList[monster], lane, effectList[effect]));
}

function remove(){
	if(selectedDelete != null){
		for(i=0;i<listAllies.length;i++){
			if(isCollide(listAllies[i].x,listAllies[i].y,90,90, currentX, currentY,90,90)){
				if(selectedDelete == 1){
					tempHealth = listAllies[i].health*2;
					if(gameStats["life"] + tempHealth >= lifetotal)
						gameStats["life"] = lifetotal;
					else
						gameStats["life"] += tempHealth;
					listStuff.push(new Stuff(stuffList["heart"], listAllies[i].x, listAllies[i].y));
				}else{
					tempGold = Math.floor(listAllies[i].health*0.2);
					if(gameStats["gold"] + tempGold >= gameStats["maxgold"])
						gameStats["gold"] = gameStats["maxgold"];
					else
						gameStats["gold"] += tempGold;
					listStuff.push(new Stuff(stuffList["coin"], listAllies[i].x, listAllies[i].y));
				}
				listAllies.splice(i,1);
				selectedUnit = null;
			}
		}
		for(i=0;i<listFactories.length;i++){
			if(isCollide(listFactories[i].x,listFactories[i].y,90,90, currentX, currentY,90,90)){
				if(selectedDelete == 1){
					tempHealth = listFactories[i].health*2;
					if(gameStats["life"] + tempHealth >= lifetotal)
						gameStats["life"] = lifetotal;
					else
						gameStats["life"] += tempHealth;
					listStuff.push(new Stuff(stuffList["heart"], listFactories[i].x, listFactories[i].y));
				}else{
					tempGold = listFactories[i].health*2;
					if(gameStats["gold"] + tempGold >= gameStats["maxgold"])
						gameStats["gold"] = gameStats["maxgold"];
					else
						gameStats["gold"] += tempGold;
					listStuff.push(new Stuff(stuffList["coin"], listFactories[i].x, listFactories[i].y));
				}
				listFactories.splice(i,1);
				selectedUnit = null;
			}
		}
	}
}

function build(){
	if(selectedItem != null){
		if(itemStats[allyList[selectedItem].name].available >= 1){
			var tempAlly = new Ally(allyList[selectedItem], currentX , currentY);
			var collide = false;
			for(i=0;i<listAllies.length;i++){
				if(isCollide(listAllies[i].x, listAllies[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
					collide = true;
				}
			}
			for(i=0;i<listFactories.length;i++){
				if(isCollide(listFactories[i].x, listFactories[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
					collide = true;
				}
			}
			if(!collide){
				listAllies.push(tempAlly);
				itemStats[allyList[selectedItem].name].available--;
				selectedItem = null;		
			}
		}
	}else if(selectedBuild != null){
		if(gameStats["gold"] >= buildStats[factoryList[selectedBuild].name].cost){
			var tempFactory = new Factory(factoryList[selectedBuild], currentX , currentY);
			var collide = false;
			for(i=0;i<listAllies.length;i++){
				if(isCollide(listAllies[i].x, listAllies[i].y, 90, 90, tempFactory.x, tempFactory.y, 90,90)){
					collide = true;
				}
			}
			for(i=0;i<listFactories.length;i++){
				if(isCollide(listFactories[i].x, listFactories[i].y, 90, 90, tempFactory.x, tempFactory.y, 90,90)){
					collide = true;
				}
			}
			if(!collide){
				listFactories.push(tempFactory);
				for(i=1;i<=Object.keys(allyList).length;i++){
					for(j=0;j<allyList[i].requires.length;j++){
						if(allyList[i].requires[j] ==factoryList[selectedBuild].name){
							if(itemStats[allyList[i].name].total == 0 && itemStats[allyList[i].name].available == 0){
								itemStats[allyList[i].name].available = 1;
							}
							itemStats[allyList[i].name].total+=buildStats[factoryList[selectedBuild].name].storage/Object.keys(allyList[i].requires).length;
						}
					}
				}
				gameStats["gold"]-=buildStats[factoryList[selectedBuild].name].cost;
				buildStats[factoryList[selectedBuild].name].cost+=Math.floor(buildStats[factoryList[selectedBuild].name].cost*0.75);
				if(buildStats[factoryList[selectedBuild].name].cost > gameStats["maxgold"]){
					buildStats[factoryList[selectedBuild].name].cost = gameStats["maxgold"];
				}
				selectedBuild = null;		
			}
		}
	}
}

function update(){
	if(gameStats["life"] <= 0){
		isGameOver = true;
	}
	else{
		if(gameStats["timeleft"] > 0){
			gameStats["timeleft"]-=1/30;
			if(gameStats["timeleft"] <= 10 && !hasSpawned){
				gameStats["spawncounter"] = 0;
				gameStats["spawntime"] = 10;
				hasSpawned = true;
			}
			if(gameStats["spawncounter"] == gameStats["spawntime"]){
				randomSpawn();
				gameStats["spawncounter"] = 0;
			}
			else{
				gameStats["spawncounter"]++;
			}
		}
		if(selectedUnit != null){
			if(selectedUnit.health <= 0)
				selectedUnit = null;
		}
		indicator.sprite.next();
		for(i=0;i<listFields.length;i++){
			if(listFields[i].duration == 0){
				listFields.splice(i,1);
			}
			else{
				listFields[i].duration--;
				for(j=0;j<listEnemies.length;j++){
					listFields[i].activateEffect(listEnemies[j]);
				}
			}
		}
		for(i=0; i<listStuff.length;i++){
			if(listStuff[i].y <= 0 - listStuff[i].getCurrentYDiff()){
				listStuff.splice(i,1);
			}
			else{
				listStuff[i].sprite.next()
				listStuff[i].y-=15;
			}
		}
		for(i=0; i<listFactories.length; i++){
			var isFactoryDead = false;
			if(listFactories[i].health<=0){
				for(j=1;j<=Object.keys(allyList).length;j++){
					for(k=0;k<allyList[j].requires.length;k++){
						if(allyList[j].requires[k] == listFactories[i].name){
							itemStats[allyList[j].name].total-=buildStats[listFactories[i].name].storage/Object.keys(allyList[j].requires).length;
						}
					}
				}
				listFactories.splice(i,1);
				isFactoryDead = true;
			}
			else{	
				if(listFactories[i].checkCooldown()){
					for(j=1;j<=Object.keys(allyList).length;j++){
						for(k=0;k<Object.keys(allyList[j].requires).length;k++){
							if(allyList[j].requires[k] == listFactories[i].name && itemStats[allyList[j].name].available+1 <= itemStats[allyList[j].name].total){
								itemStats[allyList[j].name].available++;
							}
						}
					}
				}
			}
			if(!isFactoryDead){
				listFactories[i].listSprites[listFactories[i].current].next();
			}
		}
		for(i=0; i<listProjectiles.length;i++){
			var isDone = false;
			if(listProjectiles[i].x <0){
				listProjectiles.splice(i,1);
				isDone = true;
			}
			else if(listProjectiles[i].current == 1){	
				if(listProjectiles[i].listSprites[listProjectiles[i].current].current == listProjectiles[i].listSprites[listProjectiles[i].current].listImage.length-1){
					listProjectiles.splice(i,1);
					isDone = true;
				}
			}
			else{
				for(j=0;j<listEnemies.length;j++){
					if(isCollide(listProjectiles[i].x, listProjectiles[i].y,
					listProjectiles[i].listX[listProjectiles[i].listSprites[listProjectiles[i].current].current], 
					listProjectiles[i].listY[listProjectiles[i].listSprites[listProjectiles[i].current].current], 
					listEnemies[j].x, listEnemies[j].y, listProjectiles[i].getCurrentX(),listProjectiles[i].getCurrentY())
					&& listEnemies[j].current != 2){
						listProjectiles[i].switchAction(1);	
						listEnemies[j].health-=listProjectiles[i].attack;
					}
				}
			}
			if(!isDone){
				if(listProjectiles[i].current == 0)
					listProjectiles[i].move();
				listProjectiles[i].listSprites[listProjectiles[i].current].next();
			}
		}
		for(i=0; i<listEnemies.length; i++){
			var hasEnemyDeath = false;
			if(listEnemies[i].health<=0){
				if(listEnemies[i].current != 2){
					listEnemies[i].switchAction(2);
				}
				else{
					if(listEnemies[i].listSprites[listEnemies[i].current].current == listEnemies[i].listSprites[listEnemies[i].current].listImage.length-1){
						gameStats["gold"]+=listEnemies[i].gold;
						if(gameStats["gold"]>gameStats["maxgold"])
							gameStats["gold"] = gameStats["maxgold"];
						listStuff.push(new Stuff(stuffList["coin"], listEnemies[i].x, listEnemies[i].y));
						listEnemies.splice(i,1);
						hasEnemyDeath = true;
					}
				}
			}
			else if(listEnemies[i].x > 1440){
				gameStats["life"]-=listEnemies[i].health;
				listEnemies.splice(i,1);
				hasEnemyDeath = true;
			}
			else{
				var tempCollide = false;
				for(j=0;j<listAllies.length;j++){
					if(isCollide(listEnemies[i].x+listEnemies[i].speed, listEnemies[i].y, 90, 90, listAllies[j].x, listAllies[j].y, 90,90))
						tempCollide = true;
				}
				for(j=0;j<listFactories.length;j++){
					if(isCollide(listEnemies[i].x+listEnemies[i].speed, listEnemies[i].y, 90, 90, listFactories[j].x, listFactories[j].y, 90,90))
						tempCollide = true;
				}
				if(tempCollide){
					listEnemies[i].switchAction(1);
					listEnemies[i].hitEffectSprite.next();
				}
				else{
					listEnemies[i].switchAction(0);
					listEnemies[i].move();
				}
			}
			if(!hasEnemyDeath)
				listEnemies[i].listSprites[listEnemies[i].current].next();
		}
		for(i=0; i<listAllies.length; i++){
			var hasAllyDeath = false;
			if(listAllies[i].health<=0){
				if(listAllies[i].current != 2){
					listAllies[i].switchAction(2);
				}
				else{
					if(listAllies[i].type == 3 && listAllies[i].field != null){
						if(listAllies[i].listSprites[listAllies[i].current].current == listAllies[i].listSprites[listAllies[i].current].listImage.length-2)
							listFields.push(new Field(fieldList[listAllies[i].field],listAllies[i].x, listAllies[i].y));
					}
					if(listAllies[i].listSprites[listAllies[i].current].current == listAllies[i].listSprites[listAllies[i].current].listImage.length-1){
						listAllies.splice(i,1);
						hasAllyDeath = true;
					}
				}
			}
			else if (listAllies[i].type == 1){
				var tempEnemyInRange = false;
				var tempRect;
				switch(listAllies[i].range){
				case 1: tempRect = {x:listAllies[i].x-90, y:listAllies[i].y, w:90, h:90};
						break;
				case 2:	tempRect = {x:listAllies[i].x-180, y:listAllies[i].y, w:180, h:90};
						break;
				case 3:	tempRect = {x:listAllies[i].x-90, y:listAllies[i].y-90, w:90, h:270};
						break;
				}
					for(j=0;j<listEnemies.length;j++){
						if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h) || 
						isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAllies[i].x, listAllies[i].y, 90, 90)){
							tempEnemyInRange = true;
						}
					}
					if(tempEnemyInRange){
						listAllies[i].switchAction(1);
						listAllies[i].hitEffectSprite.next();
					}
					else
						listAllies[i].switchAction(0);
			}else if(listAllies[i].type == 2){
				var tempEnemyInRange = false;
				var tempRect = {x:0, y:listAllies[i].y, w:listAllies[i].x, h:90};
				for(j=0;j<listEnemies.length;j++){
					if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h) || 
						isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAllies[i].x, listAllies[i].y, 90, 90)){
						tempEnemyInRange = true;
					}
				}
				if(tempEnemyInRange){
					listAllies[i].switchAction(1);
					for(j=0;j<listAllies[i].release.length;j++){
						if (listAllies[i].listSprites[listAllies[i].current].current == listAllies[i].release[j] && listAllies[i].listSprites[listAllies[i].current].counter == 0){
							milotrial = random(-10,10);
							listProjectiles.push(new Projectile(listAllies[i].projectiletype, listAllies[i].x-45, listAllies[i].y+milotrial));
						}
					}
				}
				else
					listAllies[i].switchAction(0);
			}
			if(!hasAllyDeath)
				listAllies[i].listSprites[listAllies[i].current].next();
		}	
		for(i=0; i<listEnemies.length; i++){
			if(listEnemies[i].current == 1){
				var tempRect;
				switch(listEnemies[i].range){
				case 1: tempRect = {x:listEnemies[i].x+90, y:listEnemies[i].y, w:90, h:90};
						break;
				case 2:	tempRect = {x:listEnemies[i].x+90, y:listEnemies[i].y, w:180, h:90};
						break;
				case 3:	tempRect = {x:listEnemies[i].x+90, y:listEnemies[i].y-90, w:90, h:270};
						break;
				}
				for(j=0;j<listAllies.length;j++){
					if(isCollide(listAllies[j].x, listAllies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h) ||
					isCollide(listAllies[j].x, listAllies[j].y, 90,90, listEnemies[i].x, listEnemies[i].y, 90, 90)){
						for(k=0;k<listEnemies[i].frameHit.length;k++){
							if(listEnemies[i].listSprites[1].current == listEnemies[i].frameHit[k] && listEnemies[i].listSprites[1].counter == 0)
								listAllies[j].health-=listEnemies[i].attack;
						}
					}
				}
				for(j=0;j<listFactories.length;j++){
					if(isCollide(listFactories[j].x, listFactories[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h) ||
					isCollide(listFactories[j].x, listFactories[j].y, 90,90, listEnemies[i].x, listEnemies[i].y, 90, 90)){
						for(k=0;k<listEnemies[i].frameHit.length;k++){
							if(listEnemies[i].listSprites[1].current == listEnemies[i].frameHit[k] && listEnemies[i].listSprites[1].counter == 0)
								listFactories[j].health-=listEnemies[i].attack;
						}
					}
				}
			}
		}
		for(i=0; i<listAllies.length; i++){
			if(listAllies[i].type == 1){
				if(listAllies[i].current == 1){
					var tempRect;
					switch(listAllies[i].range){
					case 1: tempRect = {x:listAllies[i].x-90, y:listAllies[i].y, w:90, h:90};
							break;
					case 2:	tempRect = {x:listAllies[i].x-180, y:listAllies[i].y, w:180, h:90};
							break;
					case 3:	tempRect = {x:listAllies[i].x-90, y:listAllies[i].y-90, w:90, h:270};
							break;
					}
					for(j=0;j<listEnemies.length;j++){
						if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)|| 
							isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAllies[i].x, listAllies[i].y, 90, 90)){
							for(k=0;k<listAllies[i].frameHit.length;k++){
							if(listAllies[i].listSprites[1].current == listAllies[i].frameHit[k] && listAllies[i].listSprites[1].counter == 0)
								listEnemies[j].health-=listAllies[i].attack;
							}
						}
					}
				}
			}
			else if (listAllies[i].type == 2){
				for(j=0;j<listEnemies.length;j++){
					if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAllies[i].x, listAllies[i].y, 90, 90)){
						for(k=0;k<listAllies[i].release.length;k++){
							if(listAllies[i].listSprites[1].current == listAllies[i].release[k] && listAllies[i].listSprites[1].counter == 0){
								listEnemies[j].health-=listAllies[i].projectiletype.attack;
							}
						}
					}
				}
			}
		}
	}
}

function drawSprites(){

	for(i=0; i<listFields.length; i++){
		ScreenContext.drawImage(listFields[i].image,
		listFields[i].x + listFields[i].xDiff, 
		listFields[i].y + listFields[i].yDiff+45, 
		listFields[i].sizeX, 
		listFields[i].sizeY);
	}
	
	for(i=0; i<listFactories.length; i++){
		ScreenContext.drawImage(listFactories[i].getCurrentFrame(),
		listFactories[i].x + listFactories[i].getCurrentXDiff(), 
		listFactories[i].y + listFactories[i].getCurrentYDiff()+45, 
		listFactories[i].getCurrentX(), 
		listFactories[i].getCurrentY());
	}
	
	for(i=0; i<listAllies.length; i++){
		ScreenContext.drawImage(listAllies[i].getCurrentFrame(),
		listAllies[i].x + listAllies[i].getCurrentXDiff(), 
		listAllies[i].y + listAllies[i].getCurrentYDiff()+45, 
		listAllies[i].getCurrentX(), 
		listAllies[i].getCurrentY());
	}
		
	for(i=0; i<listEnemies.length; i++){
		ScreenContext.drawImage(listEnemies[i].getCurrentFrame(),
		listEnemies[i].x + listEnemies[i].getCurrentXDiff(), 
		listEnemies[i].y + listEnemies[i].getCurrentYDiff()+45, 
		listEnemies[i].getCurrentX(), 
		listEnemies[i].getCurrentY());
	}
	
	for(i=0; i<listStuff.length; i++){
		ScreenContext.drawImage(listStuff[i].getCurrentFrame(),
		listStuff[i].x + listStuff[i].getCurrentXDiff(), 
		listStuff[i].y + listStuff[i].getCurrentYDiff()+45, 
		listStuff[i].getCurrentX(), 
		listStuff[i].getCurrentY());
	}
	
	for(i=0;i<listAllies.length;i++){
		if(listAllies[i].current == 1 && listAllies[i].type == 1){
			for(k=0;k<listAllies[i].frameHit.length;k++){
				if(listAllies[i].listSprites[1].current == listAllies[i].frameHit[k]){
					var tempX, tempY, sizeX, sizeY;
					switch(listAllies[i].range){
						case 1:	tempX = -90;
								tempY = 0;
								sizeX = 80;
								sizeY = 80;
								break;
						case 2:	tempX = -90;
								tempY = 0;
								sizeX = 160;
								sizeY = 80;
								break;
						case 3:	tempX = -90;
								tempY = -90;
								sizeX = 80;
								sizeY = 270;
								break;
					}
					ScreenContext.drawImage(listAllies[i].hitEffectSprite.listImage[listAllies[i].hitEffectSprite.current],
					listAllies[i].x + tempX + 5, listAllies[i].y + tempY + 5 + 45, sizeX, sizeY);
				}
			}
		}
	}
	
	for(i=0;i<listEnemies.length;i++){
		if(listEnemies[i].current == 1){
			for(k=0;k<listEnemies[i].frameHit.length;k++){
				if(listEnemies[i].listSprites[1].current == listEnemies[i].frameHit[k]){
					var tempX, tempY, sizeX, sizeY;
					switch(listEnemies[i].range){
						case 1:	tempX = 90;
								tempY = 0;
								sizeX = 80;
								sizeY = 80;
								break;
						case 2:	tempX = 90;
								tempY = 0;
								sizeX = 160;
								sizeY = 80;
								break;
						case 3:	tempX = 90;
								tempY = -90;
								sizeX = 80;
								sizeY = 270;
								break;
					}
					ScreenContext.drawImage(listEnemies[i].hitEffectSprite.listImage[listEnemies[i].hitEffectSprite.current],
					listEnemies[i].x + tempX + 5, listEnemies[i].y + tempY + 5 + 45, sizeX, sizeY);
				}
			}
		}
	}
	
	for(i=0;i<listProjectiles.length;i++){
		ScreenContext.drawImage(listProjectiles[i].getCurrentFrame(), 
		listProjectiles[i].x + listProjectiles[i].getCurrentXDiff(), 
		listProjectiles[i].y + listProjectiles[i].getCurrentYDiff() + 45, 
		listProjectiles[i].getCurrentX(),
		listProjectiles[i].getCurrentY()
		);
	}
	
	if(selectedItem != null && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(listImgItems[selectedItem-1], currentX+5, currentY+50, 80, 80);
	}else if(selectedBuild != null && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(listImgBuild[selectedBuild-1], currentX+5, currentY+50, 80, 80);
	}
	else if(selectedDelete == 1 && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(document.getElementById("spoon"), currentX+15, currentY+70, 101, 82);
	}
	else if(selectedDelete == 2 && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(document.getElementById("fork"), currentX+15, currentY+70, 101, 82);
	}
	
	if(selectedUnit != null){
		ScreenContext.drawImage(indicator.getCurrentFrame(), 
		indicator.x + indicator.getCurrentXDiff(), 
		indicator.y + indicator.getCurrentYDiff()+45, 
		indicator.getCurrentX(), indicator.getCurrentY());
	}
	
}

function drawUI(){
	ScreenContext.drawImage(imgItemMenu, 0, 675, 1560, 120);
	ScreenContext.drawImage(imgBuildMenu, 1440, 45, 120, 630);
	ScreenContext.fillStyle = "black";
	ScreenContext.drawImage(imgStatusMenu,0,0, 1560,45);
	
	if(selectedDelete == 1)
		ScreenContext.drawImage(document.getElementById("heartbutton"), 1425, 680, 123, 52);
	else
		ScreenContext.drawImage(document.getElementById("heartbuttonwithspoon"), 1425, 680, 123, 52);

	if(selectedDelete == 2)
		ScreenContext.drawImage(document.getElementById("goldbutton"), 1425, 738, 123, 52);
	else
		ScreenContext.drawImage(document.getElementById("goldbuttonwithfork"), 1425, 738, 123, 52);
		
		
	for(i=0;i<listImgItemIcons.length;i++){
		ScreenContext.drawImage(document.getElementById("plate"), (i*92)+175, 695, 90, 90);
		if(selectedItem-1 != i){
			ScreenContext.drawImage(listImgItemIcons[i], (i*92)+182, 695, 80, 80);
		}
	}
	
	for(i=0;i<listImgBuildIcons.length;i++){
		if(gameStats["gold"]<buildStats[factoryList[i+1].name].cost)
			ScreenContext.drawImage(document.getElementById("nobuild"), 1455, ((i+1)*100)+40, 90, 90);
		else
			ScreenContext.drawImage(document.getElementById("okbuild"), 1455, ((i+1)*100)+40, 90, 90);
		if(selectedBuild-1 != i){
			ScreenContext.drawImage(listImgBuildIcons[i], 1460, ((i+1)*100)+45, 80, 80);
		}
	}

	for(i=1;i<=Object.keys(allyList).length;i++){
		if(itemStats[allyList[i].name].available == 0)
			ScreenContext.fillStyle = "red";
		else
			ScreenContext.fillStyle = "white";
		ScreenContext.fillText(itemStats[allyList[i].name].available + "/" + itemStats[allyList[i].name].total, ((i-1)*92)+182, 778);
		ScreenContext.strokeText(itemStats[allyList[i].name].available + "/" + itemStats[allyList[i].name].total, ((i-1)*92)+182, 778);
	}
	
	for(i=1;i<=Object.keys(factoryList).length;i++){
		if(gameStats["gold"]<buildStats[factoryList[i].name].cost)
			ScreenContext.fillStyle = "red";
		else
			ScreenContext.fillStyle = "white";
		ScreenContext.fillText(buildStats[factoryList[i].name].cost, 1455, (i*100)+45+80);
		ScreenContext.strokeText(buildStats[factoryList[i].name].cost, 1455, (i*100)+45+80);
	}
	
	for(i=1;i<=Object.keys(shortcutList["build"]).length;i++){
		ScreenContext.fillStyle = "white";
		ScreenContext.fillText(shortcutList["build"][i], 1457, (i*97)+60);
		ScreenContext.strokeText(shortcutList["build"][i], 1457, (i*97)+60);
	}
	
	for(i=1;i<=Object.keys(shortcutList["item"]).length;i++){
		ScreenContext.fillStyle = "white";
		ScreenContext.fillText(shortcutList["item"][i], ((i-1)*92)+182, 711);
		ScreenContext.strokeText(shortcutList["item"][i], ((i-1)*92)+182, 711);
	}
	
	for(i=1;i<=Object.keys(shortcutList["delete"]).length;i++){
		ScreenContext.fillStyle = "white";
		ScreenContext.fillText(shortcutList["delete"][i], 1428, ((i-1)*58)+698);
		ScreenContext.strokeText(shortcutList["delete"][i], 1428, ((i-1)*58)+698);
	}
	1425, 680
	ScreenContext.fillStyle = "white";
	ScreenContext.fillText(gameStats["gold"], 749, 24);
	ScreenContext.strokeText(gameStats["gold"], 749, 24);
	
	if(selectedUnit != null){
		ScreenContext.drawImage(selectedUnit.screens[selectedUnit.getCurrentScreen()],166,0, 166,33);
		if(selectedUnit.getCurrentScreen() == 0)
			ScreenContext.fillStyle = "lightgreen";
		else if(selectedUnit.getCurrentScreen() == 1)
			ScreenContext.fillStyle = "yellow";
		else
			ScreenContext.fillStyle = "red";
		ScreenContext.fillRect(364, 12, 297 * (selectedUnit.health/selectedUnit.origdata.health), 10);
	}
	
	if(gameStats["timeleft"] > 0){
		ScreenContext.fillStyle = "red";
		ScreenContext.fillRect(76, 34, 1427 * (gameStats["timeleft"]/timetotal), 6);
	}
	
	if(gameStats["life"] > 0){
		ScreenContext.fillStyle = "lightgreen";
		ScreenContext.fillRect(875, 4, 628 * (gameStats["life"]/lifetotal), 12);
	}
}

function drawMenu(){
}

function drawGameOver(){
	ScreenContext.globalAlpha = 0.6;
	ScreenContext.drawImage(document.getElementById("grayoverlay"), 0, 0, 1560, 790);
	ScreenContext.font = "190px Ravie";
	ScreenContext.globalAlpha = 1;
	ScreenContext.drawImage(document.getElementById("armon_angry"), 680, 40, 180, 180);
	ScreenContext.fillStyle = "black";
	ScreenContext.fillText("GAME OVER", 20, 400);
	ScreenContext.strokeStyle = "white";
	ScreenContext.strokeText("GAME OVER", 20, 400);
	ScreenContext.strokeStyle = "black";
	ScreenContext.font = "10px Jokerman"
	ScreenContext.fillText("Thanks, Obama!", 1420, 420);
}

function draw(){
	//ScreenContext.font = "20px AR DESTINE";
	ScreenContext.font = "20px Poplar Std";
	/*(i=0;i<7;i++){
		ScreenContext.drawImage(listImgLane[i], 0, i*90+45, 1440, 90);
	}*/
	ScreenContext.drawImage(background, 0, 45, 1440, 630);
	drawSprites();	
	drawUI();
	if(isGameOver){
		drawGameOver();
	}
	if(gameStats["menu"] == 0){
		drawMenu();
	}
	
}

function loop(){
	update();
	draw();
}