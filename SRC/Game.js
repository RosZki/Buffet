	var UtilitySpace;
	var UtilityContext;
	var ScreenSpace;
	var ScreenContext;

	var imgItemMenu;
	var imgBuildMenu;
	
	var listEnemies = new Array();
	var listAllies = new Array();
	var listImgLane = new Array();
	var id;

function init(){
	UtilitySpace = document.getElementById("Utility");
	UtilityContext = UtilitySpace.getContext("2d");
	ScreenSpace = document.getElementById("Screen");
	ScreenContext = ScreenSpace.getContext("2d");
	
	imgItemMenu = document.getElementById("itemmenu");
	imgBuildMenu = document.getElementById("buildmenu");
	
	for(i=0; i<7; i++){
		listImgLane.push(new Image());
		listImgLane[i].src = "IMG/UI/Lane" + (i+1) + ".png";
	}
	
	ScreenSpace.onclick = spawn;
	id = setInterval(loop, 1000/30);
	build();
}

function random(start,end){
	return Math.floor((Math.random() * end)+start);
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

function onMousePress(){
	
}

function onMouseHover(){

}

function onMouseRelease(){

}

function spawn(){
	var lane = random(1,7);
	var monster = random(1,3);
	listEnemies.push(new Enemy(enemyList[monster], lane));
}

function spawnEnemy(monster,lane){
	listEnemies.push(new Enemy(enemyList[monster], lane));
}

function build(){
	listAllies.push(new Ally(allyList[1], 1080, 0));
	listAllies.push(new Ally(allyList[1], 1080, 90));
	listAllies.push(new Ally(allyList[1], 1080, 180));
	listAllies.push(new Ally(allyList[1], 1080, 270));
	listAllies.push(new Ally(allyList[1], 1080, 360));
	listAllies.push(new Ally(allyList[1], 1080, 450));
	listAllies.push(new Ally(allyList[1], 1080, 540));
}

function update(){
	for(i=0; i<listEnemies.length; i++){
		var hasEnemyDeath = false;
		if(listEnemies[i].health<=0){
			if(listEnemies[i].currentAction != 2){
				listEnemies[i].switchAction(2);
			}
			else{
				if(listEnemies[i].listSprites[listEnemies[i].currentSprite].current == listEnemies[i].listSprites[listEnemies[i].currentSprite].listImage.length-1){
					listEnemies.splice(i,1);
					hasEnemyDeath = true;
				}
			}
		}
		else if(listEnemies[i].x + listEnemies[i].speed > 1350){
			listEnemies[i].x = 1350;
			listEnemies[i].switchAction(1);
		}
		else{
			var tempCollide = false;
			for(j=0;j<listAllies.length;j++){
				if(isCollide(listEnemies[i].x, listEnemies[i].y, 90, 90, listAllies[j].x, listAllies[j].y, 90,90))
					tempCollide = true;
			}
			if(tempCollide)
				listEnemies[i].switchAction(1);
			else{
				listEnemies[i].switchAction(0);
				listEnemies[i].move();
			}
		}
		if(!hasEnemyDeath)
			listEnemies[i].listSprites[listEnemies[i].currentSprite].next();
	}
	for(i=0; i<listAllies.length; i++){
		var hasAllyDeath = false;
		if(listAllies[i].health<=0){
			if(listAllies[i].currentAction != 2){
				listAllies[i].switchAction(2);
			}
			else{
				if(listAllies[i].listSprites[listAllies[i].currentSprite].current == listAllies[i].listSprites[listAllies[i].currentSprite].listImage.length-1){
					listAllies.splice(i,1);
					hasAllyDeath = true;
				}
			}
		}
		else{
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
					if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
						tempEnemyInRange = true;
					}
				}
				if(tempEnemyInRange)
					listAllies[i].switchAction(1);
				else
					listAllies[i].switchAction(0);
		}
		if(!hasAllyDeath)
			listAllies[i].listSprites[listAllies[i].currentSprite].next();
	}	
	for(i=0; i<listEnemies.length; i++){
		if(listEnemies[i].currentAction == 1){
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
					listAllies[j].health-=(listEnemies[i].attack*listEnemies[i].aspeed/36);
				}
			}
		}
	}
	for(i=0; i<listAllies.length; i++){
		if(listAllies[i].currentAction == 1){
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
				if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
					listEnemies[j].health-=(listAllies[i].attack*listAllies[i].aspeed/36);
				}
			}
		}
	}
}

function draw(){
	
	for(i=0;i<7;i++){
		ScreenContext.drawImage(listImgLane[i], 0, i*90, 1440, 90);
	}
	
	for(i=0; i<listEnemies.length; i++){
		switch(listEnemies[i].currentAction){
		case 0: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].currentSprite].listImage[listEnemies[i].listSprites[listEnemies[i].currentSprite].current],
				listEnemies[i].x + listEnemies[i].listMoveXDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].y + listEnemies[i].listMoveYDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listMoveX[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listMoveY[listEnemies[i].listSprites[listEnemies[i].currentSprite].current]);
				break;
		case 1: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].currentSprite].listImage[listEnemies[i].listSprites[listEnemies[i].currentSprite].current],
				listEnemies[i].x + listEnemies[i].listAttackXDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].y + listEnemies[i].listAttackYDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listAttackX[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listAttackY[listEnemies[i].listSprites[listEnemies[i].currentSprite].current]);
				break;
		case 2: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].currentSprite].listImage[listEnemies[i].listSprites[listEnemies[i].currentSprite].current],
				listEnemies[i].x + listEnemies[i].listDefeatXDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].y + listEnemies[i].listDefeatYDiff[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listDefeatX[listEnemies[i].listSprites[listEnemies[i].currentSprite].current], 
				listEnemies[i].listDefeatY[listEnemies[i].listSprites[listEnemies[i].currentSprite].current]);
		}
	}
	
	for(i=0; i<listAllies.length; i++){
		switch(listAllies[i].currentAction){
		case 0: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].currentSprite].listImage[listAllies[i].listSprites[listAllies[i].currentSprite].current],
				listAllies[i].x + listAllies[i].listStandXDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].y + listAllies[i].listStandYDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listStandX[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listStandY[listAllies[i].listSprites[listAllies[i].currentSprite].current]);
				break;
		case 1: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].currentSprite].listImage[listAllies[i].listSprites[listAllies[i].currentSprite].current],
				listAllies[i].x + listAllies[i].listAttackXDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].y + listAllies[i].listAttackYDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listAttackX[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listAttackY[listAllies[i].listSprites[listAllies[i].currentSprite].current]);
				break;
		case 2: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].currentSprite].listImage[listAllies[i].listSprites[listAllies[i].currentSprite].current],
				listAllies[i].x + listAllies[i].listDefeatXDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].y + listAllies[i].listDefeatYDiff[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listDefeatX[listAllies[i].listSprites[listAllies[i].currentSprite].current], 
				listAllies[i].listDefeatY[listAllies[i].listSprites[listAllies[i].currentSprite].current]);
		}
	}
	
	ScreenContext.drawImage(imgItemMenu, 0, 630, 1560, 130);
	ScreenContext.drawImage(imgBuildMenu, 1440, 0, 120, 630);
	
}

function loop(){
	update();
	draw();
}