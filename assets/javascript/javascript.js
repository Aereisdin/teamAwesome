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

