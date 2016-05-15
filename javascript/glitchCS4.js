 $( document ).ready(function() {
 

 var newpic = 0; 


function newPicChecker(){
    if(newpic === 30){
        newpic = 1
    }
}


// setInterval(glitchCall, 2000); //300000 MS == 5 minutes
// setInterval(scrambledPornCall, 4000);
// setInterval(scrambledPornCall, 6000);
setInterval(glitchArtCall, 3000);
// setInterval(vhsCall, 3000);
// setInterval(microsoftCall, 3000);
// setInterval(cowboyBeBopCall, 3000);

 

    function glitchCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=glitch&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
 
                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    }


    function scrambledPornCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=spice-channel-scrambled&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    }


    function terminalCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=termninal&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
                   

                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    }

    function glitchArtCall() {
        
      $.ajax({
          url: '//api.tumblr.com/v2/tagged?tag=scrambledporn&api_key=Ot29HpmqVzEACKtml8DLS0c9WkKI2LiwEVl7gMD1cmBF2t5NFJ',
          crossDomain: true,
          dataType: 'jsonp',
          jsonp: "jsonp",
          success: function(data) {
            // [1,, 2]
            // $.map(a, function (i) { i + 1})
            elems = $.map(data.response, function(elem) {
              
              if(elem && elem.photos && elem.photos[0]) {

                url = elem.photos[0].alt_sizes[0].url
                // if (url.indexOf('.gif') >= 0) {
                  return elem.photos[0].alt_sizes[0].url;
                // }
              }
              
            });
           console.log(elems)
            if (elems.length >= 0) {
              if (newpic > elems.length - 1) {
                newpic = elems.length - 1;
              }
              $('.source').css('backgroundImage', "url('" + elems[newpic] + "')");

            }
            
          }
        });
          

         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic ++;
         newPicChecker()

         return newpic;
    }   

    function vhsCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=vhs&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    } 


    function microsoftCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=microsoftCall&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    }     
        


    function cowboyBeBopCall() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:"http://api.giphy.com/v1/gifs/search?q=microsoftCall&api_key=dc6zaTOxFJmzC&limit=100"
          }).done(function(response){
                

              for(i = 0; i < response["data"].length; i++){
                  

                  $(".source").css('background-image','url(' + response["data"][newpic]["images"]["downsized"]["url"] + ')')      
                                          
              }

          })

         var counter = Math.random();
         var timesCounter = Math.random() * 2000
        
         $('.source').css("width", ""+ timesCounter + "px")
         $('.target').css("width", ""+ timesCounter + "px")
         $('.outer-container').css("width", ""+ timesCounter + "px")
         $('canvas').css("width", ""+ timesCounter + "px")
         $('canvas').css("height", ""+ timesCounter + "px")
         $('canvas').css("border-radius", ""+ timesCounter + "px")

         newpic++
         newPicChecker()

    }     
        


});