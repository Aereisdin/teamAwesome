$(document).ready(function() {
    var visited =localStorage.getItem("visited");
    if(visited === null){visited = 0}
    var punchline = document.querySelector(".punchline");
    var setup = document.querySelector(".setup");
    function welcomeBack(){
        $("#welcomeBackModal").foundation("toggle")
    }
    function welcome(){
        $("#welcomeModal").foundation("toggle")
    }
    function again(){
        $("#againModal").foundation("toggle")
    }
    if(visited == 0){welcome()}
    else if(visited == 1){welcomeBack()}
    else if(visited == 2){again()}

    $(".close-button").click(function() {
       visited++;
        localStorage.setItem("visited", visited)
        })
    $(".joke").click( function() {
        $.get( "https://official-joke-api.appspot.com/random_joke", function( data ) {
            console.log(data);
            console.log(data.setup)
            question = data.setup;
            setup.textContent = question;
            punchline.textContent = data.punchline;
            punchline.attr("style", "visibility:hidden")
          });});
    
});