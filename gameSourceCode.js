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
		
		
		var x;
		var y;
		var px;
		var py;
		var size = 10; // Change to desired size
		var scenes = [0, 1, 2];
		var currentScene = 0;
		
		var playButton = function(x, y) {
			fill(255, 255, 255);
			rectMode(CENTER);
			rect(x, y, 30, 20);
			if (mouseX > (x - 15) && mouseX < (x + 15) && mouseY > (y - 10) && mouseY < (y + 10)) {
				currentScene = 1;
			}
		};
		
		
		
		draw = function() {
			background(0, 0, 0);
			
			/* main code */
			if (currentScene === scenes[0]) {
				px = (frameCount) % 500;
				py = 200;
				playButton(px, py);
			}
			
			if (currentScene === scenes[1]) {
				var player = new Block(x, y, size);
			}
			/* --------- */
		};
	/*------------*/
}
