// FOR THE SALUTATION
var aDate = new Date();
var hours = aDate.getHours();

var salutation;

if(hours < 12)
salutation = "Good Morning";
else if (hours >= 12 && hours <= 16)
salutation = "Good Afternoon";
else if (hours >= 16 && hours <= 24)
salutation = "Good Evening";

document.getElementById("greet").innerHTML = salutation;



// TO LOGIN
function login() {
    var name = document.getElementById("name");
    var init = document.getElementById("init");
    var login = document.getElementById("logger");
    init.innerText = ((name.value).match(/\b(\w)/g)).join(" ").toUpperCase();
    login1.classList.toggle("hidden");
  }



  // TO REMOVE ROOM
function myFunction() {
    const element = document.getElementById("remove");
    element.remove();
  }
  
  
  // TO ADD ROOM
  var list = [""];
  document.getElementById("text").innerHTML = list;
  
  function pushFunction() {
    list.push("Four", "Five",);
    document.getElementById("text").innerHTML = list;
  }