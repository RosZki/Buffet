	var ScreenSpace;
	var ScreenContext;

	var imgItemMenu;
	var imgBuildMenu;
	
	var listEnemies = new Array();
	var listProjectiles = new Array();
	var listAllies = new Array();
	var listAlliesP = new Array();
	var listImgLane = new Array();
	var listImgItems = new Array();
	var listImgItemIcons = new Array();
	
	var selectedItem;
	var currentBuildPage = 0;
	
	var currentX = -1;
	var currentY = -1;
	var spawnTime= 50;
	var spawnCounter = 0;
	var id;

function init(){
	ScreenSpace = document.getElementById("Screen");
	ScreenContext = ScreenSpace.getContext("2d");
	
	imgItemMenu = document.getElementById("itemmenu");
	imgBuildMenu = document.getElementById("buildmenu");
	
	for(i=0; i<7; i++){
		listImgLane.push(new Image());
		listImgLane[i].src = "IMG/UI/Lane" + (i+1) + ".png";
	}
	
	for(i=1;i<=itemMenuOrder.length; i++){
		listImgItemIcons.push(new Image());
		if(itemMenuOrder[i].hasProjectile){
			listImgItemIcons[i-1].src = allyListP[itemMenuOrder[i].listValue].icon;
		}else{
			listImgItemIcons[i-1].src = allyList[itemMenuOrder[i].listValue].icon;
		}
		listImgItems.push(new Image());
		if(itemMenuOrder[i].hasProjectile){
			listImgItems[i-1].src = allyListP[itemMenuOrder[i].listValue].listStand[0];
		}else{
			listImgItems[i-1].src = allyList[itemMenuOrder[i].listValue].listStand[0];
		}
	}
	
	ScreenSpace.onclick = onClick;
	ScreenSpace.onmousemove = onMove;
	id = setInterval(loop, 1000/30);
	addKeyboardShortcuts();
	//sampleBuild();
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
	shortcut.add("Z", function(){selectItem(13);});
	shortcut.add("X", function(){selectItem(14);});
	shortcut.add("C", function(){selectItem(15);});
}

function selectItem(x){
	if(selectedItem != x)
			selectedItem = x + (currentBuildPage * 15);
		else
			selectedItem = null;
}

function loadImage(imagesrc){
	var tempImage = new Image();
	tempImage.src = imagesrc;
	return tempImage;
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
	}else if(isInside(0,45,1440,630,e.pageX,e.pageY)){
		if(selectedItem != null){
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
	listEnemies.push(new Enemy(enemyList[monster], lane, effectList[effect]));
}

function sampleBuild(){
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

function build(){
	if(itemMenuOrder[selectedItem].hasProjectile){
		var tempAlly = new AllyP(allyListP[itemMenuOrder[selectedItem].listValue], currentX , currentY);
		var collide = false;
		for(i=0;i<listAllies.length;i++){
			if(isCollide(listAllies[i].x, listAllies[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
				collide = true;
			}
		}
		for(i=0;i<listAlliesP.length;i++){
			if(isCollide(listAlliesP[i].x, listAlliesP[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
				collide = true;
			}
		}
		if(!collide){
			listAlliesP.push(tempAlly);
			selectedItem = null;
		}
	}else{
		var effect = random(1,3);
		var tempAlly = new Ally(allyList[itemMenuOrder[selectedItem].listValue], currentX , currentY, effectList[effect]);
		var collide = false;
		for(i=0;i<listAllies.length;i++){
			if(isCollide(listAllies[i].x, listAllies[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
				collide = true;
			}
		}
		for(i=0;i<listAlliesP.length;i++){
			if(isCollide(listAlliesP[i].x, listAlliesP[i].y, 90, 90, tempAlly.x, tempAlly.y, 90,90)){
				collide = true;
			}
		}
		if(!collide){
			listAllies.push(tempAlly);
			selectedItem = null;
		}
	}
}

function update(){
	if(spawnCounter == spawnTime){
		randomSpawn();
		spawnCounter = 0;
	}
	else{
		spawnCounter++;
	}
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
				if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h) || 
					isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAlliesP[i].x, listAlliesP[i].y, 90, 90)){
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
				if(isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, tempRect.x, tempRect.y, tempRect.w, tempRect.h)|| 
					isCollide(listEnemies[j].x, listEnemies[j].y, 90,90, listAllies[i].x, listAllies[i].y, 90, 90)){
					if(listAllies[i].listSprites[1].current >= listAllies[i].frameHit[0])
						listEnemies[j].health-=listAllies[i].attack/15;
				}
			}
		}
	}
}

function draw(){
	
	for(i=0;i<7;i++){
		ScreenContext.drawImage(listImgLane[i], 0, i*90+45, 1440, 90);
	}
	
	for(i=0; i<listEnemies.length; i++){
		switch(listEnemies[i].current){
		case 0: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listMoveXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listMoveYDiff[listEnemies[i].listSprites[listEnemies[i].current].current]+45, 
				listEnemies[i].listMoveX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listMoveY[listEnemies[i].listSprites[listEnemies[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listAttackXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listAttackYDiff[listEnemies[i].listSprites[listEnemies[i].current].current]+45, 
				listEnemies[i].listAttackX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listAttackY[listEnemies[i].listSprites[listEnemies[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listEnemies[i].listSprites[listEnemies[i].current].listImage[listEnemies[i].listSprites[listEnemies[i].current].current],
				listEnemies[i].x + listEnemies[i].listDefeatXDiff[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].y + listEnemies[i].listDefeatYDiff[listEnemies[i].listSprites[listEnemies[i].current].current]+45, 
				listEnemies[i].listDefeatX[listEnemies[i].listSprites[listEnemies[i].current].current], 
				listEnemies[i].listDefeatY[listEnemies[i].listSprites[listEnemies[i].current].current]);
		}
	}
	
	for(i=0; i<listAllies.length; i++){
		switch(listAllies[i].current){
		case 0: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listStandXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listStandYDiff[listAllies[i].listSprites[listAllies[i].current].current]+45, 
				listAllies[i].listStandX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listStandY[listAllies[i].listSprites[listAllies[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listAttackXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listAttackYDiff[listAllies[i].listSprites[listAllies[i].current].current]+45, 
				listAllies[i].listAttackX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listAttackY[listAllies[i].listSprites[listAllies[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listAllies[i].listSprites[listAllies[i].current].listImage[listAllies[i].listSprites[listAllies[i].current].current],
				listAllies[i].x + listAllies[i].listDefeatXDiff[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].y + listAllies[i].listDefeatYDiff[listAllies[i].listSprites[listAllies[i].current].current]+45, 
				listAllies[i].listDefeatX[listAllies[i].listSprites[listAllies[i].current].current], 
				listAllies[i].listDefeatY[listAllies[i].listSprites[listAllies[i].current].current]);
		}
	}
	
	for(i=0; i<listAlliesP.length; i++){
		switch(listAlliesP[i].current){
		case 0: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listStandXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listStandYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current]+45, 
				listAlliesP[i].listStandX[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listStandY[listAlliesP[i].listSprites[listAlliesP[i].current].current]);
				break;
		case 1: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listAttackXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listAttackYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current]+45, 
				listAlliesP[i].listAttackX[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].listAttackY[listAlliesP[i].listSprites[listAlliesP[i].current].current]);
				break;
		case 2: ScreenContext.drawImage(listAlliesP[i].listSprites[listAlliesP[i].current].listImage[listAlliesP[i].listSprites[listAlliesP[i].current].current],
				listAlliesP[i].x + listAlliesP[i].listDefeatXDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current], 
				listAlliesP[i].y + listAlliesP[i].listDefeatYDiff[listAlliesP[i].listSprites[listAlliesP[i].current].current]+45, 
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
				listEnemies[i].x + tempX + 5, listEnemies[i].y + tempY + 5 + 45, sizeX, sizeY);
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
				listAllies[i].x + tempX + 5, listAllies[i].y + tempY + 5 + 45, sizeX, sizeY);
			}
		}
	}
	
	for(i=0;i<listProjectiles.length;i++){
		ScreenContext.drawImage(listProjectiles[i].spriteList[listProjectiles[i].current].listImage[listProjectiles[i].spriteList[listProjectiles[i].current].current], 
		listProjectiles[i].x, 
		listProjectiles[i].y + 45, 
		listProjectiles[i].listX[listProjectiles[i].spriteList[listProjectiles[i].current].current],
		listProjectiles[i].listY[listProjectiles[i].spriteList[listProjectiles[i].current].current]
		);
	}
	
	if(selectedItem != null && currentX != -1 && currentY != -1){
		ScreenContext.drawImage(listImgItems[selectedItem-1], currentX+5, currentY+50, 80, 80);
	}
	
	ScreenContext.drawImage(imgItemMenu, 0, 675, 1560, 130);
	ScreenContext.drawImage(imgBuildMenu, 1440, 45, 120, 630);
	ScreenContext.fillRect(0,0, 1560,45);
	
	/*ScreenContext.fillRect(1460, 65, 80, 80);
	ScreenContext.fillRect(1460, 165, 80, 80);
	ScreenContext.fillRect(1460, 265, 80, 80);
	ScreenContext.fillRect(1460, 365, 80, 80);
	ScreenContext.fillRect(1460, 465, 80, 80);
	ScreenContext.fillRect(1460, 565, 80, 80);*/
	
	ScreenContext.fillRect(40,695,80,80);
	ScreenContext.fillRect(140,695,80,80);
	ScreenContext.fillRect(240,695,80,80);
	ScreenContext.fillRect(340,695,80,80);
	ScreenContext.fillRect(440,695,80,80);
	ScreenContext.fillRect(540,695,80,80);
	ScreenContext.fillRect(640,695,80,80);
	ScreenContext.fillRect(740,695,80,80);
	ScreenContext.fillRect(840,695,80,80);
	ScreenContext.fillRect(940,695,80,80);
	ScreenContext.fillRect(1040,695,80,80);
	ScreenContext.fillRect(1140,695,80,80);
	ScreenContext.fillRect(1240,695,80,80);
	ScreenContext.fillRect(1340,695,80,80);
	ScreenContext.fillRect(1440,695,80,80);
	
	for(i=0;i<listImgItemIcons.length;i++){
		if(selectedItem-1 != i){
		ScreenContext.drawImage(listImgItemIcons[i], (i*100)+40, 695, 80, 80);
		}
	}
	
	
}

function loop(){
	update();
	draw();
}