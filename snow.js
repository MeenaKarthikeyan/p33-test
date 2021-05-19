class Snow {
    constructor(x, y, r, Bodies) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x=x;
      this.y=y;
      this.r=r;
    this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    this.smokeImage = loadImage("sprites/snow5.webp");
    World.add(world, this.body);
    }
    display(){
      var snowpos =this.body.position;
      push();
      translate(snowpos.x, snowpos.y);
      rectMode(CENTER);
strokeWeight(4);
stroke("black")
      fill("red");
     ellipse(0,0,this.r);
      pop();
    }
  };  