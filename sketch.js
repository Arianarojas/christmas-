let snowflakes = []; // array to hold snowflake objects


var ellipseX = 250;
var ellipseY = 250;
var ellipseDiam = 40;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas


}

//The draw function happens over and over again
function draw() {
	background(116,214,128); //an RGB color for the canvas' background

	// Snowflake color
	fill(217,252,255);
  	noStroke();

    let t = frameCount / 60; // update time

	  // create a random number of snowflakes each frame
	  for (var i = 0; i < random(5); i++) {
	    snowflakes.push(new snowflake()); // append snowflake object
	  }

	  // loop through snowflakes with a for..of loop
	  for (let flake of snowflakes) {
	    flake.update(t); // update snowflake position
	    flake.display(); // draw snowflake
	  }





  //circle
  stroke(23,51,5) // an RGB color for the circle's border
  fill("#ff0000"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  

  ellipse(ellipseX, ellipseY, ellipseDiam, ellipseDiam); // center of canvas, 20px dia
    //text
    stroke(11,94,21) // aN RBG color for the text's border
    fill("#ffffff"); // an RGB color for the inside of the text

	if(ellipseDiam > 180) {
	  textSize(25)
	  textFont("Fantasy");
	  textStyle(BOLD)
	  textAlign(CENTER)
	  text('Merry Christmas',250,250);

	  
	}

}


function mousePressed () {

	ellipseDiam = ellipseDiam + 100;




	console.log(ellipseDiam);

}



// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}


