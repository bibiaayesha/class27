class Chain{
 contructor(bodyA,bodyB){

var options = {
  bodyA: bodyA,
  bodyB: bodyB,
  length:30,
  stiffness:0.1
}

this.chains = Constraint.create(options)
World.add(world,this.chains);
}

display(){

    var pointA = this.chains.bodyA.position;
    var pointB = this.chains.bodyB.position;
    strokeWeight(3);
    line(pointA.x, pointA.y , pointB.x, pointB.y)
}

}