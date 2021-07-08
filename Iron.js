class Iron{
	constructor(x,y,r)
	{
	// assign options to the rectangle
		 var options = {
			 restitution: 0.8,
			 friction: 3,
			 density: 30
		 }

		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,50, 50, options)
		World.add(world, this.body);

		

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the rectangle here to display the rubber ball
			rect (0,0,70,70);
			pop()
	}

}