void setup() {
	
	// Changes the size of the game frames. Set to whatever you want
		size(500, 500);

	/* My code \/ */
	// in progress
		var Block = function(x, y, size) {
			this.x = x;
			this.y = y;
			this.size = size;
		};
		
		Block.prototype.draw = function() {
			rectMode(CENTER);
			fill(255, 255, 255);
			rect(this.x, this.y, this.size, this.size);
		};
		
		var scenes = [0, 1, 2];
		
		draw = function() {
			background(0, 0, 0);
			var currentScene = 0;
			/* main code */
			
			
			var player = new Block(x, y, size);
			player.draw();
			/* --------- */
		}
	/*------------*/
 }
