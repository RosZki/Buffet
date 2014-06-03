	var UtilitySpace;
	var UtilityContext;
	var ScreenSpace;
	var ScreenContext;

	var imgItemMenu;
	var imgBuildMenu;
	
	var listHitEffects = new Array();
	var listEnemies = new Array();
	var listProjectiles = new Array();
	var listAllies = new Array();
	var listAlliesP = new Array();
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
	//var monster = random(1,3);
	var effect = random(1,3);
	listEnemies.push(new Enemy(enemyList[1], lane, effectList[effect]));
}

function build(){
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 0, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 90, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 180, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 270, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 360, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 450, effectList[effect]));
	var effect = random(1,3)
	listAllies.push(new Ally(allyList[1], 1080, 540, effectList[effect]));
	
	listAlliesP.push(new AllyP(allyListP[1], 1170, 0));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 90));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 180));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 270));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 360));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 450));
	listAlliesP.push(new AllyP(allyListP[1], 1170, 540));
}

function update(){
	for(i=0; i<listProjectiles.length;i++){
		var isDone = false;
		if(listProjectiles[i].x <0){
			listProjectiles.splice(i,1);
			isDone = true;
		}
		else if(listProjectiles[i].current == 1){	
			if(listProjectiles[i].spriteList[listProjectiles[i].current].current == listProjectiles[i].spriteList[listProjectiles[i].current].listImage.length-1){
				listProjectiles.splice(i,1);
				isDone = true;
			}
		}
		else{
			for(j=0;j<listEnemies.length;j++){
				if(isCollide(listProjectiles[i].x, listProjectiles[i].y,
				listProjectiles[i].listX[listProjectiles[i].spriteList[listProjectiles[i].current].current], 
				listProjectiles[i].listY[listProjectiles[i].spriteList[listProjectiles[i].current].current], 
				listEnemies[j].x, listEnemies[j].y, 90, 90)){
					listProjectiles[i].switchAction(1);	
					listEnemies[j].health-=listProjectiles[i].attack/5;
				}
			}
		}
		if(!isDone){
			listProjectiles[i].move();
			listProjectiles[i].spriteList[listProjectiles[i].current].next();
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
				if(isCollide(listEnemies[i].x+listEnemies[i].speed, listEnemies[i].y, 90, 90, listAllies[j].x, listAllies[j].y, 90,90))
					tempCollide = true;
			}
			for(j=0;j<listAlliesP.length;j++){
				if(isCollide(listEnemies[i].x+listEnemies[i].speed, listEnemies[i].y, 90, 90, listAlliesP[j].x, listAlliesP[j].y, 90,90))
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
				if(tempEnemyInRange){
					listAllies[i].switchAction(1);
					listAllies[i].hitEffectSprite.next();
				}
				else
					listAllies[i].switchAction(0);
		}
		if(!hasAllyDeath)
			listAllies[i].listSprites[listAllies[i].current].next();
	}
	for(i=0; i<listAlliesP.length; i++){
		var hasAllyDeath = false;
		if(listAlliesP[i].health<=0){
			if(listAlliesP[i].current != 2){
				listAlliesP[i].switchAction(2);
			}
			else{
				if(listAlliesP[i].listSprites[listAlliesP[i].current].current == listAlliesP[i].listSprites[listAlliesP[i].current].listImage.length-1){
					listAlliesP.splice(i,1);
					hasAllyDeath = true;
				}
			}
		}
		else{
			var tempEnemyInRange = false;
			var tempRect = {x:0, y:listAlliesP[i].y, w:listAlliesP[i].x, h:90};
			for(j=0;j<listEnemies.length;j++){
				if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
					tempEnemyInRange = true;
				}
			}
			if(tempEnemyInRange){
				listAlliesP[i].switchAction(1);
				for(j=0;j<listAlliesP[i].release.length;j++){
					if (listAlliesP[i].listSprites[listAlliesP[i].current].current == listAlliesP[i].release[j]){
						tempi = i;
						listProjectiles.push(new Projectile(listAlliesP[i].projectiletype, listAlliesP[i].x-45, listAlliesP[i].y));
						i = tempi;
					}
				}
			}
			else
				listAlliesP[i].switchAction(0);
		}
		if(!hasAllyDeath)
			listAlliesP[i].listSprites[listAlliesP[i].current].next();
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
					if(listEnemies[i].listSprites[1].current >= listEnemies[i].frameHit[0])
						listAllies[j].health-=listEnemies[i].attack/15;
				}
			}
			for(j=0;j<listAlliesP.length;j++){
				if(isCollide(listAlliesP[j].x, listAlliesP[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
					if(listEnemies[i].listSprites[1].current >= listEnemies[i].frameHit[0])
						listAlliesP[j].health-=listEnemies[i].attack/15;
				}
			}
		}
	}
	for(i=0; i<listAllies.length; i++){
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
				if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)){
					if(listAllies[i].listSprites[1].current >= listAllies[i].frameHit[0])
						listEnemies[j].health-=listAllies[i].attack/15;
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
		switch(listEnemies[i].current){
		case 0: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listMoveXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listMoveYDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listMoveX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listMoveY[listEnemies[i].listSprites[listEnemies[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listAttackXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listAttackYDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listAttackX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listAttackY[listEnemies[i].listSprites[listEnemies[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listDefeatXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listDefeatYDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listDefeatX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listDefeatY[listEnemies[i].listSprites[listEnemies[i].current].current]);
		}
	}
	
	for(i=0; i<listAllies.length; i++){
		switch(listAllies[i].current){
		case 0: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listStandXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listStandYDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listStandX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listStandY[listAllies[i].listSprites[listAllies[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listAttackXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listAttackYDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listAttackX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listAttackY[listAllies[i].listSprites[listAllies[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listDefeatXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listDefeatYDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listDefeatX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listDefeatY[listAllies[i].listSprites[listAllies[i].current].current]);
		}
	}
	
	for(i=0; i<listAlliesP.length; i++){
		switch(listAlliesP[i].current){
		case 0: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listStandXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listStandYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listStandX[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listStandY[listAlliesP[i].listSprites[listAlliesP[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listAttackXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listAttackYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listAttackX[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listAttackY[listAlliesP[i].listSprites[listAlliesP[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listDefeatXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listDefeatYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listDefeatX[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listDefeatY[listAlliesP[i].listSprites[listAlliesP[i].current].current]);
		}
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
				listEnemies[i].x + tempX + 5, listEnemies[i].y + tempY + 5, sizeX, sizeY);
			}
		}
	}
	
	for(i=0;i<listAllies.length;i++){
		if(listAllies[i].current == 1){
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
				listAllies[i].x + tempX + 5, listAllies[i].y + tempY + 5, sizeX, sizeY);
			}
		}
	}
	
	for(i=0;i<listProjectiles.length;i++){
		ScreenContext.drawImage(listProjectiles[i].spriteList[listProjectiles[i].current].listImage[listProjectiles[i].spriteList[listProjectiles[i].current].current], 
		listProjectiles[i].x, 
		listProjectiles[i].y, 
		listProjectiles[i].listX[listProjectiles[i].spriteList[listProjectiles[i].current].current],
		listProjectiles[i].listY[listProjectiles[i].spriteList[listProjectiles[i].current].current]
		);
	}
	ScreenContext.drawImage(imgItemMenu, 0, 630, 1560, 130);
	ScreenContext.drawImage(imgBuildMenu, 1440, 0, 120, 630);
	
}

function loop(){
	update();
	draw();
}