var buttonLeft = document.querySelector(".button.left");
var buttonRight = document.querySelector(".button.right");
var currentNumber = document.querySelector("#current_number");

var number = 1;
updateNumber();

buttonLeft.addEventListener("click", function() {
    if (number == 1) {
        number = 20;
    } else {
        number -= 1;
    }

    updateNumber();
});

buttonRight.addEventListener("click", function() {
    if (number == 20) {
        number = 1;
    } else {
        number += 1;
    }

    updateNumber();
});

function updateNumber() {
    currentNumber.innerHTML = number + "/20";
    gallery.src = "images/" + number + ".jpg";
};