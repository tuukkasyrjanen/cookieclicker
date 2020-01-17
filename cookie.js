//initial number of cookies
var num = 0;




var cookie = document.getElementById("cookie");

function cookieClick() {
    num += 1;

    var numbers = document.getElementById("numbers");

    //upgrade level for printing




    numbers.innerHTML = num;

    if (num > 99){
    var pic = document.getElementById("picture").src="clue.png";
    picture.innerHTML = pic;
    }
}
