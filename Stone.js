class Stone {
  constructor(x,y,width,height) {
    var options={
        //bouncing power
        restitution:0.8,
        friction:1.0,
        density:1.0
       }
       this.width=width
       this.height=height
       this.body=Bodies.rectangle(x,y,width,height ,options);
       World.add(world,this.body);
}


display() {
    var pos =this.body.position;
    
    var angle = this.body.angle;
     push();
      translate(pos.x, pos.y);
       rotate(angle);
        rectMode(CENTER);
        //thickness of the boundary
        strokeWeight(4);
        stroke ('brown');
         fill(255); 
         rect(0, 0, this.width, this.height);
          pop();
}
}
