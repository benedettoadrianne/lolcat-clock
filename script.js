var wake = 6;
var lunch = 11;
var noon = 12;
var napTime = lunch + 2;
var evening = 17;
var partyTime = 19;
var updateClock = function(){
  var time = new Date().getHours();
  var lolcat = document.getElementById("lolcat");
  var timeEvent = document.getElementById("timeEvent");
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == wake){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  messageText= "Wakey wakey!";
}if (time == lunch){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  messageText= "Mangia mangia!";
}if (time < noon){
  messageText= "Good Morning!";
}if (time ==napTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  messageText= "Nap Time!";
}else if (time > evening){
  messageText= "Good Evening!";
}else if (time > partyTime){
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText= "Let's Party!";
}else{
  messageText= "Good Afternoon!";
}

  timeEvent.innerText = (messageText);
  lolcat.src = image;
  showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;

   var partyTimeButton = document.getElementById("partyTimeButton");
  var napTimeSelector =  document.getElementById("napTimeSelector");
  var lunchSelector =  document.getElementById("lunchTimeSelector");
  var wakeSelector =  document.getElementById("wakeUpTimeSelector");

  var isPartyTime = false;
  var partyEvent = function() {

    if (isPartyTime === false){
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Time";
      partyTimeButton.style.backgrounColor="#222";

    } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party Over";
  var lunchEvent = function() {
    lunch = lunchSelector.value;
  };
  var wakeEvent = function(){
    wake = wakeSelector.value;
  };
  var napTime = function(){
    napTime = napTimeSelector.value;
  };
      partyTimeButton.style.backgrounColor="rgb(10, 141, 171)";

    }

};

partyTimeButton.addEventListener("click", partyEvent);
  napTimeSelector.addEventListener("change", napEvent);
  lunchSelector.addEventListener("change", lunchEvent);
  wakeSelector.addEventListener("change", wakeUpEvent);

};


 updateClock ();

 var oneSecond = 1000;

 setInterval( updateClock, oneSecond);

  console.log()
  
