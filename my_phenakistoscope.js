function setup_pScope(pScope) {
  pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(12);
  pScope.load_image("Leaves on top", "png");
  pScope.load_image("Leaves on Bottom", "png");
  pScope.load_image("Middle Leaf", "png");
  pScope.load_image("Leaves on the Right", "png");
  pScope.load_image("Pollen", "png");
}

function setup_layers(pScope) {
  //let us draw the whole circle background
  new PLayer(null, 226, 135, 67);

  var insideBackground = new PLayer(LeavesonBottom);
  insideBackground.mode(RING)
  insideBackground.set_boundary(0, 1000)

  var insideBackground = new PLayer(LeavesonTop);
  insideBackground.mode(RING)
  insideBackground.set_boundary(0, 1000)

  var insideBackground = new PLayer(LeavesontheRight);
  insideBackground.mode(RING)
  insideBackground.set_boundary(0, 1000)

  var layerback = new PLayer(bkgr);
  layerback.mode(RING);
  layerback.set_boundary(0, 100);

  var layer1 = new PLayer(codeBear);
  layer1.mode(RING);
  layer1.set_boundary(0, 1000);

  var layer1 = new PLayer(codeBear2);
  layer1.mode(RING);
  layer1.set_boundary(0, 1000);

  var layer1 = new PLayer(codeBear3);
  layer1.mode(RING);
  layer1.set_boundary(0, 1000);

  var insideBackground = new PLayer(centerLeaf);
  insideBackground.mode(RING)
  insideBackground.set_boundary(0, 1000)

  var layer1 = new PLayer(Pollen);
  layer1.mode(RING);
  layer1.set_boundary(0, 1000);

}

function bkgr(x, y, animation, pScope) {
  pScope.fill_background('#FFC990');
}

function centerLeaf(x, y, animation, pScope) {
  push();
  scale(0.44);

  if (animation.frame < 3 / 12) {
    pScope.draw_image("Middle Leaf",-0, 0);
  }
  pop();
}

function LeavesonTop(x, y, animation, pScope) {
  push();
  translate(0, 1000);
  scale(0.7)
  pScope.draw_image("Leaves on top", 0, -1800 - animation.wave(0.01) *1000);
  pop();
}

function LeavesontheRight(x, y, animation, pScope) {
  push();
  translate(0, -5);
  scale(10)
  pScope.draw_image("Leaves on the Right", 0, -3000 - animation.wave(10) * 200);

  pScope.draw_image("Leaves on the Right", 0, -1000 - animation.wave(1) * 200);
  pop();
}



function Pollen(x, y, animation, pScope) {
  push();
  translate(10, -10)
  scale(0.06)
  pScope.draw_image("Pollen", 0, -1200 - animation.wave(2) * 200);
  
  translate(0, 0.4)
  pScope.draw_image("Pollen", 0, -10000 - animation.wave(0.6) * 200);
  scale(0.06)
  pop()
}



function LeavesonBottom(x, y, animation, pScope) {
  push();
  scale(0.009)
  pScope.draw_image("Leaves on Bottom", 0, -3000 - animation.wave(0.02) * 200);

  pScope.draw_image("Leaves on Bottom", 0, -1000 - animation.wave(1) * 200);
  pop();
}


function detail(x, y, animation, pScope) {
  if (animation.frame <= 0.1) {
    push();
    scale(1.005);


    translate(31.5, 405)
    pScope.draw_image("Leaves on top", 0, 0);
    pop();
    rotate(0)
  }



}


function codeBear(x, y, animation, pScope) {
  push()
  translate(-100, -1000 + animation.wave(0.006) * 100);
  fill('#EBE8ED')
  noStroke()
  ellipse(65, 60, 70, 70)//left ear
  ellipse(140, 60, 70, 70)//right ear

  fill('#EBE8ED');
  describe('a white ellipse with white outline') //small eye

  stroke('#EBE8ED');
  ellipse(103, 115, 130, 130)//face 

  fill('black')
  stroke('#EBE8ED')
  ellipse(83, 100, 30, 30)//big left eye
  ellipse(120, 100, 30, 30)//big right eye

  fill('white')
  ellipse(75, 95, 10, 10)//small left eye
  ellipse(112, 95, 10, 10)//small right eye

  fill('black')
  stroke('black')
  ellipse(101, 135, 40, 35) //mouth

  stroke('#EBE8ED')
  stroke('#EBE8ED')
  fill('#EEA0CA')

  ellipse(142, 140, 20, 20)
  stroke('yellow')
  stroke('grey')
  fill('pink')

  stroke('pink')
  ellipse(61, 140, 20, 20)

  // pScope.draw_image("bear",x,y);
  pop()
}

function codeBear2(x, y, animation, pScope) {
  push();
  translate(40, -450);
  rotate(0,20);
  scale(0.5);
  translate(-100, -600 + animation.wave(100) * 100);
  fill('#C7A15B')
  stroke('#C7A15B')

  //codeBear2 drawing
  ellipse(65, 60, 70, 70)//left ear
  ellipse(140, 60, 70, 70)//right ear

  fill('#C7A15B');
  describe('a white ellipse with white outline') //small eye

  stroke('#C7A15B');
  ellipse(103, 115, 130, 130)//face 

  fill('black')
  stroke('black')
  ellipse(83, 100, 30, 30)//big left eye
  ellipse(120, 100, 30, 30)//big right eye

  fill('white')
  ellipse(75, 95, 10, 10)//small left eye
  ellipse(112, 95, 10, 10)//small right eye

  fill('black')
  stroke('black')
  ellipse(101, 135, 40, 35) //mouth

  stroke('grey')
  stroke('grey')
  fill('pink')

  ellipse(142, 140, 20, 20)
  stroke('yellow')
  stroke('grey')
  fill('pink')

  stroke('pink')
  ellipse(61, 140, 20, 20)

  // pScope.draw_image("bear",x,y);
  pop();
}

function codeBear3(x, y, animation, pScope) {
  push();
  translate(60, -100);
  rotate(9);
  scale(0.5);
  translate(-500, -600 + animation.wave(-6500) * 10);
  fill('#C69A95')
  noStroke()

  //codeBear3 drawing
  ellipse(65, 60, 70, 70)//left ear
  ellipse(140, 60, 70, 70)//right ear

  fill('#C69A95');
  describe('a white ellipse with white outline') //small eye

  noStroke()
  ellipse(103, 115, 130, 130)//face 

  fill('black')
  stroke('black')
  ellipse(83, 100, 30, 30)//big left eye
  ellipse(120, 100, 30, 30)//big right eye

  fill('white')
  ellipse(75, 95, 10, 10)//small left eye
  ellipse(112, 95, 10, 10)//small right eye

  fill('black')
  stroke('black')
  ellipse(101, 135, 40, 35) //mouth

  stroke('grey')
  stroke('grey')
  fill('pink')

  ellipse(142, 140, 20, 20)
  stroke('yellow')
  stroke('grey')
  fill('pink')

  stroke('pink')
  ellipse(61, 140, 20, 20)

  // pScope.draw_image("bear",x,y);
  pop();
}


function bearPng(x, y, animation, pScope) {
  // scale(0.2)
  //pScope.draw_image("bear no background",x-360,y-2500 + animation.wave(2)*200);


}


// // this is how you set up a background for a specific layer
// let angleOffset = (360 / SLICE_COUNT) / 2
// let backgroundArcStart = 270 - angleOffset;
// let backgroundArcEnd = 270 + angleOffset;

// fill(66, 135, 245)
// arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

// fill(255)
// // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

