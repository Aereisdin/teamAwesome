$(document).ready(function() {
var visitor = localStorage.getItem("visitor");
if(visitor === null){$("#welcomeModal").foundation("reveal","open")}
});