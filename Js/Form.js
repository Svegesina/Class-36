class Form{
constructor(){
this.input=createInput("").attribute("placeholder","Enter your name")
this.playButton=createButton("Play")
this.titleImage=createImg("title.png","gametitle")
this.greeting=createElement("H2")
}
setElementpos(){
this.titleImage.position(120,160)
this.input.position(width/2-110,height/2-80)
this.playButton.position(width/2-90,height/2-20)
this.greeting.position(width/2-300,height/2-100)
}
setElementstyle(){
this.titleImage.class("gametitle")
this.input.class("custominput")
this.playButton.class("custombutton")
this.greeting.class("greeting")
}
handleMousePressed() { 
    this.playButton.mousePressed(() => { 
    this.input.hide();
     this.playButton.hide(); 
     var message = ` Hello ${this.input.value()} </br>wait for another player to join...`;
      this.greeting.html(message); }); }


      display(){
    this.setElementpos()
    this.setElementstyle()
    this.handleMousePressed()
      }
}