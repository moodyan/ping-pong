// Back-End Business Logic

function playPingPong(number){

  if (number<=0) {
    alert("Please enter a positive number.");
    return "";
  }



};

// Front-End User Interface
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();

    var number = $("#numberInput").val()

    var result = playPingPong(number)
    $("ul").append("<li>"+result+"</li>")
  });
});
