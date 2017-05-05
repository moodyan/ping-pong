// Back-End Business Logic

function playPingPong(number){






};

// Front-End User Interface
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();

    var numberInput = $("#number").val()

    var result = playPingPong(number)
    $("ul").append("<li>"+result+"</li>")
  });
});
