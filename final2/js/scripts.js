var buttonLeft = document.querySelector(".button_left");
var buttonRight = document.querySelector(".button_right");
var currentNumber = document.querySelector("#current_number");

var number = 1;
updateNumber();

buttonLeft.addEventListener("click", function() {
    if (number == 1) {
        number = 41;
    } else {
        number -= 1;
    }

    updateNumber();
});

buttonRight.addEventListener("click", function() {
    if (number == 41) {
        number = 1;
    } else {
        number += 1;
    }

    updateNumber();
});

function updateNumber() {
    currentNumber.innerHTML = number + "/41";
    gallery.src = "images/" + number + ".jpg";
};