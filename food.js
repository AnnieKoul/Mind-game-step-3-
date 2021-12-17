class Food{
    constructor(){
        this.img1=createImg("Images/Food/Image1.jpg")
        this.img2=createImg("Images/Food/Image2.jpg")
        this.img3=createImg("Images/Food/Image3.jpg")
        this.img8=createImg("Images/Food/Image4.jpg")
        this.img54=createImg("Images/Food/Image5.jpg")
       
        this.input1=createInput("").attribute("placeholder","Enter Your Answer")
        this.input2=createInput("").attribute("placeholder","Enter Your Answer")
        this.input3=createInput("").attribute("placeholder","Enter Your Answer")
        this.input8=createInput("").attribute("placeholder","Enter Your Answer")
        this.input54=createInput("").attribute("placeholder","Enter Your Answer")
        this.img1.position(10,10)
        this.img2.position(700,10)
        this.img3.position(30,370)
        this.img8.position(600,350)
        this.img54.position(500,550)
    this.input1.position(10,250)
    this.input2.position(700,250)
    this.input3.position(80,600)
    this.input8.position(940,410)
    this.input54.position(990,600)
    this.input1.class("input")
    this.input2.class("input")
    this.input3.class("input")
    this.input8.class('input')
    this.input54.class("input")
        
    }

    
    
}