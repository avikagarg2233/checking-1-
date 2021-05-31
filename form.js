class Form {
    constructor(){

      this.showelements = true
     
      this.title  = createElement('h1');
      this.input  = createInput("Enter Character Name");
      this.input2 = createInput("choose HERO or VAMP");

       this.leftbar1 = createImg("images/left bar coding.png");
      this.leftbar2  = createImg("images/left bar coding.png");
      this.arrow     = createImg("images/arrow coding.png");
      this.character = createImg("images/character.svg");
      this.bgleftbar = createImg("images/bgleftbar.svg");
     
      
      this.Startbutton = createButton("Start");
      this.button1     = createButton("Character");
      this.button2     = createButton("Background");
    }

     hide(){
       this.input.hide();
       this.input2.hide();
       this.title.hide();
       this.leftbar1.hide(); 
       this.leftbar2.hide();   
       this.arrow.hide();   
       this.character.hide();   
       this.bgleftbar.hide();  
       this.Startbutton.hide();  
       this.button1.hide();  
       this.button2.hide();  
       
       }

    display(){

      if(this.showelements === true){

        fill(230,179,207)
        rect(580,200,200,200);

        fill("black")
        textSize(20)
        text("<-- Choose character",585,300)    

        fill("yellow")
        rect(445,90,150,40);
    
        fill("red")
        text("score: ",450,115)

        var backgroundImg,background
        backgroundImg = loadImage("images/background.png")
        background = createSprite(657,355,20,20);
        background.addImage(backgroundImg);
        background.scale = 0.5

      }

   
      this.title.html("woojo");
      this.title.position(615,10)
    
      this.input.position(590,150);

      this.input2.position(590,430); 

      this.Startbutton.position(655,520)

      this.button1.position(443,211)

      this.button2.position(443,295)

    /////////////// images and score //////////////////

   // var arrowImg,arrow
    this.arrow.position(556,480)
    this.arrow.size(270,105)
    
   // var characterImg,character
    this.character.position(455,170)
    this.character.size(40,40)

   // var bgleftbarImg,bgleftbar
    this.bgleftbar.position(455,255)
    this.bgleftbar.size(40,40)
    
    this.leftbardisplay(this.leftbar1,443,165);
    this.leftbardisplay(this.leftbar2,443,250);

  
    //////////////mousePressed///////////////

    this.button1.mousePressed(()=>{
      this.hide();
     this.showelements = false
     //this.function button1();
    
     });


    this.Startbutton.mousePressed(()=>{
      // console.log("hi")

        this.hide();
       this.showelements = false
        
         fill("450,20,40,89")
         rect(670,657,200,200)

     });


     function button1() {
      fill("black")
      text("character",200,200)
 
    }

    
    }
     ///////////////////////display finished/////////////////////////////


    leftbardisplay(img,x,y){
       img.position(x,y);
      img.size(80,80);
    }

   

}

