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

var githubSearchURL = "https://jobs.github.com/positions?";
const getSearchResults = (jobID, locationID) => {
    var jobSearched = document.getElementById(jobID).value;
    var locationSearched = document.getElementById(locationID).value;

    let response = fetch(githubSearchURL + "description=" + jobSearched + "&location=" + locationSearched,
        {
            mode: 'no-cors'
        }
    ).then(function (response) {
        response.json();
    });


};
