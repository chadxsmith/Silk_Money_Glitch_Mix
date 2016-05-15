 $( document ).ready(function() {



     
 

function clicker(){

    $("#example1 .source").glitch(function(canvas){
        $("#example1 .target").html(canvas);
        effect: "fade"
        
    });

    // $(".source").addClass("source--hidden")

 }


function myStopFunction() {

    clearInterval(i);
 
}

function myTimer(){
    i++
    if(i === 5){
        $(".source").css('background-image','url(/images/play.png)');

 
    }
    else if( i === 6){
        myStopFunction()
        // clicker()
         
    }
    else if(i === 7){
        console.log("let's goooooo")
        counter = 0;
        var a = setInterval(function(){
      
            $("button").trigger("click")
            clicker()

       

          

        }, 150); 


        SecondPicSeconds = 0;
        setInterval(function () {
          ++SecondPicSeconds;

          console.log(SecondPicSeconds)
          if (SecondPicSeconds === 1 ) {
             $(".source").css('background-image','url(/images/giphy_3A.gif)')
          
             var counter = Math.random();
             var timesCounter = Math.random() * 700
             console.log(timesCounter)
             console.log("im first!!")

            
             $('.source').css("width", ""+ timesCounter + "px")

             
          }
         else if(SecondPicSeconds === 12 ){
               
              $(".source").css('background-image','url(/images/giphy_29.gif)');
              var counter = Math.random();
             var timesCounter = Math.random() * 700
             console.log(timesCounter)
             console.log("i'm second")

            
             $('.source').css("width", ""+ timesCounter + "px")
             
          }
          else if(SecondPicSeconds === 15 - 1){
              $(".source").css('background-image','url(/images/giphy_24.gif)');
            var counter = Math.random();
             var timesCounter = Math.random() * 340
             console.log(timesCounter)
             console.log("i'm second")

            
             $('.source').css("width", ""+ timesCounter + "px")
               
          }
          else if(SecondPicSeconds === 16 ){
              $(".source").css('background-image','url(/images/giphy_35.gif)');
                var counter = Math.random();
            
             var timesCounter = Math.random() * 800
            $('.source').css("width", ""+ timesCounter + "px")
          }
          else if(SecondPicSeconds === 14 + 7 ){
              
              $(".source").css('background-image','url(/images/giphy_11.gif)');
       
              var counter = Math.random();
            
             var timesCounter = Math.random() * 900
            $('.source').css("width", ""+ timesCounter + "px")
           


          }
          else if(SecondPicSeconds === 15 + 7){
              $(".source").css('background-image','url(/images/giphy_14.gif');

                 var counter = Math.random();
            
             var timesCounter = Math.random() * 970
            $('.source').css("width", ""+ timesCounter + "px")
             console.log(timesCounter)
             console.log("im third!")


          }   
          else if(SecondPicSeconds === 14 + 14 ){
              $(".source").css('background-image','url(/images/giphy_30.gif)');
              var counter = Math.random();
            
             var timesCounter = Math.random() + 337
            $('.source').css("width", ""+ timesCounter + "px")
             console.log(timesCounter)
             console.log("im third!")
          }
          else if(SecondPicSeconds === 15 + 14){
              $(".source").css('background-image','url(/images/giphy_31.gif');

            var timesCounter = Math.random() * 20
            $('.source').css("width", ""+ timesCounter + "px")
              
          }  
          else if(SecondPicSeconds === 14 + 21 ){
             var timesCounter = Math.random() * 400
            $('.source').css("width", ""+ timesCounter + "px")
              $(".source").css('background-image','url(/images/giphy_38.gif)');
          }
          else if(SecondPicSeconds === 15 + 21){
              $(".source").css('background-image','url(/images/giphy_31.gif');
          }  
          else if(SecondPicSeconds === 14 + 28 ){
              $(".source").css('background-image','url(/images/giphy_32.gif)');
          }
          else if(SecondPicSeconds === 15 + 28){
              $(".source").css('background-image','url(/images/giphy_34.gif)');
          }   
          else if(SecondPicSeconds === 14 + 30){
              $(".source").css('background-image','url(/images/giphy_43.gif)');
          }
          else if(SecondPicSeconds === 15 + 35 - 1){
              $(".source").css('background-image','url(/images/giphy_13.gif)');
          }   
          else if(SecondPicSeconds === 14 + 42 - 1 ){
              $(".source").css('background-image','url(/images/giphy_27.gif)');
          }
          else if(SecondPicSeconds === 15 + 42 - 1){
              $(".source").css('background-image','url(/images/giphy_4.gif)');
          }    
          else if(SecondPicSeconds === 14 + 49 - 1 ){
              $(".source").css('background-image','url(/images/giphy_9.gif)');
          }
          else if(SecondPicSeconds === 15 + 49 - 1){
              $(".source").css('background-image','url(/images/giphy_13.gif)');
          }  
          else if(SecondPicSeconds === 14 + 56 - 1 ){
              $(".source").css('background-image','url(/images/giphy_2.gif)');
          }
          else if(SecondPicSeconds === 15 + 56 - 1){
              $(".source").css('background-image','url(/images/giphy_28.gif)');
          } 
          else if(SecondPicSeconds === 14 + 63 - 2 ){
              $(".source").css('background-image','url(/images/giphy_35.gif)');
          }
          else if(SecondPicSeconds === 15 + 63 - 2){
              $(".source").css('background-image','url(/images/giphy_30.gif)');
          }   
          else if(SecondPicSeconds === 14 + 71 - 3 ){
              $(".source").css('background-image','url(/images/giphy_43.gif)');
          }
          else if(SecondPicSeconds === 15 + 71 - 3){
              $(".source").css('background-image','url(/images/giphy_3As.gif)');
          } 
          else if(SecondPicSeconds === 14 + 78 - 3 ){
              $(".source").css('background-image','url(/images/giphy_15.gif)');
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