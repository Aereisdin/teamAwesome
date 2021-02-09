const ShowAndHide = (buttonID) => {

    var elementToHide = document.getElementById(buttonID);
    var button = document.getElementById(buttonID + "-button");

    if (elementToHide.style.display == 'none') {
        button.innerHTML = "Hide Answer";
        elementToHide.style.display = 'inline-block';
    } else {
        button.innerHTML = "Show Answer"
        elementToHide.style.display = 'none';
    }
};

// Dog API
var dogUrl = "https://dog.ceo/api/breed/"
var randomDogImage = document.querySelector("#dogImg");
var dogButtons = document.querySelectorAll(".dogButtons");

// Add event listener to every dogButton
for (let i = 0; i < dogButtons.length; i++) {
    dogButtons[i].addEventListener("click", function (event) {
        let dogType = event.target.value;
        loadPicture(dogType);
    });
};

// Loads a picture based off dog type
const loadPicture = (dogType) => {

    // Image was hidden at first, get rid of it before loading a dog image
    randomDogImage.removeAttribute("hidden");

    let url = dogUrl + dogType + "/images/random"

    fetch(url)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            randomDogImage.src = data.message;
        });

;}


