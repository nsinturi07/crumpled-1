class Box {
    constructor(x, y, width, height,options) {
      var options={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbin.png.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
  
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);
    
    }
  }