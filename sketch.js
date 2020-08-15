const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world,brain_img,brain,bubble_img,bubble1,bubble_img,bubble,buuble2,bubble2_img,bubble1_img,bubble3_img;

var bubble3,bubble4_img,bubble4,bubble5_img,bubble5,button1,page2,text1,button2,button3,button4,button5,bubble5;
var bubble6_img,button6,button7,button8,white,back;
let mysound,text2,text3,text4,text5,text6,text7,form,background_img,button9,button10,button11,button12,button13;
let vid;
let mysound1;
var button14,button15,button16,text8,p1,p_img,alunom,alunom2,text9,bg1,text10,text21,button17;
var text11,text12,text13,text14,text15,text16,text17,text18,text19,text20,pinkb,pink1,think1,think2;

function preload(){
    p_img=loadImage("p.jpg");
    think1=loadImage("think.jpg");
    pinkb=loadImage("pink.jpg")
   alunom=loadImage("alom.jpg");
    brain_img=loadImage("brain.png");
    bubble_img=loadImage("bubble1.png");
    bubble1_img=loadImage("bubble.png");
bubble2_img=loadImage("b4.png");
bubble3_img=loadImage("bubble3.png");
bubble4_img=loadImage("b5.png");
bubble5_img=loadImage("b6.png");
bubble6_img=loadImage("b7.png");
background_img=loadImage("op.png");
soundFormats("mp3","ogg");
mysound=loadSound("music2.mp3");
soundFormats("mp3","ogg");
mysound1=loadSound("music.mp3");
//vid=createVideo(["alunom.mp4"],vidLoad)
//vid.size(200,200);
}

function setup(){
    engine = Engine.create();
    world = engine.world;
     createCanvas(displayWidth,displayHeight);
   
     button1=createButton("Next");
    
    
   
    
    text1=createElement("h2");
   
    text2=createElement("h2");
    text3=createElement("h2");
    text4=createElement("h2");
    text5=createElement("h2");
    text6=createElement("h2");
    text7=createElement("h2");
    text8=createElement("h2");
    text9=createElement("h2");
    text10=createElement("h2");
    text11=createElement("h2");
    text12=createElement("h2");
    text13=createElement("h2");
    text14=createElement("h2");
    text15=createElement("h2");
    text16=createElement("h2");
    text17=createElement("h2");
    text18=createElement("h2");
    text19=createElement("h2");
    text20=createElement("h2");
    text21=createElement("h2");
   this.Visibility=255;
}



function draw(){
    Engine.update(engine);
    background(255);
    imageMode(CENTER) ;
    image(brain_img,displayWidth/2,displayHeight/2);
    //console.log(canvas.width)
    //console.log(canvas.height);
Bubble();
text10.html("Discrimination")

text10.position(displayWidth/2+150,displayHeight/3);
text11.html("Insecurity");
text11.position(displayWidth/2-280,displayHeight/2);
text12.html("Vilonce");
text12.position(displayWidth/2-50,displayHeight/2+200);

text13.html("Fear");
text13.position(displayWidth/2+200,displayHeight/2+100);
text14.html("Faliure");
text14.position(displayWidth/2+100,displayHeight/3-100);
text15.html("Financial Crisis");
text15.position(displayWidth/2+200,displayHeight/2);
text16.html("Bullying");
text16.position(displayWidth/2+100,displayHeight/2+200);
text17.html("Discouragment");
text17.position(displayWidth/4,displayHeight/4);
text18.html("Lobbying");
text18.position(displayWidth/4+10,displayHeight/4+100);
text19.html("Nepotism");
text19.position(displayWidth/3+100,displayHeight/3-100);
text20.html("Negative Comparision");
text20.position(displayWidth/5+100,displayHeight/5+350);

   drawSprites()
}

function Bubble() {
   
    //imageMode(CENTER) ;
//image(bubble_img,random(20,displayWidth-20),random(20,displayHeight-20));
//bubble1=createSprite(displayWidth/2+230,displayHeight/3);
//bubble1.Visibility=50;
//bubble1.addImage(bubble_img);
//bubble=createSprite(displayWidth/2-100,displayHeight/2);

//bubble.addImage(bubble1_img);

//bubble3=createSprite(displayWidth/2,displayHeight/2+300)

//bubble3.addImage(bubble3_img);
//bubble2=createSprite(displayWidth/2+400,displayHeight/2+250)
//bubble5=createSprite(displayWidth/2-500,displayHeight/2+150);
////bubble5.addImage(bubble5_img);

//bubble2.addImage(bubble2_img);
//bubble4=createSprite(displayWidth/2+400,displayHeight/2)


//bubble4.addImage(bubble4_img);

//bubble5=createSprite(displayWidth/2+800,displayHeight/2+150);
//bubble5.addImage(bubble6_img)
//textSize(26)
//text("These are the main causes of depression",displayWidth/3,displayHeight/12);
text1.position(displayWidth/3,displayHeight/12-50);
text1.html("These are the main causes of depression");
button1.position(displayWidth/2-10,displayHeight/2+350);

button1.mousePressed(()=>{
    

    button1.hide();
    text1.hide();
   
    text10.hide();
    text11.hide();
    text12.hide();
    text13.hide();
    text14.hide();
     text15.hide();
    text16.hide();
    text17.hide(); 
    text18.hide(); 
    text19.hide(); 
    text20.hide(); 
    
    background("white")
   // tint(255,0);
    page1();
    console.log(page1);
   
   // bubble1.distroy();
   
})
}

//after next
function page1(){
    pink1=createSprite(displayWidth,displayHeight);
   pink1.addImage(pinkb);
   pink1.scale=2;
    
    button2=createButton("Read");
    button3=createButton("Listen and meditate");
    button4=createButton("Write");
    
    button8=createButton("Your Planner");
    

   
    
    

//read
button2.position(displayWidth/2-300,displayHeight/3);
button2.size(displayWidth/2,100)
//listen
button3.position(displayWidth/2-300,displayHeight/6);
button3.size(displayWidth/2,100)
//write
button4.position(displayWidth/2-300,displayHeight/2);
button4.size(displayWidth/2,100)

//what to dozxdr
button8.position(displayWidth/2-300,displayHeight/1.5);
button8.size(displayWidth/2,100)

    console.log("hello");
    //read
    button2.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        
        button8.hide();
        page6();
    })
    //listen
    button3.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        
        button8.hide();
        page2();
    });
    //write
    button4.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
     
        button8.hide();
        page7();
    })
    
   



    //what to do
    button8.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
       
        button8.hide();
        page5();
       })
    }
    
    function page2(){
        background("#fae");
        button6=createButton("Soothing Relaxation");
    button7=createButton("piano");
        
       //soothing relaxation inside lisen
        button6.position(displayWidth/2-350,displayHeight/2-120);
        button6.size(displayWidth/2,100);
//piano inside listen
        button7.position(displayWidth/2-350,displayHeight/2-10);
        button7.size(displayWidth/2,100);
        button13=createButton("Back");
        button13.position(displayWidth/4+950,displayHeight/4+550);
        button13.mousePressed(()=>{
            button13.hide();
            button6.hide();
            button7.hide();
            text8.hide();
            text2.hide();
            text3.hide();
            text9.hide();
          
            page1();
           
        })
        //hiding sr
       button6.mousePressed(()=>{
           button6.hide();
           button7.hide();
           page3();
       })
       //hiding piano
       button7.mousePressed(()=>{
        button6.hide();
        button7.hide();
        page4();
       })
      
    }
    //listen==soothing relaxation
    function page3(){
      //  button14=createButton("Back");
       // button14.position(displayWidth/4+700,displayHeight/4+500);
        let cnv=createCanvas(displayWidth,displayHeight)
       cnv.mousePressed(canvasPressed);
        text2.position(displayWidth/2-60,displayHeight/2+300);
text2.html("Click anywhere to start the music");
alunom2=createSprite(displayWidth/2,displayHeight/2);
alunom2.addImage(alunom);
alunom2.scale=1;
text8.html("Do this till the music stop");
text8.position(displayWidth/2-100,displayHeight/2-350);
//button14.mousePressed(()=>{
    //button14.hide();
   // text2.hide();
    //page2();
//})
    }
    //music for soothing relaxataion
    function canvasPressed(){
        mysound.play();
    }
    //for piano
   function page4(){
      // button12=createButton("Back");
      // button12.position(displayWidth/4+700,displayHeight/4+500)
       let cnv1=createCanvas(displayWidth,displayHeight);
      cnv1.mousePressed(canvasPressed2);
       text3.position(displayWidth/2-40,displayHeight/2+350);
       text3.html("Click anywhere to start the music");
       p1=createSprite(displayWidth/2,displayHeight/2);
       p1.addImage(p_img);
       text9.html("Meditate till the music stop");
       text9.position(displayWidth/2-100,displayHeight/2-350)
      // button12.mousePressed(()=>{
          // button12.hide();
         //  button13.hide();
       // text3.hide();
       // page2();

      // })
        
    }
    //for piano
    function canvasPressed2(){
        mysound1.play();
    }
    //for what to do
    function page5(){
        think2=createSprite(displayWidth/2+300,displayHeight/2);
        think2.addImage(think1);
        think2.scale=0.5;
        console.log("chirag");
      button11=createButton("Back");
      button11.position(displayWidth/4+950,displayHeight/4+550);
      button11.style.backgroundColor="green"
    text4.position(displayWidth/2-600,displayHeight/3);
    text4.html("2)Do meditation daily");
    text5.position(displayWidth/2-600,displayHeight/6);
    text5.html("1)See and visualize the image in depth ");
    text6.position(displayWidth/2-600,displayHeight/1.5);
    text6.html("4)Play games every day")
    text7.position(displayWidth/2-600,displayHeight/2);
    text7.html("3)Daily read a book ");
    text21.html("5)Listen music daily");
    text21.position(displayWidth/2-600,displayHeight/2+250);
    button11.mousePressed(()=>{
    button11.hide();
    text4.hide();
    text5.hide();
    text6.hide();
    text7.hide();
    text21.hide();
    page1();
})
    }
    //write
    function page7(){
        form=new Form();
        white=createSprite(1366,768);
       strokeWeight(3);
      stroke("black");
     button10=createButton("Back");
     button10.position(displayWidth/4+950,displayHeight/4+550);
     button10.mousePressed(()=>{
         button10.hide();
        form.hide();
          page1();

     })
        white.scale=15;
        white.addImage(background_img);
       // bubble1.visible=false;
form.display();
    }
    //read
    function page6(){
        button9=createElement("button");
    button9.value="The Happiness Trap"
button9.position(displayWidth/2,displayHeight/2);
if(button9.onclick=true){
    window.location.href="http://www.goyourownway.org/GOYOUROWNWAY/DOCUMENTS/VETERANS/PENDING/Happiness%20Trap,%20The%20-%20Harris,%20Russ.pdf"
}
    }
    //function vidLoad(){
      //  vid.move();
      //  vid.volume(0);
   // }