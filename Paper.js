class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
  //       }
  //     this.r = r;
  //     this.x = x;
  //     this.y = y;
  //     this.body = Bodies.circle(200,200,20,options);
      
  //     World.add(world, this.body);
  //   }
  //   display(){
  //     var pos = this.body.position;
  //     fill("green");

  //     rectMode(CENTER);
  //     ellipse(50,300,20);
  //   }
  // }

    //     }
    // this.x=x;
		// this.y=y;
		// this.r=r
		this.body=Bodies.circle(200,300,20, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,40);
			pop()
			
  }
}
  