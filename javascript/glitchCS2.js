 $( document ).ready(function() {



     
  


function glitchPic(){
     
        if (counter === 5) {
          

        }

        else{
            
        }
}

function glitchSecondPic(){

        if (SecondPicSeconds === 2) {
              $(".source").css('background-image','url(/images/ferrgy.jpg)');

        }
        else if (SecondPicSeconds === 9){

        }
        else if (SecondPicSeconds === ahh){

        }
        else{

        }
}

function clicker(){

    $("#example1 .source").glitch(function(canvas){
        $("#example1 .target").html(canvas);
        effect: "fade"
        
    });

    $(".source").addClass("source--hidden")

 }


function myStopFunction() {

    clearInterval(i);
 
}

function myTimer(){
    i++
    if(i === 15){
        $(".source").css('background-image','url(/images/play.png)');

 
    }
    else if( i === 17){
        myStopFunction()
        clicker()
         
    }
    else if(i === 19){
        console.log("let's goooooo")
        counter = 0;
        var a = setInterval(function(){
      
            $("button").trigger("click")
            clicker()

            counter++;

            glitchPic()

        }, 150); 


        SecondPicSeconds = 0;
        setInterval(function () {
          ++SecondPicSeconds;

          console.log(SecondPicSeconds)
          if (SecondPicSeconds === 1 ) {
             $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 2){
             $(".source").css('background-image','url(/images/masterP.jpg)');
          }
          else if(SecondPicSeconds === 8 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 9 ){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }
         else if(SecondPicSeconds === 12 ){
              $(".source").css('background-image','url(/images/chris.jpg)');
          }
          else if(SecondPicSeconds === 15 - 1){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
              console.log("THIRD!!")
          }
          else if(SecondPicSeconds === 16 ){
              $(".source").css('background-image','url(/images/chris.jpg)');
          }
          else if(SecondPicSeconds === 14 + 7 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 7){
              $(".source").css('background-image','url(/images/chris.jpg)');
          }   
          else if(SecondPicSeconds === 14 + 14 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 14){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }  
          else if(SecondPicSeconds === 14 + 21 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 21){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }  
          else if(SecondPicSeconds === 14 + 28 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 28){
              $(".source").css('background-image','url(/images/ferrgy.jpg)');
          }   
          else if(SecondPicSeconds === 14 + 35 - 1){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 35 - 1){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }   
          else if(SecondPicSeconds === 14 + 42 - 1 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 42 - 1){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }    
          else if(SecondPicSeconds === 14 + 49 - 1 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 49 - 1){
              $(".source").css('background-image','url(/images/warhol.jpg)');
          }  
          else if(SecondPicSeconds === 14 + 56 - 1 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 56 - 1){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          } 
          else if(SecondPicSeconds === 14 + 63 - 2 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 63 - 2){
              $(".source").css('background-image','url(/images/masterP.jpg)');
          }   
          else if(SecondPicSeconds === 14 + 71 - 3 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 71 - 3){
              $(".source").css('background-image','url(/images/gw.jpg)');
          } 
          else if(SecondPicSeconds === 14 + 78 - 3 ){
              $(".source").css('background-image','url(/images/Yr0DYmAB.jpg)');
          }
          else if(SecondPicSeconds === 15 + 78 - 3){
              $(".source").css('background-image','url(/images/gw.jpg)');
          }             
          else{

          }
            ;
        }, 1000);
    }
    else if(i >= 15){
        
         // $(".source--hidden").removeClass(".source--hidden")
         // $(".source").css('background-image','url(/images/forward.png)');
        
    }
    else{
        
         
    }
}


var i = setInterval(function(){myTimer() }, 1000);




  
        


});