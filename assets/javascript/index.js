$(document).ready(function() {
    var visited =localStorage.getItem("visited");
    if(visited === null){visited = 0}
    
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
       console.log("Hmmm it is listening");
       visited++;
        localStorage.setItem("visited", visited)
        })
    console.log(visited);
});