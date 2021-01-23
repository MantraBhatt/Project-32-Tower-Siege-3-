class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       console.log(this.body.speed);
       if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop(); 
      
      }else{

        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(155,this.Visiblity);
       
        pop();
      }
       
      }

      score(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score = score + 2;
          block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
        }
      }
    


}