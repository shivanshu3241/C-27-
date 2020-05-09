class Pendulum 
{
    constructor(x, y, radius)
    {
        var options = 
        {
            restitution : 0.5,
            friction : 0.3,
            density : 0.7  
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;

        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("black");
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}