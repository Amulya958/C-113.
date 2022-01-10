function preload()
{
    
}

function setup()
{
   canvas = createCanvas(400 , 400);
    canvas.position(110,250);

    img= loadImage('googly.jpg');
}

function draw() 
{
    image(img, 0 , 0, 200 , 200);

   fill(0,128,0);
   stroke(0,128,0);
   circle(180 , 35 , 20);

   fill(0,128,0);
   stroke(0,128,0);
   circle( 30, 35 , 20);

   fill(0,128,0);
   stroke(0,128,0);
   circle( 30, 180 , 20);

   fill(0,128,0);
   stroke(0,128,0);
   circle( 180, 180 , 20);
}

