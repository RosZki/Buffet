preloader = function(){

	this.load_image = function(imageURL){
		var temp_image = new Image();
		temp_image.src = imageURL;
		return temp_image;
	}
	
	this.load_array_images = function(array){
		var temp_array = new Array();
		for(z=0;z<array.length;z++){
			temp_array.push(new Image());
			temp_array[z].src = array[z];
		}
		return temp_array;
	}

}