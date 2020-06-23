class paperObject {
    constructor(x,y,radius,options){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        image(this.image, 0, 0, this.radius, this.radius);
}
}