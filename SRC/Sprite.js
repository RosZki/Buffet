function Sprite(list){

	this.listImage = new Array();
	this.current = 0;
	this.counter = 0;
	
	for(i=0;i<list.length;i++){
		this.listImage.push(new Image());
		this.listImage[i].src = list[i];
	}
	
	this.next = function(){
		if(this.counter == 4){
			this.nextFrame();
			this.counter = 0;
		}
		else{
			this.counter++;
		}
	}
	
	this.nextFrame = function(){
		if(this.current == this.listImage.length-1){
			this.current = 0;
		}
		else
			this.current++;
	}
}