	var ScreenSpace;
	var ScreenContext;

	var imgItemMenu;
	var imgBuildMenu;
	var floor;
	
	var listEnemies = new Array();
	var listProjectiles = new Array();
	var listAllies = new Array();
	var listFactories = new Array();
	var listImgLane = new Array();
	var listImgItems = new Array();
	var listImgItemIcons = new Array();
	var listImgBuild = new Array();
	var listImgBuildIcons = new Array();
	
	var selectedItem;
	var selectedBuild;
	var currentItemPage = 0;
	var currentBuildPage = 0;
	
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
	floor = document.getElementById("floor");
	ScreenContext.font = "20px Stencil";
	for(i=0; i<7; i++){
		listImgLane.push(new Image());
		listImgLane[i].src = "IMG/UI/Lane" + (i+1) + ".png";
	}
	
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
	
	ScreenSpace.onclick = onClick;
	ScreenSpace.onmousemove = onMove;
	id = setInterval(loop, 1000/30);
	addKeyboardShortcuts();
}

function addKeyboardShortcuts(){
	shortcut.add("1", function(){selectItem(1);});
	shortcut.add("2", function(){selectItem(2);});
	shortcut.add("3", function(){selectItem(3);});
	shortcut.add("4", function(){selectItem(4);});
	shortcut.add("Q", function(){selectItem(5);});
	shortcut.add("W", function(){selectItem(6);});
	shortcut.add("E", function(){selectItem(7);});
	shortcut.add("R", function(){selectItem(8);});
	shortcut.add("A", function(){selectItem(9);});
	shortcut.add("S", function(){selectItem(10);});
	shortcut.add("D", function(){selectItem(11);});
	shortcut.add("F", function(){selectItem(12);});
	//shortcut.add("Z", function(){selectItem(13);});
	//shortcut.add("X", function(){selectItem(14);});
	//shortcut.add("C", function(){selectItem(15);});
	shortcut.add("Z", function(){selectBuild(1);});
	shortcut.add("X", function(){selectBuild(2);});
	shortcut.add("C", function(){selectBuild(3);});
	shortcut.add("V", function(){selectBuild(4);});
	shortcut.add("B", function(){selectBuild(5);});
	shortcut.add("G", function(){selectBuild(6);});
	
}

function selectItem(x){
	if(selectedItem != x){
		selectedItem = x + (currentItemPage * 15);
		selectedBuild = null;
	}
	else
		selectedItem = null;
}

function selectBuild(x){
	if(selectedBuild != x){
			selectedBuild = x + (currentBuildPage * 15);
			selectedItem = null;
	}
	else
		selectedBuild = null;
}

function getGrid(x){
	return Math.floor(x/90);
}

function onClick(e){
	if(isInside(40, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(1);
	}else if(isInside(140, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(2);
	}else if(isInside(240, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(3);
	}else if(isInside(340, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(4);
	}else if(isInside(440, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(5);
	}else if(isInside(540, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(6);
	}else if(isInside(640, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(7);
	}else if(isInside(740, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(8);
	}else if(isInside(840, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(9);
	}else if(isInside(940, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(10);
	}else if(isInside(1040, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(11);
	}else if(isInside(1140, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(12);
	}else if(isInside(1240, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(13);
	}else if(isInside(1340, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(14);
	}else if(isInside(1440, 695, 90, 90, e.pageX, e.pageY)){
		selectItem(15);
	}else if(isInside(1460, 65, 80, 80, e.pageX,e.pageY)){
		selectBuild(1);
	}else if(isInside(1460, 165, 80, 80, e.pageX,e.pageY)){
		selectBuild(2);
	}else if(isInside(1460, 265, 80, 80, e.pageX,e.pageY)){
		selectBuild(3);
	}else if(isInside(1460, 365, 80, 80, e.pageX,e.pageY)){
		selectBuild(4);
	}else if(isInside(1460, 465, 80, 80, e.pageX,e.pageY)){
		selectBuild(5);
	}else if(isInside(1460, 565, 80, 80, e.pageX,e.pageY)){
		selectBuild(6);
	}
	else if(isInside(0,45,1440,630,e.pageX,e.pageY)){
		if(selectedItem != null || selectedBuild != null){
			build();
		}
	}
}

function onMove(e){
	if(isInside(0,45,1440,630,e.pageX,e.pageY)){
		currentX = getGrid(e.pageX)*90;
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
	spawn(monster, lane, effect);
}

function spawn(monster, lane, effect){
	listEnemies.push(new Enemy(enemyList[monster], lane, effectList[effect]));
}

function startWave(time, totaltime){
	isGameOver = false;
	counter = 0;
	gameStats["timeleft"] = totaltime;
	gameStats["spawntime"] = time;
	gameStats["spawncounter"] = 0;
}

function stopWave(){
	gameStats["timeleft"] = 0;
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
				if(buildStats[factoryList[selectedBuild].name].cost > 99999){
					buildStats[factoryList[selectedBuild].name].cost = 99999;
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
			if(counter == 30){
				gameStats["timeleft"]--;
				counter = 0;
			}
			else{
				counter++;
			}
			if(gameStats["timeleft"] == 10){
				gameStats["spawncounter"] = 0;
				gameStats["spawntime"] = 10;
			}
			if(gameStats["spawncounter"] == gameStats["spawntime"]){
				randomSpawn();
				gameStats["spawncounter"] = 0;
			}
			else{
				gameStats["spawncounter"]++;
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
					listEnemies[j].x-20, listEnemies[j].y, 90, 90)){
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
						if(gameStats["gold"]>99999)
							gameStats["gold"] = 99999;
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
							//milotrial = random(-10,10);
							milotrial = 0;
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
					if(isCollide(listAllies[j].x, listAllies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
						for(k=0;k<listEnemies[i].frameHit.length;k++){
							if(listEnemies[i].listSprites[1].current == listEnemies[i].frameHit[k] && listEnemies[i].listSprites[1].counter == 0)
								listAllies[j].health-=listEnemies[i].attack;
						}
					}
				}
				for(j=0;j<listFactories.length;j++){
					if(isCollide(listFactories[j].x, listFactories[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
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
		}
	}
}

function drawSprites(){
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
	
	for(i=0;i<listEnemies.length;i++){
		if(listEnemies[i].current == 1){
			if(listEnemies[i].listSprites[1].current >= listEnemies[i].frameHit[0] && listEnemies[i].listSprites[1].current <= listEnemies[i].frameHit[1]){
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
	
	for(i=0;i<listAllies.length;i++){
		if(listAllies[i].current == 1 && listAllies[i].type == 1){
			if(listAllies[i].listSprites[1].current >= listAllies[i].frameHit[0] && listAllies[i].listSprites[1].current <= listAllies[i].frameHit[1]){
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
	
	for(i=0;i<listProjectiles.length;i++){
		ScreenContext.drawImage(listProjectiles[i].listSprites[listProjectiles[i].current].listImage[listProjectiles[i].listSprites[listProjectiles[i].current].current], 
		listProjectiles[i].x, 
		listProjectiles[i].y + 45, 
		listProjectiles[i].listX[listProjectiles[i].listSprites[listProjectiles[i].current].current],
		listProjectiles[i].listY[listProjectiles[i].listSprites[listProjectiles[i].current].current]
		);
	}
	
	if(selectedItem != null && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(listImgItems[selectedItem-1], currentX+5, currentY+50, 80, 80);
	}else if(selectedBuild != null && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(listImgBuild[selectedBuild-1], currentX+5, currentY+50, 80, 80);
	}
}

function drawUI(){
	ScreenContext.drawImage(imgItemMenu, 0, 675, 1560, 130);
	ScreenContext.drawImage(imgBuildMenu, 1440, 45, 120, 630);
	ScreenContext.fillStyle = "black";
	ScreenContext.fillRect(0,0, 1560,45);
	
	ScreenContext.fillRect(1460, 65, 80, 80);
	ScreenContext.fillRect(1460, 165, 80, 80);
	ScreenContext.fillRect(1460, 265, 80, 80);
	ScreenContext.fillRect(1460, 365, 80, 80);
	ScreenContext.fillRect(1460, 465, 80, 80);
	ScreenContext.fillRect(1460, 565, 80, 80);
	
	for(i=0;i<10;i++){
		//ScreenContext.drawImage(plate,40+(i*100),695,80,80);
		ScreenContext.fillRect(40+(i*100),695,80,80);
	}
	
	for(i=0;i<listImgItemIcons.length;i++){
		if(selectedItem-1 != i){
			ScreenContext.drawImage(listImgItemIcons[i], (i*100)+40, 695, 80, 80);
		}
	}
	
	for(i=0;i<listImgBuildIcons.length;i++){
		if(selectedBuild-1 != i){
			ScreenContext.drawImage(listImgBuildIcons[i], 1460, (i*100)+65, 80, 80);
		}
	}

	for(i=1;i<=Object.keys(allyList).length;i++){
		if(itemStats[allyList[i].name].available == 0)
			ScreenContext.fillStyle = "red";
		else
			ScreenContext.fillStyle = "white";
		ScreenContext.fillText(itemStats[allyList[i].name].available + "/" + itemStats[allyList[i].name].total, ((i-1)*100)+42, 710);
		ScreenContext.strokeText(itemStats[allyList[i].name].available + "/" + itemStats[allyList[i].name].total, ((i-1)*100)+42, 710);
	}
	
	for(i=1;i<=Object.keys(factoryList).length;i++){
		if(gameStats["gold"]<buildStats[factoryList[i].name].cost)
			ScreenContext.fillStyle = "red";
		else
			ScreenContext.fillStyle = "white";
		ScreenContext.fillText(buildStats[factoryList[i].name].cost, 1460, ((i-1)*100)+65+80);
		ScreenContext.strokeText(buildStats[factoryList[i].name].cost, 1460, ((i-1)*100)+65+80);
	}
	
	ScreenContext.fillStyle = "white";
	ScreenContext.fillText("Gold: " + gameStats["gold"], 10, 28);
	ScreenContext.fillText("Spawn Time Left: " + gameStats["timeleft"], 130, 28);
	ScreenContext.fillText("<3: " + Math.floor(gameStats["life"]), 1340, 28);
}

function drawMenu(){
}

function drawGameOver(){
	ScreenContext.globalAlpha = 0.6;
	ScreenContext.drawImage(document.getElementById("grayoverlay"), 0, 0, 1560, 790);
	ScreenContext.font = "200px Stencil";
	ScreenContext.globalAlpha = 1;
	ScreenContext.fillText("THANKS OBAMA", 20, 400);
	ScreenContext.fillStyle = "black";
	ScreenContext.strokeText("THANKS OBAMA", 20, 400);
}

function draw(){
	ScreenContext.font = "20px Stencil";
	/*(i=0;i<7;i++){
		ScreenContext.drawImage(listImgLane[i], 0, i*90+45, 1440, 90);
	}*/
	ScreenContext.drawImage(floor, 0, 45, 1440, 630);
	
	
	drawSprites();	
	drawUI();
	
	if(isGameOver){
		drawGameOver();
	}
	
}

function loop(){
	update();
	draw();
}