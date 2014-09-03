var is_within = function(x1,y1,w1,h1,x2,y2,w2,h2){
	maxX1 = x1+w1;
	maxY1 = y1+h1;
	maxX2 = x2+w2;
	maxY2 = y2+h2;
	
	return !((maxX1 <= x2)||(x1 >= maxX2)||(y1>=maxY2)||(maxY1<=y2));

}

var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var is_inside = function(x, y, w, h, gX, gY){
	tempX = x+w;
	tempY = y+h;
	if((gX >= x && gX <= tempX) && (gY >= y && gY <= tempY))
		return true;
	else
		return false;
}	
var get_x_grid = function(x){
	return Math.floor((x-screen_offset.x-63)/101);
}

var get_y_grid = function(y){
	return Math.floor((y-screen_offset.y-58)/92);
}

var get_x_pos = function(x){
	return x*101+screen_offset.x+63;
}

var get_y_pos = function(y){
	return y*92+screen_offset.y+58;
}

var is_in_screen = function(x, y){
	return is_inside(0,38,1024,488,x,y);
}