class Box{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
    this.Visiblity = 255 
    
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  
  
  }