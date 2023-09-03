function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(16);
  pScope.load_image("bear" , "png");
}

function setup_layers(pScope){
  //let us draw the whole circle background
  new PLayer(null, 220);

  var layerback = new PLayer(bkgr);
  layerback.mode(RING);
  layerback.set_boundary( 0, 1000 );

  var layer1 = new PLayer(bear);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 0, 1000 );



}

function bkgr (x, y, animation, pScope){
  pScope.fill_background('yellow');
}

function bear(x, y, animation, pScope){
 
  push()
  //scare(0.1);
  fill('grey')
  stroke('black')
  ellipse(65,60,70,70)//left ear
  ellipse(140,60,70,70)//right ear

  fill('grey');
  describe('a white ellipse with white outline') //small eye
  
  stroke('black');
  ellipse (103, 115, 130, 130)//face 
  
  fill('black')
  stroke('black')
  ellipse(83,100,30,30)//big left eye
  ellipse(120,100,30,30)//big right eye

  fill('white')
  ellipse(75,95,10,10)//small left eye
  ellipse(112,95,10,10)//small right eye

  fill('black')
  stroke('black')
  ellipse (101,135,40,35) //mouth

  
 
  
  stroke('grey')
  stroke('grey')
  fill('pink')

  ellipse(142,140,20,20)
  stroke('yellow')
  stroke('grey')
  fill('pink')

  stroke('pink')
  ellipse(61,140,20,20)

 // pScope.draw_image("bear",x,y);
pop()
}

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

