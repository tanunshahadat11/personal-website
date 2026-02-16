document.getElementById("location").innerHTML = "Page URL: " + window.location.href;
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;
document.getElementById("modeToggle").addEventListener("click", function (){
    document.body.classList.toggle("dark-mode");});