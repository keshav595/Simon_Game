let gameStart=false;
let gameSeq=[];
let userSeq=[];
let level=0;
let high=0;

let colors=["red","pink","orange","yellow","blue","purple"];
let divs=document.querySelectorAll(".divss");
let h2=document.querySelector("h2");
let Highscor=document.querySelector("#HIGHSCORE")
let body=document.querySelectorAll("body");
let main_head=document.querySelector("h3");
// console.log(divs);



document.addEventListener("keydown",()=>{
    if(gameStart==false){
 gameStart=true;
    h2.innerText="";

    setTimeout(lvlup,500);
    
    }
});

function randomcolor(){
let randomColor_Index= Math.floor(Math.random()*5);
let random_color=colors[randomColor_Index];
gameSeq.push(random_color);
let btn=document.querySelector(`#${random_color}`)
btn.setAttribute('id','colorwhite');
setTimeout(()=>{
  
    btn.setAttribute('id',`${random_color}`);
    // console.log(gameSeq);
    
},1000)
 

}


for (div of divs){
     div.addEventListener("click",function(){   // note=if i use arrow function instead of normal function then when i was using this it game me the window object
      
        userSeq.push(this.id);
        let previouscolor=this.id;
        this.setAttribute('id','colorgreen');
        setTimeout( ()=>{
  
            this.setAttribute('id',previouscolor);
            
            
        },500)
        
        // console.log(userSeq);
        check(userSeq.length-1);
        
    });
}

  
function check(index){
   
        if(userSeq[index]==gameSeq[index]){
              if(userSeq.length==gameSeq.length){
                document.body.style.backgroundColor="green";
                setTimeout(()=>{
                  document.body.style.backgroundColor="white";
                },100)
                if (high<level){
                  high=level;
                  console.log(high);
                  
                }
                
                setTimeout(lvlup,1000);
                
                
              }
            }
              else{
                main_head.innerText=`GAME OVER!!!  PRESS ANY KEY TO START AGAIN `;
                document.body.style.backgroundColor="red";
                let currentscore= level-1;
                if(currentscore==-1){
                  h2.innerText=`Your current score is ${currentscore+1}`;
                }   else{
                   h2.innerText=`Your current score is ${currentscore}`;
                  }
                setTimeout(()=>{
                  document.body.style.backgroundColor="white";
                },500)
                Highscor.innerText=`High Score:${high}`;
                level=0;
                gameSeq=[]
                gameStart=false;
              }
            
        
    }


function lvlup(){
    userSeq=[];
    
     
    level++;
    
    main_head.innerText=`Level ${level}`;
randomcolor();


}












