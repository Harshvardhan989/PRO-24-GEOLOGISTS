class Pebbles{
	constructor(x,y,r)
	{
	// assigning options to the rubber ball
	  var options = {
		'restitution' : 0.3,
		'friction' : 5,
		'density' : 1
	  }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pebblepos=this.body.position;		
			push()
			translate(pebblepos.x, pebblepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("blue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r);
			pop()
	}

}