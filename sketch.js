var drop;


function setup() {
  createCanvas(500, 600);
  drop = new Drop ();
  for (var i = 0 ;  i < 100; i++){
    drop [i]= new Drop();
  }
}

function draw() {
  background(0);
  for (var i = 0 ;  i < 100; i++){
  drop[i].show();
  drop[i].update();
  }

}

function Drop(){
  this.x= random(0,width );
  this.y=random(0,-height );
  
  this.show= function (){
    noStroke();
    fill (0,0,150);
    ellipse(this.x,this.y,10,10);
    }
  
  this.update= function (){
    this. gravity =1.05;
    this.y= this.y + 8;
    
    if (this.y>height ){
      this.y=random(0,-height );
      this.gravity = 0;
    }
  }
}