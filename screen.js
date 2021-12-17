class Screen{
    constructor(){
        
        this.animalButton=createButton("")
        this.foodButton=createButton("")
        this.countryButton=createButton("")
        this.sportsButton=createButton("")

} 



handleElements(){
    this.animalButton.position(100,50)
    this.animalButton.class("aButton")
    this.foodButton.position(100,250)
    this.foodButton.class("fButton")
    this.countryButton.position(100,350)
    this.countryButton.class("cButton")
}
  handlemousePressed(){
      this.animalButton.mousePressed(()=>{
          this.hide()
            animal= new Animal()
          })
          this.foodButton.mousePressed(()=>{
            this.hide()
              food= new Food()
              
          })
          this.countryButton.mousePressed(()=>{
              this.hide()
              country=new Country()
          })
  }
display(){
    background("pink")
    this.handleElements()
    this.handlemousePressed()
}
   
  hide(){
    this.animalButton.hide()
    this.foodButton.hide() 
    this.countryButton.hide()
  }  


    
   
}
    


