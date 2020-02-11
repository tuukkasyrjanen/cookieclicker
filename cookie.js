//initial number of cookies
var num = 0;
var size = "";
var px = "px";
var cookie = document.getElementById("cookie");
var morse = document.getElementById("morse");
var audio = new Audio('morseclue.wav');
audio.loop = true;

function cookieClick() {
    num += 1;
    var numbers = document.getElementById("numbers");
    //upgrade level for printing
    numbers.innerHTML = num;
    if (num > 500){audio.play();}
    var keksi = 200+ (num/5)
    size = String(keksi).concat("px");

    document.getElementById('cookie').style.width= size ;

    if (num >= 50 && num < 100){
      morse.innerHTML = document.getElementById("morse").src = "morse1.png";

    }
    if (num >= 100 && num < 150){
      numbers.innerHTML = "Waiting for clue?";
      morse.innerHTML = document.getElementById("morse").src = "morse2.png";
    }

    if (num >= 150 && num < 200){
      morse.innerHTML = document.getElementById("morse").src = "morse3.png";
    }
    if (num >= 200 && num < 250){
      numbers.innerHTML = "Almost there!";
      morse.innerHTML = document.getElementById("morse").src = "morse4.png";
    }

    if (num >= 250 && num < 350){
      morse.innerHTML = document.getElementById("morse").src = "morse5.png";
    }

    if (num >= 350 && num < 400){
      morse.innerHTML = document.getElementById("morse").src = "morse6.png";
    }

    if (num >= 400 && num < 450){
      morse.innerHTML = document.getElementById("morse").src = "morse7.png";
    }


    if (num >= 500){
      numbers.innerHTML = "What's that sound?";
      cookie.innerHTML = document.getElementById("cookie").src="clue.png";
      morse.innerHTML = document.getElementById("morse").src = "morsefinal.png";
    }
}
