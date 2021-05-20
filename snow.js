class Snow {
    constructor(x, y, r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.smokeImage = loadImage("snow5.webp");
      this.body=Bodies.circle(this.x, this.y, this.r, options)
      World.add(world, this.body);
    
    }
    display(){
      var snowpos = this.body.position;
      push()
			translate(snowpos.x, snowpos.y);
      rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.smokeImage, 0,0,this.r*2, this.r*2)
			pop()
    }
  };  
