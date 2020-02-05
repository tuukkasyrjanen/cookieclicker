//initial number of cookies
var num = 0;
var size = "";
var px = "px";
var cookie = document.getElementById("cookie");
var audio = new Audio('morseclue.wav');

function cookieClick() {
    num += 100;
    var numbers = document.getElementById("numbers");
    //upgrade level for printing
    numbers.innerHTML = num;
    if (num > 500){audio.play();}
    var keksi = 100+ (num/5)
    size = String(keksi).concat("px");

    document.getElementById('cookie').style.width= size ;

    if (num >= 100 && num <= 150){
      numbers.innerHTML = "Waiting for clue?";
    }

    if (num >= 200 && num <= 250){
      numbers.innerHTML = "Almost there!";
    }

    if (num > 500){
      numbers.innerHTML = "What's that sound?";
      cookie.innerHTML = document.getElementById("cookie").src="clue.png";

    }
}
